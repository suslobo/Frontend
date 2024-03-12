## repaso servicios de ANGULAR

1. Crear servicio: ng generate service
2. Inyectar servicio en componente: en el constructor

### HTTP CLIENT
Objeto proporcionado por Angular con métodos para realizar peticiones HTTP,
enviar y recibir información del exterior

METODOS HTTP:

los métodos HTTP proporcionan soporte para las operaciones CRUD:

    * GET: obtener información: productos (array), producto (objeto)
    
    * POST: enviar infromación: enviar un objeto producto a un backend, 
      esto se utiliza para CREAR un producto en el BACKEND
    
    * PUT: enviar información: enviar un objeto producto a un backend, 
      este se utiliza para ACTUALIZAR un producto existente en el backend. Equivale a UPDATE de SQL
    
    * DELETE: solicita borrar información, indica al backend que borre el producto o lo que sea por su id o clave primaria

### OBJETIVO SERVICIOS

Los servicios pueden ser inyectados en los componentes, por lo tanto sirven para utilizar métodos entre diferentes componentes


## JSON SERVER
backend ficticio a partir de un archivo json

https://www.npmjs.com/package/json-server

1. instalar json server

npm install -g json-server

2. crear archivo db.json con datos demo dentro

db.json

3. ejecutar backend json server

json-server --watch db.json
    
## CREAR NUEVO PROYECTO DE ANGULAR 
ng new angular--007-jsonserver --skip-git --style=css --routing=true --ssr=false
Arrancar angular (terminal 1)
Arrancar backend json server (terminal 2)
json-server --watch db.json

## EJERCICIO CASA
crear un servicio en Angular llamado BookService y dentro crear métodos CRUD para el API REST de books de JSON SERVER:

* findAll --> GET localhost:3000/books
* findById --> GET localhost:3000/books/id
* findByPrice --> GET localhost:3000/books
* create --> POST localhost:3000/books
* update --> PUT localhost:3000/books/id
* deleteById --> DELETE localhost:3000/books/id

1. Crear interfaces: Book, Author, Category

2. Crer servicio: ng generate service book

3. Crear componentes Componentes: book-list
