import { Repository } from 'typeorm';
import { Partai } from './../entities/partai';
import { AppDataSource } from '../data-source';

export default new class PartaiServices {
    private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)

    async create(data: Partai): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.save(data)
            return {
                message: "success create partai",
                data: response
            }
        } catch (error) {
            return "message: something error while create partai"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.find()
            return {
                message: "success get all partai",
                data: response
            }
        } catch (error) {
            return "message: something error while get all partai"
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.findOneBy({ id })
            return {
                message: "success get one partai",
                data: response
            }
        } catch (error) {
            return "message: something error while get one partai"
        }
    }
}