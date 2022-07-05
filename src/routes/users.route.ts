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
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const id = req.params.uuid
    const user = await usersRepository.findById(id)
    res.status(200).send(user)
  }
)

//POST
usersRoute.post(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body
    const id = await usersRepository.create(newUser)
    res.status(201).send(id)
  }
)

//PUT
usersRoute.put(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const id = req.params.uuid
    const modifierUser = req.body

    modifierUser.uuid = id
    await usersRepository.update(modifierUser)

    res.sendStatus(200)
  }
)

//DELETE
usersRoute.delete(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const id = req.params.uuid
    await usersRepository.remove(id)
    res.sendStatus(200)
  }
)
