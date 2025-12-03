# Download Ireland University Logos
$ErrorActionPreference = "Continue"

# Change to universities directory
Set-Location "public\universities"

# Logo URLs
$logos = @{
    "university-of-limerick.png" = "https://www.kindpng.com/picc/m/160-1604780_university-of-limerick-logo-hd-png-download.png"
    "technological-university-dublin.png" = "https://www.pngplay.com/wp-content/uploads/13/Technological-University-Dublin-Logo-PNG-Clipart-Background.png"
    "university-college-dublin.png" = "https://www.pngall.com/wp-content/uploads/13/University-College-Dublin-Logo-PNG-Image.png"
}

Write-Host "Downloading Ireland University Logos..." -ForegroundColor Cyan

foreach ($logo in $logos.GetEnumerator()) {
    $filename = $logo.Key
    $url = $logo.Value
    
    Write-Host "`nDownloading: $filename" -ForegroundColor Yellow
    
    try {
        $webClient = New-Object System.Net.WebClient
        $webClient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        $webClient.Headers.Add("Accept", "image/png,image/*,*/*")
        $webClient.Headers.Add("Referer", "https://www.google.com/")
        
        $webClient.DownloadFile($url, $filename)
        
        if (Test-Path $filename) {
            $size = (Get-Item $filename).Length
            Write-Host "✓ Success! Downloaded $filename ($size bytes)" -ForegroundColor Green
        } else {
            Write-Host "✗ Failed to download $filename" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "✗ Error downloading $filename : $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Start-Sleep -Milliseconds 500
}

Write-Host "`n=== Download Complete ===" -ForegroundColor Cyan
Write-Host "Check the files in: public\universities\" -ForegroundColor White

# List downloaded files
Get-ChildItem -Filter "*ireland*.png", "*limerick*.png", "*dublin*.png" | Select-Object Name, Length | Format-Table -AutoSize
