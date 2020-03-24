import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Posts} from './posts';

window.onload = () => {
  console.log("LOADING D and D APP");
  console.log("LOADING...");
  var appNode = document.querySelector('.posts-app');
  ReactDOM.render(<Posts />, appNode);
  console.log("DONE");
};