import { FiExternalLink, FiGithub, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { tahfidzData } from "../data/tahfidz";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects</h2>
          <p>Showcasing my work in software development and Quran memorization</p>
        </motion.div>

        <div className="projects-category">
          <h3 className="projects-category-title">IT Projects</h3>
          <div className="projects-grid">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                      <FiExternalLink />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <FiGithub /> GitHub Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="projects-category">
          <h3 className="projects-category-title">Tahfidz Projects</h3>
          <div className="projects-grid">
            {tahfidzData.map((item, i) => (
              <motion.div
                key={item.id}
                className="project-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="project-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="project-overlay project-overlay--single">
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-overlay-btn"
                    >
                      <FiPlay />
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="project-links">
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <FiExternalLink /> Watch Examination
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
