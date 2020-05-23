import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
}

export default class CreateUserService {
  public async run({ email, name }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExist = await userRepository.findOne({ where: { email } });

    if (checkUserExist) throw new AppError('Email address already exists');

    const user = userRepository.create({
      name,
      email,
    });

    await userRepository.save(user);

    return user;
  }
}
