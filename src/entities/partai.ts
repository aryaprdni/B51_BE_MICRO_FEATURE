import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Paslon } from "./paslon"

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

    @ManyToOne(() => Paslon, (paslon) => paslon.partai,{
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    paslon: Paslon
}