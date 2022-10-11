import { Model } from "src/modules/model/entities/model.entity";
import { Version } from "src/modules/version/entities/version.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    id_string: string;

    @Column({type: 'longtext', nullable: true})
    ico: string;

    @Column({nullable: true})
    type: string;

    @OneToMany(() => Model, model => model.brand)
    models: Model[];

    @OneToMany(() => Version, model => model.brand)
    models_versions: Version[];
}
