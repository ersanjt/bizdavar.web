from PIL import Image

src = r'assets/images/products/biztab/biztab-nasrnews-press.png'
out_dir = r'assets/images/products/biztab'

im = Image.open(src)
w, h = im.size

studio = (int(w * 0.22), int(h * 0.12), int(w * 0.78), int(h * 0.36))
wall = (int(w * 0.22), int(h * 0.36), int(w * 0.78), int(h * 0.56))
installed = (int(w * 0.08), int(h * 0.56), int(w * 0.92), int(h * 0.88))

im.crop(studio).save(f'{out_dir}/biztab-hero.jpg', quality=92)
im.crop(studio).save(f'{out_dir}/biztab-front.jpg', quality=92)
im.crop(wall).save(f'{out_dir}/biztab-side.jpg', quality=92)
im.crop(installed).save(f'{out_dir}/biztab-installed.jpg', quality=92)
im.save(f'{out_dir}/biztab-press.jpg', quality=92)

print('done', im.size)
