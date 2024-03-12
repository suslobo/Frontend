import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.model';
import { Between, Repository } from 'typeorm';
import { get } from 'http';
import { identity } from 'rxjs';

@Controller('book')
export class BookController {

    // Crear constructor e inyectar Repository<Book> para acceso a base de datos
    constructor(

        @InjectRepository(Book) private bookRepository: Repository<Book>
    ) {}
    
    // findAll y utilizar this.bookRepository.find()
    @Get()
    findAll() {
        return this.bookRepository.find();
    }
    // para buscar por id
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number){
        return this.bookRepository.findOne({
            // relations: {
                // author: true // en la consulta le estás diciendo que quieres el author
            //},
            where: {
                id: id
            }
        });
    }
    // PARA TRAÉME TODAS LAS RESERVAS DE ESTE USUARIO, PARA TRAER TODOS LOS COMENTARIOS DE UN USUARIO
    // filtrar libros por autor
    // sirve para la pantalla de author-detail para mostrar los libros del author
    @Get('filter-by-author/:id')
    findByAuthorId(@Param('id', ParseIntPipe) id: number) {
        return this.bookRepository.find({
            where: {
                author: {
                    id: id
                } 
            }
        });
    }
    // filtrar por editorial
    @Get('filter-by-editorial/:id')
    findByEditorialId(@Param('id', ParseIntPipe) id: number) {
        return this.bookRepository.find({
            where: {
                eidtorial: {
                    id: id
                }
            }
        });
    }
            
    // flitrar por titulo
    @Get('filter-by-title/:title')
    findByTitle(@Param('title') title: string) {
        return this.bookRepository.find({
            where: {
                title: title // Coinicidencia exacta. Los títulos deben ser iguales
            }
        });
    }

    // filtro por boolean. Por ejemplo Libros activos published
    @Get('published/true')
    findByPublishedTrue() {
        return this.bookRepository.find({
            where: {
                published: true
            }
        });
    }

    // filtrar por precio
    @Get('filter-by-price/:min/:max')
    findByBetweenMinAndMax(
        @Param('min', ParseIntPipe) min: number,
        @Param('max', ParseIntPipe) max: number
    ) {
        return this.bookRepository.find({
            where: {
                price: Between(min, max)
            }
        });
    }

    // create sería con POST
    @Post()
    create(@Body() book: Book) {
        return this.bookRepository.save(book); // save nos sirve para guardar
    }

    // actualizar
    @Put(':id')
    // este método no devuelve un valor, devuelve una promesa
    async update( // async es para ejuctar await
        @Param('id', ParseIntPipe) id: number,
        @Body() book: Book
    ) {
        const exist = await this.bookRepository.existsBy({ // await espera a que termine el metodo existBy
            id: id // devuelve un booleano. Primero mira a ver si existe 
        });
        if(!exist) { // si el libro no existe lanza una excepcion de tipo not found
            throw new NotFoundException('Book not found');
        }
            return this.bookRepository.save(book); // si sí existe vamos a guardarlo
    }

    // borrar
    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        const exists = await this.bookRepository.existsBy({
            id: id
        })

        if(!exists) {
            throw new NotFoundException('Book not found')
        }
        
        try {
            this.bookRepository.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar');
        }
    }

}