import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';
import { YearVersionModel } from './entities/year_version_model.entity';

@Injectable()
export class YearVersionModelService {
  constructor(
    @InjectRepository(YearVersionModel) private yearVersionModelVersionRepository: Repository<YearVersionModel>
  ) {}

  async create(createYearVersionModelDto: CreateYearVersionModelDto) {
    const year = this.yearVersionModelVersionRepository.create(createYearVersionModelDto);
    return await this.yearVersionModelVersionRepository.save(year);
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
