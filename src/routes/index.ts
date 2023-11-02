import { Router } from 'express'
import { createUserController } from '@controllers/user'

const router = Router()

// User routes
router.post('/api/users', (request, response) => {
  createUserController(request, response)
})

router.get('/', (request, response) => {
  response.send('Server is up :)')
})

export default router
