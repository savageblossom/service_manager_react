import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './scss/index.scss';
import './theme';
// import * as serviceWorker from './serviceWorker';

import App from './components/App';

import AuthStore from './stores/AuthStore';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

export const AuthStoreContext = React.createContext();

ReactDOM.render(
  <AuthStoreContext.Provider value={AuthStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthStoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
