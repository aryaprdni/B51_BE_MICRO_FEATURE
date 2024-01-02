import { Request, Response} from "express";

import { createUserValidation } from "../utils/validator/userValidation";
import userService from "../services/userService";

export default new class userController {
    async create(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log("Data to be created:", data);
            const {error} = createUserValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)

            console.log("Data to be created:", data);
                
            const response = await userService.register(data);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const response = await userService.getAll();
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await userService.getOne(id);

            const {error, value} = createUserValidation.validate(response);

            if (error) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number"
                })
            }

            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}