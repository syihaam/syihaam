import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
  );
}
