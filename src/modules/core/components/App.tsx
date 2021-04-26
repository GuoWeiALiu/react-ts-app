import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Inner } from './App_styled';

export interface AntProps {
  name?: string
  company?: string
}

export class App extends React.Component<AntProps> {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <Inner>Hello</Inner>
      </ThemeProvider>
    );
  }
}
