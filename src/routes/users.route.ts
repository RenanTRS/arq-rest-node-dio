import { NextFunction, Request, Response, Router } from 'express'

export const usersRoute = Router()

//GET
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Renan' }]
  res.status(200).json(users)
})

usersRoute.get(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const id = req.params.uuid
    res.status(200).send({ id })
  }
)

//POST
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body
  res.status(201).send(newUser)
})

//PUT
usersRoute.put(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const id = req.params.uuid
    const { name } = req.body
    res.status(200).send({ id, name })
  }
)

//DELETE
usersRoute.delete(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(200)
  }
)
