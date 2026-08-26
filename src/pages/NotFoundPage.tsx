import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="page page--centered" aria-labelledby="not-found-title">
      <p className="eyebrow">404</p>
      <h1 id="not-found-title">页面不存在</h1>
      <p className="page-intro">你访问的页面或资源不存在。</p>
      <Link className="button-link" to="/">
        返回首页
      </Link>
    </section>
  );
}
