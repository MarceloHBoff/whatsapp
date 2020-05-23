import { ContactDTO } from './../contacts/types';
import { Reducer } from 'redux';

import { IMessagesState, MessagesTypes } from './types';

const INITIAL_STATE: IMessagesState = {
  data: {
    currentChat: {} as ContactDTO,
    messages: [],
  },
};

const reducer: Reducer<IMessagesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessagesTypes.SET_CURRENT_CHAT:
      return {
        data: {
          ...state.data,
          currentChat: action.payload.currentChat,
        },
      };
    case MessagesTypes.SET_MESSAGE:
      return {
        data: {
          ...state.data,
          messages: action.payload.messages,
        },
      };
    case MessagesTypes.ADD_NEW_MESSAGE:
      return {
        data: {
          ...state.data,
          messages: [action.payload.message, ...state.data.messages],
        },
      };
    default:
      return state;
  }
};

export default reducer;
