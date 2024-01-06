import { Vote } from '../entities/vote';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';

export default new class VoteService {
    private readonly VoteRepository: Repository<Vote> = AppDataSource.getRepository(Vote)

    async create(data: any): Promise<object | string> {
        try {
            const checkVoter = await this.VoteRepository.findOne({
                where: {
                    user: {
                        id: data.user
                    },
                    paslon: {
                        id: data.paslon
                    }
                }
            })

            if (checkVoter) {
                return "message: voter already vote"
            }

            const response = await this.VoteRepository.save(data)
            return {
                message: "success create vote",
                data: response
            }
        } catch (error) {
            return "message: something error while create vote"
        }
    }

    async getAll(): Promise<object | string> {
        try {
            const response = await this.VoteRepository.find({
                relations: ["user", "paslon"],
                select: {
                    user: {
                        fullName: true,
                        address: true,
                        gender: true
                    },
                    paslon: {
                        name: true
                    }
                }
            });

            const countVoters = await this.VoteRepository.count()
            return {
                message: "success get all vote",
                countVoters: countVoters,
                data: response
            };
        } catch (error) {
            return "message: something error while get all vote";
        }
    }

    async getOne(id: number): Promise<object | string> {
        try {
        const response = await this.VoteRepository.findOne({
            where: { id },
            relations: ["user", "paslon"],
            select: {
                user: {
                    fullName: true,
                    address: true,
                    gender: true,
                },
                paslon: {
                    name: true,
                },
            },
        });

        const countVoters = await this.VoteRepository.count()
            return {
                message: "success get all vote",
                countVoters: countVoters,
                data: response
            };
    
        } catch (error) {
          return "message: something error while getting a Vote";
        }
    }
}