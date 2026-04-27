import Inner from "./Inner";
import ParticleField from "./ParticleField";

import heroImage from '../../public/images/heroImage5.webp';
import { useState, useRef, useCallback } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const techParticles = [
    { src: "/images/icons/React-icon.svg.png", alt: "React", x: 8, y: 12, size: 55, depth: 0.04, delay: 0 },
    { src: "/images/icons/css-3-logo-png_seeklogo-426084.png", alt: "CSS", x: 85, y: 70, size: 45, depth: 0.06, delay: 0.3 },
    { src: "/images/icons/Git-Icon-1788C.png", alt: "Git", x: 18, y: 75, size: 40, depth: 0.03, delay: 0.6 },
    { src: "/images/icons/HTML5_logo_and_wordmark.svg.png", alt: "HTML5", x: 75, y: 15, size: 50, depth: 0.05, delay: 0.1 },
    { src: "/images/icons/Java_Logo.svg", alt: "Java", x: 92, y: 40, size: 42, depth: 0.035, delay: 0.5 },
    { src: "/images/icons/javascript-seeklogo.com.svg", alt: "JavaScript", x: 5, y: 45, size: 48, depth: 0.045, delay: 0.2 },
    { src: "/images/icons/mysql-1-logo-png-transparent.png", alt: "MySQL", x: 60, y: 80, size: 44, depth: 0.055, delay: 0.8 },
    { src: "/images/icons/PHP-logo.svg.png", alt: "PHP", x: 35, y: 8, size: 46, depth: 0.03, delay: 0.4 },
    { src: "/images/icons/spring-boot-1.svg", alt: "Spring Boot", x: 40, y: 85, size: 50, depth: 0.065, delay: 0.7 },
];

function Hero({person}){

    const [text, count] = useTypewriter({
        words: [
            "Hi, i'm " + person.lastName + " " + person.firstName,
        ],
        loop: true,
        delaySpeed: 5000,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    const heroRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    }, []);

    return (
        <>
        
            <section
                id="hero"
                className="main"
                ref={heroRef}
                onMouseMove={handleMouseMove}
            >
                <ParticleField />

                {/* Floating tech logo particles */}
                <div className="hero-tech-particles">
                    {techParticles.map((particle, i) => (
                        <motion.div
                            key={i}
                            className="hero-tech-particle"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: particle.size,
                                height: particle.size,
                                transform: `translate(${mousePos.x * particle.depth * -800}px, ${mousePos.y * particle.depth * -800}px)`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: 1,
                                y: [0, -15, 0],
                            }}
                            transition={{
                                opacity: { duration: 4, repeat: Infinity, delay: particle.delay },
                                scale: { duration: 0.8, delay: particle.delay + 0.2 },
                                y: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: particle.delay },
                            }}
                        >
                            <img src={particle.src} alt={particle.alt} />
                        </motion.div>
                    ))}
                </div>

                <Inner className="hero">
                    <motion.div
                        style={{
                            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
                        }}
                        transition={{ type: "tween", ease: "linear", duration: 0 }}
                    >
                        <h1>{text} <span><Cursor/></span></h1>
                        <h3>{person.title}</h3>
                        <p>{person.description}</p>
                        <div className="buttons">
                            <a href="#projects-part-1" className="button primary">View My work</a>
                            <a href="https://cvdesignr.com/p/66f6b596aa2bd" target="_blank" className="button secondary">Download CV</a>
                        </div>
                        <div className="buttons social-icons">
                            <a href="https://github.com/medkhair" target="_blank" className="button primary"><i className="bi bi-github" ></i></a>
                            <a href="https://ma.linkedin.com/in/mohammed-khair-souiba-32a59632b" target="_blank" className="button secondary"><i className="bi bi-linkedin" ></i></a>
                        </div>
                    </motion.div>
                    <motion.div
                        style={{
                            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
                        }}
                    >
                        <div>
                            <img src={heroImage} alt="Medkhair Logo" />
                        </div>
                    </motion.div>
                </Inner>
            </section>

        </>


    );
}


export default Hero;