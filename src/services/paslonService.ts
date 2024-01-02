import { Repository } from 'typeorm';
import { Paslon } from './../entities/paslon';
import { AppDataSource } from '../data-source';

export default new class PaslonServices {
    private readonly PaslonRepository : Repository<Paslon> = AppDataSource.getRepository(Paslon)

    async create (data: Paslon): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.save(data)
            return {
                message: "success create paslon",
                data: response
            }
        } catch (error) {
            return "message: something error while create paslon"
        }
    }

    async getAll (): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.find()
            return {
                message: "success get all paslon",
                data: response
            }
        } catch (error) {
            return "message: something error while get all paslon"
        }
    }

    async getOne (id: number): Promise<object | string> {
        try {
            const response = await this.PaslonRepository.findOneBy({id})
            return {
                message: "success get one paslon",
                data: response
            }
        } catch (error) {
            return "message: something error while get one paslon"
        }
    }
}