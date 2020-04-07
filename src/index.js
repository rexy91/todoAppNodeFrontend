import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todosReducer from './Redux/todosReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

let storeObj = createStore( todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
ReactDOM.render(

  <React.StrictMode>
    <Provider store = {storeObj}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
