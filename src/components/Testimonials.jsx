import { useState, useEffect } from 'react';
import Inner from './Inner';
import { motion, AnimatePresence } from 'framer-motion';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
};

function Testimonials({ testimonials }) {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !testimonials || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % testimonials.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const goTo = (index) => {
    setCurrent(([prev]) => [index, index > prev ? 1 : -1]);
  };

  const next = () => {
    setCurrent(([prev]) => [(prev + 1) % testimonials.length, 1]);
  };

  const prev = () => {
    setCurrent(([prev]) => [(prev - 1 + testimonials.length) % testimonials.length, -1]);
  };

  const t = testimonials[current];

  return (
    <section className="testimonials-section" id="testimonials">
      <Inner className="section-header">
        <div>
          <h2 className="section-title">What People Say</h2>
          <hr />
          <p>Feedback from clients and colleagues I've had the pleasure of working with</p>
        </div>
      </Inner>

      <div
        className="testimonials-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="testimonial-arrow testimonial-arrow--prev" onClick={prev} aria-label="Previous testimonial">
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="testimonial-slide-wrapper">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="testimonial-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="testimonial-quote-icon">
                <i className="bi bi-quote"></i>
              </div>
              <p className="testimonial-text">{t.testimonial}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="testimonial-author-info">
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-role">{t.position} at {t.company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="testimonial-arrow testimonial-arrow--next" onClick={next} aria-label="Next testimonial">
          <i className="bi bi-chevron-right"></i>
        </button>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? 'testimonial-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
