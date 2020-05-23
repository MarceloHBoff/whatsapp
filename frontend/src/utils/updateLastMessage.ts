import { ContactDTO } from './../store/modules/contacts/types';

export default (id: number, contacts: ContactDTO[], lastMessage: string) => {
  return contacts.map(contact =>
    contact.id === id ? { ...contact, lastMessage } : contact
  );
};
