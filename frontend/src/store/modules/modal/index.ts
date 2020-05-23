import { Reducer } from 'redux';

import { ModalTypes, IModalState } from './types';

const INITIAL_STATE: IModalState = {
  addContact: false,
};

const reducer: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalTypes.OPEN_ADD_CONTACT:
      return {
        ...state,
        addContact: action.payload.open,
      };
    default:
      return state;
  }
};

export default reducer;
