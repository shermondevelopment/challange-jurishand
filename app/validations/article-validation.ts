import * as Joi from 'joi'

const articleValidation = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'title is required'
  }),
  author: Joi.string().required().messages({
    'string.empty': 'author is required'
  }),
  content: Joi.string().required().messages({
    'string.empty': 'content is required'
  }),
  date: Joi.string().isoDate().required().messages({
    'string.isoDate': 'please enter a valid date!'
  }),
  category: Joi.string().required().messages({
    'string.empty': 'content is required'
  })
})

export default articleValidation
