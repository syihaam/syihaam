import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Hero.css";

const roles = [
  "Student Developer",
  "Web Enthusiast",
  "Frontend Learner",
  "Tech Explorer",
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
            Hi, I'm <span className="hero-name">Syihaam Mubarok</span>
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
            I am a student at SMA IT HSI who is passionate about technology and continuous self-development. Over the past year, I have been learning web development, exploring modern technologies, and building projects to improve my skills. I enjoy turning ideas into digital experiences and strive to grow as a developer every day.
          </motion.p>

          <motion.p
            className="hero-motto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Turning Curiosity Into Creation
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
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
            <a href="https://github.com/syihaam" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.instagram.com/syi_mubrock/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://www.tiktok.com/@syihaam0_0" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok />
            </a>
            <a href="mailto:syihaam.1@gmail.com" aria-label="Email">
              <HiMail />
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
            <img src="/img/home.jpg" alt="Syihaam Mubarok" className="hero-image" />
          </div>
          <div className="hero-floating-icons">
            <div className="floating-icon fi-1">
              <FiGithub />
            </div>
            <div className="floating-icon fi-2">
              <HiMail />
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
