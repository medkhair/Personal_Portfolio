import Inner from "./Inner";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
//Full Stack Apps


function ProjectsPart4({projects}) {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    function handleMouseMove(e, cardRef) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        cardRef.current.style.setProperty('--shine-x', `${shineX}%`);
        cardRef.current.style.setProperty('--shine-y', `${shineY}%`);
    }

    function handleMouseLeave(cardRef) {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        setHoveredIndex(null);
    }

    return (
        <>
            <section className="projects projects-part-4" id="projects-part-4">
                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Full-stack Apps</h2>
                        <hr />
                    </div>
                </Inner>
                <Inner className="projects-container projects-part-4-container">
                    {projects.map((project, index) => (
                        <ProjectCard4
                            key={index}
                            project={project}
                            index={index}
                            isHovered={hoveredIndex === index}
                            setHoveredIndex={setHoveredIndex}
                            handleMouseMove={handleMouseMove}
                            handleMouseLeave={handleMouseLeave}
                            isFeatured={index === 0}
                        />
                    ))}
                </Inner>
            </section>
        </>
    );
}

function ProjectCard4({ project, index, isHovered, setHoveredIndex, handleMouseMove, handleMouseLeave, isFeatured }) {
    const cardRef = useRef(null);

    return (
        <motion.div
            className={`project-card project-card-3d ${isFeatured ? 'project-card--featured' : ''}`}
            ref={cardRef}
            onMouseMove={(e) => { handleMouseMove(e, cardRef); setHoveredIndex(index); }}
            onMouseLeave={() => handleMouseLeave(cardRef)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="project-card-shine"></div>
            <div className="project-image-wrapper">
                <img src={`/images/projects/${project.image}`} alt={project.name} className="project-image" />
                <div className={`project-overlay ${isHovered ? 'project-overlay--visible' : ''}`}>
                    <div className="project-overlay-links">
                        {project.githubUrl && project.githubUrl !== "" && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
                                <i className="bi bi-github"></i>
                                <span>Code</span>
                            </a>
                        )}
                        {project.liveUrl && project.liveUrl !== "" && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
                                <i className="bi bi-globe"></i>
                                <span>Live</span>
                            </a>
                        )}
                        {project.designUrl && project.designUrl !== "" && (
                            <a href={project.designUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-link">
                                <i className="bi bi-palette"></i>
                                <span>Design</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-card-body">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                        <span className="tech-item" key={techIndex}>{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsPart4;