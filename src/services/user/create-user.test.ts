import { describe, expect, test, vi } from 'vitest'
import { createUserService } from '@services/user'
import { prisma } from '@libs/__mocks__/prisma'

vi.mock('@libs/prisma')

describe('createUserService', () => {
  test('should create a new user and return user details: id, email and name', async () => {
    const newUser = { name: 'testname', email: 'email@test.com', password: 'testpassword' }

    prisma.user.create.mockResolvedValue({ id: 'id', ...newUser })

    const createdUser = await createUserService(newUser)

    expect(createdUser).toStrictEqual({
      id: 'id',
      email: newUser.email,
      name: newUser.name
    })
  })
})
