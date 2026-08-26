// 路由总入口：它决定访问不同 URL 时显示哪个页面
// 配置页面出现的入口

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RoutePlaceholderPage } from './pages/RoutePlaceholderPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'competitions',
        element: (
          <RoutePlaceholderPage
            title="竞赛"
            description="竞赛列表、筛选与详情将在第 4 阶段实现。"
          />
        ),
      },
      {
        path: 'teams',
        element: (
          <RoutePlaceholderPage title="组队" description="组队列表与详情将在第 5 阶段实现。" />
        ),
      },
      {
        path: 'submit',
        element: (
          <RoutePlaceholderPage
            title="投稿"
            description="投稿说明与可配置入口将在第 6 阶段实现。"
          />
        ),
      },
      {
        path: 'join',
        element: (
          <RoutePlaceholderPage
            title="加入我们"
            description="项目角色说明与联系入口将在第 6 阶段实现。"
          />
        ),
      },
      {
        path: 'about',
        element: (
          <RoutePlaceholderPage
            title="关于"
            description="完整项目故事与公开项目信息将在第 6 阶段实现。"
          />
        ),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
