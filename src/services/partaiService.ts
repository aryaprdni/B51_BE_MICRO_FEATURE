import { Repository } from 'typeorm';
import { Partai } from './../entities/partai';
import { AppDataSource } from '../data-source';
import { Paslon } from '../entities/paslon';

export default new class PartaiServices {
    private readonly PartaiRepository: Repository<Partai> = AppDataSource.getRepository(Partai)
    private readonly PaslonRepository: Repository<Paslon> = AppDataSource.getRepository(Paslon)

    async create(data: Partai): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.save(data)
            return {
                message: "success create partai",
                data: response
            }
        } catch (error) {
            console.error("Error creating partai:", error);
            return "message: something error while create partai"
        }
    }
    
    async update(id: number, data: Partai): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.update(id, data)
            return {
                message: "success update partai",
                data: response
            }
        } catch (error) {
            console.error("Error updating partai:", error);
            return "message: something error while update partai";
        }
    }

    async delete(id: number): Promise<object | string> {
        try {
            const partai = await this.PartaiRepository.findOne({ where: { id: id } });
    
            if (!partai) {
                return {
                    message: "Partai not found",
                };
            }
    
            await this.PartaiRepository.remove(partai);
    
            console.log("Partai deleted:", partai);
    
            return {
                message: "Success delete partai",
            };
        } catch (error) {
            console.error("Error deleting partai:", error);
            return "message: something error while delete partai";
        }
    }
    

    async getAll(): Promise<object | string> {
        try {
            const response = await this.PartaiRepository.find({
                relations: {
                    paslon: true
                }
            })
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
            const response = await this.PartaiRepository.findOne({
                where: {id: id}, 
                relations: {paslon: true}
            })
            return {
                message: "success get one partai",
                data: response
            }
        } catch (error) {
            return "message: something error while get one partai"
        }
    }
}