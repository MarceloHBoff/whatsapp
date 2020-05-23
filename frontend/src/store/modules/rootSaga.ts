import { all } from 'redux-saga/effects';

import auth from './auth/saga';

export default function* rootSagas() {
  return yield all([auth]);
}
