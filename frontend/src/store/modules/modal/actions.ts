import { action } from 'typesafe-actions';

import { ModalTypes } from './types';

export const setModalAddContact = (open: boolean) =>
  action(ModalTypes.OPEN_ADD_CONTACT, { open });
