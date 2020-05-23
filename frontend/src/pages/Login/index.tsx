import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest, signUpRequest } from '../../store/modules/auth/actions';

import { Container, Form, Input, Button, Register } from './styles';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [register, setRegister] = useState(false);

  const dispatch = useDispatch();

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(signUpRequest({ name, email }));

    setName('');
    setEmail('');
    setRegister(false);
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(signInRequest({ email }));
  }

  return (
    <Container>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="Logo"
      />

      {register ? (
        <Form onSubmit={handleRegister}>
          <Input
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <Button type="submit">Register</Button>
          <Register onClick={() => setRegister(false)}>LogIn</Register>
        </Form>
      ) : (
        <Form onSubmit={handleLogin}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <Button type="submit">Login</Button>
          <Register onClick={() => setRegister(true)}>Register</Register>
        </Form>
      )}
    </Container>
  );
};

export default Login;
