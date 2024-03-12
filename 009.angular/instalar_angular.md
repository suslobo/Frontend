## para desinstalar Angular porque sale nuevas todos los meses
npm unisstall -g @angular/cli
## intalar Angular

npm insttall -g @angular/cli
O bien instalar la una version concreta: npm install -g @angular/cli@17.2.0

hay que comprobar que Angular está instlado

ng version

listado de comandos ng --help

## crear proyecto Angular

ng new --help

ng new angular-001-holamundo  --skip-git --style=css --routing=false --ssr=false


## para ejecutar proyecto Angular (tienes que estar en la carpeta del proyecto)
ng serve

## extensiones de angular
Angular Language Service
Angular Schematics

## parar angular
en la misma consola que hemos ejecutado ng serve
si queremos para la aplicacion ejecutamos:
Ctrl C
o cerrar la terminal en el icono de la papelera

## estructura para crear un proyecto en ANGULAR
* src: carpeta con el codigo fuente html ts css
    * app.component.ts: Clase TypeScript que crea el componente principal
    * app.component.css: archivo para estilos CSS
    * app.component.html: Código HTML del componte
    * app.component.spc.ts: archivo de testing (de momnento no lo vemos)

## crear proyecto para componente
ng new angular-002-componetes  --skip-git --style=css --routing=false --ssr=false
cd. 
ng generate --help

ng generate component productos


## PASOS PARA MAC SE PONE DELANTE SUDO NG...

1. se crea un proyecto de angular: angular-002-componentes
2. se crea un nuevo componente: productos
3. vaciar el app.component.html y escribimos en un h1 hola mundo
4. para que se muestre el componente productos por pantalla hay que 
escribir <app-productos></app-productos> en el archivo app.component.html
5. dará un error y pulsamos quick fix para que haga un import
6. ng serve
7. abrir localhost:4200

## ESTRUCTURA HTML
* index.html
* app.component.html
* app.productos.html

## CREAR COMPONENTE CLIENTES
ng generate component clientes
