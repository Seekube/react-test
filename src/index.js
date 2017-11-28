//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Custom modules
import './index.css';
import store from './store';

//Custom components
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
