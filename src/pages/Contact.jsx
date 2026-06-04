import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin, FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import "../sections/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FiGithub /> GitHub
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FiInstagram /> Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <SiTiktok /> TikTok
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

            <button type="submit" className="btn btn-primary btn-submit">
              <FiSend /> {sent ? "Sent Successfully!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
