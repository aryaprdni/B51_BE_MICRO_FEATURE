import { Request, Response } from "express";
import paslonService from "../services/paslonService";
import { createPaslonValidation, getOnePaslonValidation } from "../utils/validator/paslonValidation";
import cloudinary from "../libs/cloudinary"

export default new class paslonController {
    async create(req: Request, res : Response) {
        try {
            const data = {
                name : req.body.name,
                noPaslon : req.body.noPaslon,
                visionMission : req.body.visionMission,
                image: res.locals.filename
            }
            const { error, value } = createPaslonValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)
        
            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                id: value.id,
                name : value.name,
                noPaslon : value.noPaslon,
                visionMission : value.visionMission,
                image: cloudinaryRes.secure_url
            }

            const response = await paslonService.create(obj);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await paslonService.getAll();
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await paslonService.getOne(id);

            const { error, value } = getOnePaslonValidation.validate(response)

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