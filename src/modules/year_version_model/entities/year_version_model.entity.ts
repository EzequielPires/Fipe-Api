import { Version } from "src/modules/version/entities/version.entity";
import { VersionModel } from "src/modules/version_model/entities/version_model.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class YearVersionModel {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column()
    year_model: number;

    @Column({nullable: true})
    price: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column({nullable: true, type: 'longtext'})
    history: string;

    @UpdateDateColumn()
    last_update_at: Date;

    @Column({nullable: true})
    reference_month: string;

    @ManyToOne(() => VersionModel, versionModel => versionModel.years)
    version: VersionModel;
    
    @ManyToOne(() => Version, version => version.years)
    version_year: Version;
}
