import { Request, Response } from "express";
import { createVoteValidation } from "../utils/validator/voteValidation";
import voteService from "../services/voteService";


export default new class voteController {
  async create(req: Request, res: Response) {
    try {
        const { error, value } = createVoteValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const loginSession = res.locals.loginSession.id;

        const data = {
            paslon: value.paslon,
            user: loginSession
        };

        const response = await voteService.create(data);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

    async getAll(req: Request, res: Response) {
      try {
        const response = await voteService.getAll();
        return res.status(200).json(response);
      } catch (error) {
          return res.status(500).json({ message: "Internal server error", error: error.message });
        }
      }

    async getOne(req: Request, res: Response) {
      try {
        const id = parseInt(req.params.id, 10);
        const response = await voteService.getOne(id);
        return res.status(200).json(response);
      } catch (error) {
        console.error("Error getting a Vote:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
}