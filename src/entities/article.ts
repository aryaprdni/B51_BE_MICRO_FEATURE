import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./user"

@Entity()
export class article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    author: string

    @Column()
    title: string

    @Column("date")
    date: string

    @Column()
    description: string

    @Column()
    image: string

    @ManyToOne(() => User, (user) => user.article)
    user: User
}
