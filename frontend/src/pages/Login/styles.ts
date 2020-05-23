import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${props => props.theme.colors.secundary};
  flex: 1;
  height: 95%;
  width: 75%;

  position: absolute;
  top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 80px;

  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1440px) {
    height: 100%;
    width: 100%;
    top: 0;
  }

  img {
    height: 300px;
    width: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 100px;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;

  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;

  background: ${props => props.theme.colors.primary};

  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  transition: all 0.2s;

  :hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }

  :active {
    transform: scale(0.85);
  }
`;

export const Register = styled.div`
  margin-top: 20px;
  padding: 20px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  font-size: 1.5rem;

  border: 1px solid ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.primary};

  cursor: pointer;

  :hover {
    opacity: 0.8;
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;
