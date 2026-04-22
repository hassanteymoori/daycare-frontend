import { NavLink, Outlet } from 'react-router-dom'
import yaldaPortrait from '../assets/yalda.jpg'

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

      <main className="page-main content-shell">
        <aside className="left-sidebar panel">
          <img className="sidebar-photo" src={yaldaPortrait} alt="Yalda" />
          <p className="eyebrow">Hello,</p>
          <h2>I&apos;m Yalda</h2>
          <p>
            I founded Yalda Childcare in 2018, driven by my love for working with
            children. I care for little ones from newborns to 5 years old and
            create a safe, warm, and nurturing environment where every child can
            thrive.
          </p>

          <div className="sidebar-meta">
            <p>Woodinville Childcare Center</p>
            <a href="/reviews">Yalda&apos;s Reviews</a>
          </div>

          <div className="sidebar-meta">
            <strong>Get Started Today</strong>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Google
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>

          <div className="sidebar-meta">
            <a href="tel:+14252986424">(425) 298-6424</a>
            <p>Yalda Child Care Center</p>
            <p>Woodinville, WA 98072</p>
            <a href="/contact">Contact us</a>
          </div>

          <div className="map-wrap">
            <iframe
              title="Yalda Childcare location"
              src="https://maps.google.com/maps?q=Woodinville%20WA%2098072&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        <section className="content-area">
          <Outlet />
        </section>
      </main>

      <footer className="site-footer">
        <p>Yalda Childcare</p>
        <p>Licensed Family Child Care in Cottage Lake, Woodinville</p>
      </footer>
    </div>
  )
}