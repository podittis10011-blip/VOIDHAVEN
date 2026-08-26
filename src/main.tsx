// 当前文件为：React 的启动文件，创建 React 根节点、加载全局 CSS、渲染 App

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
