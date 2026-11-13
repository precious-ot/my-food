import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/Home", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClassName = ({ isActive }) =>
    `site-nav__link${isActive ? " site-nav__link--active" : ""}`;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/Home" onClick={() => setMenuOpen(false)}>
          <span className="site-brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 3v7m-2-7v4a2 2 0 0 0 4 0V3m-2 6v12M14 3v18m0-18c3 2 4 5 4 8h-4" />
            </svg>
          </span>
          <span className="site-brand__name">The Luxury <em>Restaurant</em></span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} className={linkClassName} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link className="site-header__cta" to="/contact">
          Reserve a table <span aria-hidden="true">↗</span>
        </Link>

        <button
          className="site-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="site-nav-mobile"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                className={linkClassName}
                to={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              className="site-nav-mobile__cta"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Reserve a table
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
