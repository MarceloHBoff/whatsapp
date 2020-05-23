import { ContactDTO } from '../contacts/types';
/**
 * Action types
 */
export enum CurrentChatTypes {
  SET_CURRENT_CHAT = '@currentChat/SET_CURRENT_CHAT',
}

/**
 * State type
 */
export interface ICurrentChatState {
  readonly data: ContactDTO;
}
