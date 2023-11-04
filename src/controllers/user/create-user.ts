import { createUserService } from '@services/user'
import type { Request, Response, NextFunction } from 'express'

const createUserController = async (request: Request, response: Response, next: NextFunction) => {
  const { email, name, password } = request.body

  try {
    const user = await createUserService({
      email,
      name,
      password
    })

    return response.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export { createUserController }
