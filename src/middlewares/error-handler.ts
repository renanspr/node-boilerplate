import type { NextFunction, Request, Response } from 'express'

export const errorHandler = (
  error: Error,
  _: Request,
  response: Response,
  _next: NextFunction // eslint-disable-line no-unused-vars
): void => {
  response.status('statusCode' in error ? (error.statusCode as number) : 500).json({
    message:
        error ? error.message : 'Oops! Something wonky happened...'
  })
}
