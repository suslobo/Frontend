

# PROYECTOS

* Proyectos grupales: 4-5 personas
* Crear un proyecto con Angular / NestJS / MySQL de alguna de las temáticas debatidas en clase
* Repositorio GitHub


## Grupo 1: marketplace de aplicaciones (similar a itch.io)

* Vladimir
* Diego
* Diana
* Damaris Montilla

## Grupo 2: ecommerce, idealista

* Raquel
* Albora
* Luis
* Ana
* Mario

## Grupo 3:

* Alexandra
* Marian

## GRUPO 4:

* Emilia
* Jana
* Roland

## Grupo 5: alquiler casas rurales tipo booking, ecommerce de cupcakes

* Susana
* Almudena
* Gemma
* Beatriz
* Erika

## PENDIENTE PARA CADA GRUPO

* Asignar temática a cada grupo


## TEMÁTICAS

* Portal ofertas empleo
* Restaurantes y reservas
* Gestor de proyectos y tareas
* Ecommerce de productos
* Peluquería y reservas
* Fisioterapia y reservas
* Red social (versión escritorio responsive por ejemplo instagram web sin chat en tiempo real)

## REQUISITOS MÍNIMOS:

* 4-5 tablas: usuario, proyecto, tarea, categoría, etiqueta, comentario/valoracion/opinion
    * Las tablas se crean desde interfaces typeScript con backend NestJS

* Asociaciones entre los modelos, se hace en las interfaces de TypeScript.
    * One to One
    * Many To One
    * Many to Many

* 3 componentes por cada modelo/tabla, se deben poder hacer las operaciones CRUD:
    * Listado / Grid (mostrar varios elementos)
    * Detalle (mostrar un elemento principal)
    * Formulario

* Página web responsive, se debe ver bien en ordenador principalmente y en móvil.

### SUBIR PROYECTO A GITHUB*

* Crear carpeta angular_grupoX
* Dentro generar el fronted como ng new frontend...
* Dentro generar el backend

* angular_grupoX
    * fontend (angular)
    * backend (netjs)
    * README.md

una vez subido dentro de Github en Settings en Collaboratos agregar a los demás integrantes del equipo

## 1 CREAR PROYECTO NUEVO
ng new angular-006-servicios --skip-git --style=css --routing=true --ssr=false
cd angular-006-servicios
ng add @ng-bootstrap/ng-bootstrap
npm i bootstrap-icons
En angular.json hay que agregar el bootstrap-icons.min.css a styles:

"styles": [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/bootstrap-icons/font/bootstrap-icons.min.css", "src/styles.css" ],
