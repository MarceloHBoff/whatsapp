import styled from 'styled-components';

interface MessageProps {
  own?: boolean;
}

export const Container = styled.div<MessageProps>`
  margin-bottom: 2px;
  text-align: ${props => (props.own ? 'right' : 'left')};

  span {
    display: inline-block;
    padding: 7px;
    border-radius: 8px;
    flex: 1;
    font-size: 1rem;

    background: ${props =>
      props.own
        ? props.theme.colors.messageOwn
        : props.theme.colors.messageReceive};
  }
`;
