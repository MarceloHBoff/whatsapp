import { ContactDTO } from './../contacts/types';
/**
 * Action types
 */
export enum MessagesTypes {
  ADD_NEW_MESSAGE = '@message/ADD_NEW_MESSAGE',
  SET_MESSAGE = '@message/SET_MESSAGE',
  SET_MESSAGE_SOCKET = '@message/SET_MESSAGE_SOCKET',
  SET_CURRENT_CHAT = '@message/SET_CURRENT_CHAT',
}

export interface MessageDTO {
  id: number;
  owner: object;
  ownerId: number;
  receiverId: number;
  text: string;
  date: Date;
  read: boolean;
}

export interface MessagesData {
  currentChat: ContactDTO;
  messages: MessageDTO[];
}

/**
 * State type
 */
export interface IMessagesState {
  readonly data: MessagesData;
}
