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
            </section>

        </>


    );
}


export default Hero;