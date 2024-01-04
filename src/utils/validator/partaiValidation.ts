import * as Joi from 'joi';

const createPartaiValidation = Joi.object({
    name : Joi.string().max(100).required(),
    partyLeader : Joi.string().max(100).required(),
    visionMission: Joi.string().max(250).required(),
    address: Joi.string().max(250).required(),
    paslon : Joi.number().positive().min(1).required(),
    image: Joi.string().allow(null)
})

const getOnePartaiValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
})

export {
    createPartaiValidation,
    getOnePartaiValidation
}