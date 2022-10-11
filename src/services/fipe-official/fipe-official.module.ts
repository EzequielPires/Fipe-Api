import {Module, Global} from '@nestjs/common';
import { BrandModule } from 'src/modules/brand/brand.module';
import { ModelModule } from 'src/modules/model/model.module';
import { VersionModule } from 'src/modules/version/version.module';
import { YearVersionModelModule } from 'src/modules/year_version_model/year_version_model.module';
import { CacheServiceModule } from '../cache/cache.module';
import { FipeOfficialController } from './fipe-official.controller';
import { FipeOfficialService } from './fipe-official.service';

@Global()
@Module({
    imports: [CacheServiceModule, BrandModule, ModelModule, VersionModule, YearVersionModelModule],
    controllers: [FipeOfficialController],
    providers: [FipeOfficialService],
    exports: [FipeOfficialService]
})
export class FipeOfficialModule {}