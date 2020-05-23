import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      chatBackground: string;
      panel: string;
      text: string;

      messageOwn: string;
      messageReceive: string;
    };
  }
}
