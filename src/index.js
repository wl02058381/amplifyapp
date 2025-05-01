import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 1. 匯入 Amplify 核心 & 組態 */
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

/* 2. 初始化 Amplify */
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
