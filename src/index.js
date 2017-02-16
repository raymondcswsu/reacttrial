import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'; 
import page1 from './page1'; 
import page2 from './page2'; 

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path='/' component={App}/>
  <Route path='/page1' component={page1}/>
  <Route path='/page2' component={page2}/>
  </Router>,
  document.getElementById('root')
);
