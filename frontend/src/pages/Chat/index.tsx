import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddContact from '../../components/AddContact';

import api from '../../services/api';
import {
  connect,
  disconnect,
  subscribeNewMessage,
} from '../../services/socket';

import { setContacts } from '../../store/modules/contacts/actions';
import { setMessageSocket } from '../../store/modules/messages/actions';
import { MessageDTO } from '../../store/modules/messages/types';
import { IApplicationState } from '../../store';

import Contacts from './Contacts';
import Talk from './Talk';
import { Container } from './styles';

const Chat: React.FC = () => {
  const user = useSelector((s: IApplicationState) => s.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get('contacts');

      dispatch(setContacts(response.data));

      disconnect();
      connect(user.id);
    }

    loadContacts();
  }, [user.id, dispatch]);

  useEffect(() => {
    subscribeNewMessage(message => handleNewMessage(message));

    function handleNewMessage(message: MessageDTO) {
      dispatch(setMessageSocket(message));
    }
  }, [dispatch]);

  return (
    <Container>
      <Contacts />
      <Talk />
      <AddContact />
    </Container>
  );
};

export default Chat;
