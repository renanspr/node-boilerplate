import { createUserService, checkIfUserExists } from '@services/user'
import { AppError } from '@helpers/exceptions'
import type { Request, Response, NextFunction } from 'express'

const createUserController = async (request: Request, response: Response, next: NextFunction) => {
  const { email, name, password } = request.body

  if (!name || !email || !password) {
    return next(new AppError('validation', 'Name, email or password are required'))
  }

  const userExists = await checkIfUserExists(email)

  if (userExists) {
    return next(new AppError('validation', 'User already exists'))
  }

  const user = await createUserService({
    email,
    name,
    password
  })

  response.status(201).json(user)
}

export { createUserController }
