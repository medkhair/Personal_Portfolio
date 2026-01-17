import Inner from "./Inner";

import heroImage from '../images/heroImage5.png';

import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero({person}){
    //{person.pictures[0]}

    const [text, count] = useTypewriter({
        words: [
            "Hi, i'm " + person.lastName + " " + person.firstName,
        ],
        loop: true,
        delaySpeed: 5000,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    return (
        <>
        
            <section id="hero" className="main">
                <Inner className="hero">
                    <div>
                        <h1>{text} <span><Cursor/></span></h1>
                        <h3>{person.title}</h3>
                        <p>{person.description}</p>
                        <div className="buttons">
                            <a href="#projects-part-1" className="button primary">View My work</a>
                            <a href="/assets/CV__Mohammed-khair_Souiba_EN.pdf" target="_blank" className="button secondary">Download CV</a>
                        </div>
                        <div className="buttons social-icons">
                            <a href="https://github.com/medkhair" target="_blank" className="button primary"><i className="bi bi-github" ></i></a>
                            <a href="https://ma.linkedin.com/in/mohammed-khair-souiba-32a59632b" target="_blank" className="button secondary"><i className="bi bi-linkedin" ></i></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={heroImage} alt="Medkhair Logo" />
                        </div>
                    </div>
                </Inner>
                <div className="annimated-particles">
                    <div className="particle particle-1">
                        <img src="/images/icons/React-icon.svg.png" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-2">
                        <img src="/images/icons/css-3-logo-png_seeklogo-426084.png" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-3">
                        <img src="/images/icons/Git-Icon-1788C.png" alt="Medkhair Logo" />
                    </div>  
                    <div className="particle particle-4">
                        <img src="/images/icons/HTML5_logo_and_wordmark.svg.png" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-5">
                        <img src="/images/icons/Java_Logo.svg" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-6">
                        <img src="/images/icons/javascript-seeklogo.com.svg" alt="Medkhair Logo" />
                    </div>  
                    <div className="particle particle-7">
                        <img src="/images/icons/mysql-1-logo-png-transparent.png" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-8">
                        <img src="/images/icons/PHP-logo.svg.png" alt="Medkhair Logo" />
                    </div>
                    <div className="particle particle-9">
                        <img src="/images/icons/spring-boot-1.svg" alt="Medkhair Logo" />
                    </div>  
                </div>
            </section>

        </>


    );
}


export default Hero;