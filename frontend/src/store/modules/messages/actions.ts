import { ContactDTO } from './../contacts/types';
import { action } from 'typesafe-actions';

import { MessagesTypes, MessageDTO } from './types';

export const setCurrentChat = (currentChat: ContactDTO) =>
  action(MessagesTypes.SET_CURRENT_CHAT, { currentChat });

export const setMessages = (messages: MessageDTO[]) =>
  action(MessagesTypes.SET_MESSAGE, { messages });

export const addNewMessage = (message: MessageDTO) =>
  action(MessagesTypes.ADD_NEW_MESSAGE, { message });

export const setMessageSocket = (message: MessageDTO) =>
  action(MessagesTypes.SET_MESSAGE_SOCKET, { message });
