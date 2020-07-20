import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './scss/index.scss';
import './theme';

// import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

// app itself
import App from './components/App';

// mobx AUTH store
import AuthStore from './stores/AuthStore';

// mobx UI store
import UIStore from './stores/UIStore';

// context exports
export const AuthStoreContext = React.createContext();
export const UIStoreContext = React.createContext();

ReactDOM.render(
  <AuthStoreContext.Provider value={AuthStore}>
    <UIStoreContext.Provider value={UIStore}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </UIStoreContext.Provider>
  </AuthStoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
