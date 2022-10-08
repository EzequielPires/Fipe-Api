import { Injectable } from '@nestjs/common';
import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';

@Injectable()
export class VersionModelService {
  create(createVersionModelDto: CreateVersionModelDto) {
    return 'This action adds a new versionModel';
  }

  findAll() {
    return `This action returns all versionModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} versionModel`;
  }

  update(id: number, updateVersionModelDto: UpdateVersionModelDto) {
    return `This action updates a #${id} versionModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} versionModel`;
  }
}
