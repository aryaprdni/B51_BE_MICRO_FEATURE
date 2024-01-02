import * as Joi from 'joi';

const createPaslonValidation = Joi.object({
    name : Joi.string().max(100).required(),
    noPaslon : Joi.number().required(),
    visionMission: Joi.string().max(250).required(),
    image: Joi.string().allow(null)
})

const getOnePaslonValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
})

export {
    createPaslonValidation,
    getOnePaslonValidation
}