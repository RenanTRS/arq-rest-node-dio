import { NextFunction, Request, Response, Router } from 'express'

export const statusRoute = Router()

statusRoute.get(
  '/status',
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(200)
  }
)
