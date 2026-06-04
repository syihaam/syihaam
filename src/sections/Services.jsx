import { motion } from "framer-motion";
import { servicesData } from "../data/services";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Services</h2>
          <p>What I can do for you</p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
