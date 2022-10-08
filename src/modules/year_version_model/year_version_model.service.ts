import { Injectable } from '@nestjs/common';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';

@Injectable()
export class YearVersionModelService {
  create(createYearVersionModelDto: CreateYearVersionModelDto) {
    return 'This action adds a new yearVersionModel';
  }

  findAll() {
    return `This action returns all yearVersionModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} yearVersionModel`;
  }

  update(id: number, updateYearVersionModelDto: UpdateYearVersionModelDto) {
    return `This action updates a #${id} yearVersionModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} yearVersionModel`;
  }
}
