import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiDownload } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Hero.css";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Content Creator",
  "Tech Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, 50);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const handleDownloadCV = () => {
    alert("Download CV - Tambahkan link CV Anda di sini");
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-bg-glow-2" />
      <div className="hero-bg-grid" />

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">Welcome to My Portfolio</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm <span className="hero-name">Your Name</span>
          </motion.h1>

          <motion.div
            className="hero-typing"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="typing-text">{text}</span>
            <span className="typing-cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build modern, scalable, and high-performance web applications
            with cutting-edge technologies. Passionate about creating
            exceptional digital experiences.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="btn btn-primary" onClick={handleDownloadCV}>
              <FiDownload /> Download CV
            </button>
            <Link to="/contact" className="btn btn-outline">
              <HiMail /> Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-image-glow" />
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="hero-floating-icons">
            <div className="floating-icon fi-1">
              <FiGithub />
            </div>
            <div className="floating-icon fi-2">
              <FiLinkedin />
            </div>
            <div className="floating-icon fi-3">
              <FiInstagram />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
