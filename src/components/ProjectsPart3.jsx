

import Inner from "./Inner";
import { useState } from "react";
//Landing Pages & Frontend


function ProjectsPart3({projects}) {

    const [showLinks, setShowLinks] = useState(false);

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const [hasChanged, setHasChanged] = useState(false);

    function toggleLinks(id) {
        setSelectedProjectIndex(id);
        if(hasChanged === false){
            setShowLinks(true);
            setHasChanged(true);
        }else{
            setShowLinks(!showLinks);
        }
            
    
    }

    return (


        <>
        
            <section className="projects projects-part-3" id="projects-part-3">

                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Mini Projects</h2>
                        <hr />
                    </div>
                </Inner>
                <Inner className="projects-container projects-part-3-container">
                    {
                        projects.map((project, index) => (
                            
                            <div className="project-card" key={index}>
                                <img src={`../src/images/projects/${project.image}`} alt={project.name} className="project-image" />
                                <div>
                                    <div className="project-content-top">
                                        <h3 className="project-title">{project.name}</h3>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tech-stack">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span className="tech-item" key={techIndex}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="project-links">
                                        <div className="links-dropdown">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <i className="bi bi-github"></i> Github
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }
                </Inner>

            </section>
        </>
            
    );
}

export default ProjectsPart3;