import Inner from "./Inner";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end, duration = 2000, inView) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [inView, end, duration]);

    return count;
}

function About({person}) {
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true, amount: 0.5 });

    const yearsCount = useCountUp(3, 2000, isInView);
    const projectsCount = useCountUp(person.about.numberOfCompletedProjects, 2500, isInView);
    const clientsCount = useCountUp(person.about.numberOfHappyClients, 1800, isInView);

    const aboutImage = '/images/aboutImage3.webp';

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
                        <p>I'm a full-stack developer based in Morocco, specializing in scalable digital solutions built with modern technologies like React.js and Spring Boot.<br /><br />

My work goes beyond building websites, i create systems that help businesses streamline operations, improve customer experiences, automate repetitive tasks, and scale efficiently.<br /><br />

From full-stack platforms and admin dashboards to landing pages, automations, and AI-powered tools, I focus on creating fast, reliable, and user-centered solutions that deliver real business value.<br /><br />

I enjoy transforming ideas into scalable digital products with clean architecture, modern design, and long-term maintainability in mind.
                        </p>
                        <div className="about-stats" ref={statsRef}>
                            <motion.div
                                className="stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <strong>{yearsCount}+</strong>
                                <span>Years Experience</span>
                            </motion.div>
                            <motion.div
                                className="stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <strong>{projectsCount}+</strong>
                                <span>Projects done</span>
                            </motion.div>
                            <motion.div
                                className="stat"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <strong>{clientsCount}+</strong>
                                <span>Happy Clients</span>
                            </motion.div>
                        </div>
                    </div>
                </Inner>
            </section>
        
        </>
    );

}

export default About;