import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import store from './components/redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
