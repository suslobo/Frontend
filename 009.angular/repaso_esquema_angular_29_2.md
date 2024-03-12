
## REPASO FRONTEND ESQUEMA CON ANGULAR

1. crear proyecto 
    
    ng new nombredelproyecto --skip-git --style=css --routing=true --ssr=fals

2. instalar bootstrap y bootstrap icons o instalar Angular Material

    ng add @ng-bootstrap/ng-bootstrap
    npm i bootstrap-icons

    (En angular.json hay que agregar el bootstrap-icons.min.css a styles:

    "styles": [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/bootstrap-icons/font/bootstrap-icons.min.css", "src/styles.css"],)

3. creación de componentes del layaout de la web: (lo estático) los proyectos tipicos en todos los proyectos

    * ng g c navbar
    * ng g c footer
    * ng g c not-found
    * ng g c home
    * ng g c login
    * ng g c register
    * ng g c user-list
    * ng g c user-detail
    * ng g c user form

4. crear los modelos del proyecto en la carpeta interfaces:

    * Book
    * Author
    * Category
    * Editorial
    * Booking
    * User
    * Login
    * Register

5. creación de componentes específicos del proyecto, ejemplo: Book, Author, Editorial, Category, Booking (interfaces)

    * ng g c book-list
    * ng g c book-detail
    * ng g c book-form

    * ng g c author-list
    * ng g c author-detail
    * ng g c author-form
    
    * ng g c category-list
    * ng g c category-detail
    * ng g c category-form

    * ng g c editorial-list
    * ng g c editorial-detail
    * ng g c editorial-form
    
    * ng g c booking-list
    * ng g c booking-detail
    * ng g c booking-form

6. enrutado:

    * app.router.ts
    * app.component.html --> poner el router outlet
    * navbar.component.html --> poner los routerLink para poder navegar
    * en todos lo -list.component.html --> en todos los listado también pones los routerLink pra navegar a detail y form

7. desarrollar uno por uno los componentes

    * utilizar los activedRoute para los detail y pantallas form que lo necesiten
    * utilizar HttClient para lanzar peticiones al backend
    * utilizar Router para navegar desde TypeScript desde un componente a otro cuando se termnia una acción
    * HTML con directivas @for y @if
    * utilizar componentes de NgBootstrap y código de los ejemplos de Bootstrap

8. autenticación y autorización:

    * HTTP Interceptor
    * Guard
    * crear un AuthService

## ESQUEMA BACKEN NESTJS TYPESCRIPT

1. crear un proyecto nestjs

2. configurar conexión a MySQL 

3. crear modelos:

    * Book
    * Author
    * Category
    * Editorial
    * Booking
    * User

4. crear repositorios: (CRUD con MySQL) findAll, findById, findByCategoryId, save, delete

    * BookRepository
    * AuthorRepository
    * CategoryRepository
    * EditorialRepository
    * BookingRepository
    * UserRepository

5. crear controladores: (CRUD con HTTP: GET, POST, PUT, DELETE) recibel peticiones HTTP de Angular

    * BookController
    * AuthorController
    * CategoryController
    * EditorialController
    * BookingController
    * UserController
    * Testearlos con POSTMAN y OPENAPI

6. autenticación y autorización: para identificar el usuario y poder mostrar sus datos y evaluar sus permisos

    * AuthController: login y register
    

