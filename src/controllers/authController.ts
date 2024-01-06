import { Request, Response} from "express";

import { getOneUserValidation, loginValidation, registerValidation } from "../utils/validator/authValidation";
import userService from "../services/authService";

export default new class userController {
    async register(req: Request, res: Response) {
        try {
            const data = req.body;
            const {error} = registerValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)
                
            const response = await userService.register(data);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async login(req: Request, res: Response) {
        try {
            const data = req.body;

            const {error} = loginValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)

            const response = await userService.login(data);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async checkToken(req: Request, res: Response) {
        try {
            const { status, body } = await userService.checkToken(req, res);
            
            return res.status(status).json(body);
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error',
                error: error.message
            });
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
            
            const {error, value} = getOneUserValidation.validate({id});
            
            if (error) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number"
                })
            }
            
            const response = await userService.getOne(value.id);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}