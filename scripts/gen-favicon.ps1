Add-Type -AssemblyName System.Drawing

$brandDir = Join-Path $PSScriptRoot '..\assets\images\brand' | Resolve-Path
$srcPath = Join-Path $brandDir 'bizdavar-logo.png'
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

function Get-ContentBounds {
  param([System.Drawing.Bitmap]$Bmp, [int]$BgMin = 238)
  $minX = $Bmp.Width; $minY = $Bmp.Height; $maxX = 0; $maxY = 0
  for ($y = 0; $y -lt $Bmp.Height; $y++) {
    for ($x = 0; $x -lt $Bmp.Width; $x++) {
      $c = $Bmp.GetPixel($x, $y)
      $isBg = ($c.R -ge $BgMin -and $c.G -ge $BgMin -and $c.B -ge $BgMin)
      if (-not $isBg) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  if ($maxX -lt $minX) { return $null }
  return @{
    X = $minX
    Y = $minY
    W = ($maxX - $minX + 1)
    H = ($maxY - $minY + 1)
  }
}

function Save-SquareIcon {
  param(
    [System.Drawing.Bitmap]$Source,
    [hashtable]$Bounds,
    [int]$Size,
    [string]$OutPath,
    [System.Drawing.Color]$Bg,
    [double]$Fill = 0.9
  )
  $bmp = New-Object System.Drawing.Bitmap $Size, $Size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.Clear($Bg)

  $scale = [Math]::Min($Size / $Bounds.W, $Size / $Bounds.H) * $Fill
  $w = [int]($Bounds.W * $scale)
  $h = [int]($Bounds.H * $scale)
  $x = [int](($Size - $w) / 2)
  $y = [int](($Size - $h) / 2)
  $dest = New-Object System.Drawing.Rectangle $x, $y, $w, $h
  $srcRect = New-Object System.Drawing.Rectangle $Bounds.X, $Bounds.Y, $Bounds.W, $Bounds.H
  $g.DrawImage($Source, $dest, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
  return $bmp
}

$bounds = Get-ContentBounds -Bmp $src
if (-not $bounds) { throw 'Could not detect logo bounds in bizdavar-logo.png' }

$white = [System.Drawing.Color]::FromArgb(255, 255, 255)
$pad = [Math]::Max(8, [int]([Math]::Min($bounds.W, $bounds.H) * 0.04))
$bounds.X = [Math]::Max(0, $bounds.X - $pad)
$bounds.Y = [Math]::Max(0, $bounds.Y - $pad)
$bounds.W = [Math]::Min($src.Width - $bounds.X, $bounds.W + ($pad * 2))
$bounds.H = [Math]::Min($src.Height - $bounds.Y, $bounds.H + ($pad * 2))

Save-SquareIcon -Source $src -Bounds $bounds -Size 16 -OutPath (Join-Path $brandDir 'favicon-16.png') -Bg $white | ForEach-Object { $_.Dispose() }
$icon32 = Save-SquareIcon -Source $src -Bounds $bounds -Size 32 -OutPath (Join-Path $brandDir 'favicon.png') -Bg $white
Save-SquareIcon -Source $src -Bounds $bounds -Size 48 -OutPath (Join-Path $brandDir 'favicon-48.png') -Bg $white | ForEach-Object { $_.Dispose() }
Save-SquareIcon -Source $src -Bounds $bounds -Size 180 -OutPath (Join-Path $brandDir 'apple-touch-icon.png') -Bg $white | ForEach-Object { $_.Dispose() }
Save-SquareIcon -Source $src -Bounds $bounds -Size 192 -OutPath (Join-Path $brandDir 'favicon-192.png') -Bg $white | ForEach-Object { $_.Dispose() }

$ms = New-Object System.IO.MemoryStream
$icon32.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
$b64 = [Convert]::ToBase64String($ms.ToArray())
$ms.Dispose()
$icon32.Dispose()

$svgPath = Join-Path $brandDir 'favicon.svg'
@(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Bizdavar">'
  '  <rect width="32" height="32" fill="#fff"/>'
  "  <image width=""32"" height=""32"" href=""data:image/png;base64,$b64""/>"
  '</svg>'
) | Set-Content -Path $svgPath -Encoding UTF8

$src.Dispose()
Write-Output "Generated favicon.png, favicon.svg, apple-touch-icon.png (crop $($bounds.W)x$($bounds.H))"
