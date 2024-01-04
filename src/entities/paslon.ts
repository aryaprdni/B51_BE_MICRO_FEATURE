import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Vote } from "./vote"
import { Partai } from './partai';

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

    @OneToMany(() => Partai, (partai) => partai.paslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    partai: Partai[];

    @OneToMany(() => Vote, (vote) => vote.paslon, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    vote: Vote
}