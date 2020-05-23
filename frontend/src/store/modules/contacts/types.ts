/**
 * Action types
 */
export enum ContactsTypes {
  SET_CONTACTS = '@contacts/SET_CONTACTS',
  LOAD_CONTACTS = '@contacts/LOAD_CONTACTS',
}

export interface ContactDTO {
  id: number;
  ownerId: number;
  lastMessage: string;
  unreadMessages: number;
  contact: {
    id: number;
    name: string;
    email: string;
  };
}

/**
 * State type
 */
export interface IContactsState {
  readonly data: ContactDTO[];
}
