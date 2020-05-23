import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DropDown from '../../../components/DropDown';
import Avatar from '../../../components/Avatar';

import api from '../../../services/api';

import { IApplicationState } from '../../../store';
import { ContactDTO } from '../../../store/modules/contacts/types';
import { setCurrentChat } from '../../../store/modules/currentChat/actions';

import Contact from './Contact';
import { Container, User, ContactsList } from './styles';

const Contacts: React.FC = () => {
  const user = useSelector((s: IApplicationState) => s.auth.user);
  const contacts = useSelector((s: IApplicationState) => s.contacts.data);

  const dispatch = useDispatch();

  async function handleClickContact(contact: ContactDTO) {
    dispatch(setCurrentChat(Object.assign(contact, { unreadMessages: 0 })));

    await api.patch(`/messages/${contact.contact.id}`);
  }

  return (
    <Container>
      <User>
        <div>
          <Avatar name={user.name} size={36} />
          <span>{user.name}</span>
        </div>

        <DropDown options={['Add contact', 'SignOut', 'Change Theme']} />
      </User>

      <ContactsList>
        {contacts.map((c: ContactDTO) => (
          <Contact
            key={c.id}
            name={c.contact.name}
            lastMessage={c.lastMessage}
            unreadMessages={c.unreadMessages}
            handleClick={() => handleClickContact(c)}
          />
        ))}
      </ContactsList>
    </Container>
  );
};

export default Contacts;
