import { NavLink, Outlet } from 'react-router-dom'
import {
  BookOpenText,
  Camera,
  Clock3,
  GalleryHorizontal,
  Globe,
  House,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
  UserRound,
} from 'lucide-react'
import yaldaPortrait from '../assets/yalda.jpg'

const menuItems = [
  { to: '/', label: 'Home', end: true, icon: House },
  { to: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { to: '/contact', label: 'Contact us', icon: PhoneCall },
  { to: '/reviews', label: 'Reviews', icon: Star },
  { to: '/programs', label: 'Programs', icon: BookOpenText },
  { to: '/about', label: 'About', icon: UserRound },
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
              <item.icon size={15} aria-hidden="true" />
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
            <p className="meta-line">
              <MapPin size={15} aria-hidden="true" />
              Woodinville Childcare Center
            </p>
            <a href="/reviews" className="meta-link">
              <Star size={15} aria-hidden="true" />
              Yalda&apos;s Reviews
            </a>
          </div>

          <div className="sidebar-meta">
            <strong className="meta-line">
              <ShieldCheck size={15} aria-hidden="true" />
              Get Started Today
            </strong>
            <a href="https://google.com" target="_blank" rel="noreferrer" className="meta-link">
              <Globe size={15} aria-hidden="true" />
              Google
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="meta-link">
              <Camera size={15} aria-hidden="true" />
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="meta-link">
              <Users size={15} aria-hidden="true" />
              Facebook
            </a>
          </div>

          <div className="sidebar-meta">
            <a href="tel:+14252986424" className="meta-link">
              <Phone size={15} aria-hidden="true" />
              (425) 298-6424
            </a>
            <p className="meta-line">
              <Mail size={15} aria-hidden="true" />
              hello@yaldachildcare.com
            </p>
            <p className="meta-line">
              <MapPin size={15} aria-hidden="true" />
              Woodinville, WA 98072
            </p>
            <a href="/contact" className="meta-link">
              <PhoneCall size={15} aria-hidden="true" />
              Contact us
            </a>
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
        <p className="meta-line">
          <ShieldCheck size={15} aria-hidden="true" />
          Yalda Childcare
        </p>
        <p className="meta-line">
          <Clock3 size={15} aria-hidden="true" />
          Licensed Family Child Care in Cottage Lake, Woodinville
        </p>
      </footer>
    </div>
  )
}