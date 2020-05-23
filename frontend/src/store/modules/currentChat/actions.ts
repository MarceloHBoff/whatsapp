import { action } from 'typesafe-actions';

import { ContactDTO } from './../contacts/types';
import { CurrentChatTypes } from './types';

export const setCurrentChat = (currentChat: ContactDTO) =>
  action(CurrentChatTypes.SET_CURRENT_CHAT, { currentChat });
