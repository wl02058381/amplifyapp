import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* 1. 匯入 Amplify 核心 & 組態 */
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

/* 2. 初始化 Amplify */
Amplify.configure(awsconfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
