import { Brand } from "src/modules/brand/entities/brand.entity";

export class CreateVersionDto {
    id?: number; 
    name: string; 
    id_string?: string; 
    fipe_code?: string;
    code: string;
    type: string;
    brand: Brand;
}
