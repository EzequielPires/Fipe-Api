import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Model } from './entities/model.entity';
import slugify from 'slugify';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model) private modelRepository: Repository<Model>
  ) {}

  create(createModelDto: CreateModelDto) {
    const id_string = slugify(createModelDto.name, {lower: true});
    return 'This action adds a new model';
  }

  findAll() {
    return `This action returns all model`;
  }

  findOne(id: number) {
    return `This action returns a #${id} model`;
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }
}
