import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateContactService from '../services/CreateContactService';

import Contact from '../models/Contact';
import Message from '../models/Message';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const contactRoutes = Router();

contactRoutes.use(ensureAuthenticated);

contactRoutes.get('/', async (request, response) => {
  const contactRepository = getRepository(Contact);
  const messageRepository = getRepository(Message);

  let contacts = await contactRepository.find({
    where: { ownerId: request.user.id },
  });

  for (let i = 0; i < contacts.length; i++) {
    contacts[i].unreadMessages = await messageRepository.count({
      where: {
        ownerId: contacts[i].contactId,
        receiverId: request.user.id,
        read: false,
      },
    });
  }

  return response.status(200).json(contacts);
});

contactRoutes.post('/', async (request, response) => {
  const { email } = request.body;

  const createContact = new CreateContactService();

  const user = await createContact.run({
    ownerId: request.user.id,
    email,
  });

  return response.status(201).json(user);
});

export default contactRoutes;
