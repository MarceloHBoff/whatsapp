import { getRepository } from 'typeorm';
import { Router } from 'express';

import CreateMessageService from '../services/CreateMessageService';
import Message from '../models/Message';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const messageRoutes = Router();

messageRoutes.use(ensureAuthenticated);

messageRoutes.get('/:receiverId', async (request, response) => {
  const receiverId = Number(request.params.receiverId);

  const messageRepository = getRepository(Message);

  const messages = await messageRepository.find({
    order: {
      date: 'DESC',
    },
    where: [
      { receiverId, ownerId: request.user.id },
      { receiverId: request.user.id, ownerId: receiverId },
    ],
  });

  return response.status(200).json(messages);
});

messageRoutes.post('/:receiverId', async (request, response) => {
  const { text } = request.body;
  const receiverId = Number(request.params.receiverId);

  const createMessage = new CreateMessageService();

  const message = await createMessage.run({
    receiverId,
    text,
    ownerId: request.user.id,
  });

  return response.status(201).json(message);
});

messageRoutes.patch('/:receiverId', async (request, response) => {
  const receiverId = Number(request.params.receiverId);

  const messageRepository = getRepository(Message);

  let messages = await messageRepository.find({
    where: {
      ownerId: receiverId,
      receiverId: request.user.id,
      read: false,
    },
  });

  messages = messages.map(message => ({
    ...message,
    read: true,
  }));

  await messageRepository.save(messages);

  return response.status(204).send();
});

export default messageRoutes;
