import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Category } from "./categroy.model";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Controller('category')
export class CategoryController {

        // operaciones CRUD: findAll, findById, findBy..., create, update, delete
        // findAll (encontrar todo)
        @Get()
        findAll (): Category[] {
            return [
                {id: 1, name: 'category1', description: 'example'},
                {id: 2, name: 'category2', description: 'example'},
                {id: 3, name: 'category3', description: 'example'}
            ];
        }

        // Para filtrar: @Param('id')
        // findById (encontrar por id)
        @Get(':id')
        findById(@Param('id', ParseIntPipe) id: number ): Category {
         return {
                id: id,
                name: 'cat1',
                description: 'prueba'
            }
        }

        // findBy... (filtrar por nombre)
        // http://localhost:3000/category/filter-by-name/category1
        @Get('filter-by-name/:name')
        findByName(@Param('name') name: string) {
            console.log(name);
            return {
                id: 1,
                name: name,
                description: 'prueba'
            }
        }

        // create
        @Post()
        create(@Body() category: Category) {
         // lo normal es que este objeto category venga sin id
         // lo guardemos en base de datos con un Repository
         // eso genere un nuevo id
         // devolvamos la category con el nuevo id
            return category;
     }

        // update sobre una categoría en concreto
        @Put(':id')
        update(
            @Param('id', ParseIntPipe) id: number,
            @Body() category: Category
        ) {
            return category;
     }

    // delete
    @Delete(':id')
    deleteById(
        @Param('id', ParseIntPipe) id:number
    ) {
        console.log(id);
        // respository.delete...
    }

    @Delete()
    deleteAll() {
        console.log("Borrado categorías")
    }




}