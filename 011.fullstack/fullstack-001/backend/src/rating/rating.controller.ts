import { Controller } from '@nestjs/common';
import { Rating } from './rating.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('rating')
export class RatingController {

    constructor(
        @InjectRepository(Rating) private ratingRepo: Repository<Rating>

    ) {}
}
