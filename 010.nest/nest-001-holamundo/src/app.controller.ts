import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
El Controller hace que esta clase pueda recibir peticiones HTTP
como por ejemplo las creadas por HttpClient en Angular

Angular (httpClient) --> Controller en NestJS
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


/*
metodo
*/
  @Get()
  getHello(): string {
    return "hola mundo soy un Controlador de Nest"; // retur this.appService.getHello();
  }

  @Get('prueba')
  prueba(): string {
    return "Pruebas desde NestJS";
  }

  // ahora para devolver un objeto

  @Get('product')
  findProduct(): any {
    return {
      id: 1,
      title: 'producto 1'
    };
  }
}
