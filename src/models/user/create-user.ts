import { prisma } from '@libs/prisma'
import type { CreateUserData, CreateUserDataResponse } from './types'

const createUserModel = async (user: CreateUserData): Promise<CreateUserDataResponse> => {
  const { email, name, password } = user

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  })

  return createdUser
}

const findUserByEmail = async (email: string): Promise<CreateUserData | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  return user
}

export { createUserModel, findUserByEmail }
