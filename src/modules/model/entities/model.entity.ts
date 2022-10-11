import { Brand } from "src/modules/brand/entities/brand.entity";
import { VersionModel } from "src/modules/version_model/entities/version_model.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Model {
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

    @ManyToOne(() => Brand, brand => brand.models, {eager: true})
    brand: Brand;

    @OneToMany(() => VersionModel, versionModel => versionModel.model)
    versions: VersionModel[];
}
