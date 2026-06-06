import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiBriefcase, HiHeart } from "react-icons/hi";
import "./About.css";

const stats = [
  { icon: HiAcademicCap, value: "1+", label: "Years Learning" },
  { icon: HiCode, value: "SMA IT HSI", label: "Student" },
  { icon: HiHeart, value: "Web Dev", label: "Enthusiast" },
  { icon: HiBriefcase, value: "Lifelong", label: "Learner" },
];

const timeline = [
  { year: "2024", title: "Started Learning", desc: "Memulai perjalanan belajar coding dari dasar HTML, CSS, dan JavaScript." },
  { year: "2025", title: "First Project", desc: "Membangun website sederhana menggunakan HTML, CSS, dan JavaScript untuk latihan." },
  { year: "2026", title: "Deep Dive", desc: "Mendalami React dan framework modern, serta mulai belajar Node.js dan database." },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Get to know more about my journey and passion</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-text">
              <h3>My Journey in Technology</h3>
              <p>
                Hello! I'm Syihaam Mubarok, a student at SMA IT HSI with a strong interest in technology and web development.
              </p>
              <p>
                My journey started with curiosity about how websites are created. Over the past year, I have been learning modern web technologies, exploring programming concepts, and building projects to improve my skills.
              </p>
              <p>
                I enjoy learning new things, solving problems, and turning ideas into digital experiences. Every project is an opportunity to grow, gain experience, and challenge myself to become better.
              </p>
              <p>
                My goal is to continue learning, create meaningful projects, and contribute to the world of technology while inspiring others to keep growing.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <stat.icon className="stat-icon" />
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>My Journey</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content glass">
                    <span className="timeline-year">{item.year}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
