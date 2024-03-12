## COMANDOS TERMINAL
Este es el orden
cd
ls
mkdir
touch
cat
pwd
rm -rf carpeta
nano


## ABRIR TERMINAL DESDE VISUAL STUDIO CODE
Desde VSC en menú superior Terminal y pulsamos New Terminal
Otra opción en windows escribir cmd en el buscador y abrir la cmd
Otra opción es abrir Git Bash

## COMANDOS TÍPICOS
* pwd (es la ruta donde estás) mmostrar el directorioen el que estamos en esa terminal
    (/c/Users/suslo/OneDrive/Escritorio/CURSO FRONTEND/ANGULAR)
* ls muestra lo que hay en el directorio actual
* ls -lhrt (lo que hya en el directorio pero con mas detalle)
* ll muestra lo que hay en el directorio pero con mas detalle todavía
  nos basta con ls
* cd nombrecarpeta esto te deja entrar en una carpeta
* cd .. Sube a la carpeta superior

        -------------------------------------------------
* mkdir nombredirectorio crea un directorio en la carpeta donde estamos ubicados
* mkdir -p nombredirectorio/nombredirectorio2
* touch nombrearchivo para crear un archivo en el directorio actual
* echo "Hola mundo" >> nombrearchivo.txt
BORRAR
* rm -rf ejemplo
        -------------------------------------------------

NoTA: si pulamos tab mientras escribimos nos ayuda a autocompletar
NOTA control+c se usa para romper un proceso en ejecución. Interrumpe un comando ejecutado previamente

## COMANDOS ESPECÍFICOS DE ANGULAR
## 1 CREAR PROYECTO NUEVO
  * ng new nombreproyecto --skip-git --style=css --routing=false --ssr=false: esto genera un proyecto y ejecuta npm init automático para descargar dependencias. 
  npm init crea node_modules
## 2 PARA ENTRAR AL PROTECTO DE ANGULAR CREADO. PUEDES ABRIR LA TERMNINAL CON BOTÓN DERECHO ENCIMA DE LA CARPETA DEL PROYECTO
  * ls
  * cd nombreproyecto
## PARA CREAR UN COMPONENTE NUEVO
  * ng generate component nombrecomponente o ng g c ynombredelcomponente
## PARA UN SERVICIO AUXILIAR
  * ng generate service nombreservicio
## PARA EJECUTAR EL PROYECTO, INICIA ANGULAR
  * ng serve

CLONAR UN PROYECTO DE ANGULAR
* git clone urlproyectogithub
* npm init para instalar las dependencias




