import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Avatar from '../../../components/Avatar';

import api from '../../../services/api';

import { IApplicationState } from '../../../store';
import { setContacts } from '../../../store/modules/contacts/actions';

import updateLastMessage from '../../../utils/updateLastMessage';
import { MessageDTO } from '../index';

import {
  Container,
  Contact,
  UserInfo,
  Messages,
  InputMessage,
  DefaultImage,
} from './styles';
import Message from './Message';

interface TalkProps {
  messages: MessageDTO[];
  setMessages(messages: React.SetStateAction<MessageDTO[]>): void;
}

const Talk: React.FC<TalkProps> = ({ messages, setMessages }) => {
  const [typeMessage, setTypeMessage] = useState('');

  const contacts = useSelector((s: IApplicationState) => s.contacts.data);
  const currentChat = useSelector((s: IApplicationState) => s.currentChat.data);

  const dispatch = useDispatch();

  async function handleEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode !== 13) return;

    if (typeMessage === '') return;

    const { id, contact } = currentChat;

    const { data: newMessage } = await api.post(`messages/${contact.id}`, {
      text: typeMessage,
    });

    const updatedContacts = updateLastMessage(id, contacts, typeMessage);

    dispatch(setContacts(updatedContacts));

    setMessages([newMessage, ...messages]);
    setTypeMessage('');
  }

  return (
    <Container>
      {!currentChat.id ? (
        <DefaultImage>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Logo"
          />
        </DefaultImage>
      ) : (
        <>
          <Contact>
            <Avatar name={currentChat.contact.name} size={42} />

            <UserInfo>
              <div>{currentChat.contact.name}</div>
              <div>online</div>
            </UserInfo>
          </Contact>

          <Messages>
            {messages.map(m => (
              <Message key={m.id} own={m.ownerId !== currentChat.contact.id}>
                {m.text}
              </Message>
            ))}
          </Messages>

          <InputMessage>
            <input
              placeholder="Type a message"
              value={typeMessage}
              onKeyUp={handleEnter}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTypeMessage(e.target.value)
              }
            />
          </InputMessage>
        </>
      )}
    </Container>
  );
};

export default Talk;
