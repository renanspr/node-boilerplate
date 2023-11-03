import { describe, expect, test, vi } from 'vitest'
import { createUserService } from '@services/user'
import { prisma } from '@libs/__mocks__/prisma'

vi.mock('@libs/prisma')

describe('createUserService', () => {
  test('should not create a existing user', async () => {
    const newUser = { name: 'User Name', email: 'user@email.com', password: 'UserPassword' }

    prisma.user.findUnique.mockResolvedValue({ ...newUser, id: 'id' })

    expect(createUserService(newUser)).rejects.toThrow()
  })
})
