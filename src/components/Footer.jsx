import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
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
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
            <SiTiktok />
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
