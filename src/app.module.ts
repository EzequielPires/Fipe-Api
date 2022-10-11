import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModule } from './modules/brand/brand.module';
import { ModelModule } from './modules/model/model.module';
import { VersionModelModule } from './modules/version_model/version_model.module';
import { VersionModule } from './modules/version/version.module';
import { YearVersionModelModule } from './modules/year_version_model/year_version_model.module';
import { FipeOfficialModule } from './services/fipe-official/fipe-official.module';
import { FipeModule } from './modules/fipe/fipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'term228687535',
      database: 'fipe_vehicle',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    FipeModule,
    BrandModule,
    ModelModule,
    VersionModelModule,
    VersionModule,
    YearVersionModelModule,
    FipeOfficialModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
