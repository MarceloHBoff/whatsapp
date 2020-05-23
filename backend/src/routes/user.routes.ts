import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const { email, name } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.run({
    name,
    email,
  });

  return response.status(201).json(user);
});

export default userRouter;
