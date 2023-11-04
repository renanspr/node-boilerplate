import { createUserModel, findUserByEmail } from '@models/user'
import { encryptPassword } from '@helpers/hash'
import type { CreateUserService, CreateUserServiceResponse } from './types'

const createUserService = async (user: CreateUserService): Promise<CreateUserServiceResponse> => {
  const { email, name, password } = user

  const hashPassword = encryptPassword(password)

  const createdUser = await createUserModel({ name, email, password: hashPassword })

  return {
    id: createdUser.id,
    email: createdUser.email,
    name: createdUser.name
  }
}

const checkIfUserExists = async (email: string) => {
  const user = await findUserByEmail(email)

  return user
}

export { createUserService, checkIfUserExists }
