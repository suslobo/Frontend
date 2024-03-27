import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './rating.model';
import { Repository } from 'typeorm';

@Controller('rating')
export class RatingController {

    constructor(
        @InjectRepository(Rating) private ratingRepo: Repository<Rating>
    ) {}


    @Get()
    findAll() {
        return this.ratingRepo.find();
    }

    @Get(':id') 
    findById( @Param('id', ParseIntPipe) id: number ) {
        return this.ratingRepo.findOne({
            where: {
                id: id
            }
        });
    }

    @Get('filter-by-user/:id')
    findByUserId(@Param('id', ParseIntPipe) id: number){
        return this.ratingRepo.find({
            where: {
                user: {
                    id: id
                }
            }
        });
    }

    @Get('filter-by-book/:id')
    findByBookId(@Param('id', ParseIntPipe) id: number){
        return this.ratingRepo.find({
            where: {
                book: {
                    id: id
                }
            }
        });
    }

    @Post()
    create(@Body() rating: Rating) {
        return this.ratingRepo.save(rating);
    }

    
    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() rating: Rating
        ) {
            
            // await espera a que el método existsBy termine ya que devuelve Promise<boolean>
            const exists = await this.ratingRepo.existsBy({
               id: id
            });

            if(!exists) {
                throw new NotFoundException('Rating not found');
            }

            return this.ratingRepo.save(rating);
    }

}