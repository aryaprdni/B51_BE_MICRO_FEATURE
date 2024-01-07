import * as Joi from 'joi'

const createVoteValidation = Joi.object({
    paslon: Joi.number().min(1).required()
})

export {
    createVoteValidation
}