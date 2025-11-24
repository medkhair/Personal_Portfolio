
import { Person, Font, Colors, Fonts, Branding, About } from "./models";



export const person = new Person(
    "Mohammed-khair",
    "Souiba",
    "1995-08-15",
    "Full Stack Web Developer",
    null,
    null,
    "I create beautiful, responsive, and user-friendly web applications using cutting-edge technologies. Passionate about turning ideas into reality through clean and efficient code.",
    ['../images/heroImage5.png'],
    new About(
        "About Me",
        "I am a passionate Full Stack Web Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in web development has equipped me with the skills to build seamless user experiences while ensuring robust functionality. I am constantly exploring new technologies and best practices to stay ahead in this ever-evolving field. Let's connect and bring your ideas to life through innovative web solutions.",
        3,
        20,
        4
    ),
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
);

export const fonts = [
    new Font("Roboto", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"),
    new Font("Open Sans", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap")
];

export const colors = new Colors("#0A192F", "#64FFDA", "#0B1E34", "#FFF");

export const font = new Fonts(fonts[0], fonts[1]);

export const branding = new Branding(
    colors,
    font
);
