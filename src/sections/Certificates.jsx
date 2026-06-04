import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { certificatesData } from "../data/certificates";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Certificates</h2>
          <p>Professional certifications I've earned</p>
        </motion.div>

        <div className="certificates-grid">
          {certificatesData.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="certificate-overlay">
                  <FiExternalLink />
                </div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
