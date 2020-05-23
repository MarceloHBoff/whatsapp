import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 70%;

  @media (max-width: 800px) {
    width: 50%;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 80px;

  @media (max-width: 800px) {
    padding: 10px 20px;
    font-size: 50%;
  }

  background: ${props => props.theme.colors.chatBackground};

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
`;

export const Contact = styled.header`
  padding: 20px;
  height: 60px;
  background: ${props => props.theme.colors.panel};
  box-shadow: 0px 1px 1px 0.5px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  margin-left: 10px;

  div {
    font-size: 1.2rem;
  }

  div + div {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.text};
  }
`;

export const InputMessage = styled.footer`
  height: 60px;
  background: ${props => props.theme.colors.panel};
  box-shadow: 0px -1px 1px 0.5px rgba(0, 0, 0, 0.2);
  padding: 10px 1.5rem;

  input {
    height: 100%;
    width: 100%;

    font-size: 1rem;

    border-radius: 21px;
    padding: 10px 20px;
    border: 0;
  }
`;

export const DefaultImage = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  img {
    height: 400px;

    @media (max-width: 800px) {
      height: 200px;
    }
  }
`;
