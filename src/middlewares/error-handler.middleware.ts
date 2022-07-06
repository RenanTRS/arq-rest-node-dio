import { DatabaseError } from '@models/errors/database.error.model'
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const errorHandler = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400)
  } else {
    res.sendStatus(500)
  }
}
