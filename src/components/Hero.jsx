import Inner from "./Inner";

import heroImage from '../images/heroImage5.png';

function Hero({person}){
    //{person.pictures[0]}

    return (


        <>
        
        <section id="hero" className="main">
            <Inner className="hero">
                <div>
                    <h1>Hi, i'm {person.lastName} <br /> {person.firstName} </h1>
                    <h3>{person.title}</h3>
                    <p>{person.description}</p>
                    <div className="buttons">
                        <a href="#about" className="button primary">About Me</a>
                        <a href="#projects" className="button secondary">Projects</a>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="Medkhair Logo" />
                </div>
            </Inner>
        </section>

        </>


    );
}


export default Hero;