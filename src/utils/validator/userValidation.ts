import * as Joi from "joi"

const createUserValidation = Joi.object({
    fullName : Joi.string().max(100).required(),
    address : Joi.string().max(100).required(),
    gender : Joi.string().max(100).required(),
    password : Joi.string().max(100).required(),
})

const getOneUserValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
})

export {
    createUserValidation,
    getOneUserValidation
}