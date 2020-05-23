import React from 'react';

import { Container } from './styles';

interface MessageProps {
  own?: boolean;
  children: any;
}

const Message: React.FC<MessageProps> = ({ own, children }) => (
  <Container own={own}>
    <span>{children}</span>
  </Container>
);

export default Message;
