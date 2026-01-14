import Inner from "./Inner";
import { useState } from "react";
//Landing Pages & Frontend


function ProjectsPart4({projects}) {

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
        
            <section className="projects projects-part-4" id="projects-part-4">

                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">Full-stack Apps</h2>
                        <hr />
                    </div>
                </Inner>
                <Inner className="projects-container projects-part-4-container">
                    {
                        projects.map((project, index) => (
                            
                            <div className="project-card" key={index}>
                                <img src={`/images/projects/${project.image}`} alt={project.name} className="project-image" />
                                <h3 className="project-title">{project.name}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech-stack">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span className="tech-item" key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <button className="show-links-button" onClick={() =>{ 
                                            toggleLinks(index)
                                            if(selectedProjectIndex !== index){
                                                setShowLinks(true);
                                            }
                                        }
                                    } >
                                        <i className="bi bi-arrow-up-right"></i>
                                    </button>
                                    {
                                        (showLinks && (selectedProjectIndex === index)) ? 
                                            <div className="links-dropdown">
                                                {
                                                    project.githubUrl != "" ?
                                                    
                                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link"><i className="bi bi-github"></i></a>
                                              
                                                    :
                                                        null
                                                       
                                                }
                                                {
                                                   
                                                    project.designUrl != "" ?

                                                        <a href={project.designUrl} target="_blank" rel="noopener noreferrer" className="project-link"><i className="bi bi-palette"></i></a>
                                                   
                                                        :
                                                        null
                                                 
                                                }
                                                {
                                               
                                                    project.liveUrl != "" ?        
                                                                         
                                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link"><i className="bi bi-globe"></i></a> 
                                                  
                                                        : 
                                                        null
                                                
                                                }
                                            </div>
                                        : null
                                    }
                                </div>
                            </div>
                            
                        ))
                    }
                </Inner>

            </section>
        </>
            
    );
}

export default ProjectsPart4;