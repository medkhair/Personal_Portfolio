
import { Person, Font, Colors, Fonts, Branding, About, Service, SkillCategory, Skill } from "./models";




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

const skillCategories = [
    new SkillCategory("Languages"),
    new SkillCategory("Frameworks & Libraries"),
    new SkillCategory("Databases & ORMs"),
    new SkillCategory("CMS"),
    new SkillCategory("Tools & Platforms")
];

const skills = [
    new Skill("HTML", 90, "html.png", skillCategories[0]),
    new Skill("CSS", 85, "css.png", skillCategories[0]),
    new Skill("JavaScript", 80, "javascript.png", skillCategories[0]),
    new Skill("React", 75, "react.png", skillCategories[2]),
    new Skill("java", 80, "java.png", skillCategories[1]),
    new Skill("PHP", 70, "php.png", skillCategories[1]),
    new Skill("Bootstrap", 100, "bootstrap.png", skillCategories[2]),
    new Skill("Spring boot", 85, "springboot.png", skillCategories[2]),
    new Skill("Git", 90, "git.png", skillCategories[3]),
    new Skill("Spring Framework", 80, "spring.png", skillCategories[2]),
    new Skill("MySQL", 75, "mysql.png", skillCategories[1]),
    new Skill("Spring Data JPA", 70, "jpa.png", skillCategories[2]),
    new Skill("Maven", 85, "maven.png", skillCategories[3]),
    new Skill("RESTful APIs", 80, "api.png", skillCategories[1]),
    new Skill("Spring Security", 65, "security.png", skillCategories[2]),
    new Skill("Hibernate", 70, "hibernate.png", skillCategories[2]),
    new Skill("JQuery", 90, "jquery.png", skillCategories[1]),
    new Skill("WordPress", 75, "wordpress.png", skillCategories[3]),
    new Skill("GoHighLevel", 80, "gohighlevel.png", skillCategories[3]),
    new Skill("ClickFunnels", 70, "clickfunnels.png", skillCategories[3]),
    new Skill("Figma", 85, "figma.png", skillCategories[4]),
    new Skill("Visual Studio Code", 95, "vscode.png", skillCategories[4]),
    new Skill("Postman", 80, "postman.png", skillCategories[4]),
    new Skill("JavaScript ES6+", 85, "es6.png", skillCategories[0]),
    new Skill("Python", 60, "python.png", skillCategories[0]),
    new Skill("SQL", 75, "sql.png", skillCategories[1]),
    new Skill("PostgreSQL", 70, "postgresql.png", skillCategories[1]),
    new Skill("C", 65, "c.png", skillCategories[0]),
    new Skill("ClickUp", 80, "clickup.png", skillCategories[4]),
    new Skill("Slack", 90, "slack.png", skillCategories[4]),
    new Skill("System.io", 75, "systemio.png", skillCategories[3])

];



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
    [
        new Service(
            "Full Stack Web Apps",
            "Building complete web applications from front-end to back-end using modern frameworks and technologies.",
            "layers.png"
        ),
        new Service(
            "Landing Pages",
            "Designing and developing high-converting landing pages tailored to your business needs.",
            "dashboard.png"
        ),
        new Service(
            "Sale Funnels",
            "Creating effective sales funnels to guide your customers through the buying process.",
            "funnel.png"
        )
    ],
    skills,
    null,
    null,
    null,
    null,
    null,
    null,
    null
);