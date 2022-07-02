import { NextFunction, Request, Response, Router } from 'express'

export const usersRoute = Router()

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Renan' }]
  res.status(200).json(users)
})
