import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faBars, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import {store} from './store'
import Dashboard from './dashboard';

// Builds FontAwesome Library to use font icons throughout
library.add(faMobileAlt, faBars, faTimes, faPlus, faMinus, faInstagram, faTwitter);

ReactDOM.render(
  <Provider store={store}>
      <Dashboard />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
