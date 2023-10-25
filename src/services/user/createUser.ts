import { createUserModel, findByEmail } from '@models/user'
import bcrypt from 'bcrypt'

import { type CreateUserService } from './types'

const encryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

const createUserService = async (user: CreateUserService): Promise<void> => {
  const { email, name, password } = user

  if (!name || !email || !password) {
    throw new Error('Name, email or password are required')
  }

  const userExists = await findByEmail(email)

  if (userExists) {
    throw new Error('User already exists')
  }

  const hashPassword = encryptPassword(password)

  await createUserModel({ name, email, password: hashPassword })
}

export { createUserService }
