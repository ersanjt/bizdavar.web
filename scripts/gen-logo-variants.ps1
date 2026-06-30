Add-Type -AssemblyName System.Drawing

$brandDir = Join-Path $PSScriptRoot '..\assets\images\brand' | Resolve-Path
$onDark = Join-Path $brandDir 'bizdavar-logo-on-dark.png'
$lightOut = Join-Path $brandDir 'bizdavar-logo-light.png'

$src = [System.Drawing.Bitmap]::FromFile($onDark)
$out = New-Object System.Drawing.Bitmap $src.Width, $src.Height

for ($x = 0; $x -lt $src.Width; $x++) {
  for ($y = 0; $y -lt $src.Height; $y++) {
    $c = $src.GetPixel($x, $y)
    if ($c.R -le 28 -and $c.G -le 28 -and $c.B -le 28) {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    } else {
      $out.SetPixel($x, $y, $c)
    }
  }
}

$out.Save($lightOut, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$out.Dispose()
Write-Output "Generated bizdavar-logo-light.png (transparent, for dark backgrounds)"
