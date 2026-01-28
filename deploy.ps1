# Script de déploiement pour projets React / Node.js
param(
    [string]$message = "Initial commit"
)

# Chemins corrects pour Windows
$gitPath = "C:\Program Files\Git\cmd"
$ghExe   = "C:\Program Files\GitHub CLI\gh.exe"

# Ajout de Git au PATH (session courante)
if ($Env:PATH -notlike "*$gitPath*") {
    $Env:PATH += ";$gitPath"
}

$logFile = ".\git.log"
"=== Git script lancé à $(Get-Date) ===" | Out-File $logFile

try {
    # Vérification GitHub CLI
    if (-not (Test-Path $ghExe)) {
        throw "GitHub CLI introuvable : $ghExe"
    }

    # Vérification de l'authentification
    & $ghExe auth status > $null 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "GitHub CLI n'est pas connecté. Lancez `gh auth login` avant d'exécuter le script."
    }

    # Initialisation dépôt git local si inexistant
    if (-not (Test-Path ".git")) {
        "`n== Initialisation du dépôt Git local ==" | Out-File $logFile -Append
        git init | Out-File $logFile -Append
        git branch -M main | Out-File $logFile -Append
    }

    # Ajout de tous les fichiers et commit initial si nécessaire
    git add . | Out-File $logFile -Append
    if (-not (git rev-parse HEAD 2>$null)) {
        git commit -m "$message" | Out-File $logFile -Append
    }

    # Vérification / configuration du remote origin
    $remoteExists = git remote | Select-String "origin"

    $repoName = Split-Path -Leaf (Get-Location)
    $githubUser = & $ghExe api user -q .login

    if (-not $remoteExists) {
        "`n== Création du repo GitHub public si inexistant ==" | Out-File $logFile -Append

        # Vérifie si le repo existe déjà sur GitHub
        & $ghExe repo view "$githubUser/$repoName" > $null 2>&1
        if ($LASTEXITCODE -ne 0) {
            # Création du repo **public**, sans push automatique
            & $ghExe repo create $repoName --public --source=. --remote=origin | Out-File $logFile -Append
        }

        # Supprime et recrée origin pour éviter les erreurs
        git remote remove origin 2>$null
        git remote add origin "https://github.com/$githubUser/$repoName.git"
    }

    "`n== Remote(s) ==" | Out-File $logFile -Append
    git remote -v | Out-File $logFile -Append

    "`n== Statut du dépôt ==" | Out-File $logFile -Append
    git status | Out-File $logFile -Append

    "`n== Pull des dernières modifs ==" | Out-File $logFile -Append
    git pull origin main --rebase | Out-File $logFile -Append

    "`n== Push vers GitHub ==" | Out-File $logFile -Append
    git push -u origin main | Out-File $logFile -Append

    "Script terminé avec succès." | Out-File $logFile -Append
}
catch {
    "Une erreur est survenue : $_" | Out-File $logFile -Append
}

Get-Content $logFile
