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
* crear componentes: home, navbar, footer, book-list, book-detail, book-form
* enrutado app.routes.ts
* desarrollar los componentes:
    * book-list conectado a backend nestjs
    * book-detail conectado a backend nestjs
    * book-form conectado a backend nestjs