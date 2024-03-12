## configuración base de datos

app.module.ts:
    * TypeOrmModule.forRoot()
    * TypeOrmModule.forFeature()

## controlador con repositorio

en el constructor inyectar Repository

en los metodos del controlador se llama al repositorio

el repositorio realiza operaciones CRUD contra la base de datos

## pasos para el backend

NOTA: modelo, interfaz, entidad, clase de datos, serian lo mismo en este contesto

1. crear un proyecto nest e instalar dependencias
2. configurar mysql en app.module.ts
3. Crear un model.ts por cada interfaz de angular
    * book.model.ts con decoradores: @Entity, @PrimaryGenerateColum, @Colum
    * author.model.ts
    * category.model.ts
    * editorial.model.ts
4. Crear un controlador por cada entidad:
    * book.controller.ts con operaciones CRUD
    * author.controller.ts
    * category.controller.ts
    * editorial.controller.ts

5. Pruebas con POSTMAN y verificar que los controladores funcionan
6. Pruebas con MySQL WorkBench y verificar que se crean tablas y se hace el CRUD

## PASOS

1. Crear modelo: author.model.ts
2. configurar modelo: app.module.ts (en imports poner Author)
3. nest generate controller Author (el AuthorController te lo importa en el app.module.ts, en controllers)

