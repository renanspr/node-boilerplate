import { type Request, type Response } from 'express'
import { createUserService } from '@services/user'

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const { email, name, password } = request.body

  try {
    await createUserService({
      email,
      name,
      password
    })

    return response.status(201).json({
      message: 'User created successfully'
    })
  } catch (error) {
    return response.status(400).json({
      error: error.message || 'Unexpected error'
    })
  }
}

export { createUserController }
