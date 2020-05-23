import { action } from 'typesafe-actions';

import { ContactsTypes, ContactDTO } from './types';

export const loadContacts = () => action(ContactsTypes.LOAD_CONTACTS);

export const setContacts = (data: ContactDTO[]) =>
  action(ContactsTypes.SET_CONTACTS, { data });
