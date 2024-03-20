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



* [OK] Mostrar mensaje de borrado correctamente en book-list

* [OK] category detail mostrando libros
    * ng generate component category-detail
    * CategoryController findById

* Poder reservar un libro
    * [OK] Añadir botón reservar libro en book-list
    * [OK] ng generate component reservation-form
    *  [OK]Enrutar el componente
    * TS y HTML utilizando el ejemplo bootstrap "checkout"




* Añadir modal de confirmación antes de acciones


* Pantalla reserva de libro

* Mostrar libros filtrados por autor