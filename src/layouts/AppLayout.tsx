// 全站共同外壳。现在只包含主内容区域和“跳至主要内容”链接；后续 Header 与 Footer 会放进这里
// 所有页面共有的结构

import { Outlet } from 'react-router-dom';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export function AppLayout() {
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">
        跳至主要内容
      </a>

       <SiteHeader />

      <main className="site-main" id="main-content">
        <Outlet />
      </main>
      
      <SiteFooter />
    </div>
  );
}
