import { Module } from '@nestjs/common';
import { YearVersionModelService } from './year_version_model.service';
import { YearVersionModelController } from './year_version_model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YearVersionModel } from './entities/year_version_model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YearVersionModel])],
  controllers: [YearVersionModelController],
  providers: [YearVersionModelService],
  exports: [YearVersionModelService]
})
export class YearVersionModelModule {}
