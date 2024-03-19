* crear carpeta fullstack-001
* crear backend:
    1. nest new backend --skip-git --package-manager npm
    2. cd backend
    3. npm install --save @nestjs/typeorm typeorm mysql2 @nestjs/swagger
* crear frontend:
    1. ng new frontend --skip-git --style=css --routing=true --ssr=false
    2. cd frontend
    3. ng add @ng-bootstrap/ng-bootstrap

## frontend
* crear interfaces con todos los model.ts
* crear componentes: home, navbar, footer, book-list, book-detail, book-form (ng generate component home, etc)
* enrutado app.routes.ts
* desarrollar los componentes: 
    * book-list conectado a backend nestjs
    * book-detail conectado a backend nestjs
    * book-form conectado a backend nestjs

* mostrar mensaje de borrado correctamente

* category detail mostrado libros (findById)
    * ng generate component category-detail
    * CategoryController findById

* poder reservar un libro
    * añadir boton reservar libro en book-list
    * ng generate component reservation-form
    * enrutar

    
* añadir modal de confirmación antes de acciones

* Añadir botón reservar libro en book-list

* Pantalla reserva de libro

* Mostrar libros filtrados por categoría

* Mostrar libros filtrados por autor 