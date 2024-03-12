1. crear archivo .gitignore a nivel de todo el repositorio git

Si al empezar el pryecto se te ha olvidado poner el .gitignore hay que hacer esto
No lo eliminara pero lo ignorará. Se pondrá en gris
1.  eliminar ya cacheados por git:
    git rm -r --cached noce_modules
    git rm -r --cached .angular
    git rm -r --cached .vscode

2. hacer commit y push