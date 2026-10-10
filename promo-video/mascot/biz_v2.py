"""Bizdavar mascot v2 — detailed, armature-rigged, animated.

blender -b -P promo-video/mascot/biz_v2.py -- [--still N] [--anim] [--frames a-b]
        [--engine eevee|cycles] [--samples N] [--pct 100] [--save] [--name file.png]
"""
import math
import os
import sys

import bmesh
import bpy
from mathutils import Matrix, Quaternion, Vector

ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []


def arg(name, default=None):
    return ARGS[ARGS.index(name) + 1] if name in ARGS else default


HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'out_v2')
os.makedirs(OUT, exist_ok=True)

FPS, END = 30, 360

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.fps = FPS
scene.frame_start, scene.frame_end = 1, END
COLL = scene.collection


# =================================================================== materials
def lin(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(v / 12.92 if v <= 0.04045 else ((v + 0.055) / 1.055) ** 2.4 for v in c) + (1.0,)


def principled(name, color, rough=0.5, **kw):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    p = nt.nodes['Principled BSDF']
    p.inputs['Base Color'].default_value = lin(color)
    p.inputs['Roughness'].default_value = rough
    for k, v in kw.items():
        p.inputs[k].default_value = v
    return m, nt, p


def add_bump(nt, p, strength, scale=200, detail=8, kind='noise', axis='X', distance=0.02):
    tc = nt.nodes.new('ShaderNodeTexCoord')
    if kind == 'noise':
        tex = nt.nodes.new('ShaderNodeTexNoise')
        tex.inputs['Scale'].default_value = scale
        tex.inputs['Detail'].default_value = detail
        nt.links.new(tc.outputs['Object'], tex.inputs['Vector'])
        out = tex.outputs['Fac']
    else:
        tex = nt.nodes.new('ShaderNodeTexWave')
        tex.wave_type = 'BANDS'
        tex.bands_direction = axis
        tex.wave_profile = 'SIN'
        tex.inputs['Scale'].default_value = scale
        nt.links.new(tc.outputs['Object'], tex.inputs['Vector'])
        out = tex.outputs['Fac']
    b = nt.nodes.new('ShaderNodeBump')
    b.inputs['Strength'].default_value = strength
    b.inputs['Distance'].default_value = distance
    nt.links.new(out, b.inputs['Height'])
    old = p.inputs['Normal'].links
    if old:
        nt.links.new(old[0].from_socket, b.inputs['Normal'])
    nt.links.new(b.outputs['Normal'], p.inputs['Normal'])
    return b


def velvet(name, color, rough=0.72):
    m, nt, p = principled(name, color, rough,
                          **{'Specular IOR Level': 0.3, 'Subsurface Weight': 0.15, 'Subsurface Radius': (1.0, 0.1, 0.08), 'Subsurface Scale': 0.03,
                             'Sheen Weight': 0.3, 'Sheen Roughness': 0.4, 'Sheen Tint': lin('#FF4A55')})
    add_bump(nt, p, 0.06, scale=320, detail=10)
    return m


def fabric(name, color, rib=False, axis='X', sheen=0.5):
    m, nt, p = principled(name, color, 0.92, **{'Sheen Weight': sheen, 'Sheen Roughness': 0.5})
    add_bump(nt, p, 0.12, scale=420, detail=4)
    if rib:
        add_bump(nt, p, 0.5, scale=70, kind='wave', axis=axis, distance=0.05)
    else:
        add_bump(nt, p, 0.05, scale=900, kind='wave', axis='Z', distance=0.01)
    return m


RED = velvet('Biz Red', '#E3191F')
RED_DARK = velvet('Biz Red Inner', '#B20E17', 0.8)
HOODIE = fabric('Hoodie', '#E4DED4')
RIB = fabric('Hoodie Rib', '#DCD6CB', rib=True, axis='X')
PANTS = fabric('Joggers', '#161619', sheen=0.15)
PANTS_RIB = fabric('Joggers Rib', '#131316', rib=True, axis='X', sheen=0.15)
EMBROID = principled('Embroidery', '#E3191F', 0.6, **{'Sheen Weight': 0.8})[0]
add_bump(EMBROID.node_tree, EMBROID.node_tree.nodes['Principled BSDF'], 0.4, scale=60, kind='wave', axis='Z', distance=0.02)
STITCH = principled('Stitch', '#D9D4CC', 0.8)[0]
EYE = principled('Eye Gloss', '#030303', 0.04, **{'Coat Weight': 1.0, 'Coat Roughness': 0.02, 'Specular IOR Level': 0.7})[0]
CATCH = principled('Catchlight', '#FFFFFF', 0.2, **{'Emission Color': (1, 1, 1, 1), 'Emission Strength': 4.0})[0]
MOUTH_IN = principled('Mouth Inside', '#3D0508', 0.6)[0]
TONGUE = principled('Tongue', '#FF5A6A', 0.45, **{'Subsurface Weight': 0.3})[0]
SOLE = principled('Rubber Sole', '#F2F2F2', 0.55)[0]
add_bump(SOLE.node_tree, SOLE.node_tree.nodes['Principled BSDF'], 0.3, scale=40, kind='wave', axis='Z', distance=0.01)
LEATHER = principled('Shoe Upper', '#141416', 0.42, **{'Coat Weight': 0.3, 'Coat Roughness': 0.25})[0]
add_bump(LEATHER.node_tree, LEATHER.node_tree.nodes['Principled BSDF'], 0.15, scale=260, detail=6)
LACE = principled('Laces', '#E3191F', 0.7)[0]
PODIUM = principled('Podium', '#F4EFE8', 0.6, **{'Coat Weight': 0.2})[0]
BACK = principled('Backdrop', '#7E0B12', 0.95)[0]
GLOSS_BLACK = principled('Deco Black', '#111114', 0.15, **{'Coat Weight': 1.0})[0]


def blush_mat():
    m, nt, p = principled('Blush', '#FF6F86', 0.7)
    if hasattr(m, 'surface_render_method'):
        m.surface_render_method = 'BLENDED'
    tc = nt.nodes.new('ShaderNodeTexCoord')
    g = nt.nodes.new('ShaderNodeTexGradient')
    g.gradient_type = 'SPHERICAL'
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (0, 0, 0, 1)
    ramp.color_ramp.elements[1].position = 0.75
    ramp.color_ramp.elements[1].color = (0.55, 0.55, 0.55, 1)
    nt.links.new(tc.outputs['Object'], g.inputs['Vector'])
    nt.links.new(g.outputs['Fac'], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], p.inputs['Alpha'])
    return m


BLUSH = blush_mat()


# =================================================================== mesh helpers
def link(obj):
    COLL.objects.link(obj)
    return obj


def smooth(obj):
    if obj.type == 'MESH':
        for poly in obj.data.polygons:
            poly.use_smooth = True
    return obj


def mat(obj, m):
    obj.data.materials.clear()
    obj.data.materials.append(m)
    return obj


def subsurf(obj, lv=2):
    s = obj.modifiers.new('Subsurf', 'SUBSURF')
    s.levels, s.render_levels = lv, lv
    return obj


def rounded_box(name, size, bevel, m, loc, cast=0.0, lv=2, segs=6, taper=1.0):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        k = taper if v.co.z > 0 else 1.0
        v.co = Vector((v.co.x * size[0] * k, v.co.y * size[1] * (1 + (k - 1) * 0.5), v.co.z * size[2]))
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    bv = o.modifiers.new('Bevel', 'BEVEL')
    bv.width, bv.segments, bv.limit_method = bevel, segs, 'NONE'
    subsurf(o, lv)
    if cast:
        c = o.modifiers.new('Cast', 'CAST')
        c.factor = cast
    o.location = loc
    return mat(smooth(o), m)


def ellipsoid(name, scale, m, loc, rot=(0, 0, 0), segs=48):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=segs // 2, radius=1.0)
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    o.scale, o.location, o.rotation_euler = scale, loc, rot
    return mat(smooth(o), m)


def torus(name, R, r, m, loc, rot=(0, 0, 0), scale=(1, 1, 1), keep=None, segs=(64, 24)):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    U, V = segs
    rings = []
    for i in range(U):
        a = 2 * math.pi * i / U
        ring = []
        for j in range(V):
            b = 2 * math.pi * j / V
            ring.append(bm.verts.new(((R + r * math.cos(b)) * math.cos(a), (R + r * math.cos(b)) * math.sin(a), r * math.sin(b))))
        rings.append(ring)
    for i in range(U):
        for j in range(V):
            bm.faces.new((rings[i][j], rings[(i + 1) % U][j], rings[(i + 1) % U][(j + 1) % V], rings[i][(j + 1) % V]))
    if keep:
        bmesh.ops.delete(bm, geom=[v for v in bm.verts if not keep(v.co)], context='VERTS')
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    o.location, o.rotation_euler, o.scale = loc, rot, scale
    return mat(smooth(o), m)


def tube(name, a, b, r0, r1, m, rings=24, segs=32, cap=True, bulge=0.0):
    """Tube from a to b; returns (obj, t-per-vertex list)."""
    a, b = Vector(a), Vector(b)
    axis = (b - a)
    L = axis.length
    q = axis.normalized().to_track_quat('Z', 'Y')
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    ts = []
    ring_verts = []
    for i in range(rings + 1):
        t = i / rings
        r = r0 + (r1 - r0) * t + bulge * math.sin(math.pi * t)
        ring = []
        for j in range(segs):
            ang = 2 * math.pi * j / segs
            p = a + q @ Vector((r * math.cos(ang), r * math.sin(ang), L * t))
            ring.append(bm.verts.new(p))
            ts.append(t)
        ring_verts.append(ring)
    for i in range(rings):
        for j in range(segs):
            bm.faces.new((ring_verts[i][j], ring_verts[i][(j + 1) % segs], ring_verts[i + 1][(j + 1) % segs], ring_verts[i + 1][j]))
    if cap:
        for ring, end, t in ((ring_verts[0], a, 0.0), (ring_verts[-1], b, 1.0)):
            c = bm.verts.new(end)
            ts.append(t)
            for j in range(segs):
                f = (ring[j], ring[(j + 1) % segs], c)
                bm.faces.new(f if t else f[::-1])
    bm.normal_update()
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    return mat(smooth(o), m), ts


def rounded_rect(w, h, r, n=8):
    pts = []
    for cx, cy, a0 in ((w / 2 - r, h / 2 - r, 0), (-w / 2 + r, h / 2 - r, 90), (-w / 2 + r, -h / 2 + r, 180), (w / 2 - r, -h / 2 + r, 270)):
        for k in range(n + 1):
            a = math.radians(a0 + 90 * k / n)
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts


def flat_patch(name, pts, m, loc, target, thick=0.02, offset=0.002):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    vs = [bm.verts.new((x, 0, y)) for x, y in pts]
    bm.faces.new(vs)
    bmesh.ops.triangulate(bm, faces=bm.faces)
    bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=3, use_grid_fill=True)
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    o.location = loc
    wrap(o, target, offset)
    so = o.modifiers.new('Solidify', 'SOLIDIFY')
    so.thickness, so.offset = thick, 1
    bv = o.modifiers.new('Bevel', 'BEVEL')
    bv.width, bv.segments = thick * 0.4, 3
    for p in o.data.polygons:
        p.use_smooth = True
    return mat(o, m)


def wrap(o, target, offset, axis='Y'):
    sw = o.modifiers.new('Shrinkwrap', 'SHRINKWRAP')
    sw.target = target
    sw.wrap_method = 'PROJECT'
    setattr(sw, f'use_project_{axis.lower()}', True)
    sw.use_negative_direction = True
    sw.use_positive_direction = True
    sw.offset = offset
    return sw


def stitches(name, pts, loc, target, dash=0.022, gap=0.016, offset=0.026, closed=True):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    path = pts + [pts[0]] if closed else list(pts)
    seglens = [(Vector(path[i + 1]) - Vector(path[i])).length for i in range(len(path) - 1)]
    total = sum(seglens)
    d = 0.0
    while d < total - dash:
        def at(s):
            for i, sl in enumerate(seglens):
                if s <= sl:
                    return Vector(path[i]).lerp(Vector(path[i + 1]), s / sl if sl else 0)
                s -= sl
            return Vector(path[-1])
        p0, p1 = at(d), at(d + dash)
        tang = (p1 - p0).normalized()
        nrm = Vector((-tang.y, tang.x))
        w = 0.0045
        quad = [p0 + nrm * w, p1 + nrm * w, p1 - nrm * w, p0 - nrm * w]
        vs = [bm.verts.new((q.x, 0, q.y)) for q in quad]
        bm.faces.new(vs)
        d += dash + gap
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    o.location = loc
    wrap(o, target, offset)
    so = o.modifiers.new('Solidify', 'SOLIDIFY')
    so.thickness, so.offset = 0.006, 1
    return mat(o, STITCH)


def text_patch(name, body, size, m, loc, target, font=r'C:\Windows\Fonts\segoeuib.ttf', thick=0.014, offset=0.002):
    cu = bpy.data.curves.new(name, 'FONT')
    cu.body = body
    if os.path.exists(font):
        cu.font = bpy.data.fonts.load(font)
    cu.size = size
    cu.align_x, cu.align_y = 'CENTER', 'CENTER'
    cu.resolution_u = 24
    o = link(bpy.data.objects.new(name, cu))
    o.location = loc
    o.rotation_euler = (math.pi / 2, 0, 0)
    bpy.context.view_layer.objects.active = o
    for ob in bpy.context.selected_objects:
        ob.select_set(False)
    o.select_set(True)
    bpy.ops.object.convert(target='MESH')
    o = bpy.context.active_object
    bm = bmesh.new()
    bm.from_mesh(o.data)
    bmesh.ops.subdivide_edges(bm, edges=[e for e in bm.edges if e.calc_length() > 0.02], cuts=2)
    bm.to_mesh(o.data)
    wrap(o, target, offset, axis='Z')
    so = o.modifiers.new('Solidify', 'SOLIDIFY')
    so.thickness, so.offset = thick, 1
    bv = o.modifiers.new('Bevel', 'BEVEL')
    bv.width, bv.segments = thick * 0.45, 2
    return mat(o, m)


def surface(obj, x, z, from_y=-6.0):
    """Ray-cast onto the evaluated front surface of obj at world (x, z)."""
    dg = bpy.context.evaluated_depsgraph_get()
    inv = obj.matrix_world.inverted()
    o = inv @ Vector((x, from_y, z))
    d = (inv.to_3x3() @ Vector((0, 1, 0))).normalized()
    hit, loc, nrm, _ = obj.ray_cast(o, d, depsgraph=dg)
    if not hit:
        ev = obj.evaluated_get(dg)
        raise RuntimeError(f'no surface hit on {obj.name} at {x},{z}; mw={obj.matrix_world.translation[:]} '
                           f'bbox={[tuple(round(c, 2) for c in v) for v in ev.bound_box][::7]} verts={len(ev.data.vertices)}')
    mw = obj.matrix_world
    return mw @ loc, (mw.to_3x3().inverted().transposed() @ nrm).normalized()


def face_on(obj, pos, nrm, depth=0.0):
    obj.location = pos - nrm * depth
    obj.rotation_mode = 'QUATERNION'
    obj.rotation_quaternion = (-nrm).to_track_quat('Y', 'Z')
    return obj


# =================================================================== armature
arm_data = bpy.data.armatures.new('BizRig')
arm_data.display_type = 'OCTAHEDRAL'
RIG = link(bpy.data.objects.new('BizRig', arm_data))
RIG.show_in_front = True
bpy.context.view_layer.objects.active = RIG
bpy.ops.object.mode_set(mode='EDIT')
EB = arm_data.edit_bones


def bone(name, head, length=0.2, parent=None):
    b = EB.new(name)
    b.head = head
    b.tail = (head[0], head[1], head[2] + length)
    b.roll = 0
    if parent:
        b.parent = EB[parent]
    return b


SHOULDER_Z, HIP_Z, NECK_Z = 1.3, 0.62, 1.44
ARM_ANGLE = 0.5
UPPER, FORE = 0.33, 0.31
bone('root', (0, 0, 0), 0.4)
bone('hips', (0, 0, HIP_Z), 0.2, 'root')
bone('spine', (0, 0, HIP_Z + 0.05), 0.5, 'hips')
bone('head', (0, 0, NECK_Z), 0.5, 'spine')
ARM_DIR = {}
for s, sfx in ((1, 'L'), (-1, 'R')):
    d = Vector((s * math.sin(ARM_ANGLE), 0, -math.cos(ARM_ANGLE)))
    sh = Vector((s * 0.48, 0, SHOULDER_Z))
    el = sh + d * UPPER
    wr = el + d * FORE
    ARM_DIR[s] = (sh, el, wr, d)
    bone(f'upper_arm.{sfx}', sh, 0.15, 'spine')
    bone(f'forearm.{sfx}', el, 0.12, f'upper_arm.{sfx}')
    bone(f'hand.{sfx}', wr, 0.1, f'forearm.{sfx}')
    bone(f'thigh.{sfx}', (s * 0.24, 0, HIP_Z), 0.15, 'hips')
    bone(f'ear.{sfx}', (s * 0.21, 0.0, 2.5), 0.3, 'head')
bpy.ops.object.mode_set(mode='OBJECT')
for pb in RIG.pose.bones:
    pb.rotation_mode = 'XYZ'
bpy.context.view_layer.update()


def to_bone(obj, bname):
    basis = obj.matrix_basis.copy()
    pb = RIG.pose.bones[bname]
    obj.parent = RIG
    obj.parent_type = 'BONE'
    obj.parent_bone = bname
    pm = RIG.matrix_world @ pb.bone.matrix_local @ Matrix.Translation((0, pb.bone.length, 0))
    obj.matrix_parent_inverse = pm.inverted()
    obj.matrix_basis = basis
    return obj


def skin(obj, weights):
    """weights: dict bone -> list of per-vertex weights."""
    obj.parent = RIG
    for bname, ws in weights.items():
        vg = obj.vertex_groups.new(name=bname)
        for i, w in enumerate(ws):
            if w > 0:
                vg.add([i], w, 'REPLACE')
    mod = obj.modifiers.new('Armature', 'ARMATURE')
    mod.object = RIG
    return obj


def smoothstep(e0, e1, x):
    t = max(0.0, min(1.0, (x - e0) / (e1 - e0)))
    return t * t * (3 - 2 * t)


# =================================================================== body
TORSO = rounded_box('Hoodie Body', (1.12, 0.84, 0.92), 0.34, HOODIE, (0, 0, 1.0), cast=0.22, taper=0.8)
to_bone(TORSO, 'spine')
hem = rounded_box('Hoodie Hem', (1.06, 0.8, 0.1), 0.045, RIB, (0, 0, 0.6), cast=0.2)
to_bone(hem, 'spine')
collar = torus('Hood Collar', 0.34, 0.09, HOODIE, (0, 0.02, 1.43), scale=(1.05, 0.85, 1))
to_bone(collar, 'spine')
hood = ellipsoid('Hood Back', (0.52, 0.3, 0.34), HOODIE, (0, 0.3, 1.52))
to_bone(hood, 'spine')
hood_rim = torus('Hood Rim', 0.42, 0.05, HOODIE, (0, 0.12, 1.62), rot=(math.radians(70), 0, 0), scale=(1.1, 1, 0.9),
                 keep=lambda c: c.y > -0.1)
to_bone(hood_rim, 'spine')

bpy.context.view_layer.update()
for x in (-0.09, 0.09):
    p, n = surface(TORSO, x, 1.38)
    cu = bpy.data.curves.new('Drawstring', 'CURVE')
    cu.dimensions = '3D'
    cu.bevel_depth = 0.014
    cu.bevel_resolution = 4
    sp = cu.splines.new('BEZIER')
    pts = [p + Vector((0, -0.012, 0)), p + Vector((x * 0.15, -0.035, -0.17)), p + Vector((x * 0.25, -0.03, -0.32))]
    sp.bezier_points.add(len(pts) - 1)
    for bp, co in zip(sp.bezier_points, pts):
        bp.co = co
        bp.handle_left_type = bp.handle_right_type = 'AUTO'
    ds = link(bpy.data.objects.new('Drawstring', cu))
    mat(ds, HOODIE)
    to_bone(ds, 'spine')
    tip = pts[-1]
    ag = ellipsoid('Aglet', (0.02, 0.02, 0.04), LACE, tip + Vector((0, 0, -0.03)), segs=24)
    to_bone(ag, 'spine')
    eyelet = torus('Eyelet', 0.022, 0.007, STITCH, p + Vector((0, -0.005, 0.02)), rot=(math.pi / 2, 0, 0), segs=(24, 8))
    to_bone(eyelet, 'spine')

label = text_patch('Chest Embroidery', 'bizdavar', 0.2, EMBROID, (0, -0.5, 1.13), TORSO)
to_bone(label, 'spine')
pocket_pts = rounded_rect(0.66, 0.3, 0.07)
pocket = flat_patch('Kangaroo Pocket', pocket_pts, HOODIE, (0, -0.5, 0.82), TORSO, thick=0.03)
to_bone(pocket, 'spine')
st = stitches('Pocket Stitch', rounded_rect(0.6, 0.24, 0.05), (0, -0.5, 0.82), TORSO)
to_bone(st, 'spine')
heart_font = r'C:\Windows\Fonts\seguisym.ttf'
heart = text_patch('Heart', '\u2665', 0.13, EMBROID, (0.21, -0.5, 0.88), TORSO, font=heart_font, thick=0.018, offset=0.032)
to_bone(heart, 'spine')
st2 = stitches('Hem Stitch', [(-0.4, 0), (0.4, 0)], (0, -0.5, 0.685), TORSO, offset=0.004, closed=False)
to_bone(st2, 'spine')

# arms (skinned tubes) + cuffs + mitten hands
HANDS = []
for s, sfx in ((1, 'L'), (-1, 'R')):
    sh, el, wr, d = ARM_DIR[s]
    start = sh - d * 0.06
    sleeve, ts = tube(f'Sleeve.{sfx}', start, wr - d * 0.04, 0.16, 0.135, HOODIE, bulge=0.02)
    fw = [smoothstep(0.42, 0.62, t) for t in ts]
    skin(sleeve, {f'upper_arm.{sfx}': [1 - w for w in fw], f'forearm.{sfx}': fw})
    subsurf(sleeve, 1)
    cuff, cts = tube(f'Cuff.{sfx}', wr - d * 0.06, wr + d * 0.02, 0.142, 0.138, RIB)
    skin(cuff, {f'forearm.{sfx}': [1.0] * len(cts)})
    subsurf(cuff, 1)
    hand_c = wr + d * 0.13
    q = d.to_track_quat('-Z', 'Y')
    hand = ellipsoid(f'Mitten.{sfx}', (0.125, 0.1, 0.15), RED, hand_c)
    hand.rotation_mode = 'QUATERNION'
    hand.rotation_quaternion = q
    thumb = ellipsoid(f'Thumb.{sfx}', (0.045, 0.045, 0.075), RED, hand_c + Vector((-s * 0.09, -0.05, 0.05)),
                      rot=(0.4, s * 0.5, 0))
    to_bone(hand, f'hand.{sfx}')
    to_bone(thumb, f'hand.{sfx}')
    HANDS.extend([(hand, f'hand.{sfx}'), (thumb, f'hand.{sfx}')])

# legs + sneakers
for s, sfx in ((1, 'L'), (-1, 'R')):
    x = s * 0.24
    leg, _ = tube(f'Jogger.{sfx}', (x, 0, HIP_Z + 0.08), (x, 0, 0.24), 0.18, 0.155, PANTS, bulge=0.012)
    subsurf(leg, 1)
    to_bone(leg, f'thigh.{sfx}')
    cuff, _ = tube(f'Ankle Cuff.{sfx}', (x, 0, 0.27), (x, 0, 0.19), 0.158, 0.15, PANTS_RIB)
    subsurf(cuff, 1)
    to_bone(cuff, f'thigh.{sfx}')
    parts = [
        rounded_box(f'Midsole.{sfx}', (0.42, 0.6, 0.11), 0.05, SOLE, (x, -0.08, 0.055), cast=0.35),
        rounded_box(f'Outsole.{sfx}', (0.425, 0.605, 0.03), 0.014, LEATHER, (x, -0.08, 0.015), cast=0.35, lv=1),
        ellipsoid(f'Upper.{sfx}', (0.2, 0.29, 0.16), LEATHER, (x, -0.08, 0.15)),
        ellipsoid(f'Toe Cap.{sfx}', (0.17, 0.11, 0.085), SOLE, (x, -0.29, 0.11)),
        ellipsoid(f'Tongue.{sfx}', (0.1, 0.05, 0.09), LEATHER, (x, -0.15, 0.25), rot=(-0.6, 0, 0)),
        rounded_box(f'Heel Tab.{sfx}', (0.08, 0.03, 0.1), 0.012, LACE, (x, 0.2, 0.2), lv=1),
    ]
    for k in range(3):
        parts.append(ellipsoid(f'Lace.{sfx}', (0.08, 0.02, 0.02), LACE, (x, -0.2 + k * 0.055, 0.26 - k * 0.012),
                               rot=(-0.5, 0, 0), segs=16))
    for p_ in parts:
        to_bone(p_, f'thigh.{sfx}')

# head
HEAD = rounded_box('Head', (1.42, 1.06, 1.12), 0.42, RED, (0, 0, 2.02), cast=0.2, lv=3)
to_bone(HEAD, 'head')
bpy.context.view_layer.update()

EYES, CATCHES, BALD = [], [], []
for s in (-1, 1):
    pos, n = surface(HEAD, s * 0.27, 2.09)
    eye = face_on(ellipsoid('Eye', (0.098, 0.06, 0.168), EYE, (0, 0, 0)), pos, n, depth=0.018)
    to_bone(eye, 'head')
    c1 = face_on(ellipsoid('Catchlight', (0.03, 0.012, 0.042), CATCH, (0, 0, 0), segs=16),
                 pos + Vector((-0.035, -0.045, 0.06)), n)
    c2 = face_on(ellipsoid('Catchlight Small', (0.014, 0.008, 0.016), CATCH, (0, 0, 0), segs=12),
                 pos + Vector((0.035, -0.04, -0.06)), n)
    to_bone(c1, 'head')
    to_bone(c2, 'head')
    EYES.append(eye)
    CATCHES.extend([c1, c2])
    BALD.append((pos, 0.105, 0.175))
    bp, bn = surface(HEAD, s * 0.47, 1.86)
    bl = face_on(ellipsoid('Blush', (0.12, 0.012, 0.07), BLUSH, (0, 0, 0), segs=24), bp, bn, depth=0.003)
    to_bone(bl, 'head')

mp, mn = surface(HEAD, 0, 1.84)
SMILE_M = principled('Smile', '#0A0A0A', 0.55)[0]
SMILE = torus('Smile', 0.085, 0.021, SMILE_M, mp + Vector((0, 0.006, 0.014)), rot=(math.pi / 2, 0, 0),
              keep=lambda c: c.y < 0.01, segs=(48, 12))
to_bone(SMILE, 'head')
MOUTH = ellipsoid('Mouth Open', (0.075, 0.03, 0.001), MOUTH_IN, mp + Vector((0, 0.012, -0.02)))
to_bone(MOUTH, 'head')
TONGUE_O = ellipsoid('Tongue', (0.045, 0.02, 0.001), TONGUE, mp + Vector((0, -0.003, -0.045)))
to_bone(TONGUE_O, 'head')


def arc_pts(cx, cy, rx, ry, a0, a1, n=24):
    return [(cx + rx * math.cos(math.radians(a0 + (a1 - a0) * k / n)),
             cy + ry * math.sin(math.radians(a0 + (a1 - a0) * k / n))) for k in range(n + 1)]


def stroke_poly(path, w, n=8):
    """Closed outline of a constant-width stroke along path with round caps."""
    P_ = [Vector(p) for p in path]
    left, right = [], []
    for i, p in enumerate(P_):
        t = (P_[min(i + 1, len(P_) - 1)] - P_[max(i - 1, 0)]).normalized()
        nv = Vector((-t.y, t.x)) * (w / 2)
        left.append(p + nv)
        right.append(p - nv)

    def cap(c, t, sign):
        base = math.atan2(t.y, t.x)
        return [c + Vector((math.cos(base + sign * (math.pi / 2 - math.pi * k / n)),
                            math.sin(base + sign * (math.pi / 2 - math.pi * k / n)))) * (w / 2) for k in range(1, n)]

    t_end = (P_[-1] - P_[-2]).normalized()
    t_start = (P_[0] - P_[1]).normalized()
    pts = left + cap(P_[-1], t_end, 1) + right[::-1] + cap(P_[0], t_start, 1)
    return [(p.x, p.y) for p in pts]


MOUTH_STYLE = arg('--mouth', 'smile')
LIP = principled('Lip Line', '#2B0A0C', 0.5)[0]
CAVITY = principled('Mouth Cavity', '#4A060B', 0.65)[0]
TEETH = principled('Teeth', '#FBF6EF', 0.35)[0]


MOUTH_SCALE = float(arg('--mouth-scale', 1.5))


def mouth_patch(name, pts, m, offset, thick=0.004):
    pts = [(x * MOUTH_SCALE, y * MOUTH_SCALE) for x, y in pts]
    o = flat_patch(name, pts, m, mp, HEAD, thick=thick, offset=offset)
    o.modifiers.remove(o.modifiers['Bevel'])
    for p in o.data.polygons:
        p.use_smooth = False
    to_bone(o, 'head')
    return o


if MOUTH_STYLE != 'classic':
    for o in (SMILE, MOUTH, TONGUE_O):
        o.hide_render = o.hide_viewport = True

def pivot_patch(o, pivot_z):
    """Move the object origin to mp + pivot_z (mesh stays in place) so z-scale opens from that line."""
    for v in o.data.vertices:
        v.co.z -= pivot_z
    o.location = mp + Vector((0, 0, pivot_z))
    return o


def mouth_stroke(name, path, w, m, offset=0.003, thick=0.006, n=10, pivot=None):
    """Quad-strip stroke with round caps, projected onto the head."""
    P_ = [Vector(p) * MOUTH_SCALE for p in path]
    w *= MOUTH_SCALE
    bm = bmesh.new()
    left, right = [], []
    for i, p in enumerate(P_):
        t = (P_[min(i + 1, len(P_) - 1)] - P_[max(i - 1, 0)]).normalized()
        nv = Vector((-t.y, t.x)) * (w / 2)
        left.append(bm.verts.new(((p + nv).x, 0, (p + nv).y)))
        right.append(bm.verts.new(((p - nv).x, 0, (p - nv).y)))
    for i in range(len(P_) - 1):
        bm.faces.new((left[i], right[i], right[i + 1], left[i + 1]))
    for c, l_, r_, sign in ((P_[0], left[0], right[0], -1), (P_[-1], right[-1], left[-1], 1)):
        t = (P_[1] - P_[0]).normalized() if sign < 0 else (P_[-1] - P_[-2]).normalized()
        base = math.atan2(t.y, t.x) + (math.pi / 2 if sign < 0 else -math.pi / 2)
        ctr = bm.verts.new((c.x, 0, c.y))
        prev = l_
        for k in range(1, n):
            a = base + math.pi * k / n
            v = bm.verts.new((c.x + math.cos(a) * w / 2, 0, c.y + math.sin(a) * w / 2))
            bm.faces.new((ctr, prev, v))
            prev = v
        bm.faces.new((ctr, prev, r_))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    o = link(bpy.data.objects.new(name, me))
    o.location = mp
    if pivot is not None:
        pivot_patch(o, pivot)
    wrap(o, HEAD, offset)
    so = o.modifiers.new('Solidify', 'SOLIDIFY')
    so.thickness, so.offset = thick, 1
    smooth(o)
    to_bone(o, 'head')
    return mat(o, m)


SMILE_LINE = SMILE_CAV = None
if MOUTH_STYLE == 'smile':
    arc = arc_pts(0, 0.035, 0.1, 0.075, 205, 335, 40)
    top = arc[0][1] * MOUTH_SCALE
    SMILE_LINE = mouth_stroke('Smile Line', arc, 0.028, LIP, pivot=top)
    cav_pts = [(x * MOUTH_SCALE, y * MOUTH_SCALE) for x, y in arc]
    me = bpy.data.meshes.new('Smile Cavity')
    bm = bmesh.new()
    vs = [bm.verts.new((x, 0, y)) for x, y in cav_pts]
    bm.faces.new(vs)
    bmesh.ops.triangulate(bm, faces=bm.faces)
    bmesh.ops.subdivide_edges(bm, edges=bm.edges, cuts=2, use_grid_fill=True)
    bm.to_mesh(me)
    SMILE_CAV = link(bpy.data.objects.new('Smile Cavity', me))
    pivot_patch(SMILE_CAV, top)
    wrap(SMILE_CAV, HEAD, 0.002)
    so = SMILE_CAV.modifiers.new('Solidify', 'SOLIDIFY')
    so.thickness, so.offset = 0.003, 1
    mat(SMILE_CAV, CAVITY)
    to_bone(SMILE_CAV, 'head')
    SMILE_CAV.scale = (0, 1, 0)
elif MOUTH_STYLE == 'open':
    d_shape = arc_pts(0, 0.0, 0.11, 0.1, 180, 360, 32) + \
        [(0.11 - k * 0.22 / 12, 0.008 * math.sin(math.pi * k / 12)) for k in range(1, 12)]
    mouth_patch('Mouth Cavity', d_shape, CAVITY, 0.002)
    mouth_patch('Tongue Patch', arc_pts(0, -0.1, 0.07, 0.055, 15, 165, 20), TONGUE, 0.006)
elif MOUTH_STYLE == 'open_teeth':
    d_shape = arc_pts(0, 0.0, 0.11, 0.1, 180, 360, 32) + \
        [(0.11 - k * 0.22 / 12, 0.008 * math.sin(math.pi * k / 12)) for k in range(1, 12)]
    mouth_patch('Mouth Cavity', d_shape, CAVITY, 0.002)
    mouth_patch('Tongue Patch', arc_pts(0, -0.1, 0.07, 0.055, 15, 165, 20), TONGUE, 0.006)
    mouth_patch('Teeth', [(x, y - 0.015) for x, y in rounded_rect(0.13, 0.026, 0.011)], TEETH, 0.006)
elif MOUTH_STYLE == 'cat':
    left = arc_pts(-0.045, 0.02, 0.045, 0.045, 180, 360, 16)
    right = arc_pts(0.045, 0.02, 0.045, 0.045, 180, 360, 16)
    mouth_patch('Cat Mouth', stroke_poly(left + right[1:], 0.026), LIP, 0.002)
elif MOUTH_STYLE == 'cat_open':
    left = arc_pts(-0.045, 0.045, 0.045, 0.04, 180, 360, 16)
    right = arc_pts(0.045, 0.045, 0.045, 0.04, 180, 360, 16)
    mouth_patch('Cat Mouth', stroke_poly(left + right[1:], 0.024), LIP, 0.007)
    mouth_patch('Mouth Cavity', arc_pts(0, 0.012, 0.075, 0.1, 180, 360, 32), CAVITY, 0.002)
    mouth_patch('Tongue Patch', arc_pts(0, -0.06, 0.048, 0.034, 10, 170, 16) + arc_pts(0, -0.06, 0.048, 0.02, 190, 350, 12),
                TONGUE, 0.005)

EARS = []
for s, sfx in ((1, 'L'), (-1, 'R')):
    base = Vector((s * 0.21, 0.0, 2.5))
    ear = ellipsoid(f'Ear.{sfx}', (0.145, 0.115, 0.34), RED, base + Vector((s * 0.03, 0, 0.27)), rot=(0, s * 0.12, 0))
    inner = ellipsoid(f'Ear Inner.{sfx}', (0.075, 0.03, 0.22), RED_DARK, base + Vector((s * 0.035, -0.095, 0.3)),
                      rot=(0, s * 0.12, 0))
    to_bone(ear, f'ear.{sfx}')
    to_bone(inner, f'ear.{sfx}')
    EARS.append((ear, f'ear.{sfx}', base))


def fur_mat():
    m = bpy.data.materials.new('Fur')
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.remove(nt.nodes['Principled BSDF'])
    h = nt.nodes.new('ShaderNodeBsdfHairPrincipled')
    h.parametrization = 'COLOR'
    info = nt.nodes.new('ShaderNodeHairInfo')
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = lin('#B80F17')
    ramp.color_ramp.elements[1].color = lin('#FF3B44')
    nt.links.new(info.outputs['Intercept'], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], h.inputs['Color'])
    h.inputs['Roughness'].default_value = 0.75
    h.inputs['Radial Roughness'].default_value = 0.85
    h.inputs['Coat'].default_value = 0.0
    h.inputs['Random Roughness'].default_value = 0.4
    nt.links.new(h.outputs[0], nt.nodes['Material Output'].inputs['Surface'])
    return m


def fur(src, bname, weight, length, count, name):
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(src.evaluated_get(dg))
    me.transform(src.matrix_world)
    bm = bmesh.new()
    bm.from_mesh(me)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me)
    bm.free()
    shell = link(bpy.data.objects.new(f'{name} Fur', me))
    if '--fur-debug' in ARGS:
        ctr = sum((v.co for v in me.vertices), Vector()) / len(me.vertices)
        inward = sum(1 for p in me.polygons if p.normal.dot(p.center - ctr) < 0)
        print(f'FURDBG {name}: polys={len(me.polygons)} inward={inward}')
    vg = shell.vertex_groups.new(name='density')
    for v in me.vertices:
        w = weight(v.co)
        if w > 0:
            vg.add([v.index], w, 'REPLACE')
    shell.data.materials.clear()
    shell.data.materials.append(src.active_material)
    shell.data.materials.append(FUR)
    ps_mod = shell.modifiers.new('Fur', 'PARTICLE_SYSTEM')
    ps = ps_mod.particle_system
    st = ps.settings
    st.type = 'HAIR'
    st.use_advanced_hair = False
    st.count = count
    st.hair_length = length
    st.hair_step = 4
    st.emit_from = 'FACE'
    st.distribution = 'RAND'
    st.material = 2
    st.child_type = 'SIMPLE'
    st.child_percent = 10
    st.rendered_child_count = 30
    st.child_radius = 0.008
    st.child_roundness = 0.0
    st.child_length = 1.0
    st.child_length_threshold = 0.3
    st.clump_factor = 0.12
    st.roughness_1 = 0.005
    st.roughness_1_size = 0.5
    st.roughness_2 = 0.025
    st.roughness_2_threshold = 0.0
    st.roughness_endpoint = 0.012
    st.root_radius = 1.0
    st.tip_radius = 0.0
    st.radius_scale = 0.0035
    st.use_close_tip = True
    ps.vertex_group_density = 'density'
    ps.vertex_group_length = 'density'
    shell.show_instancer_for_render = False
    shell.show_instancer_for_viewport = False
    basis = Matrix.Identity(4)
    pb = RIG.pose.bones[bname]
    shell.parent = RIG
    shell.parent_type = 'BONE'
    shell.parent_bone = bname
    pm = RIG.matrix_world @ pb.bone.matrix_local @ Matrix.Translation((0, pb.bone.length, 0))
    shell.matrix_parent_inverse = pm.inverted()
    shell.matrix_basis = basis
    return shell


def bald_weight(p):
    w = 1.0
    m_zone = (mp + Vector((0, 0, -0.035)), 0.19, 0.1) if MOUTH_STYLE == 'smile' else (mp + Vector((0, 0, -0.065)), 0.19, 0.13)
    for c, rx, rz in BALD + [m_zone]:
        d = math.sqrt(((p.x - c.x) / rx) ** 2 + ((p.z - c.z) / rz) ** 2)
        if p.y < c.y + 0.25:
            w = min(w, 0.55 + 0.45 * smoothstep(1.0, 1.5, d) if d > 1.0 else 0.0)
    return w


if '--no-fur' not in ARGS:
    FUR = fur_mat()
    under = HEAD.active_material.copy()
    under.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = lin('#8E0B11')
    for o in [HEAD] + [e for e, _, _ in EARS] + [h for h, _ in HANDS]:
        o.data.materials[0] = under
    bpy.context.view_layer.update()
    FUR_LEN = float(arg('--fur-len', 0.03))
    fur(HEAD, 'head', bald_weight, FUR_LEN, 60000, 'Head')
    for ear, bname, base in EARS:
        fur(ear, bname, lambda p, b=base: 1.0 if p.y > b.y - 0.06 else 0.5, FUR_LEN * 0.75, 12000, ear.name)
    for hand, bname in HANDS:
        fur(hand, bname, lambda p: 1.0, FUR_LEN * 0.7, 9000 if 'Mitten' in hand.name else 3000, hand.name)

# =================================================================== set
bm = bmesh.new()
prof = [(-25, -0.32)]
R = 4.0
for i in range(33):
    a = i / 32 * math.pi / 2
    prof.append((6 - R + R * math.sin(a), -0.32 + R - R * math.cos(a)))
prof.append((6, 30))
cols = [[bm.verts.new((x, y, z)) for y, z in prof] for x in (-40, 40)]
for i in range(len(prof) - 1):
    bm.faces.new((cols[0][i], cols[1][i], cols[1][i + 1], cols[0][i + 1]))
me = bpy.data.meshes.new('Backdrop')
bm.to_mesh(me)
mat(smooth(link(bpy.data.objects.new('Backdrop', me))), BACK)

pod, _ = tube('Podium', (0, 0, -0.32), (0, 0, 0), 1.55, 1.55, PODIUM, segs=96, rings=4)
bv = pod.modifiers.new('Bevel', 'BEVEL')
bv.width, bv.segments = 0.06, 4
bv.limit_method = 'ANGLE'
torus('Podium Trim', 1.56, 0.03, LACE, (0, 0, -0.06), segs=(128, 12))
torus('Podium Trim 2', 1.56, 0.012, EYE, (0, 0, -0.2), segs=(128, 8))

DECO = []
deco_specs = [
    ('box', (-1.9, 3.5, 3.9), 0.3, HOODIE), ('sphere', (1.8, 3.0, 4.3), 0.22, LACE),
    ('torus', (2.1, 4.5, 2.2), 0.32, HOODIE), ('box', (2.0, 2.4, 0.9), 0.2, GLOSS_BLACK),
    ('sphere', (-2.1, 2.8, 1.4), 0.17, GLOSS_BLACK), ('torus', (-1.6, 5.0, 5.2), 0.28, LACE),
    ('sphere', (-0.6, 5.5, 5.6), 0.13, HOODIE), ('box', (1.0, 6.0, 5.9), 0.16, LACE),
]
for i, (kind, loc, sz, m) in enumerate(deco_specs):
    if kind == 'box':
        o = rounded_box('Deco', (sz, sz, sz), sz * 0.25, m, loc)
    elif kind == 'sphere':
        o = ellipsoid('Deco', (sz, sz, sz), m, loc)
    else:
        o = torus('Deco', sz, sz * 0.35, m, loc, rot=(1.1, 0.3, 0))
    DECO.append((o, i))


# =================================================================== lights / world / camera
def area(name, loc, target, power, size, color=(1, 1, 1), shape='SQUARE'):
    d = bpy.data.lights.new(name, 'AREA')
    d.energy, d.size, d.color, d.shape = power, size, color, shape
    o = link(bpy.data.objects.new(name, d))
    o.location = loc
    c = o.constraints.new('TRACK_TO')
    c.target = target
    return o


def empty(name, loc):
    e = link(bpy.data.objects.new(name, None))
    e.location = loc
    return e


FOCUS = empty('Focus', (0, -0.4, 1.7))
area('Key', (-4.5, -6, 6.5), FOCUS, 1100, 4)
area('Fill', (6, -5, 2.5), FOCUS, 220, 6, (1, 0.95, 0.92))
area('Rim L', (-3.2, 2.5, 4), FOCUS, 700, 1.4, (1, 0.88, 0.85))
area('Rim R', (3.2, 2.5, 4), FOCUS, 700, 1.4, (1, 0.88, 0.85))
area('Glow', (0, -2.5, 5.5), empty('GlowTarget', (0, 6, 2.5)), 900, 7, (1, 0.55, 0.5), 'DISK')
area('Bounce', (0, -3, -0.1), FOCUS, 60, 4)

world = bpy.data.worlds.new('World')
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes['Background']
bg.inputs['Color'].default_value = lin('#2A0508')
bg.inputs['Strength'].default_value = 0.3

cam_d = bpy.data.cameras.new('Camera')
cam_d.lens = 85
cam_d.sensor_fit = 'VERTICAL'
cam_d.sensor_height = 36
cam_d.dof.use_dof = True
cam_d.dof.focus_object = FOCUS
cam_d.dof.aperture_fstop = 2.8
CAM = link(bpy.data.objects.new('Camera', cam_d))
scene.camera = CAM
LOOK = empty('LookAt', (0, 0, 1.75))
tc = CAM.constraints.new('TRACK_TO')
tc.target = LOOK


# =================================================================== animation helpers
def P(name):
    return RIG.pose.bones[name]


def kp(name, f, rot=None, loc=None, scale=None):
    pb = P(name)
    if rot is not None:
        pb.rotation_euler = rot
        pb.keyframe_insert('rotation_euler', frame=f)
    if loc is not None:
        pb.location = loc
        pb.keyframe_insert('location', frame=f)
    if scale is not None:
        pb.scale = scale
        pb.keyframe_insert('scale', frame=f)


def ko(obj, f, **kw):
    for k, v in kw.items():
        setattr(obj, k, v)
        obj.keyframe_insert(k, frame=f)


def arm(sfx, f, lift, fwd=0.0, bend=0.0, bend_fwd=0.0):
    s = 1 if sfx == 'L' else -1
    kp(f'upper_arm.{sfx}', f, rot=(-fwd, 0, s * lift))
    kp(f'forearm.{sfx}', f, rot=(-bend_fwd, 0, s * bend))


def ears(f, out, fwd=0.0):
    kp('ear.L', f, rot=(fwd, 0, -out))
    kp('ear.R', f, rot=(fwd, 0, out))


def squash(f, sy, z=0.0, spin=0.0):
    sx = 1 / math.sqrt(sy)
    kp('root', f, loc=(0, z, 0), scale=(sx, sy, sx), rot=(0, spin, 0))


EYE_BASE = {o.name: tuple(o.scale) for o in EYES + CATCHES}


def blink(f):
    for o in EYES + CATCHES:
        sx, sy, sz = EYE_BASE[o.name]
        closed = (sx * 1.05, sy, sz * 0.08) if o in EYES else (0.0, 0.0, 0.0)
        ko(o, f - 2, scale=(sx, sy, sz))
        ko(o, f, scale=closed)
        ko(o, f + 1, scale=closed)
        ko(o, f + 4, scale=(sx, sy, sz))


def mouth(f, amount):
    if SMILE_LINE is not None:
        sx, sz = 1 + 0.08 * amount, 1 + 0.9 * amount
        ko(SMILE_LINE, f, scale=(sx, 1, sz))
        ko(SMILE_CAV, f, scale=(sx, 1, sz) if amount > 0.02 else (0, 1, 0))
        return
    ko(MOUTH, f, scale=(0.075 - 0.01 * amount, 0.03, 0.001 + 0.065 * amount))
    ko(TONGUE_O, f, scale=(0.045, 0.02, 0.001 + 0.025 * amount))


# root bone local axes: X=world X, Y=world Z (up), Z=world -Y
# ------------------------------------------------------------------ 1. drop in
squash(1, 1.18, 5.0)
squash(13, 1.12, 0.0)
squash(16, 0.78)
squash(22, 1.06)
squash(28, 0.98)
squash(34, 1.0)
for sfx in 'LR':
    arm(sfx, 1, 2.4, bend=0.3)
    arm(sfx, 16, 0.7, bend=0.4)
    arm(sfx, 26, -0.05, bend=-0.1)
    arm(sfx, 34, 0.0)
ears(1, -0.25, 0.3)
ears(13, -0.1)
ears(17, 0.55, -0.2)
ears(23, -0.2, 0.1)
ears(29, 0.12)
ears(36, 0.0)
kp('head', 13, rot=(0, 0, 0))
kp('head', 17, rot=(0.15, 0, 0))
kp('head', 25, rot=(-0.05, 0, 0))
kp('head', 32, rot=(0, 0, 0))
mouth(1, 0.0)
mouth(14, 0.0)
mouth(17, 0.6)
mouth(26, 0.0)

# ------------------------------------------------------------------ 2. look around
kp('head', 40, rot=(0, 0, 0))
kp('head', 50, rot=(0.05, 0.42, -0.06))
kp('head', 62, rot=(0.05, 0.42, -0.06))
kp('head', 72, rot=(0.0, -0.38, 0.06))
kp('head', 82, rot=(0.0, -0.38, 0.06))
kp('head', 90, rot=(0, 0, 0))
blink(56)
blink(77)
kp('spine', 40, rot=(0, 0, 0))
kp('spine', 52, rot=(0, 0.1, 0))
kp('spine', 74, rot=(0, -0.08, 0))
kp('spine', 90, rot=(0, 0, 0))

# ------------------------------------------------------------------ 3. wave hello
arm('L', 90, 0.0)
arm('L', 100, 0.9, fwd=0.35, bend=0.6)
for i, f in enumerate(range(106, 146, 6)):
    arm('L', f, 0.9, fwd=0.35, bend=0.95 if i % 2 == 0 else 0.3)
arm('L', 150, 0.85, fwd=0.3, bend=0.6)
arm('L', 162, 0.0)
kp('head', 98, rot=(0.04, 0.1, -0.16))
kp('head', 148, rot=(0.04, 0.1, -0.16))
kp('head', 160, rot=(0, 0, 0))
kp('spine', 100, rot=(0, 0, -0.06))
kp('spine', 150, rot=(0, 0, -0.06))
kp('spine', 160, rot=(0, 0, 0))
ears(96, 0.0)
ears(104, 0.25)
ears(150, 0.25)
ears(160, 0.0)
mouth(100, 0.0)
mouth(104, 0.85)
mouth(112, 0.4)
mouth(116, 0.8)
mouth(124, 0.0)
blink(132)

# ------------------------------------------------------------------ 4. spin jump
squash(168, 1.0)
squash(178, 0.8, -0.02)
squash(186, 1.12, 0.6, 0.0)
squash(196, 1.0, 0.85, math.pi)
squash(206, 1.08, 0.0, 2 * math.pi)
squash(209, 0.8, 0.0, 2 * math.pi)
squash(216, 1.05, 0.0, 2 * math.pi)
squash(224, 1.0, 0.0, 2 * math.pi)
for sfx in 'LR':
    arm(sfx, 168, 0.0)
    arm(sfx, 178, 0.35, fwd=-0.6, bend=0.2)
    arm(sfx, 188, 1.75, fwd=0.3, bend=0.45)
    arm(sfx, 204, 1.6, fwd=0.25, bend=0.5)
    arm(sfx, 212, 0.6, bend=0.3)
    arm(sfx, 224, 0.0)
    kp(f'thigh.{sfx}', 178, rot=(0, 0, 0))
    kp(f'thigh.{sfx}', 192, rot=(-0.45 if sfx == 'L' else 0.25, 0, 0))
    kp(f'thigh.{sfx}', 204, rot=(0, 0, 0))
ears(178, -0.15, 0.2)
ears(188, -0.3, 0.35)
ears(198, 0.45, -0.2)
ears(210, 0.65, -0.35)
ears(217, -0.15, 0.15)
ears(226, 0.06)
ears(232, 0.0)
kp('head', 178, rot=(0.12, 0, 0))
kp('head', 190, rot=(-0.1, 0, 0))
kp('head', 209, rot=(0.18, 0, 0))
kp('head', 220, rot=(0, 0, 0))
mouth(186, 0.0)
mouth(192, 1.0)
mouth(212, 1.0)
mouth(222, 0.0)

# ------------------------------------------------------------------ 5. talk + gesture
pattern = [0.7, 0.2, 0.9, 0.0, 0.6, 0.3, 0.8, 0.1, 0.5, 0.0, 0.8, 0.2, 0.7, 0.0, 0.9, 0.3, 0.6, 0.0]
for i, a in enumerate(pattern):
    mouth(232 + i * 4, a)
mouth(232 + len(pattern) * 4, 0.0)
arm('R', 228, 0.0)
arm('R', 240, 0.55, fwd=0.9, bend=0.1, bend_fwd=0.9)
arm('R', 256, 0.75, fwd=0.7, bend=0.2, bend_fwd=1.1)
arm('R', 272, 0.45, fwd=1.0, bend=0.0, bend_fwd=0.7)
arm('R', 290, 0.0)
kp('head', 228, rot=(0, 0, 0))
kp('head', 240, rot=(0.08, -0.12, 0.08))
kp('head', 252, rot=(-0.04, -0.06, 0.02))
kp('head', 264, rot=(0.1, 0.1, -0.06))
kp('head', 280, rot=(0.0, 0.05, 0.0))
kp('spine', 228, rot=(0, 0, 0))
kp('spine', 248, rot=(0.04, -0.08, 0.03))
kp('spine', 276, rot=(0.0, 0.05, -0.02))
kp('spine', 292, rot=(0, 0, 0))
blink(250)
blink(283)

# ------------------------------------------------------------------ 6. present (point to side)
arm('L', 290, 0.0)
arm('L', 302, 1.45, fwd=0.15, bend=-0.15)
arm('L', 326, 1.5, fwd=0.15, bend=-0.1)
arm('L', 336, 1.6, fwd=0.3, bend=0.45)
kp('head', 292, rot=(0, 0, 0))
kp('head', 304, rot=(0.03, 0.42, -0.08))
kp('head', 324, rot=(0.03, 0.42, -0.08))
kp('head', 334, rot=(0, 0.05, 0))
ears(300, 0.0)
ears(306, -0.2, 0.1)
ears(312, 0.1)

# ------------------------------------------------------------------ 7. happy finale
arm('R', 322, 0.0)
arm('R', 336, 1.6, fwd=0.3, bend=0.45)
for sfx in 'LR':
    arm(sfx, 360, 1.65, fwd=0.3, bend=0.5)
squash(326, 1.0, 0.0, 2 * math.pi)
squash(332, 0.86, 0.0, 2 * math.pi)
squash(340, 1.06, 0.22, 2 * math.pi)
squash(347, 0.92, 0.0, 2 * math.pi)
squash(354, 1.0, 0.0, 2 * math.pi)
mouth(330, 0.0)
mouth(338, 1.0)
mouth(360, 0.9)
ears(332, -0.15)
ears(340, 0.4)
ears(348, -0.1)
ears(356, 0.15)
blink(350)

# ------------------------------------------------------------------ procedural secondary motion


def fcurves(id_):
    ad = id_.animation_data
    try:
        return ad.action.fcurves
    except AttributeError:
        from bpy_extras import anim_utils
        return anim_utils.action_get_channelbag_for_slot(ad.action, ad.action_slot).fcurves


kp('spine', 1, scale=(1, 1, 1))
for fc in fcurves(RIG):
    if fc.data_path == 'pose.bones["spine"].scale' and fc.array_index in (0, 1):
        g = fc.modifiers.new('FNGENERATOR')
        g.function_type = 'SIN'
        g.amplitude = 0.012 if fc.array_index == 1 else -0.006
        g.phase_multiplier = 2 * math.pi / 54
        g.use_additive = True
    if fc.data_path.startswith('pose.bones["ear.') and fc.data_path.endswith('rotation_euler') and fc.array_index == 2:
        n = fc.modifiers.new('NOISE')
        n.strength, n.scale = 0.08, 18
        n.phase = 3 if 'ear.L' in fc.data_path else 11

for o, i in DECO:
    o.rotation_mode = 'XYZ'
    base = tuple(o.rotation_euler)
    ko(o, 1, rotation_euler=base, location=o.location.copy())
    ko(o, END, rotation_euler=(base[0] + 1.2 + i * 0.2, base[1] + 0.8, base[2] + 1.5 - i * 0.1),
       location=o.location + Vector((0, 0, 0.35 if i % 2 else -0.3)))
    for fc in fcurves(o):
        for kf in fc.keyframe_points:
            kf.interpolation = 'LINEAR'

ko(CAM, 1, location=Vector((0.9, -13.2, 2.5)))
ko(CAM, END, location=Vector((-0.6, -11.8, 2.25)))
for fc in fcurves(CAM):
    for kf in fc.keyframe_points:
        kf.interpolation = 'SINE'
        kf.easing = 'EASE_IN_OUT'

if '--closeup' in ARGS:
    CAM.animation_data_clear()
    CAM.location = (0.25, -6.5, 2.1)
    LOOK.location = (0, 0, 1.98)
    FOCUS.location = (0, -0.55, 1.98)

# =================================================================== render
r = scene.render
r.resolution_x = int(arg('--width', 1080))
r.resolution_y = int(arg('--height', 1920))
r.resolution_percentage = int(arg('--pct', 100))
engine = arg('--engine', 'eevee')
if engine == 'cycles':
    r.engine = 'CYCLES'
    prefs = bpy.context.preferences.addons['cycles'].preferences
    prefs.compute_device_type = 'OPTIX'
    prefs.get_devices()
    for d in prefs.devices:
        d.use = d.type == 'OPTIX'
    scene.cycles.device = 'GPU'
    scene.cycles.samples = int(arg('--samples', 128))
    scene.cycles.use_denoising = True
    scene.cycles.denoiser = 'OPTIX'
    scene.cycles.use_adaptive_sampling = True
    scene.cycles.max_bounces = 8
else:
    r.engine = 'BLENDER_EEVEE'
    ee = scene.eevee
    ee.taa_render_samples = int(arg('--samples', 64))
    if hasattr(ee, 'use_raytracing'):
        ee.use_raytracing = True
    if hasattr(ee, 'ray_tracing_options'):
        ee.ray_tracing_options.resolution_scale = '1'
    if hasattr(ee, 'use_fast_gi'):
        ee.use_fast_gi = True
_vt = [i.identifier for i in scene.view_settings.bl_rna.properties['view_transform'].enum_items]
scene.view_settings.view_transform = 'Khronos PBR Neutral' if 'Khronos PBR Neutral' in _vt else 'Standard'
scene.view_settings.exposure = float(arg('--exposure', 0.0))
r.image_settings.file_format = 'PNG'

if '--save' in ARGS:
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, 'bizdavar-mascot-v2.blend'))

if arg('--still'):
    scene.frame_set(int(arg('--still')))
    r.filepath = os.path.join(OUT, arg('--name', f'still-{arg("--still")}.png'))
    bpy.ops.render.render(write_still=True)
elif '--anim' in ARGS:
    a, b = (int(v) for v in arg('--frames', f'1-{END}').split('-'))
    scene.frame_start, scene.frame_end = a, b
    r.filepath = os.path.join(OUT, arg('--dir', 'frames'), 'f_')
    bpy.ops.render.render(animation=True)
