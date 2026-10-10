"""Synthesize a royalty-free backing track synced to the scene cuts in ad.html."""
import argparse
import os
import wave

import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument('--duration', type=float, default=30.0)
ap.add_argument('--cuts', default='3.6,7.8,12.4,16.8,21.4,25.6')
ap.add_argument('--out', default=os.path.join(os.path.dirname(__file__), 'out', 'music-full.wav'))
cli = ap.parse_args()

SR = 44100
DUR = cli.duration
BPM = 112
BEAT = 60 / BPM
CUTS = [float(c) for c in cli.cuts.split(',')]
DRUMS = (CUTS[0], CUTS[-1])

n = int(SR * DUR)
t = np.arange(n) / SR
mix = np.zeros((n, 2))


def note(midi):
    return 440.0 * 2 ** ((midi - 69) / 12)


def add(sig, start, gain=1.0, pan=0.0):
    i = int(start * SR)
    if i < 0:
        sig, i = sig[-i:], 0
    if i >= n or len(sig) == 0:
        return
    sig = sig[: n - i] * gain
    mix[i:i + len(sig), 0] += sig * (1 - pan) / 2 * 2 ** 0.5
    mix[i:i + len(sig), 1] += sig * (1 + pan) / 2 * 2 ** 0.5


def env(length, attack, release):
    k = int(length * SR)
    e = np.ones(k)
    a, r = int(attack * SR), int(release * SR)
    e[:a] = np.linspace(0, 1, a)
    e[-r:] *= np.linspace(1, 0, r)
    return e


# Am - F - C - G pad, two bars per chord
chords = [[57, 60, 64], [53, 57, 60], [48, 55, 64], [55, 59, 62]]
bar = BEAT * 4
pos, ci = 0.0, 0
while pos < DUR:
    length = bar * 2
    tt = np.arange(int(length * SR)) / SR
    sig = np.zeros_like(tt)
    for m in chords[ci % 4]:
        f = note(m)
        for det in (-0.12, 0.12):
            ff = f * 2 ** (det / 12)
            sig += np.sin(2 * np.pi * ff * tt) + 0.3 * np.sin(4 * np.pi * ff * tt) + 0.1 * np.sin(6 * np.pi * ff * tt)
    sig *= env(length, 0.6, 0.8) / 12
    add(sig, pos, 0.55)
    bass = np.sin(2 * np.pi * note(chords[ci % 4][0] - 12) * tt) * env(length, 0.05, 0.4)
    if DRUMS[0] <= pos < DRUMS[1]:
        add(bass, pos, 0.28)
    pos += length
    ci += 1

# Pluck arpeggio in 8ths
step = BEAT / 2
k = 0
while k * step < DUR - 1:
    s = k * step
    chord = chords[int(s // (bar * 2)) % 4]
    m = chord[[0, 1, 2, 1][k % 4]] + 12
    tt = np.arange(int(0.5 * SR)) / SR
    pl = np.sin(2 * np.pi * note(m) * tt) * np.exp(-tt * 9) + 0.25 * np.sin(4 * np.pi * note(m) * tt) * np.exp(-tt * 14)
    add(pl, s, 0.16 if s >= 1.2 else 0.0, pan=0.35 if k % 2 else -0.35)
    k += 1

# Kick + hat while drums are active
rng = np.random.default_rng(7)
b = 0
while b * BEAT < DUR:
    s = b * BEAT
    if DRUMS[0] <= s < DRUMS[1]:
        tt = np.arange(int(0.35 * SR)) / SR
        freq = 45 + 90 * np.exp(-tt * 30)
        kick = np.sin(2 * np.pi * np.cumsum(freq) / SR) * np.exp(-tt * 9)
        add(kick, s, 0.75)
        hn = rng.standard_normal(int(0.06 * SR))
        hn = np.diff(hn, prepend=0) * np.exp(-np.arange(len(hn)) / SR * 70)
        add(hn, s + BEAT / 2, 0.05, pan=0.2)
    b += 1

# Whoosh into each cut, impact on it
for c in CUTS:
    L = 0.9
    ns = rng.standard_normal(int(L * SR))
    ns = np.convolve(ns, np.ones(24) / 24, mode='same')
    ns *= np.linspace(0, 1, len(ns)) ** 2.5
    add(ns, c - L, 0.35)
    tt = np.arange(int(1.2 * SR)) / SR
    boom = np.sin(2 * np.pi * (38 + 40 * np.exp(-tt * 12)) * tt) * np.exp(-tt * 3.5)
    add(boom, c, 0.45)

# Final sustained chord
tt = np.arange(int((DUR - CUTS[-1]) * SR)) / SR
final = sum(np.sin(2 * np.pi * note(m) * tt) for m in [57, 60, 64, 69]) * np.exp(-tt * 0.7) / 4
add(final, CUTS[-1], 0.5)

fade = int(1.5 * SR)
mix[-fade:] *= np.linspace(1, 0, fade)[:, None]
mix[: int(0.3 * SR)] *= np.linspace(0, 1, int(0.3 * SR))[:, None]
mix = np.tanh(mix * 1.1)
mix /= np.abs(mix).max() / 0.89

out = cli.out
os.makedirs(os.path.dirname(out), exist_ok=True)
with wave.open(out, 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
print(out)
