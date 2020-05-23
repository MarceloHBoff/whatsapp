/**
 * Action types
 */
export enum ContactsTypes {
  SET_CONTACTS = '@contacts/SET_CONTACTS',
  UPDATE_CONTACT = '@contacts/UPDATE_CONTACT',
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
