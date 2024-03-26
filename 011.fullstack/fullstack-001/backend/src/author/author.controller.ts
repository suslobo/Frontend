import { Body, ConflictException, Controller, Delete, Get, NotFoundException, Param, ParseFloatPipe, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Author } from './author.model';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('author')
export class AuthorController {

    constructor(
        @InjectRepository(Author) private authorRepo: Repository<Author>
    ) {}

    @Get()
    findAll() {
        return this.authorRepo.find();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.authorRepo.findOne({
            where: {
                id: id
            }
        });
    }
    // filtrar por nombre y apellido
    // http://localhost:3000/author/filter-full-name/alan/sastre
    @Get('filter-full-name/:firstname/:lastname')
    findByFirstNameAndLastName(@Param('firstname') firstname: string, 
    @Param('lastname') lastname: string) {
        return this.authorRepo.find({
            where: {
                firstName: firstname, 
                lastName: lastname
            }
        });
    }


    // filtrar por salario
    // http://localhost:3000/author/filter-by-salary/2000
    @Get('filter-by-salary/:salary')
    findBySalary(@Param('salary', ParseFloatPipe) salary: number){

        return this.authorRepo.find({
            where: {
            // coincidencia exacta
            // salary: salary
            salary: MoreThanOrEqual(salary) //filtrar por mayor o igual
            },
            // ordénamelo de más a menos
            order: {
                salary: "DESC" // descendente
            }
        });
    }

    // npm i -D @types/multer
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async create(@UploadedFile() file: Express.Multer.File, @Body() author: Author) {

        // si hay archivo, entonces guardaremos el archivo y obtendremos la url
        if (file) {

            // guardar el archivo y obtener la url
            author.photoUrl = file.filename;
        }

        console.log(author);
        
        return await this.authorRepo.save(author);

    }



/*
    @Get('filter-by-author/:author')
    findByAuthor(@Param('author') author: string) {
        return this.authorRepo.find({
            where: {
                author: author 
            }
        });
    }

    @Post()
    create(@Body() author: Author) {
        return this.authorRepo.save(author);
    }
    */
/*
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() author: Author
    ) {
        const exist = await this.authorRepo.existsBy({
            id: id
        });
        if(!exist) {
            throw new NotFoundException('Author not found');
        }
        return this.authorRepo.save(Author);
    }

    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        const exist = await this.authorRepo.existsBy({
            id: id
        })
        if(!exist) {
            throw new NotFoundException('Author not found')
        }
        try {
            this.authorRepo.delete(id);
        } catch(error) {
            throw new ConflictException('No se puede borrar el author')
        }
    }
*/
}
