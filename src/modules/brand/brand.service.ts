import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import slugify from 'slugify';

@Injectable()
export class BrandService {
  constructor(@InjectRepository(Brand) private brandRepository: Repository<Brand>) { }
  async create(createBrandDto: CreateBrandDto) {
    try {
      const id_string = slugify(createBrandDto.name, {lower: true});
      const brand = this.brandRepository.create({...createBrandDto, id_string});
      return await this.brandRepository.save(brand);
    } catch (error) {
      return null;
    }
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    return await this.brandRepository.findOne({where: {id}});
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
