* creado la entidad Reserva
* creado controlador ReservationController
* filtros dinámicos con Query Params
* POST para crear reservas y libros desde POSTMAN
* instalar Open Api, sería como un postman dentro de la propia app backend
    npm install @nestjs/swagger

        y poner esto en main.ts
        // instalar Open API: npm install @nestjs/swagger
        const config = new DocumentBuilder().setTitle("BACKEND NEST").build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
        // acceso a Open Api: http://localhost:3000/api

