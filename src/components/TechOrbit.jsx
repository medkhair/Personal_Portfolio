import Inner from './Inner';
import { motion } from 'framer-motion';

const orbitIcons = [
  { src: '/images/icons/React-icon.svg.png', alt: 'React', orbit: 1 },
  { src: '/images/icons/javascript-seeklogo.com.svg', alt: 'JavaScript', orbit: 1 },
  { src: '/images/icons/HTML5_logo_and_wordmark.svg.png', alt: 'HTML5', orbit: 1 },
  { src: '/images/icons/css-3-logo-png_seeklogo-426084.png', alt: 'CSS3', orbit: 1 },
  { src: '/images/icons/spring-boot-1.svg', alt: 'Spring Boot', orbit: 2 },
  { src: '/images/icons/Java_Logo.svg', alt: 'Java', orbit: 2 },
  { src: '/images/icons/mysql-1-logo-png-transparent.png', alt: 'MySQL', orbit: 2 },
  { src: '/images/icons/Git-Icon-1788C.png', alt: 'Git', orbit: 2 },
  { src: '/images/icons/PHP-logo.svg.png', alt: 'PHP', orbit: 3 },
];

function TechOrbit() {
  const orbit1 = orbitIcons.filter(i => i.orbit === 1);
  const orbit2 = orbitIcons.filter(i => i.orbit === 2);
  const orbit3 = orbitIcons.filter(i => i.orbit === 3);

  return (
    <section className="tech-orbit-section" id="tech-orbit">
      <Inner className="section-header">
        <div>
          <h2 className="section-title">Tech Universe</h2>
          <hr />
          <p>Technologies I work with daily, orbiting my development workflow</p>
        </div>
      </Inner>
      <div className="orbit-container">
        {/* Center */}
        <div className="orbit-center">
          <motion.div
            className="orbit-center-content"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="orbit-center-icon">{'</>'}</span>
          </motion.div>
        </div>

        {/* Orbit ring 1 */}
        <div className="orbit-ring orbit-ring-1">
          {orbit1.map((icon, i) => {
            const angle = (360 / orbit1.length) * i;
            return (
              <div
                key={icon.alt}
                className="orbit-icon"
                style={{ '--orbit-angle': `${angle}deg` }}
              >
                <div className="orbit-icon-inner">
                  <img src={icon.src} alt={icon.alt} />
                  <span className="orbit-icon-label">{icon.alt}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit ring 2 */}
        <div className="orbit-ring orbit-ring-2">
          {orbit2.map((icon, i) => {
            const angle = (360 / orbit2.length) * i;
            return (
              <div
                key={icon.alt}
                className="orbit-icon"
                style={{ '--orbit-angle': `${angle}deg` }}
              >
                <div className="orbit-icon-inner">
                  <img src={icon.src} alt={icon.alt} />
                  <span className="orbit-icon-label">{icon.alt}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit ring 3 */}
        <div className="orbit-ring orbit-ring-3">
          {orbit3.map((icon, i) => {
            const angle = (360 / orbit3.length) * i;
            return (
              <div
                key={icon.alt}
                className="orbit-icon"
                style={{ '--orbit-angle': `${angle}deg` }}
              >
                <div className="orbit-icon-inner">
                  <img src={icon.src} alt={icon.alt} />
                  <span className="orbit-icon-label">{icon.alt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechOrbit;
