import { action } from 'typesafe-actions';

import { ContactsTypes, ContactDTO } from './types';

export const setContacts = (data: ContactDTO[]) =>
  action(ContactsTypes.SET_CONTACTS, { data });

export const updateContact = (data: ContactDTO) =>
  action(ContactsTypes.UPDATE_CONTACT, { data });
