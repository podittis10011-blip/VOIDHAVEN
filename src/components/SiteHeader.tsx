import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  { to: '/competitions', label: '竞赛' },
  { to: '/teams', label: '组队' },
  { to: '/submit', label: '投稿' },
  { to: '/join', label: '加入我们' },
  { to: '/about', label: '关于' },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-frame site-header__inner">
        <NavLink className="brand" to="/" end onClick={closeMenu}>
          <span className="brand__name">VOIDHAVEN</span>
          <span className="brand__subtitle">求索袋底洞</span>
        </NavLink>

        <button
          className="menu-trigger"
          type="button"
          aria-label={isMenuOpen ? '关闭主导航' : '打开主导航'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${isMenuOpen ? 'site-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="主导航"
        >
          {navigationItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
              }
              key={item.to}
              to={item.to}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
