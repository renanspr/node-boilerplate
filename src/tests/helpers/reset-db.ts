import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resetDB = async (): Promise<void> => {
  await prisma.$transaction([
    prisma.user.deleteMany()
  ])
}
