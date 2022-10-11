import { Version } from "src/modules/version/entities/version.entity";
import { VersionModel } from "src/modules/version_model/entities/version_model.entity";

export class CreateYearVersionModelDto {
    id?: string;

    year_model: number;

    price?: number;

    name: string;

    code: string;

    reference_month?: string;

    version?: VersionModel;
    
    version_year?: Version;
}
