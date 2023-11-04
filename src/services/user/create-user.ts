import bcrypt from 'bcrypt'
import { createUserModel, findUserByEmail } from '@models/user'
import type { CreateUserService, CreateUserServiceResponse } from './types'

const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

const createUserService = async (user: CreateUserService): Promise<CreateUserServiceResponse> => {
  const { email, name, password } = user

  if (!name || !email || !password) {
    throw new Error('Name, email or password are required')
  }

  const userExists = await findUserByEmail(email)

  if (userExists) {
    throw new Error('User already exists')
  }

  const hashPassword = encryptPassword(password)

  const createdUser = await createUserModel({ name, email, password: hashPassword })

  return {
    id: createdUser.id,
    email: createdUser.email,
    name: createdUser.name
  }
}

export { createUserService }
