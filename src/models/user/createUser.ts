import { prisma } from 'prisma'
import { type CreateUserData } from './types'

const createUserModel = async (user: CreateUserData): Promise<void> => {
  const { email, name, password } = user

  await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  })
}

const findByEmail = async (email: string): Promise<CreateUserData | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  console.log(user)

  return user
}

export { createUserModel, findByEmail }
