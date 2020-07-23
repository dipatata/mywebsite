import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import reducer from './reduxStore/reducer'
import {createStore } from 'redux'
import {Provider} from 'react-redux'; 

const store = createStore(reducer);

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
serviceWorker.unregister();
