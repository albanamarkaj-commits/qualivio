$ErrorActionPreference = "Stop"

$envFile = Join-Path $PSScriptRoot "..\.env.local"
if (-not (Test-Path $envFile)) {
  Write-Error ".env.local not found at $envFile"
  exit 1
}

$vars = @{}
Get-Content $envFile | ForEach-Object {
  $line = $_.Trim()
  if (-not $line) { return }
  if ($line.StartsWith("#")) { return }
  $idx = $line.IndexOf("=")
  if ($idx -lt 1) { return }
  $name = $line.Substring(0, $idx).Trim()
  $value = $line.Substring($idx + 1)
  $vars[$name] = $value
}

$environments = @("production", "preview", "development")

foreach ($name in $vars.Keys) {
  foreach ($env in $environments) {
    Write-Host "Adding $name to $env..."
    # Use --force in case the var already exists
    $value = $vars[$name]
    & npx vercel env add $name $env --value=$value --force --yes 2>&1 | Out-String | Write-Host
  }
}

Write-Host ""
Write-Host "Done. Listing production env vars:"
& npx vercel env ls production 2>&1 | Out-String | Write-Host
