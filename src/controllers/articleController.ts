import { Request, Response } from "express";
import articleService from "../services/articleService";
import {createArticleValidation, getOneArticleValidation} from "../utils/validator/articleValidation";
import cloudinary from "../libs/cloudinary";

export default new class articleController {
    async create(req: Request, res : Response) {
        try {
            const data = {
                author : req.body.author,
                title : req.body.title,
                description: req.body.description,
                date: req.body.date,
                image: res.locals.filename,
            }

            const { error, value } = createArticleValidation.validate(data);
            if(error) return res.status(400).json(error.details[0].message)

            cloudinary.upload()
            const cloudinaryRes = await cloudinary.destination(value.image)

            const obj = {
                id: value.id,
                author : value.author,
                title : value.title,
                description: value.description,
                date: value.date,
                image: cloudinaryRes.secure_url
            }

            const response = await articleService.create(obj);
            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating article:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid ID provided",
                error: "Invalid input for type number",
                });
            }
        
            const response = await articleService.delete(id);
            return res.status(201).json(response);
            } catch (error) {
                console.error("Error creating a Article:", error);
                return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
            }
        }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id)) {
                return res.status(400).json({
                message: "Invalid ID provided",
                error: "Invalid input for type number",
                });
            }
            const data = req.body;
            const response = await articleService.update(id, data);
            return res.status(201).json(response);
            } catch (error) {
                console.error("Error creating a Article:", error);
                return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
            }
        }

    async getAll(req: Request, res : Response) {
        try {
            const response = await articleService.getAll();
            return res.status(200).json(response);
            } catch (error) {
                console.error("Error getting all article:", error);
                return res.status(500).json({ message: "Internal server error", error: error.message });
            }
        }

    async getOne(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const response = await articleService.getOne(id);
            
            const { error, value } = getOneArticleValidation.validate(response)

            if (error) {
                return res.status(400).json({
                    message: "Invalid ID provided",
                    error: "Invalid input for type number"
                })
            }

            return res.status(201).json(response);
        } catch (error) {
            console.error("Error creating a Article:", error);
            return res
                .status(500)
                .json({ message: "Internal server error", error: error.message });
            }
    }           
}