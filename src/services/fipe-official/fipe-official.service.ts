import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { BrandService } from 'src/modules/brand/brand.service';
import { ModelService } from 'src/modules/model/model.service';
import { VersionService } from 'src/modules/version/version.service';
import { YearVersionModelService } from 'src/modules/year_version_model/year_version_model.service';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class FipeOfficialService {
    private api: any;
    constructor(
        private cacheService: CacheService,
        private brandService: BrandService,
        private modelService: ModelService,
        private versionService: VersionService,
        private yearVersionModelService: YearVersionModelService,
    ) {
        this.api = axios.create({
            baseURL: 'https://veiculos.fipe.org.br/api/veiculos/'
        })
    }

    async findBrandsCar(ref: string) {
        const brandsInCache = await this.cacheService.get(`fipe-official/brands/${ref}`);
        const brands = brandsInCache ?? await this.api.post('ConsultarMarcas', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref
        }).then(res => res.data);
        { !brandsInCache && brands && this.cacheService.set(`fipe-official/brands/${ref}`, brands) }
        return brands;
    }

    async findModelsCar(ref: string, brand_id: string) {
        const modelsInCache = await this.cacheService.get(`fipe-official/models/${ref}/${brand_id}`);
        const models = modelsInCache ?? await this.api.post('ConsultarModelos', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
        }).then(res => res.data.Modelos);
        { !modelsInCache && models && this.cacheService.set(`fipe-official/models/${ref}/${brand_id}`, models) }
        return models;
    }

    async findYearsCar(ref: string, brand_id: string, model_id: string) {
        const yearsInCache = await this.cacheService.get(`fipe-official/years/${ref}/${brand_id}/${model_id}`);
        const years = yearsInCache ?? await this.api.post('ConsultarAnoModelo', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
            codigoModelo: model_id
        }).then(res => res.data);
        { !yearsInCache && years && this.cacheService.set(`fipe-official/years/${ref}/${brand_id}/${model_id}`, years) }
        return years;
    }

    async findDetailsCar(ref: string, brand_id: string, model_id: string, year_model: string, type_fuel: string) {
        const detailInCache = await this.cacheService.get(`fipe-official/years/${ref}/${brand_id}/${model_id}/${year_model}/${type_fuel}`);
        const detail = await this.api.post('ConsultarValorComTodosParametros', {
            codigoTipoVeiculo: "1",
            tipoConsulta: "tradicional",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
            codigoModelo: model_id,
            anoModelo: year_model,
            codigoTipoCombustivel: type_fuel,
        }).then(res => res.data);
        { !detailInCache && detail && this.cacheService.set(`fipe-official/years/${ref}/${brand_id}/${model_id}/${year_model}/${type_fuel}`, detail) }
        return detail;
    }

    async syncBrands() {
        const brands = await this.findBrandsCar('290');
        for (let i = 0; i < brands.length; i++) {
            await this.brandService.create({
                name: brands[i].Label,
                id: brands[i].Value,
                type: 'brandcar'
            });
        }
    }
    
    async syncModels() {
        const brands = await this.brandService.findAll();
        for (let i = 0; i < brands.length; i++) {
            const models = await this.findModelsCar('290', `${brands[i].id}`);
            for(let j = 0; j < models.length; j++) {
                await this.versionService.create({
                    brand: brands[i],
                    code: models[j].Value,
                    name: models[j].Label,
                    type: 'versioncar'
                })
            }
        }
    }

    async syncYears() {
        const versions = await this.versionService.findAll();
        for (let i = 0; i < versions.length; i++) {
            const years = await this.findYearsCar('290', `${versions[i].brand.id}`, `${versions[i].code}`);
            for(let j = 0; j < years.length; j++) {
                await this.yearVersionModelService.create({
                    code: years[j].Value,
                    name: years[j].Label,
                    year_model: +years[j].Value.split('-')[0],
                })
            }
        }
        return versions;
    }
}