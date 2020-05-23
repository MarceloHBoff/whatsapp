import { Router } from 'express';

import sessionRouter from './session.routes';
import userRouter from './user.routes';
import contactRouter from './contact.routes';
import messagesRouter from './message.routes';

const routes = Router();

routes.use('/sessions', sessionRouter);
routes.use('/users', userRouter);
routes.use('/contacts', contactRouter);
routes.use('/messages', messagesRouter);

export default routes;
