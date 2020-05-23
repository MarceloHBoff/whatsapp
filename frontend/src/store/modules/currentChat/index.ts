import { Reducer } from 'redux';

import { ContactDTO } from './../contacts/types';
import { CurrentChatTypes, ICurrentChatState } from './types';

const INITIAL_STATE: ICurrentChatState = {
  data: {} as ContactDTO,
};

const reducer: Reducer<ICurrentChatState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrentChatTypes.SET_CURRENT_CHAT:
      return {
        ...state,
        data: action.payload.currentChat,
      };
    default:
      return state;
  }
};

export default reducer;
