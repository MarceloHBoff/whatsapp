import { Reducer } from 'redux';

import { ContactsTypes, IContactsState } from './types';

const INITIAL_STATE: IContactsState = {
  data: [],
};

const reducer: Reducer<IContactsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactsTypes.SET_CONTACTS:
      return {
        ...state,
        data: action.payload.data,
      };
    case ContactsTypes.UPDATE_CONTACT:
      const { data } = state;
      const { id } = action.payload.data;
      return {
        ...state,
        data: data.map(contact =>
          contact.id === id ? action.payload.data : contact
        ),
      };
    default:
      return state;
  }
};

export default reducer;
