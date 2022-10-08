import { Module } from '@nestjs/common';
import { YearVersionModelService } from './year_version_model.service';
import { YearVersionModelController } from './year_version_model.controller';

@Module({
  controllers: [YearVersionModelController],
  providers: [YearVersionModelService]
})
export class YearVersionModelModule {}
