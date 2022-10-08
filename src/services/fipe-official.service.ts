import {Injectable} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FipeOfficialService {
    private api: any;
    constructor() {
        this.api = axios.create({
            baseURL: 'https://veiculos.fipe.org.br/api/veiculos/'
        })
    }

    async findBrandsCar(ref: string) {
        const brands = await this.api.post('ConsultarMarcas', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref
        }).then(res => res.data);
        return brands;
    }

    async findModelsCar(ref: string, brand_id: string) {
        const models = await this.api.post('ConsultarModelos', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
        }).then(res => res.data.Modelos);
        return models;
    }

    async findYearsCar(ref: string, brand_id: string, model_id: string) {
        const years = await this.api.post('ConsultarAnoModelo', {
            codigoTipoVeiculo: "1",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
            codigoModelo: model_id
        }).then(res => res.data);
        return years;
    }

    async findDetailsCar(ref: string, brand_id: string, model_id: string, year_model: string, type_fuel: string) {
        const detail = await this.api.post('ConsultarValorComTodosParametros', {
            codigoTipoVeiculo: "1",
            tipoConsulta: "tradicional",
            codigoTabelaReferencia: ref,
            codigoMarca: brand_id,
            codigoModelo: model_id,
            anoModelo: year_model,
            codigoTipoCombustivel: type_fuel,
        }).then(res => res.data);
        return detail;
    }
}