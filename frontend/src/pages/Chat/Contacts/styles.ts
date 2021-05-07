import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 30%;
  min-width: 250px;

  @media (max-width: 800px) {
    width: 50%;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContactsList = styled.div`
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
`;

export const User = styled.div`
  padding: 20px;
  height: 60px;
  background: ${props => props.theme.colors.panel};
  box-shadow: 0px 1px 1px 0.5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    margin-left: 15px;
    font-size: 1.3rem;
  }
`;
