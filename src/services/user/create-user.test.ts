import { describe, expect, test, vi } from 'vitest'
import { createUserService } from '@services/user'
import { prisma } from '@libs/__mocks__/prisma'

vi.mock('@libs/prisma')

describe('createUserService', () => {
  test('should not create a existing user', async () => {
    const newUser = { name: 'testname', email: 'email@test.com', password: 'testpassword' }

    prisma.user.findUnique.mockResolvedValue({ ...newUser, id: 'id' })

    expect(createUserService(newUser)).rejects.toThrowError('User already exists')
  })
})
