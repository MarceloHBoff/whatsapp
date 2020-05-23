import { getRepository } from 'typeorm';

import Message from '../models/Message';
import Contact from '../models/Contact';
import { findConnection, sendMessage } from '../websocket';

interface Request {
  text: string;
  ownerId: number;
  receiverId: number;
}

export default class CreateContactService {
  public async run({ text, ownerId, receiverId }: Request): Promise<Message> {
    const messageRepository = getRepository(Message);
    const contactRepository = getRepository(Contact);

    const message = messageRepository.create({
      ownerId,
      receiverId,
      text,
    });

    await messageRepository.save(message);

    let contact1 = await contactRepository.findOne({
      where: { ownerId, contactId: receiverId },
    });

    let contact2 = await contactRepository.findOne({
      where: { ownerId: receiverId, contactId: ownerId },
    });

    if (!contact1) {
      contact1 = contactRepository.create({
        ownerId,
        contactId: receiverId,
      });
    }

    if (!contact2) {
      contact2 = contactRepository.create({
        ownerId: receiverId,
        contactId: ownerId,
      });
    }

    contact1.lastMessage = text;
    await contactRepository.save(contact1);

    contact2.lastMessage = text;
    await contactRepository.save(contact2);

    const connection = findConnection(receiverId);

    if (connection) {
      sendMessage({
        to: connection,
        messageType: 'newMessage',
        messageData: message,
      });
    }

    return message;
  }
}
