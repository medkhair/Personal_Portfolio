
import { Person, Font, Colors, Fonts, Branding, About, Service, SkillCategory, Skill, Education, Career, ProjectCategory, Technology, Project } from "./models";

/*********** Branding *************/

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

/*********** Skills *************/

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
        new Skill("React", 75, "react.png", skillCategories[1]),
        new Skill("java", 80, "java.png", skillCategories[0]),
        new Skill("PHP", 70, "php.png", skillCategories[0]),
        new Skill("Bootstrap", 100, "bootstrap.png", skillCategories[1]),
        new Skill("Spring boot", 85, "springboot.png", skillCategories[1]),
        new Skill("Git", 90, "git.png", skillCategories[4]),
        new Skill("Spring Framework", 80, "spring.png", skillCategories[1]),
        new Skill("MySQL", 75, "mysql.png", skillCategories[2]),
        new Skill("Spring Data JPA", 70, "jpa.png", skillCategories[2]),
        new Skill("Maven", 85, "maven.png", skillCategories[4]),
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
        new Skill("Python", 60, "python.png", skillCategories[0]),
        new Skill("SQL", 75, "sql.png", skillCategories[0]),
        new Skill("PostgreSQL", 70, "postgresql.png", skillCategories[2]),
        new Skill("C", 65, "c.png", skillCategories[0]),
        new Skill("ClickUp", 80, "clickup.png", skillCategories[4]),
        new Skill("Slack", 90, "slack.png", skillCategories[4]),
        new Skill("System.io", 75, "systemio.png", skillCategories[3])

    ];

/*********** Education *************/

    const educationPath = [ new Education("Cadi Ayyad University", "Math & Computer Science", 2019, 2022),
        new Education("Udemy", "Complete Web Development Course", 2023, 2024), 
        new Education("SAGIM School", "Technician in IT Development", 2023, 2025)
    ];


/*********** Career *************/

    const careerPath = [
        new Career(
            "Digital Speak", 
            "Web Developer",
            "DigitalSpeak_Logo.png",
            "DigitalSpeak_Bg.jpg",
            new Date(2024, 11, 10), 
            null,
            [
                "Build landing pages and sales funnels with custom CSS and JavaScript.",
                "Integrate APIs to enhance functionality and user experience.",
                "Create full-stack web applications.",
                "Participated in code reviews and contributed to team meetings."
            ],
            1
        ),
        new Career(
            "Digital Speak", 
            "Intern web Developer",
            "DigitalSpeak_Logo.png",
            "DigitalSpeak_Bg.jpg",
            new Date(2024, 12, 10), 
            new Date(2025, 5, 9), 
            [
                "Build landing pages and sales funnels with custom CSS and JavaScript.",
                "Integrate APIs to enhance functionality and user experience.",
                "Participated in code reviews and contributed to team meetings."
            ],
            2
        ),
        new Career(
            "Oriental Group", 
            "Intern web Developer", 
            "Oriental_logo.png", 
            "Marrakech-Morocco-Medina.jpg", 
            new Date(2024,8, 1), 
            new Date(2024, 9, 19), 
            [
                "Create and maintain WordPress websites for selling argan oil.",
                "Create a web application in PHP (Arganisme) to manage clients and orders.",
                "Participated in code reviews and contributed to team meetings."
            ],
            3
        ),
    ];


/*********** Projects *************/

    export const technologies = [
        new Technology("HTML"),          // 0
        new Technology("CSS"),           // 1
        new Technology("JavaScript"),    // 2
        new Technology("React JS"),      // 3
        new Technology("Bootstrap"),     // 4
        new Technology("Java"),          // 5
        new Technology("Spring Boot"),   // 6
        new Technology("Hibernate"),     // 7
        new Technology("Spring Security"), // 8
        new Technology("MySQL"),         // 9
        new Technology("PHP"),           // 10
        new Technology("React Native"),  // 11
        new Technology("Supabase"),      // 12
        new Technology("JEE")            // 13
    ];

    export const categories = [
        new ProjectCategory("Landing Pages & Frontend", []), // 0
        new ProjectCategory("Full Stack Apps", []),          // 1
        new ProjectCategory("Mini Projects", [])             // 2
    ];

    export const projects = [

        /* ===== Landing Pages & Frontend ===== */

        new Project(
            "Recipe App",
            "To build a modern frontend application that consumes and displays data from a third-party API.",
            "recipe_App.png",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name,
                technologies[3].name
            ],
            categories[0].name
        ),

        new Project(
            "Weather App",
            "Provide users with quick, reliable access to current weather forecasts for any city.",
            "WeatherApp.jpg",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name
            ],
            categories[0].name
        ),

        new Project(
            "To Do List",
            "Built a clean task manager featuring add, complete, and delete functionality with a responsive UI.",
            "ToDoList.png",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name,
                technologies[3].name
            ],
            categories[0].name
        ),

        new Project(
            "Coffee Landing Page",
            "Create an attractive online presence for a coffee brand to engage customers and showcase products.",
            "coffeLanding.png",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name
            ],
            categories[0].name
        ),

        new Project(
            "Simple Calculator",
            "Build a functional calculator demonstrating core JavaScript logic and DOM manipulation.",
            "calculator.png",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name
            ],
            categories[0].name
        ),

        /* ===== Full Stack Apps ===== */

        new Project(
            "E-Sagim",
            "Build a secure, scalable system to handle complex relationships between students, courses, and faculty.",
            "E-Sagim.png",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name,
                technologies[3].name,
                technologies[5].name,
                technologies[6].name,
                technologies[7].name,
                technologies[8].name,
                technologies[9].name
            ],
            categories[1].name
        ),

        new Project(
            "Rate Movies",
            "A dynamic web app featuring movie search, personal ratings, and watchlist functionality.",
            "RateMovies.jpg",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[4].name,
                technologies[2].name,
                technologies[10].name,
                technologies[9].name
            ],
            categories[1].name
        ),

        new Project(
            "My Taste",
            "Help food enthusiasts discover traditional dishes from every country and explore global culinary cultures.",
            "MyTaste.jpg",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[4].name,
                technologies[2].name,
                technologies[10].name,
                technologies[9].name
            ],
            categories[1].name
        ),

        new Project(
            "Kids Club Manager",
            "Create an all-in-one solution for managing kids' extracurriculars, payments, and communications.",
            "kids.jpg",
            "",
            "",
            "",
            [
                technologies[2].name,
                technologies[11].name,
                technologies[12].name
            ],
            categories[1].name
        ),

        new Project(
            "Botola Shop",
            "Create an online destination for Moroccan football fans to officially purchase their favorite team merchandise.",
            "BotolaShop.jpg",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[4].name,
                technologies[2].name,
                technologies[5].name,
                technologies[6].name,
                technologies[7].name,
                technologies[9].name
            ],
            categories[1].name
        ),

        new Project(
            "Arganisme",
            "A visually elegant e-commerce site featuring product storytelling, educational content, and seamless purchasing.",
            "Arganisme.jpg",
            "",
            "",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[4].name,
                technologies[2].name,
                technologies[10].name,
                technologies[9].name
            ],
            categories[1].name
        ),

        /* ===== Mini Projects ===== */

        new Project(
            "Livraison de petits déjeuners",
            "Build a scalable backend using Java Servlets to power a food delivery platform's core operations.",
            "petit-dejeuner.jpg",
            "",
            "",
            "",
            [
                technologies[5].name,
                technologies[13].name
            ],
            categories[2].name
        ),

        new Project(
            "Flight Reservation System Manager",
            "Demonstrate object-oriented programming principles by building a complex reservation system with multiple interacting entities.",
            "Flight.jpg",
            "",
            "",
            "",
            [
                technologies[5].name
            ],
            categories[2].name
        ),

        new Project(
            "Contact Manager Java",
            "Create an efficient terminal-based system to manage personal and professional contacts with full CRUD operations.",
            "contact-management.png",
            "",
            "",
            "",
            [
                technologies[5].name
            ],
            categories[2].name
        )
    ];


/*********** Person *************/

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
        educationPath,
        careerPath,
        null,
        null,
        null,
        null
    );