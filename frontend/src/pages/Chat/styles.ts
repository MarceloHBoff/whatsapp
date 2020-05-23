import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.secundary};
  flex: 1;
  height: 95%;
  width: 75%;

  position: absolute;
  top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1440px) {
    height: 100%;
    width: 100%;
    top: 0;
  }
`;
