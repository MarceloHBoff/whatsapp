import { combineReducers } from 'redux';

import auth from './auth';
import contacts from './contacts';
import currentChat from './currentChat';
import modal from './modal';

export default combineReducers({
  auth,
  contacts,
  currentChat,
  modal,
});
