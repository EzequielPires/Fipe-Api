import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YearVersionModelService } from './year_version_model.service';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';

@Controller('year-version-model')
export class YearVersionModelController {
  constructor(private readonly yearVersionModelService: YearVersionModelService) {}

  @Post()
  create(@Body() createYearVersionModelDto: CreateYearVersionModelDto) {
    return this.yearVersionModelService.create(createYearVersionModelDto);
  }

  @Get()
  findAll() {
    return this.yearVersionModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yearVersionModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYearVersionModelDto: UpdateYearVersionModelDto) {
    return this.yearVersionModelService.update(+id, updateYearVersionModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yearVersionModelService.remove(+id);
  }
}
