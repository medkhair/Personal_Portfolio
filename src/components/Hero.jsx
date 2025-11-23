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
    });

    return (
        <>
        
            <section id="hero" className="main">
                <Inner className="hero">
                    <div>
                        <h1>{text} <span><Cursor /></span></h1>
                        <h3>{person.title}</h3>
                        <p>{person.description}</p>
                        <div className="buttons">
                            <a href="#about" className="button primary">View My work</a>
                            <a href="#projects" className="button secondary">Download CV</a>
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