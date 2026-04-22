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
import type { LucideIcon } from 'lucide-react'
import yaldaPortrait from '../assets/yalda.jpg'
import { siteContent } from '../data/content'

const menuIcons: Record<string, LucideIcon> = {
  home: House,
  gallery: GalleryHorizontal,
  contact: PhoneCall,
  reviews: Star,
  programs: BookOpenText,
  about: UserRound,
}

const socialIcons: Record<string, LucideIcon> = {
  google: Globe,
  instagram: Camera,
  facebook: Users,
}

export function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="top-note">{siteContent.topNote}</div>

      <header className="main-header">
        <NavLink to="/" className="brand" end>
          <span className="brand-mark">{siteContent.brand.mark}</span>
          <span>
            <strong>{siteContent.brand.name}</strong>
            <small>{siteContent.brand.tagline}</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Primary navigation">
          {siteContent.menu.map((item) => {
            const MenuIcon = menuIcons[item.iconKey] ?? House
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? 'menu-link menu-link-active' : 'menu-link'
                }
              >
                <MenuIcon size={15} aria-hidden="true" />
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </header>

      <main className="page-main content-shell">
        <aside className="left-sidebar panel">
          <img className="sidebar-photo" src={yaldaPortrait} alt="Yalda" />
          <p className="eyebrow">{siteContent.sidebar.greeting}</p>
          <h2>{siteContent.sidebar.introTitle}</h2>
          <p>{siteContent.sidebar.introBody}</p>

          <div className="sidebar-meta">
            <p className="meta-line">
              <MapPin size={15} aria-hidden="true" />
              {siteContent.sidebar.centerLabel}
            </p>
            <a href={siteContent.sidebar.reviewsLink} className="meta-link">
              <Star size={15} aria-hidden="true" />
              {siteContent.sidebar.reviewsLinkLabel}
            </a>
          </div>

          <div className="sidebar-meta">
            <strong className="meta-line">
              <ShieldCheck size={15} aria-hidden="true" />
              {siteContent.sidebar.getStartedLabel}
            </strong>
            {siteContent.sidebar.socials.map((social) => {
              const SocialIcon = socialIcons[social.iconKey] ?? Globe
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="meta-link"
                >
                  <SocialIcon size={15} aria-hidden="true" />
                  {social.label}
                </a>
              )
            })}
          </div>

          <div className="sidebar-meta">
            <a href={siteContent.sidebar.phoneHref} className="meta-link">
              <Phone size={15} aria-hidden="true" />
              {siteContent.sidebar.phoneDisplay}
            </a>
            <p className="meta-line">
              <Mail size={15} aria-hidden="true" />
              {siteContent.sidebar.email}
            </p>
            <p className="meta-line">
              <MapPin size={15} aria-hidden="true" />
              {siteContent.sidebar.cityLine}
            </p>
            <a href={siteContent.sidebar.contactLink} className="meta-link">
              <PhoneCall size={15} aria-hidden="true" />
              {siteContent.sidebar.contactLabel}
            </a>
          </div>

          <div className="map-wrap">
            <iframe
              title={siteContent.sidebar.mapTitle}
              src={siteContent.sidebar.mapEmbedUrl}
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
          {siteContent.footer.primary}
        </p>
        <p className="meta-line">
          <Clock3 size={15} aria-hidden="true" />
          {siteContent.footer.secondary}
        </p>
      </footer>
    </div>
  )
}