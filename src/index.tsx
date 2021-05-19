import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from './Root';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.querySelector('#root'),
);
