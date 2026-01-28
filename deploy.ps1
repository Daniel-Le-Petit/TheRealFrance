# Script de déploiement pour projets React / Node.js
param(
    [string]$message = "Initial commit"
)

# Chemins corrects pour Windows
$gitPath = 'C:\Program Files\Git\cmd'
$ghExe   = 'C:\Program Files\GitHub CLI\gh.exe'

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

    "`n== Vérification du dépôt local ==" | Out-File $logFile -Append
    if (-not (Test-Path ".git")) {
        git init | Out-File $logFile -Append
    }

    # Crée la branche main si nécessaire
    git branch -M main 2>$null | Out-File $logFile -Append

    # Ajouter tous les fichiers
    git add . | Out-File $logFile -Append

    # Commit initial si aucun commit n'existe
    if (-not (git rev-parse HEAD 2>$null)) {
        git commit -m "$message" | Out-File $logFile -Append
    }

    # Récupération des infos GitHub
    $repoName = Split-Path -Leaf (Get-Location)
    $githubUser = & $ghExe api user -q .login

    # Vérification / création du remote
    $remoteExists = git remote | Select-String "origin"
    if (-not $remoteExists) {
        "`n== Création du repo GitHub public si inexistant ==" | Out-File $logFile -Append

        # Vérifie si le repo existe déjà sur GitHub
        & $ghExe repo view "$githubUser/$repoName" > $null 2>&1
        if ($LASTEXITCODE -ne 0) {
            # Crée le repo public sans push automatique
            & $ghExe repo create $repoName --public --source=. --remote=origin | Out-File $logFile -Append
        }

        # Supprime et recrée origin pour éviter les erreurs
        git remote remove origin 2>$null
        git remote add origin "https://github.com/$githubUser/$repoName.git"
    }

    "`n== Remote(s) ==" | Out-File $logFile -Append
    git remote -v | Out-File $logFile -Append

    "`n== Pull / fusion des dernières modifs sur GitHub ==" | Out-File $logFile -Append
    git pull origin main --allow-unrelated-histories --rebase | Out-File $logFile -Append

    "`n== Push vers GitHub ==" | Out-File $logFile -Append
    git push -u origin main | Out-File $logFile -Append

    "Script terminé avec succès." | Out-File $logFile -Append
}
catch {
    "Une erreur est survenue : $_" | Out-File $logFile -Append
}

Get-Content $logFile
