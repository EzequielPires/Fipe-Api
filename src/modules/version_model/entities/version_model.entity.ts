import { Model } from "src/modules/model/entities/model.entity";
import { YearVersionModel } from "src/modules/year_version_model/entities/year_version_model.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Unique } from "typeorm";

@Entity()
@Unique(['fipe_code', 'code'])
export class VersionModel {
    @PrimaryGeneratedColumn('increment')
    id: number; 

    @Column()
    name: string; 

    @Column()
    id_string: string; 

    @Column({unique: true})
    fipe_code: string;
    
    @Column({unique: true})
    code: string;

    @Column()
    type: string;

    @ManyToOne(() => Model, model => model.versions, {nullable: false, eager: true})
    model: Model;

    @OneToMany(() => YearVersionModel, yearVersionModel => yearVersionModel.version, {eager: true})
    years: YearVersionModel[];
}
