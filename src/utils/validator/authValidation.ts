import * as joi from 'joi';

const registerValidation = joi.object({
    fullName: joi.string().max(100).required(),
    address: joi.string().max(100).required(),
    username: joi.string().max(100).required(),
    gender: joi.string().max(100).required(),
    role: joi.string().max(100).allow(null),
    password: joi.string().max(100).required(),
})

const loginValidation = joi.object({
    username: joi.string().max(100).required(),
    password: joi.string().max(100).required()
})

const getOneUserValidation = joi.object({
    id: joi.number().min(1).positive().required(),
})

export {
    registerValidation,
    loginValidation,
    getOneUserValidation
}