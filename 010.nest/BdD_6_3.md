## POSTMAN

* GET - findAll, findById, findBy...
* POST - Crear create
* PUT - Actualizar update
* DELETE - Borrar deleteById, deleteAll

Para POST y PUT hay que enviar datos en el body de la petición (Body-raw-JSON)


## NESTJS

Backend sobre nodejs

* Cotroladores: book.controller.ts Son clases que reciben peticiones HTTP
    * @Get, @Post, @Put, @Delete (son métodos)

* Modelos/Entidades: book.model.ts Es crear tablas en base de datos con la misma estructura que la clase: 
    * Configurar la conexisón a MySQL
    * @Entity, @PrimaryGeneratedColumn

* Repository: esto proporciona métodos CRUD conectados a base de datos

## REPASO DE CONTROLADORES

nest generate controller Category

category.model.ts

category.controller.ts crear los métodos CRUD

nest start --watch arrancar el postman


## nuevo proyecto: Pasos

nest new nest-002-mysql --skip-git --package-manager npm

cd nest-002-mysql

npm install --save @nestjs/typeorm typeorm mysql2

añadir la configuración de MySQL en app.module.ts

crear base de datos en MySQL Workbench
 
book.model.ts (creamos una carpeta y dentro este archivo)

nest generate controller Book

inyectar Repository en el BookController