import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';

import AuthConfig from '../config/auth';

import User from '../models/User';

interface Request {
  email: string;
}

interface Response {
  user: User;
  token: string;
}

export default class AuthenticateUserService {
  public async execute({ email }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) throw new AppError('Email is not registered', 401);

    const { secreteKey, expiresIn } = AuthConfig;

    const token = sign({}, secreteKey, {
      subject: String(user.id),
      expiresIn,
    });

    return { user, token };
  }
}
