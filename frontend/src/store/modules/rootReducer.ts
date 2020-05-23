import { combineReducers } from 'redux';

import auth from './auth';
import contacts from './contacts';
import messages from './messages';
import modal from './modal';

export default combineReducers({
  auth,
  contacts,
  messages,
  modal,
});
