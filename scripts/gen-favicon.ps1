Add-Type -AssemblyName System.Drawing
$brandDir = Join-Path $PSScriptRoot '..\assets\images\brand' | Resolve-Path
$srcPath = Join-Path $brandDir 'bizdavar-logo-on-dark.png'
$src = [System.Drawing.Image]::FromFile($srcPath)

function Save-SquareIcon {
  param([int]$Size, [string]$OutPath, [System.Drawing.Color]$Bg)
  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.Clear($Bg)
  $scale = [Math]::Min($Size / $src.Width, $Size / $src.Height) * 0.88
  $w = [int]($src.Width * $scale)
  $h = [int]($src.Height * $scale)
  $x = [int](($Size - $w) / 2)
  $y = [int](($Size - $h) / 2)
  $g.DrawImage($src, $x, $y, $w, $h)
  $g.Dispose()
  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
}

$black = [System.Drawing.Color]::FromArgb(0, 0, 0)
Save-SquareIcon -Size 32 -OutPath (Join-Path $brandDir 'favicon.png') -Bg $black
Save-SquareIcon -Size 180 -OutPath (Join-Path $brandDir 'apple-touch-icon.png') -Bg $black
$src.Dispose()
Write-Output 'Generated favicon.png and apple-touch-icon.png from bizdavar-logo-on-dark.png'
