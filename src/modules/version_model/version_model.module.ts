import { Module } from '@nestjs/common';
import { VersionModelService } from './version_model.service';
import { VersionModelController } from './version_model.controller';

@Module({
  controllers: [VersionModelController],
  providers: [VersionModelService]
})
export class VersionModelModule {}
