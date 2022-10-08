import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FipeService } from './fipe.service';
import { CreateFipeDto } from './dto/create-fipe.dto';
import { UpdateFipeDto } from './dto/update-fipe.dto';

@Controller('fipe')
export class FipeController {
  constructor(private readonly fipeService: FipeService) {}

  @Post()
  create(@Body() createFipeDto: CreateFipeDto) {
    return this.fipeService.create(createFipeDto);
  }

  @Get()
  findAll() {
    return this.fipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fipeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFipeDto: UpdateFipeDto) {
    return this.fipeService.update(+id, updateFipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fipeService.remove(+id);
  }
}
