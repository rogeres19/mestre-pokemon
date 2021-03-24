import { Response, NextFunction, Request } from 'express'
import { verify } from 'jsonwebtoken'
import authConfig from '../config/auth'


interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): any {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).send('No API key found in request')
  }

  const token = authHeader

  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { sub } = decoded as TokenPayload
    request.headers = { userId: sub }
    return next()
  } catch {
    response.status(401).send('Invalid JWT Token!')
  }
}
