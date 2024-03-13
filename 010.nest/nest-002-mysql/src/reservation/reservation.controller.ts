import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './reservation.model';
import { Repository } from 'typeorm';

@Controller('reservation')
export class ReservationController {

    constructor(
        @InjectRepository(Reservation) private reservationRepo: Repository<Reservation>
    ) {}

    // findAll
    // http://localhost:3000/reservation
        @Get()
        findAll() {
            return this.reservationRepo.find();
        }

    // findById
    // http://localhost:3000/reservation/1
        @Get(':id')
        findById(@Param('id', ParseIntPipe) id: number) {
            return this.reservationRepo.findOne({
                where: {
                    id: id
                }
            });
        }

    // findByUserId
    // http://localhost:3000/reservation/filter-by-user/2
        @Get('filter-by-user/:id')
        findByUserId(@Param('id', ParseIntPipe) id: number) {
                return this.reservationRepo.find({
                where: {
                    user: {
                        id: id
                    } 
                }
            });
    }

    // findByBookId
    // http://localhost:3000/reservation/filter-by-book/5
    @Get('filter-by-book/:id')
    findByBookilId(@Param('id', ParseIntPipe) id: number) {
        return this.reservationRepo.find({
            where: {
                book: {
                    id: id
                }
            }
        });
    }

    // query params

    

    // create nueva reserva
    @Post()
    create(@Body() reservation: Reservation) {
        return this.reservationRepo.save(reservation);
    }


}
