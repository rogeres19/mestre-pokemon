import { Response, NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';


interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): any {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    response.status(401).send('JWT Token is missing!');
  }

  const token = authHeader;
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded as TokenPayload;
    request.headers = { userId: sub };
    return next();
  } catch {
    response.send('Invalid JWT Token!');
  }
}
