import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Book } from './book.model';

@Controller('book')
export class BookController {

    // crear métodos CRUD con @Get, @Post, @Put, @Delete

    @Get()
    findAll(): Book[] {
        
        // crear un array de 3 books y devolverlo con return DEVOLVER UNA ARRAY
        let book1: Book = {
            id: 1,
            title: 'Book1',
            price: 19.99
        }
        let book2: Book = {
            id: 1,
            title: 'Book2',
            price: 19.99
        }
        let book3: Book = {
            id: 1,
            title: 'Book3',
            price: 19.99
        }
        
        // devolver una array
        return[book1, book2, book3]
    }
    // findById clave primaria


    // GET PARA PEDIR EL OBJETO
    // http://localhost:3000/book/4

    @Get(':id') // :id es una variable, es un parámetro en la url
    findById(@Param('id', ParseIntPipe) id: number) { // para convertilo en número entero
        console.log(id);
        let bookDemo: Book = { // creamos un objeto (libro) de forma fictia porque no tenemos una base de datos
            id: id,
            title: 'book',
            price: 20.0
        }
        return bookDemo;
    }

    // POST crea un nuevo objeto que no  existía antes
    // SE USA PARA CREAR NUEVOS LIBROS EN BASE DE DATOS
    // http://localhost:3000/book enviando un objeto en Body

    @Post() 
    create(@Body() book: Book){
        // guardamos el book en base de datos pero como no tenemos lo imprimimos por consola
        console.log(book);
        return book;
    }

    // PUT SE UTILIZA PARA ACTUALIZAR UN LIBRO EXISTENTE EN UNA BASE DE DATOS
    // http://localhost:3000/book/3
    // ParseIntPipe lo convierte de string a number
    // POST crea un nuevo objeto que no  existía antes
    // PUT ACTUALIZACIÓN COMPLETA DE UN OBJETO


    // PUT ACTUALIZACIÓN COMPLETA DE UN OBJETO

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() book: Book) {

            console.log(id);
            console.log(book);

            // buscar y actualizar book en base de datos
            return book;
    }

    // PATCH para actualización parcial solo de algunos atributos de un objeto de forma variable

    // DELETE SE USA PARA BORRAR

    @Delete(':id')
    @HttpCode(204) // por defecto devuelva status 204 no content
    deleteById(
        @Param('id', ParseIntPipe) id: number,
    ) {

        console.log(id);
        // comprobar si existe el libro
        // borrarlo si existe

       // throw new NotFoundException('Libro no encontrado');
       // throw new ConflictException('no se puede borrar libro porque tiene elementos asociados')

    }
}
