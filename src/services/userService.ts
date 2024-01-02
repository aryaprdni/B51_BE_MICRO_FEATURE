import { Repository } from "typeorm";
import { User } from './../entities/user';
import { AppDataSource } from "../data-source";

export default new class UserService {
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(data: User): Promise<object | string> {
        try {
            const response = await this.UserRepository.save(data)
            return {
                message: "success create user",
                data: response
            }
        } catch (error) {
            return "message: something error while create user"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.UserRepository.find()
            return {
                message: "success get all user",
                data: response
            }
        } catch (error) {
            return "message: something error while get all user"
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.UserRepository.findBy({ id })
            return {
                message: "success get one user",
                data: response
            }
        } catch (error) {
            return "message: something error while get one user"
        }
    }
}

