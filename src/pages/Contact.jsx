import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import "../sections/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const text = `Halo Syihaam, saya melihat portfolio Anda dan ingin menghubungi Anda.\n\nNama: ${name.trim()}\n\nEmail: ${email.trim()}\n\nPesan:\n${message.trim()}`;

    window.open(`https://wa.me/6285213215030?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's work together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>
              I'm always open to new opportunities, collaborations, and
              interesting projects. Feel free to reach out anytime!
            </p>

            <div className="contact-social">
              <a href="https://github.com/syihaam" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FiGithub /> GitHub
              </a>
              <a href="https://www.instagram.com/syi_mubrock/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FiInstagram /> Instagram
              </a>
              <a href="https://www.tiktok.com/@syihaam0_0" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <SiTiktok /> TikTok
              </a>
              <a href="https://wa.me/6285213215030" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label htmlFor="name">
                <FiUser /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FiMail /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FiMessageSquare /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn btn-primary btn-submit">
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
