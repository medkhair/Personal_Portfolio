import Inner from "./Inner";
import aboutImage from '../images/aboutImage3.png';


function About({person}) {

    return (
        <>
        
            <section id="about" className="main">

                <Inner className="section-header">
                    <div>
                        <h2 className="section-title">About Me</h2>
                        <hr />
                    </div>
                </Inner>
                
                <Inner className="about">
                    <div>
                        <img src={aboutImage} alt="About Me Image" />
                    </div>
                    <div>
                        <p>Hello! I'm Mohammed-Khair, a passionate full-stack web developer based in Morocco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. <br /><br />

My interest in web development started back in 2019 when I decided to explore the world of programming. Fast forward to today, and I've had the privilege of working on various projects ranging from e-commerce platforms to educational management systems.
                        </p>
                        <div className="about-stats">
                            <div className="stat">
                                <strong>{person.about.numberOfYearsExperience}+</strong>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat">
                                <strong>{person.about.numberOfCompletedProjects}+</strong>
                                <span>Projects done</span>
                            </div>
                            <div className="stat">
                                <strong>{person.about.numberOfHappyClients}+</strong>
                                <span>Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </Inner>
            </section>
        
        </>
    );

}

export default About;