import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { testimonialsData } from "../data/testimonials";
import "./Testimonials.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Testimonials</h2>
          <p>What people say about me</p>
        </motion.div>

        <div className="testimonials-slider">
          <button className="testimonial-arrow prev" onClick={prev} aria-label="Previous">
            <HiChevronLeft />
          </button>

          <div className="testimonial-viewport">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonial-card glass"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonial-avatar">
                  <img src={testimonialsData[current].avatar} alt={testimonialsData[current].name} />
                </div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonialsData[current].text}"</p>
                <h4 className="testimonial-name">{testimonialsData[current].name}</h4>
                <span className="testimonial-role">{testimonialsData[current].role}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonial-arrow next" onClick={next} aria-label="Next">
            <HiChevronRight />
          </button>

          <div className="testimonial-dots">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
