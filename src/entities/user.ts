import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne} from "typeorm"
import { Vote } from "./vote"
import { article } from "./article"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column()
    address: string

    @Column()
    username : string

    @Column()
    gender: string

    @Column()
    password: string

    @OneToOne(() => Vote, (vote) => vote.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    vote: Vote

    @OneToMany(() => article, (article) => article.user, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    article: article[]
}