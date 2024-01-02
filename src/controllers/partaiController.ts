import { Request, Response } from "express";
import partaiService from "../services/partaiService";
import {createPartaiValidation, getOnePartaiValidation} from "../utils/validator/partaiValidation";
import cloudinary from "../libs/cloudinary"

export default new class PartaiController {
    async create(req: Request, res : Response) {
        try {
            const data = {
                name : req.body.name,
                partyLeader : req.body.partyLeader,
                visionMission: req.body.visionMission,
                address: req.body.address,
                image: res.locals.filename
            }

            const { error, value } = createPartaiValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)

            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                id: value.id,
                name : value.name,
                partyLeader : value.partyLeader,
                visionMission: value.visionMission,
                address: value.address,
                image: cloudinaryRes.secure_url
            }

            const response = await partaiService.create(obj);
            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating partai:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await partaiService.getOne(id);

            const { error, value } = getOnePartaiValidation.validate(response)

            if (error) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number"
                })
            }

            return res.status(201).json(response);

        } catch (error) {
            console.error("Error creating a Partai:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const response = await partaiService.getAll();
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error getting all partai:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
}