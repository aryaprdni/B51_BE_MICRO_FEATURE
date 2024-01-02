import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    partyLeader: string

    @Column("text")
    visionMission: string
    
    @Column()
    address: string

    @Column()
    image: string
}