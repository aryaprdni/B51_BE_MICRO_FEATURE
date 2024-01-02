import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    noPaslon: number

    @Column("text")
    visionMission: string

    @Column()
    image: string
}