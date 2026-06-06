import { Link } from "react-router-dom";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-accent">P</span>ortfolio
          </Link>
          <p className="footer-quote">
            "Code is like poetry. It should be clean, elegant, and meaningful."
          </p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/syihaam" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.instagram.com/syi_mubrock/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://www.tiktok.com/@syihaam0_0" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
            <SiTiktok />
          </a>
          <a href="https://wa.me/6285213215030" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Your Name. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
