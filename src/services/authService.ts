import { Repository } from "typeorm";
import { User } from '../entities/user';
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export default new class AuthService {
    private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(reqBody: any): Promise<object | string> {
        try {
            const checkUsername = await this.UserRepository.count({
                where: {
                    username: reqBody.username
                }
            })
            if(checkUsername > 0) return `message: username ${reqBody.username} already exist`;

            const hashPassword = await bcrypt.hash(reqBody.password, 10);

            const obj = {
                ...reqBody,
                password: hashPassword
            }

            const resRegist = await this.UserRepository.save(obj)

            return {
                message: "register success",
                data: resRegist
            }
        }   catch (error) {
                return "message: something error while register"
        }
    }

    async login(reqBody: any): Promise<object | string> {
        try {
            const checkUsername = await this.UserRepository.findOne({
                where: {
                    username: reqBody.username
                }
            })
            if (!checkUsername) return `message: ${reqBody.username} not found`;

            const comparePassword = await bcrypt.compare(reqBody.password, checkUsername.password);
            if (!comparePassword) return `message: password not match`;

            const obj = {
                id: checkUsername.id,
                username: checkUsername.username
            }

            const token = jwt.sign(obj, "secret", { expiresIn: "1h" });

            return {
                message: "login success",
                data: token
            }
            
        } catch (error) {
            return "message: something error while login"
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
            const response = await this.UserRepository.findOneBy({ id })
            return {
                message: "success get one user",
                data: response
            }
        } catch (error) {
            return "message: something error while get one user"
        }
    }
}