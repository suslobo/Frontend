import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.model';
import { Repository } from 'typeorm';

@Controller('category')
export class CategoryController {
    constructor(
        @InjectRepository(Category) private categoryRepo: Repository<Category>
    ) {}
    
    // findAll y utilizar this.categoryRepo.find()
    @Get()
    findAll() {
        return this.categoryRepo.find();
    }

    @Get(':id') // :id es una variable, parámetro en la url
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.categoryRepo.findOne({

            where: {
                id: id
            }
        });
    }

}
