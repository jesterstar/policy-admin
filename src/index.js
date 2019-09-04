import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { rootStore } from './redux/stores';
import * as serviceWorker from './serviceWorker';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, rootStore);

ReactDOM.render(
  <Provider store={rootStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.e
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();