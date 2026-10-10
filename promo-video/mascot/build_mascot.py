"""Build and animate the Bizdavar mascot ("Biz") in Blender.

blender -b -P promo-video/mascot/build_mascot.py -- [--still] [--frames 1-240] [--samples 64] [--save]
"""
import math
import os
import sys

import bpy

ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []


def arg(name, default=None):
    return ARGS[ARGS.index(name) + 1] if name in ARGS else default


HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'out')
os.makedirs(OUT, exist_ok=True)

FPS = 30
END = 240

# ------------------------------------------------------------------ scene reset
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.fps = FPS
scene.frame_start = 1
scene.frame_end = END


def srgb(h):
    h = h.lstrip('#')
    out = []
    for i in (0, 2, 4):
        c = int(h[i:i + 2], 16) / 255
        out.append(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4)
    return (*out, 1.0)


def material(name, color, rough=0.55, sss=0.0, coat=0.0, bump=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = srgb(color)
    p.inputs['Roughness'].default_value = rough
    if sss:
        p.inputs['Subsurface Weight'].default_value = sss
        p.inputs['Subsurface Radius'].default_value = (0.4, 0.08, 0.06)
        p.inputs['Subsurface Scale'].default_value = 0.05
    if coat:
        p.inputs['Coat Weight'].default_value = coat
        p.inputs['Coat Roughness'].default_value = 0.05
    if bump:
        noise = nt.nodes.new('ShaderNodeTexNoise')
        noise.inputs['Scale'].default_value = 180
        noise.inputs['Detail'].default_value = 6
        b = nt.nodes.new('ShaderNodeBump')
        b.inputs['Strength'].default_value = bump
        nt.links.new(noise.outputs['Fac'], b.inputs['Height'])
        nt.links.new(b.outputs['Normal'], p.inputs['Normal'])
    return m


RED = material('Biz Red', '#E3191F', rough=0.6, sss=0.12, bump=0.04)
WHITE = material('Hoodie', '#F2EFEA', rough=0.85, bump=0.12)
BLACK = material('Pants', '#1B1B1E', rough=0.75, bump=0.08)
GLOSS = material('Eyes', '#050505', rough=0.08, coat=1.0)
SOLE = material('Sole', '#EDEDED', rough=0.6)
BG = material('Backdrop', '#B3121A', rough=0.95)


def finish(obj, mat, parent=None, smooth=True):
    obj.data.materials.append(mat)
    if smooth and hasattr(obj.data, 'polygons'):
        for poly in obj.data.polygons:
            poly.use_smooth = True
    if parent:
        obj.parent = parent
    return obj


def rounded_box(name, size, bevel, mat, loc, parent=None, subsurf=2):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    o = bpy.context.active_object
    o.name = name
    o.scale = size
    bpy.ops.object.transform_apply(scale=True)
    bv = o.modifiers.new('Bevel', 'BEVEL')
    bv.width = bevel
    bv.segments = 6
    bv.limit_method = 'NONE'
    ss = o.modifiers.new('Subsurf', 'SUBSURF')
    ss.levels = ss.render_levels = subsurf
    o.location = loc
    return finish(o, mat, parent)


def blob(name, scale, mat, loc, parent=None, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, radius=1, location=(0, 0, 0))
    o = bpy.context.active_object
    o.name = name
    o.scale = scale
    o.location = loc
    o.rotation_euler = rot
    return finish(o, mat, parent)


def pivot(name, loc, parent=None):
    e = bpy.data.objects.new(name, None)
    e.empty_display_size = 0.15
    e.location = loc
    scene.collection.objects.link(e)
    if parent:
        e.parent = parent
    return e


# ------------------------------------------------------------------ character
rig = pivot('Biz', (0, 0, 0))
hips = pivot('Hips', (0, 0, 0.55), rig)

torso = rounded_box('Hoodie', (1.04, 0.76, 0.86), 0.3, WHITE, (0, 0, 0.42), hips)
blob('Hood', (0.42, 0.34, 0.11), WHITE, (0, 0.04, 0.86), hips)
rounded_box('Pocket', (0.56, 0.03, 0.24), 0.08, WHITE, (0, -0.37, 0.2), hips, subsurf=2)
for x in (-0.08, 0.08):
    bpy.ops.mesh.primitive_cylinder_add(radius=0.016, depth=0.2, location=(x, -0.37, 0.7))
    finish(bpy.context.active_object, WHITE, hips)
    blob('Aglet', (0.022, 0.022, 0.03), WHITE, (x, -0.37, 0.59), hips)

font_path = r'C:\Windows\Fonts\segoeuib.ttf'
bpy.ops.object.text_add(location=(0, -0.385, 0.45), rotation=(math.pi / 2, 0, 0))
label = bpy.context.active_object
label.data.body = 'bizdavar'
if os.path.exists(font_path):
    label.data.font = bpy.data.fonts.load(font_path)
label.data.size = 0.17
label.data.extrude = 0.006
label.data.align_x = 'CENTER'
label.data.align_y = 'CENTER'
finish(label, RED, hips, smooth=False)

heart_font = r'C:\Windows\Fonts\seguisym.ttf'
if os.path.exists(heart_font):
    bpy.ops.object.text_add(location=(0.17, -0.4, 0.17), rotation=(math.pi / 2, 0, 0))
    h = bpy.context.active_object
    h.data.body = '\u2665'
    h.data.font = bpy.data.fonts.load(heart_font)
    h.data.size = 0.16
    h.data.extrude = 0.01
    h.data.align_x = 'CENTER'
    h.data.align_y = 'CENTER'
    finish(h, RED, hips, smooth=False)

neck = pivot('Neck', (0, 0, 0.82), hips)
head = rounded_box('Head', (1.32, 1.0, 1.06), 0.34, RED, (0, 0, 0.5), neck)
eyes = []
for x in (-0.25, 0.25):
    eyes.append(blob('Eye', (0.085, 0.05, 0.15), GLOSS, (x, -0.49, 0.6), neck))
mouth = blob('Mouth', (0.1, 0.04, 0.035), GLOSS, (0, -0.495, 0.32), neck)
ears = []
for side in (-1, 1):
    ear_p = pivot('EarPivot', (side * 0.18, 0, 1.0), neck)
    blob('Ear', (0.12, 0.1, 0.27), RED, (0, 0, 0.22), ear_p)
    ear_p.rotation_euler = (0, side * 0.22, 0)
    ears.append(ear_p)

arms = {}
for side in (-1, 1):
    sh = pivot('Shoulder', (side * 0.5, 0, 0.7), hips)
    blob('Sleeve', (0.15, 0.15, 0.3), WHITE, (0, 0, -0.24), sh)
    blob('Hand', (0.12, 0.1, 0.15), RED, (0, 0, -0.58), sh)
    blob('Thumb', (0.045, 0.045, 0.07), RED, (-side * 0.1, -0.03, -0.52), sh, rot=(0, side * 0.6, 0))
    arms[side] = sh

legs = {}
for side in (-1, 1):
    hp = pivot('Hip', (side * 0.22, 0, 0.0), hips)
    blob('Leg', (0.16, 0.16, 0.26), BLACK, (0, 0, -0.2), hp)
    blob('Shoe', (0.17, 0.23, 0.11), BLACK, (0, -0.05, -0.44), hp)
    blob('Sole', (0.172, 0.232, 0.05), SOLE, (0, -0.05, -0.5), hp)
    legs[side] = hp

REST_ARM = 0.22

# ------------------------------------------------------------------ backdrop
import bmesh  # noqa: E402

bm = bmesh.new()
profile = []
for i in range(25):
    a = i / 24 * (math.pi / 2)
    r = 3.5
    profile.append((4 - r + r * math.sin(a), r - r * math.cos(a)))
profile = [(-20, 0)] + profile + [(4, 30)]
verts = []
for x in (-30, 30):
    verts.append([bm.verts.new((x, y, z)) for y, z in profile])
for i in range(len(profile) - 1):
    bm.faces.new((verts[0][i], verts[1][i], verts[1][i + 1], verts[0][i + 1]))
me = bpy.data.meshes.new('Backdrop')
bm.to_mesh(me)
bd = bpy.data.objects.new('Backdrop', me)
scene.collection.objects.link(bd)
finish(bd, BG)

# ------------------------------------------------------------------ lights + camera


def area(name, loc, target, power, size, color=(1, 1, 1)):
    d = bpy.data.lights.new(name, 'AREA')
    d.energy = power
    d.size = size
    d.color = color
    o = bpy.data.objects.new(name, d)
    o.location = loc
    scene.collection.objects.link(o)
    c = o.constraints.new('TRACK_TO')
    c.target = target
    return o


focus = pivot('Focus', (0, 0, 1.3))
area('Key', (-4, -5, 5), focus, 700, 4)
area('Fill', (5, -4, 2.5), focus, 220, 5)
area('Rim', (2.8, 1.8, 3.2), focus, 500, 1.5, (1, 0.9, 0.85))
area('Top', (0, -1, 7), focus, 120, 6)
area('Wall', (0, -3, 6), pivot('WallTarget', (0, 4, 2)), 600, 12)

world = bpy.data.worlds.new('World')
scene.world = world
world.use_nodes = True
world.node_tree.nodes['Background'].inputs['Color'].default_value = srgb('#3a0a0c')
world.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.35

cam_data = bpy.data.cameras.new('Camera')
cam_data.lens = 80
cam_data.sensor_fit = 'VERTICAL'
cam_data.sensor_height = 36
cam_data.dof.use_dof = True
cam_data.dof.focus_object = focus
cam_data.dof.aperture_fstop = 4.0
cam = bpy.data.objects.new('Camera', cam_data)
cam.location = (0, -10.5, 2.1)
scene.collection.objects.link(cam)
look = pivot('LookAt', (0, 0, 1.75))
c = cam.constraints.new('TRACK_TO')
c.target = look
scene.camera = cam

# ------------------------------------------------------------------ animation


def key(obj, frame, loc=None, rot=None, scale=None):
    if loc is not None:
        obj.location = loc
        obj.keyframe_insert('location', frame=frame)
    if rot is not None:
        obj.rotation_euler = rot
        obj.keyframe_insert('rotation_euler', frame=frame)
    if scale is not None:
        obj.scale = scale
        obj.keyframe_insert('scale', frame=frame)


def arm(side, frame, lift, swing=0.0):
    key(arms[side], frame, rot=(swing, -side * lift, 0))


def blink(frame):
    for e in eyes:
        key(e, frame - 1, scale=(0.085, 0.05, 0.15))
        key(e, frame + 1, scale=(0.09, 0.05, 0.015))
        key(e, frame + 4, scale=(0.085, 0.05, 0.15))


# drop in + squash
key(rig, 1, loc=(0, 0, 4.5), scale=(0.92, 0.92, 1.12))
key(rig, 13, loc=(0, 0, 0), scale=(0.95, 0.95, 1.08))
key(rig, 16, scale=(1.14, 1.14, 0.82))
key(rig, 22, scale=(0.97, 0.97, 1.04))
key(rig, 27, loc=(0, 0, 0), scale=(1, 1, 1))
for s in (-1, 1):
    arm(s, 1, 1.4)
    arm(s, 16, 0.6)
    arm(s, 24, REST_ARM)
for e in ears:
    side = 1 if e.location.x > 0 else -1
    key(e, 13, rot=(0, side * 0.22, 0))
    key(e, 17, rot=(0, side * 0.55, 0))
    key(e, 23, rot=(0, side * 0.05, 0))
    key(e, 30, rot=(0, side * 0.22, 0))

# wave hello (screen-right arm)
key(neck, 24, rot=(0, 0, 0))
key(neck, 34, rot=(0.05, -0.14, 0))
arm(1, 24, REST_ARM)
arm(1, 34, 2.55)
for i, f in enumerate(range(40, 70, 6)):
    arm(1, f, 2.25 if i % 2 == 0 else 2.75)
arm(1, 72, 2.55)
arm(1, 80, REST_ARM)
key(neck, 72, rot=(0.05, -0.14, 0))
key(neck, 82, rot=(0, 0, 0))
blink(48)

# crouch + jump with arms up
key(rig, 84, loc=(0, 0, 0), scale=(1, 1, 1))
key(rig, 92, loc=(0, 0, -0.08), scale=(1.1, 1.1, 0.86))
key(rig, 104, loc=(0, 0, 0.9), scale=(0.94, 0.94, 1.08))
key(rig, 110, loc=(0, 0, 0.95), scale=(1, 1, 1))
key(rig, 120, loc=(0, 0, 0), scale=(0.96, 0.96, 1.05))
key(rig, 123, scale=(1.12, 1.12, 0.85))
key(rig, 130, loc=(0, 0, 0), scale=(1, 1, 1))
for s in (-1, 1):
    arm(s, 84, REST_ARM)
    arm(s, 92, 0.5, swing=-0.4)
    arm(s, 104, 2.5)
    arm(s, 118, 2.3)
    arm(s, 132, REST_ARM)
    key(legs[s], 92, rot=(0, 0, 0))
    key(legs[s], 106, rot=(0.35 * s, 0, 0))
    key(legs[s], 118, rot=(0, 0, 0))
for e in ears:
    side = 1 if e.location.x > 0 else -1
    key(e, 92, rot=(0, side * 0.22, 0))
    key(e, 104, rot=(0, side * 0.05, 0))
    key(e, 112, rot=(0, side * 0.4, 0))
    key(e, 123, rot=(0, side * 0.6, 0))
    key(e, 132, rot=(0, side * 0.22, 0))

# talk + gesture
key(mouth, 134, scale=(0.1, 0.04, 0.035))
for i, f in enumerate(range(138, 196, 4)):
    open_ = 0.07 if i % 3 != 2 else 0.045
    key(mouth, f, scale=(0.085, 0.04, open_))
    key(mouth, f + 2, scale=(0.1, 0.04, 0.03))
key(mouth, 198, scale=(0.1, 0.04, 0.035))
key(neck, 134, rot=(0, 0, 0))
key(neck, 150, rot=(0.06, 0.08, 0.12))
key(neck, 170, rot=(-0.03, -0.08, -0.1))
key(neck, 190, rot=(0.05, 0.05, 0.05))
arm(-1, 134, REST_ARM)
arm(-1, 146, 1.2, swing=-0.6)
arm(-1, 176, 1.1, swing=-0.5)
arm(-1, 190, REST_ARM)
key(hips, 134, rot=(0, 0, 0))
key(hips, 160, rot=(0, 0.04, 0.06))
key(hips, 190, rot=(0, 0, 0))
blink(160)

# happy finish: both arms up, hold
for s in (-1, 1):
    arm(s, 200, REST_ARM)
    arm(s, 212, 2.35)
    arm(s, 240, 2.35)
key(neck, 200, rot=(0.05, 0.05, 0.05))
key(neck, 214, rot=(0, 0.1, 0))
key(neck, 240, rot=(0, 0.1, 0))
key(rig, 200, loc=(0, 0, 0), scale=(1, 1, 1))
key(rig, 210, loc=(0, 0, 0.18), scale=(0.97, 0.97, 1.03))
key(rig, 220, loc=(0, 0, 0), scale=(1.04, 1.04, 0.96))
key(rig, 228, loc=(0, 0, 0), scale=(1, 1, 1))
blink(226)

# ------------------------------------------------------------------ render setup
r = scene.render
r.resolution_x = int(arg('--width', 1080))
r.resolution_y = int(arg('--height', 1920))
r.resolution_percentage = 100
for eng in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
    try:
        r.engine = eng
        break
    except TypeError:
        continue
ee = scene.eevee
ee.taa_render_samples = int(arg('--samples', 64))
if hasattr(ee, 'use_raytracing'):
    ee.use_raytracing = True
if hasattr(ee, 'use_shadows'):
    ee.use_shadows = True
scene.view_settings.view_transform = 'Standard'
scene.view_settings.exposure = -0.3
r.film_transparent = False

if '--save' in ARGS:
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, 'bizdavar-mascot.blend'))

if '--still' in ARGS:
    scene.frame_set(int(arg('--frame', 112)))
    r.image_settings.file_format = 'PNG'
    r.filepath = os.path.join(OUT, arg('--name', 'still.png'))
    bpy.ops.render.render(write_still=True)
elif '--anim' in ARGS:
    a, b = (int(v) for v in arg('--frames', f'1-{END}').split('-'))
    scene.frame_start, scene.frame_end = a, b
    r.image_settings.file_format = 'PNG'
    r.filepath = os.path.join(OUT, 'frames', 'f_')
    bpy.ops.render.render(animation=True)
