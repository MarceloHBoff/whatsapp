import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Contact from '../models/Contact';
import User from '../models/User';

interface Request {
  email: string;
  ownerId: number;
}

export default class CreateContactService {
  public async run({ email, ownerId }: Request): Promise<Contact> {
    const userRepository = getRepository(User);
    const contactRepository = getRepository(Contact);

    const userContact = await userRepository.findOne({ where: { email } });

    if (!userContact)
      throw new AppError('Contact does not registered in application', 401);

    const findContact = await contactRepository.findOne({
      where: {
        ownerId,
        contactId: userContact.id,
      },
    });

    if (findContact) return findContact;

    const saveContact = contactRepository.create({
      ownerId,
      contactId: userContact.id,
    });

    await contactRepository.save(saveContact);

    const contact = await contactRepository.findOne({
      where: {
        ownerId,
        contactId: userContact.id,
      },
    });

    return contact;
  }
}
