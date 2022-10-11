import { Brand } from "src/modules/brand/entities/brand.entity";
import { YearVersionModel } from "src/modules/year_version_model/entities/year_version_model.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Unique } from "typeorm";

@Entity()
@Unique(['fipe_code', 'code'])
export class Version {
    @PrimaryGeneratedColumn('increment')
    id: number; 

    @Column()
    name: string; 

    @Column()
    id_string: string; 

    @Column({unique: true, nullable: true})
    fipe_code: string;
    
    @Column({unique: true})
    code: string;

    @Column()
    type: string;

    @ManyToOne(() => Brand, brand => brand.models_versions, {eager: true})
    brand: Brand;

    @OneToMany(() => YearVersionModel, yearVersionModel => yearVersionModel.version_year, {eager: true})
    years: YearVersionModel[];
}