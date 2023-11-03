import { type Request, type Response } from 'express'
import { createUserService } from '@services/user'

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const { email, name, password } = request.body

  try {
    const user = await createUserService({
      email,
      name,
      password
    })

    return response.status(201).json(user)
  } catch (error) {
    return response.status(400).json({
      error: error.message || 'Unexpected error'
    })
  }
}

export { createUserController }
