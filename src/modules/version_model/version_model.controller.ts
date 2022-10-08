import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersionModelService } from './version_model.service';
import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';

@Controller('version-model')
export class VersionModelController {
  constructor(private readonly versionModelService: VersionModelService) {}

  @Post()
  create(@Body() createVersionModelDto: CreateVersionModelDto) {
    return this.versionModelService.create(createVersionModelDto);
  }

  @Get()
  findAll() {
    return this.versionModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versionModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersionModelDto: UpdateVersionModelDto) {
    return this.versionModelService.update(+id, updateVersionModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versionModelService.remove(+id);
  }
}
