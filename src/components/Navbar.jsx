import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/navigation";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => setIsOpen(false);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-accent">S</span>yihaam
        </NavLink>

        <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar-mobile-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
