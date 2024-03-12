
## ACTUALIZAR DESDE FOMULARIO

1. enrutado:
    * para crear un nuevo prodcuto: /products/create
    * para actualizar un producto: /products/:id/update 
2. capturar el id en product-form utilizando activateRoute
    * crear el ngOnInit 
    * obtener el id de la url
3. traer el producto del backend haciendo htppClient.get
4. cargar el producto en el formulario
5. en el método save condicional:
    * si no tiene id entonces crear con http POST
    * si sí tiene id entonces actualizar con http PUT

## CARGAR CON SELECTORES CON DATOS DEL BACKEND: manufacturer y categories 

TODO

## CREAR COMPONENTE NAVBAR - BARRA DE NAVEGACIÓN

ng generate component navbar

## MOSTRAR IMAGEN/LOGO EN LA NAVBAR

1. crear carpeta img dentro de la carpeta assets

2. colocar un logo o imagen, con extensión
    * .jpg
    * .png
    * .svg
    * .webp

## CREAR COMPONENTE FOOTER

1. ng generate component footer

2. desde app.component.html mostrar el footer

para poder agregar los iconos:
npm i bootstrap-icons
"styles":
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
    "src/style.css"

## CARGAR TIPOGRAFÍAS PERSONALIZADAS