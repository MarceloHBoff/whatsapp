import { updateContact } from './../contacts/actions';
import { ContactDTO } from './../contacts/types';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { MessagesTypes, MessageDTO } from './types';
import { setMessages, addNewMessage } from './actions';

interface AddMessageSocketParams {
  type: MessagesTypes;
  payload: {
    message: MessageDTO;
  };
}

export function* loadMessages() {
  const { messages, contacts } = yield select();
  const { id, contact } = messages.data.currentChat;

  const response = yield call(api.get, `messages/${contact.id}`);

  yield put(setMessages(response.data));

  const findContact = contacts.data.find(
    (contact: ContactDTO) => contact.id === id
  );

  findContact.unreadMessages = 0;

  yield put(updateContact(findContact));

  yield call(api.patch, `/messages/${findContact.contact.id}`);
}

export function* addMessageSocket({ payload }: AddMessageSocketParams) {
  const state = yield select();

  const { currentChat } = state.messages.data;
  const { data: contacts } = state.contacts;

  const { message } = payload;

  const findContact = contacts.find(
    (contact: ContactDTO) => contact.contact.id === message.ownerId
  );

  findContact.lastMessage = message.text;
  findContact.unreadMessages += 1;

  if (currentChat?.id) {
    if (currentChat?.contact?.id === message.ownerId) {
      yield put(addNewMessage(message));
      findContact.unreadMessages -= 1;

      yield call(api.patch, `/messages/${message.ownerId}`);
    }
  }

  yield put(updateContact(findContact));
}

export default all([
  takeLatest(MessagesTypes.SET_CURRENT_CHAT, loadMessages),
  takeLatest(MessagesTypes.SET_MESSAGE_SOCKET, addMessageSocket),
]);
