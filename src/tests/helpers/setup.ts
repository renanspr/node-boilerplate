import { beforeEach } from 'vitest'
import { resetDB } from './reset-db'

beforeEach(async () => {
  await resetDB()
})
