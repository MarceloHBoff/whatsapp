import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import { Container, Center } from './styles';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

import Routes from './routes';

import { IApplicationState } from './store';

export default function App() {
  const theme = useSelector((s: IApplicationState) => s.auth.theme);

  return (
    <Container>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <Header />
        <Center>
          <Routes />
        </Center>
      </ThemeProvider>
    </Container>
  );
}
