## MANUFACTURER DETAIL CONECTANDO DESDE MANUFACTUERE LIST
1. ng generate component manufacturer-detail
2. enrutar el nuevo componente en app.routes
3. colocar un routerLink para llegar desde el manufacturer-list en el HTML
4. hacer el código del manufacturer-detail TS
5. hacer el código del mnaufacturer-detail HTML

## carousel de fotos de NGBOOTSTRAP

1. modificar la interfaz y agregar un array de fotos string
2. en db.json agregar varias fotos a cada manufcturer: estas fotos vienen de una base de datos- Son dinámicas

    * https://picsum.photos/id/944/900/500
    * https://picsum.photos/id/1011/900/500
    * https://picsum.photos/id/984/900/500

3. en mnaufacturer-detail.component.html utilizar el carousel de ngBootstrap con el atributo photos de manufacturer
    Utilizar el carousel de ngBootstrap con el atribnuto de photos de manufacturer

4. Actualizar product-form.component.ts para que traiga los manufacturer y categories del backend en lugar de cargar los datos estáticos

## NAVBAR dinámica de ngbootstrap

1. en el archivo navbar.component.ts agregar en el imports NgbDropdownModule
2. collapsed = true;

3. modificar el navbar.component.html copiyar y pegar la navbar de bootstrap y adpatarla con nuestro logo y botones y routerlink

## ACORDEON (para preguntas y respuestas)

https://ng-bootstrap.github.io/#/components/accordion/examples


## ALERTS
https://ng-bootstrap.github.io/#/components/alert/examples


## DATEPICKER PARA FORMULARIOS
Selector de fechas:
https://ng-bootstrap.github.io/#/components/datepicker/examples En el product-form.component.ts

product-form.component.ts y html

Revisar tema de formato de fecha y locale español

## COMPONENTES CATEGORY

* ng generate component category-list
* ng genarate component category-detail
* ng generate component category-form

Em category list se puede hacer lo siguiente:
    1. foto y nombre de categoría
    2. descripción categoría
    3. listado de productos filtrado por categoría

