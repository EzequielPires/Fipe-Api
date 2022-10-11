import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVersionDto } from './dto/create-version.dto';
import { UpdateVersionDto } from './dto/update-version.dto';
import { Version } from './entities/version.entity';
import slugify from 'slugify';

@Injectable()
export class VersionService {
  constructor(
    @InjectRepository(Version) private versionRepository: Repository<Version>
  ) {}

  async create(createVersionDto: CreateVersionDto) {
    try {
      const id_string = slugify(createVersionDto.name, {lower: true});
      const version = this.versionRepository.create({...createVersionDto, id_string});
      return await this.versionRepository.save(version);
    } catch (error) {
      return null;
    }
  }

  async findAll() {
    return await this.versionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} version`;
  }

  update(id: number, updateVersionDto: UpdateVersionDto) {
    return `This action updates a #${id} version`;
  }

  remove(id: number) {
    return `This action removes a #${id} version`;
  }
}
