/**
 * Action types
 */
export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_OUT = '@auth/SIGN_OUT',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  CHANGE_THEME = '@auth/CHANGE_THEME',
  REHYDRATE = 'persist/REHYDRATE',
}

export interface UserDTO {
  id: number;
  name: string;
  email: string;
}

/**
 * State type
 */
export interface IAuthState {
  readonly user: UserDTO;
  readonly token: string;
  readonly signed: boolean;
  readonly loading: boolean;
  readonly theme: string;
}

export interface SignInData {
  email: string;
}

export interface SignUpData {
  name: string;
  email: string;
}
