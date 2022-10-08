import { Injectable } from '@nestjs/common';
import { CreateFipeDto } from './dto/create-fipe.dto';
import { UpdateFipeDto } from './dto/update-fipe.dto';

@Injectable()
export class FipeService {
  create(createFipeDto: CreateFipeDto) {
    return 'This action adds a new fipe';
  }

  findAll() {
    return `This action returns all fipe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fipe`;
  }

  update(id: number, updateFipeDto: UpdateFipeDto) {
    return `This action updates a #${id} fipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} fipe`;
  }
}
