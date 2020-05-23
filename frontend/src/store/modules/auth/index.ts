import { Reducer } from 'redux';

import { AuthTypes, IAuthState, UserDTO } from './types';

const INITIAL_STATE: IAuthState = {
  theme: 'dark',
  user: {} as UserDTO,
  token: '',
  signed: false,
  loading: false,
};

const reducer: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        signed: true,
        loading: false,
      };
    case AuthTypes.SIGN_OUT:
      return {
        ...state,
        user: {} as UserDTO,
        token: '',
        signed: false,
      };
    case AuthTypes.CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

export default reducer;
