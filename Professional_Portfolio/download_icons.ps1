$baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"
$icons = @{
    "react" = "react/react-original.svg"
    "nextjs" = "nextjs/nextjs-original.svg"
    "tailwindcss" = "tailwindcss/tailwindcss-original.svg"
    "nodejs" = "nodejs/nodejs-original.svg"
    "typescript" = "typescript/typescript-original.svg"
    "docker" = "docker/docker-original.svg"
    "supabase" = "supabase/supabase-original.svg"
    "framer" = "framermotion/framermotion-original.svg"
}

New-Item -ItemType Directory -Force -Path "public/tech"

foreach ($key in $icons.Keys) {
    $url = "$baseUrl/$($icons[$key])"
    $output = "public/tech/$key.svg"
    Write-Host "Downloading $key from $url..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -ErrorAction Stop
        Write-Host "Success."
    } catch {
        Write-Host "Failed to download $key (DevIcon). Trying SimpleIcons fallback..."
        # Fallback Map for SimpleIcons
        $simpleIconName = $key
        if ($key -eq "nextjs") { $simpleIconName = "nextdotjs" }
        if ($key -eq "nodejs") { $simpleIconName = "nodedotjs" }
        
        $fallbackUrl = "https://cdn.simpleicons.org/$simpleIconName"
        try {
             Invoke-WebRequest -Uri $fallbackUrl -OutFile $output -ErrorAction Stop
             Write-Host "Success (Fallback)."
        } catch {
             Write-Host "Failed fallback for $key."
        }
    }
}
