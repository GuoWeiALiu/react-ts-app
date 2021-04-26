import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Inner } from './App_styled';

export interface IAppProps {
  loadState?: () => void,
  hasBeenInitialized?: boolean,
}

export class App extends React.Component<IAppProps> {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <Inner>Hello</Inner>
      </ThemeProvider>
    );
  }
}
