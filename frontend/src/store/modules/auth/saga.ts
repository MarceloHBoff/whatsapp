import { takeLatest, call, put, all } from 'redux-saga/effects';

import { signInSuccess } from './actions';
import { AuthTypes, SignInData, SignUpData } from './types';

import api from '../../../services/api';

interface SignInParams {
  type: AuthTypes;
  payload: {
    data: SignInData;
  };
}

interface SignUpParams {
  type: AuthTypes;
  payload: {
    data: SignUpData;
  };
}

interface SetTokenParams {
  type: AuthTypes;
  payload: {
    auth: {
      token: string;
    };
  };
}

export function* signIn(data: SignInParams) {
  try {
    const { email } = data.payload.data;

    const response = yield call(api.post, 'sessions', {
      email,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch {
    alert('Email does not exists');
  }
}

export function* signUp(data: SignUpParams) {
  try {
    yield call(api.post, 'users', data.payload.data);
  } catch {
    alert('Email already exists');
  }
}

export function setToken(data: SetTokenParams) {
  if (!data?.payload?.auth?.token) return;

  const { token } = data.payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(AuthTypes.REHYDRATE, setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
]);
