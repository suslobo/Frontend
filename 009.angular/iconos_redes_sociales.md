## ICONOS DE REDES SOCIALES EN FOOTER

Hemos agragado un footer que tiene iconos de bootstrap para: 
* linkedin
* whatsapp
* tiktok

## HACER QUE APAREZCA EL MANUFACTURER Y CATEGORIES CARGADOS EN EL FORMULARIO ACTUALIZACIÓN

Hemos creado una función compareObjets en product-form.component.ts

Hemos utlizado esa función en los select de product-form.component.html utilizando:
[compareWith]="compareObjets"

## CARGAR TIPOGRAFÍAS PERSONALIZADAS
1. buscar una o dos tipografías, por ejemplo una para encabezados y otra para texto:
https://fonts.google.com/

2. importar las tipografías seleccionadas:
Agregar en el archivo index.html los links a las fuentes:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anta&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap" rel="stylesheet">

3. En el styles.css crear clases o estilos que utilicen la nueva fuente:
h1 {
    font-family: "Anta, sans-serif";
}

## MANUFACTURER LIST CON CARDS

1. ng generate component manufacturer-list

2. enrutar el nuevo componente en app.routes

Traer listado de manufacturers con httpClient

buscar un ejemplo de grid de cards de bootstrap para esta pantalla
https:// getbootstrap.com/docs/5.3/examples/album/

en navbar agregar un routerLing a manufacturers


## ROUTERLINKACTIVE para poner foco en elementos de la navbar cambiando su CSS

1. importar RouterLinkActive en TS
2. Usar RouterLinkActive en HTML

## MANUFACTURER DETAIL CONECTANDO DESDE MANUFACTUERE LIST
1. ng generate component manufacturer-detail
2. enrutar el nuevo componente en app.routes

## MENÚ CON DROPSOWNS

## PONER BOTONES A LA DERECHA EN NAVBAR

## EN UN DETAIL MOSTRAR CARRUSEL O AGRUPACIÓN DE IMÁGENES, UNA GRANDE Y OTRAS PEQUEÑAS
