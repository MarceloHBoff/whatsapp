import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddContact from '../../components/AddContact';

import api from '../../services/api';
import {
  connect,
  disconnect,
  subscribeNewMessage,
} from '../../services/socket';

import { setContacts } from '../../store/modules/contacts/actions';
import { IApplicationState } from '../../store';
import updateLastMessage from '../../utils/updateLastMessage';

import Contacts from './Contacts';
import Talk from './Talk';
import { Container } from './styles';

export interface MessageDTO {
  id: number;
  owner: object;
  ownerId: number;
  receiverId: number;
  text: string;
  date: Date;
  read: boolean;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageDTO[]>([]);

  const user = useSelector((s: IApplicationState) => s.auth.user);
  const contacts = useSelector((s: IApplicationState) => s.contacts.data);
  const currentChat = useSelector((s: IApplicationState) => s.currentChat.data);

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
    async function loadMessages() {
      if (!currentChat?.id) return;

      setMessages([]);

      const { id, contact } = currentChat;

      const { data } = await api.get(`messages/${contact.id}`);

      if (data.length === 0) return;

      setMessages(data);

      const updatedContacts = updateLastMessage(id, contacts, data[0].text);

      dispatch(setContacts(updatedContacts));
    }

    loadMessages();
  }, [currentChat, dispatch]);

  useEffect(() => {
    subscribeNewMessage(message => handleNewMessage(currentChat, message));

    function handleNewMessage(a: object, message: MessageDTO) {
      console.log('aqui');
      console.log(message);

      console.log(a);

      // if (currentChat?.contact?.id === message.ownerId) {
      //   console.log('dale');
      // }

      //   if (contacts.length === 0) return;

      //   if (!!id) {
      //       setMessages([message, ...messages]);

      //       const findContactIndex = contacts.findIndex(
      //         contact => contact.contact.id === message.ownerId
      //       );

      //       if (findContactIndex >= 0) {
      //         contacts[findContactIndex].lastMessage = message.text;

      //         dispatch(setContacts(contacts));
      //       }

      //       return;
      //     }
      //   }

      //   const findContactIndex = contacts.findIndex(
      //     contact => contact.contact.id === message.ownerId
      //   );

      //   if (
      //     findContactIndex >= 0 &&
      //     contacts[findContactIndex].lastMessage !== message.text
      //   ) {
      //     contacts[findContactIndex].lastMessage = message.text;

      //     contacts[findContactIndex].unreadMessages += 1;
      //     dispatch(setContacts(contacts));
      //   }
    }
  }, [currentChat]);

  return (
    <Container>
      <Contacts />
      <Talk messages={messages} setMessages={setMessages} />
      <AddContact />
    </Container>
  );
};

export default Chat;
