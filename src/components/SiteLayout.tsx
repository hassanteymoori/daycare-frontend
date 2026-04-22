import { NavLink, Outlet } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact us' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="top-note">Enrollment open for Summer 2026</div>

      <header className="main-header">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">Y</span>
          <span>
            <strong>Yalda Childcare</strong>
            <small>Playful learning, peaceful care</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Primary navigation">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'menu-link menu-link-active' : 'menu-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Yalda Childcare</p>
        <p>Mon-Fri | 7:30 AM-5:30 PM | hello@yaldachildcare.com</p>
      </footer>
    </div>
  )
}