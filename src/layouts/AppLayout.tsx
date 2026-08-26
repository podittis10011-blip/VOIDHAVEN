import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">
        跳至主要内容
      </a>

      <main className="site-main" id="main-content">
        <Outlet />
      </main>
    </div>
  );
}