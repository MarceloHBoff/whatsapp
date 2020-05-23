import { action } from 'typesafe-actions';

import { AuthTypes, SignInData, SignUpData } from './types';

export const signInRequest = (data: SignInData) =>
  action(AuthTypes.SIGN_IN_REQUEST, { data });

export const signInSuccess = (token: string, user: object) =>
  action(AuthTypes.SIGN_IN_SUCCESS, { token, user });

export const signOut = () => action(AuthTypes.SIGN_OUT);

export const signUpRequest = (data: SignUpData) =>
  action(AuthTypes.SIGN_UP_REQUEST, { data });

export const changeTheme = () => action(AuthTypes.CHANGE_THEME);
