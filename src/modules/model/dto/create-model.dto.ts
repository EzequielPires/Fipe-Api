import { Brand } from "src/modules/brand/entities/brand.entity";
import { VersionModel } from "src/modules/version_model/entities/version_model.entity";

export class CreateModelDto {
    id: number;
    name: string;
    id_string?: string;
    ico?: string;
    type: string;
    brand: Brand;
    versions?: VersionModel[];
}
