import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import messages from './messages/saga';

export default function* rootSagas() {
  return yield all([auth, messages]);
}
