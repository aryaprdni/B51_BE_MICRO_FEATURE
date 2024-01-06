import * as Joi from 'joi';

const createArticleValidation = Joi.object({
    title: Joi.string().max(100).required(),
    author : Joi.string().max(250).required(),
    description : Joi.string().min(10).max(250).required(),
    image : Joi.string().allow(null),
    date : Joi.string()
})

const getOneArticleValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
});

export {
    createArticleValidation,
    getOneArticleValidation
}
