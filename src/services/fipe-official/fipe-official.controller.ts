import { Controller, Post, Body } from '@nestjs/common';
import { FipeOfficialService } from './fipe-official.service';

@Controller('fipe-official')
export class FipeOfficialController {
    constructor(private fipeOfficialService: FipeOfficialService) { }

    @Post('find-brands')
    findBrands() {
        return this.fipeOfficialService.findBrandsCar('290');
    }

    @Post('find-models')
    findModels(@Body() data: {brand_id: string}) {
        return this.fipeOfficialService.findModelsCar('290', data.brand_id);
    }

    @Post('find-years')
    findYears(@Body() data: {brand_id: string, model_id: string}) {
        return this.fipeOfficialService.findYearsCar('290', data.brand_id, data.model_id);
    }

    @Post('find-versions')
    findVersions(@Body() data: {brand_id: string, model_id: string, year_model: string, type_fuel: string}) {
        return this.fipeOfficialService.findDetailsCar('290', data.brand_id, data.model_id, data.year_model, data.type_fuel);
    }

    @Post('sync-brands')
    syncBrands() {
        return this.fipeOfficialService.syncBrands();
    }
    @Post('sync-models')
    syncModels() {
        return this.fipeOfficialService.syncModels();
    }
    @Post('sync-years')
    syncYears() {
        return this.fipeOfficialService.syncYears();
    }
}