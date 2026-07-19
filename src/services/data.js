
import { Person, Font, Colors, Fonts, Branding, About, Service, SkillCategory, Skill, Education, Career, ProjectCategory, Technology, Project, Testimonial } from "./models";

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
            "Full-Stack Web Developer",
            "DigitalSpeak_Logo.png",
            "DigitalSpeak_Bg.jpg",
            new Date(2024, 11, 10), 
            new Date(2026, 3, 30),
            [
                "Built scalable web applications, landing pages, and digital platforms for businesses.",
                "Developed sales funnels focused on improving customer engagement and conversions.",
                "Integrated APIs and third-party services to enhance platform capabilities.",
                "Created custom automation solutions to streamline business workflows and reduce manual operations.",
                "Managed and guided teams during the development of full-stack platforms.",
                "Participated in code reviews, technical planning, and team collaboration."
            ],
            1
        ),
        new Career(
            "Oriental Group", 
            "Web Developer Intern", 
            "Oriental_logo.png", 
            "Marrakech-Morocco-Medina.jpg", 
            new Date(2024,8, 1), 
            new Date(2024, 9, 19), 
            [
                "Developed and maintained WordPress websites for product-based businesses.",
                "Built a custom PHP web application to manage clients, products, and orders.",
                "Contributed to improving internal workflows and management processes.",
                "Participated in team collaboration and project development discussions."
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
        new Technology("Superbase"),      // 12
        new Technology("JEE") ,
        new Technology("Postgresql")          // 13
    ];

    export const categories = [
        new ProjectCategory("Landing Pages & Frontend", []), // 0
        new ProjectCategory("Full Stack Apps", []),          // 1
        new ProjectCategory("Mini Projects", [])             // 2
    ];

    export const projects = [

        /* ===== Landing Pages & Frontend ===== */

        new Project(
            "Oumaima UGC Portfolio",
            "A modern portfolio site for a UGC creator that shows her work, services, and brand deals in a simple, responsive layout.",
            "oumaima.png",
            "https://oumaima-mahdidi.vercel.app/",
            "https://github.com/medkhair/Oumaima_Portfolio_UGC",
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
            "An attractive online presence for a coffee brand to engage customers and showcase products.",
            "coffeLanding.png",
            "https://medkhair.github.io/Coffee_LandingPage/",
            "https://github.com/medkhair/Coffee_LandingPage",
            "https://www.figma.com/design/Yh2f2K451TBtVLbPJ09smP/Bean-Scene-Coffee-Landingpage--Community-?node-id=0-1&t=5CxDQxoOOQdmAPGZ-1",
            [
                technologies[0].name,
                technologies[1].name
            ],
            categories[0].name
        ),

        new Project(
            "Recipe App",
            "A modern frontend application that consumes and displays data from a third-party API.",
            "recipe_App.png",
            "https://recipe-app-react-js-six.vercel.app/",
            "https://github.com/medkhair/Recipe_App_React_JS",
            "",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name,
                technologies[3].name
            ],
            categories[0].name
        ),
/*
        new Project(
            "Weather App",
            "Provide users with quick, reliable access to current weather forecasts for any city.",
            "WeatherApp.jpg",
            "https://medkhair.github.io/Weather_app/weather/",
            "https://github.com/medkhair/Weather_app",
            "https://www.figma.com/design/tAf8LhIzdCwcfHBBuRPa1u/Untitled?node-id=0-1&p=f",
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
            "https://to-do-list-react-js-chi.vercel.app/",
            "https://github.com/medkhair/To-Do-List--React_Js-",
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
            "Simple Calculator",
            "Build a functional calculator demonstrating core JavaScript logic and DOM manipulation.",
            "calculator.png",
            "https://medkhair.github.io/Simple-Calculator-JS/",
            "https://github.com/medkhair/Simple-Calculator-JS",
            "https://www.figma.com/design/d26JJRMa5LelaOEb6HjpaW/Untitled?m=auto&t=XQWClNq6qpkg33jQ-1",
            [
                technologies[0].name,
                technologies[1].name,
                technologies[2].name
            ],
            categories[0].name
        ),
*/
        /* ===== Full Stack Apps ===== */

        new Project(
            "Broadkast",
            "A studio booking platform that streamlines the process of scheduling and managing studio sessions for artists and producers.",
            "broadkast.png",
            "https://book.broadkast.studio/",
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
                technologies[14].name
            ],
            categories[1].name
        ),
        new Project(
            "E-Sagim",
            "A secure, scalable system to handle complex relationships between students, courses, and faculty.",
            "E-Sagim.png",
            "https://e-sagim-front-l5ur.vercel.app",
            "https://github.com/medkhair/E-SAGIM-Front",
            "https://www.figma.com/design/HlEr3hqwQIlmlw9ja4bbww/E-SAGIM?node-id=0-1&t=yosBjfmqoBVQSNVQ-1",
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
            "https://medkhair.42web.io/movies/",
            "https://github.com/medkhair/Rate-Movies",
            "https://www.figma.com/design/cQBl9MhY2rSK26t4ygpSZI/Untitled?m=auto&t=XQWClNq6qpkg33jQ-1",
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
            "Helping food enthusiasts discover traditional dishes from every country and explore global culinary cultures.",
            "MyTaste.jpg",
            "https://medkhair.42web.io/my-taste/",
            "https://github.com/medkhair/My_taste_V1-Dynamic-Site-",
            "https://www.figma.com/design/ksWUjcuqa0UPnac5mSfaht/Untitled?node-id=9-2&t=bd1AlnLoK2FhLwKe-1",
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
            "An all-in-one solution for managing kids' extracurriculars, payments, and communications.",
            "kids.jpg",
            "",
            "https://github.com/medkhair/kidsClubmanager-MobileApp",
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
            "https://github.com/medkhair/BotolaShop_Api",
            "https://www.figma.com/design/kRgu6TGACF7NpuRMKJLI74/Untitled?node-id=0-1&t=C4AiyfSe2ei9lzNp-1",
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
            "https://medkhair.42web.io/Arganisme/",
            "https://github.com/medkhair/Argan-oil-site",
            "https://www.figma.com/design/RU69LY0NlR5QNzLqOq0znX/Arganisme?node-id=6-493&t=RZoyaoC2C71Jz8Vp-1",
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
            "Breakfast delivery App",
            "A scalable backend using Java Servlets to power a food delivery platform's core operations.",
            "dilevry.png",
            "",
            "https://github.com/medkhair/Livraison-de-petits-d-jeuners",
            "",
            [
                technologies[5].name,
                technologies[13].name
            ],
            categories[2].name
        ),

        new Project(
            "Flight Reservation System Manager",
            "Demonstrating object-oriented programming principles by building a complex reservation system with multiple interacting entities.",
            "Flight.jpg",
            "",
            "https://github.com/medkhair/Flight_reservation_system_manager_-V1-",
            "",
            [
                technologies[5].name
            ],
            categories[2].name
        ),

        new Project(
            "Contact Manager Java",
            "Creating an efficient terminal-based system to manage personal and professional contacts with full CRUD operations.",
            "contact-management.png",
            "",
            "https://github.com/medkhair/Contact_manager_java",
            "",
            [
                technologies[5].name
            ],
            categories[2].name
        )
    ];


/*********** Testimonials *************/

    export const testimonials = [
        new Testimonial(
            "Youssef Amrani",
            "CEO",
            "Digital Speak",
            null,
            "Mohammed-Khair is an exceptional developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is remarkable. A true asset to any team."
        ),
        new Testimonial(
            "Sarah El Fassi",
            "Project Manager",
            "Oriental Group",
            null,
            "Working with Medkhair was a fantastic experience. He built our e-commerce platform with incredible attention to detail and delivered ahead of schedule. His code is clean, well-documented, and maintainable."
        ),
        new Testimonial(
            "Ahmed Benjelloun",
            "Founder",
            "Broadkast Studio",
            null,
            "Medkhair transformed our vision into reality with the studio booking platform. His full-stack expertise and creative problem-solving made the entire process smooth. Highly recommended!"
        ),
        new Testimonial(
            "Oumaima Mahdidi",
            "UGC Creator",
            "Freelance",
            null,
            "My portfolio website exceeded all expectations! Medkhair designed and developed a stunning, responsive site that perfectly represents my brand. The animations and attention to detail are incredible."
        ),
    ];


/*********** Person *************/

    export const person = new Person(
        "Mohammed-khair",
        "Souiba",
        "2001-10-21",
        "Full-Stack Developer | Automation & AI Solutions",
        null,
        null,
        "I help businesses grow through custom web applications, high-converting landing pages, workflow automations, and AI-powered solutions. From scalable SaaS platforms to modern digital experiences, I build systems designed to improve operations, customer experience, and business efficiency.",
        ['../images/heroImage5.png'],
        new About(
            "About Me",
            "I am a passionate Full Stack Web Developer with a knack for creating dynamic and responsive web applications.",
            20,
            20,
            4
        ),
        [
            new Service(
                "Full-Stack Web Applications",
                "Custom web platforms, dashboards, portals, and SaaS applications designed for scalability, performance, and long-term growth.",
                "layers.png"
            ),
            new Service(
                "Landing Pages",
                "Modern, responsive, and conversion-focused landing pages built to strengthen your online presence and generate leads.",
                "dashboard.png"
            ),
            new Service(
                "Sales Funnels",
                "Strategic sales funnels designed to guide visitors through the customer journey and maximize conversions.",
                "funnel.png"
            ),
            new Service(
                "Custom Automations",
                "Automate repetitive business tasks and streamline operations with tailored workflow automation solutions.",
                "automation.png"
            ),
            new Service(
                "AI Solutions",
                "AI-powered assistants, chatbots, intelligent workflows, and automation systems built to improve efficiency and customer engagement.",
                "ai.png"
            )
        ],
        skills,
        null,
        educationPath,
        careerPath,
        null,
        testimonials,
        null,
        null
    );