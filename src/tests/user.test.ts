import { describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '../server'
import { prisma } from './helpers/prisma'

describe('/api/users', async () => {
  describe('[POST] /api/users', async () => {
    it('should respond with status `201` and return user details', async () => {
      const { status, body } = await request(app).post('/api/users').send({
        email: 'testemail',
        name: 'testname',
        password: 'testpassword'
      })

      const newUser = await prisma.user.findFirst()

      expect(status).toBe(201)
      expect(newUser).not.toBeNull()
      expect(body).toStrictEqual({
        id: newUser?.id,
        email: newUser?.email,
        name: newUser?.name
      })
    })
  })
})
