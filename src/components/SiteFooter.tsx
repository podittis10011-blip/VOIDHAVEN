import { Link } from 'react-router-dom';
import { externalLinks } from '../config/externalLinks';
import { ExternalAction } from './ExternalAction';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame site-footer__grid">
        <section className="site-footer__brand" aria-label="VOIDHAVEN 品牌信息">
          <p className="site-footer__name">求索袋底洞 · VOIDHAVEN</p>
          <p>A haven for seekers.</p>
        </section>

        <section className="site-footer__group" aria-labelledby="footer-explore">
          <h2 id="footer-explore">探索</h2>
          <Link to="/competitions">竞赛</Link>
          <Link to="/teams">组队</Link>
          <Link to="/submit">投稿</Link>
        </section>

        <section className="site-footer__group" aria-labelledby="footer-project">
          <h2 id="footer-project">项目</h2>
          <Link to="/about">关于</Link>
          <Link to="/join">加入我们</Link>
          <ExternalAction href={externalLinks.github} label="GitHub" />
        </section>

        <section className="site-footer__group" aria-labelledby="footer-connect">
          <h2 id="footer-connect">连接</h2>
          <ExternalAction href={externalLinks.community} label="VOIDHAVEN 社群" />
          <ExternalAction href={externalLinks.contact} label="联系入口" />
        </section>
      </div>

      <div className="site-frame site-footer__copyright">© 2026 VOIDHAVEN</div>
    </footer>
  );
}
