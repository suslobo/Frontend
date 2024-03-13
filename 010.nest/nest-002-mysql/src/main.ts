import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // instalar Open API: npm install @nestjs/swagger
  const config = new DocumentBuilder().setTitle("BACKEND NEST").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // acceso a Open Api: http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
