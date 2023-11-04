import { AppError } from '@helpers/exceptions'
import type { NextFunction, Request, Response } from 'express'
import { type StatusError } from './types'

const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error: StatusError = new Error(`${req.method} ${req.originalUrl} => not found`)

  error.statusCode = 404

  next(error)
}

const globalErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${req.method} ${req.originalUrl} => ${error.message}`)

  res.status('statusCode' in error ? (error.statusCode as number) : 500).json({
    message:
      error instanceof AppError
        ? error.message
        : 'Internal Server Error!'
  })
}

export { globalErrorHandler, notFoundHandler }
