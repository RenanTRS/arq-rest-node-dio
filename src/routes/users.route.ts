import { NextFunction, Request, Response, Router } from 'express'
import { UserRepository } from '@repositories/user.repository'

export const usersRoute = Router()

const usersRepository = new UserRepository()

//GET
usersRoute.get(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await usersRepository.findAllUsers()
    res.status(200).json(users)
  }
)

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
