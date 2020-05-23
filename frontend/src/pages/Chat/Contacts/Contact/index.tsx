import React from 'react';

import Avatar from '../../../../components/Avatar';

import { Container, Content, ContactInfo } from './styles';

interface ContactProps {
  name: string;
  lastMessage: string;
  unreadMessages: number;
  handleClick: () => void;
}

const Contact: React.FC<ContactProps> = ({
  name,
  lastMessage,
  unreadMessages,
  handleClick,
}) => (
  <Container onClick={handleClick}>
    <Content>
      <Avatar name={name} size={50} />

      <ContactInfo>
        <div>{name}</div>
        <div>{lastMessage}</div>
      </ContactInfo>
    </Content>

    {!!unreadMessages && <span>{unreadMessages}</span>}
  </Container>
);

export default Contact;
