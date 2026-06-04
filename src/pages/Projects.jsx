import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../sections/Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p>Some of my recent works that I'm proud of</p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
