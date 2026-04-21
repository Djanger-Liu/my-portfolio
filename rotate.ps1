Add-Type -AssemblyName System.Drawing

$img1 = [System.Drawing.Image]::FromFile("$PSScriptRoot\2014-互联网+国赛获奖证书1.jpg")
$img1.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
$img1.Save("$PSScriptRoot\2014-互联网+国赛获奖证书1.jpg")
$img1.Dispose()

$img2 = [System.Drawing.Image]::FromFile("$PSScriptRoot\2015-全国大学生电子设计大赛湖北赛区贰等奖-获奖证书.jpg")
$img2.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
$img2.Save("$PSScriptRoot\2015-全国大学生电子设计大赛湖北赛区贰等奖-获奖证书.jpg")
$img2.Dispose()

Write-Host "Images rotated successfully"
