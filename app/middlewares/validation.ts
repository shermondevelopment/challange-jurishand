/* express */
import { Request, Response, NextFunction } from 'express'

/* joi */
import { ObjectSchema } from 'joi'

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
      throw {
        status: 422,
        message: error.message
      }
    }
    next()
  }
}
