
import { Person, Font, Colors, Fonts, Branding } from "./models";



export const person = new Person(
    "Mohammed-khair",
    "Souiba",
    "1995-08-15",
    "Full Stack Web Developer",
    null,
    null,
    "I create beautiful, responsive, and user-friendly web applications using cutting-edge technologies. Passionate about turning ideas into reality through clean and efficient code.",
    ['../images/heroImage5.png'],
    null,
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
