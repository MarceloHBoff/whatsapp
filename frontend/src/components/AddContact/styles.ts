import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  color: ${props => props.theme.colors.text};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 400px;
  }

  input {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;

    font-size: 1.5rem;
    margin-top: 80px;
  }

  button {
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    border-radius: 10px;
    border: 2px solid #ccc;

    background: ${props => props.theme.colors.primary};

    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};
    font-weight: bold;

    :hover {
      background: ${props => shade(0.2, props.theme.colors.primary)};
    }

    :active {
      transform: scale(0.95);
    }
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;

  position: absolute;
  color: #fff;

  top: 40px;
  right: 50px;

  font-size: 2rem;
`;
