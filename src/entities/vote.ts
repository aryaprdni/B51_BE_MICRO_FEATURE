import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn,} from "typeorm"
import { Paslon } from "./paslon"
import { User } from "./user"

@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User, (user) => user.vote, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @JoinColumn()
    user : User

    @ManyToOne(() => Paslon , (paslon) => paslon.vote, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    paslon : Paslon
}