import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
  status: number
  message: string
}

export default (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(err.status || 500)
    .json({ error: err.message || 'internal server error' })
}
