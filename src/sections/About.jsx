import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiBriefcase, HiHeart } from "react-icons/hi";
import "./About.css";

const stats = [
  { icon: HiCode, value: "50+", label: "Projects Completed" },
  { icon: HiAcademicCap, value: "3+", label: "Years Experience" },
  { icon: HiHeart, value: "30+", label: "Happy Clients" },
  { icon: HiBriefcase, value: "10+", label: "Technologies" },
];

const timeline = [
  { year: "2021", title: "Started Learning", desc: "Memulai perjalanan belajar coding dari dasar HTML, CSS, dan JavaScript." },
  { year: "2022", title: "First Project", desc: "Menyelesaikan project web pertama dan mulai freelance kecil-kecilan." },
  { year: "2023", title: "Deep Dive", desc: "Mendalami React, Node.js, dan framework modern. Mulai aktif di komunitas." },
  { year: "2024", title: "Professional", desc: "Bekerja sebagai full-stack developer dan mengerjakan project skala besar." },
  { year: "2025", title: "Expert Level", desc: "Menguasai arsitektur sistem, cloud deployment, dan mentoring junior developer." },
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
              <h3>A Passionate Developer & Creator</h3>
              <p>
                Halo! Saya seorang Full Stack Developer yang memiliki passion
                dalam membangun aplikasi web modern dan inovatif. Dengan
                pengalaman lebih dari 3 tahun di dunia pengembangan web, saya
                selalu berusaha memberikan solusi terbaik melalui kode yang
                bersih, efisien, dan scalable.
              </p>
              <p>
                Saya percaya bahwa teknologi adalah alat untuk menciptakan
                dampak positif. Setiap project adalah kesempatan untuk belajar
                hal baru dan mendorong batas kreativitas.
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
