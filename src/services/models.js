/*********** Person *************/

    export class Person {
        constructor(firstName, lastName, bithDate, title, email, phoneNumber, description, pictures, about, services, skills, projects, education, careers, ceritificates, testimonials, contact, socialIcons) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.bithDate = bithDate;   
            this.title = title;
            this.description = description;
            this.pictures = pictures;
            this.about = about;
            this.services = services;
            this.skills = skills;
            this.projects = projects;
            this.education = education;
            this.careers = careers;
            this.ceritificates = ceritificates;
            this.testimonials = testimonials;
            this.contact = contact;
            this.socialIcons = socialIcons;
            this.email = email;
            this.phoneNumber = phoneNumber;
        }
    }

/*********** About *************/

    export class About {
        constructor(title, description, numberOfYearsExperience, numberOfCompletedProjects, numberOfHappyClients) {
            this.title = title;
            this.description = description;
            this.numberOfYearsExperience = numberOfYearsExperience;
            this.numberOfCompletedProjects = numberOfCompletedProjects;
            this.numberOfHappyClients = numberOfHappyClients;
        }
    }

/*********** Service *************/

    export class ServiceSection {
        constructor(title, description, services) {
            this.title = title;
            this.services = services;
            this.description = description;
        }
    }
    export class Service {
        constructor(title, description, icon) {
            this.title = title;
            this.description = description;
            this.icon = icon;
        }
    }

/*********** Skill *************/

    export class SkillSection {
        constructor(title, categories) {
            this.title = title;
            this.categories = categories;
        }
    }

    export class SkillCategory {
        constructor(name) {
            this.name = name;
        }
    }

    export class Skill {
        constructor(name, percentage, icon, category) {
            this.name = name;
            this.percentage = percentage;
            this.icon = icon;
            this.category = category;
        }
    }

/*********** Project *************/

    export class ProjectSection {
        constructor(title, description, categories) {
            this.title = title;
            this.description = description;
            this.categories = categories;
        }
    }

    export class ProjectCategory {
        constructor(name, projects) {
            this.name = name;
            this.projects = projects;
        }
    }

    export class technology {
        constructor(name) {
            this.name = name;
        }
    }

    export class Project {
        constructor(name, description, image, liveUrl, githubUrl, designUrl, technologies, category) {
            this.name = name;
            this.description = description;
            this.image = image;
            this.liveUrl = liveUrl;
            this.githubUrl = githubUrl;
            this.designUrl = designUrl;
            this.technologies = technologies;
            this.category = category;
        }
    }

/*********** Certificates *************/

    export class ceritificatesSection{
        constructor(title, certificates){
            this.title = title;
            this.certificates = certificates;
        }
    }

    export class Certificate{
        constructor(name, issuingOrganization, issueDate, expirationDate, credentialId, credentialUrl, image){
            this.name = name;
            this.issuingOrganization = issuingOrganization;
            this.issueDate = issueDate;
            this.expirationDate = expirationDate;
            this.credentialId = credentialId;
            this.credentialUrl = credentialUrl;
            this.image = image;
        }
    }

/*********** Testimonial *************/

    export class TestimonialSection{    
        constructor(title, testimonials){
            this.title = title;
            this.testimonials = testimonials;
        }
    }

    export class Testimonial{
        constructor(name, position, company, image, testimonial){
            this.name = name;
            this.position = position;
            this.company = company;
            this.image = image;
            this.testimonial = testimonial;
        }
    }

/*********** Education *************/

    export class EducationSection{
        constructor(title, education, description){
            this.title = title;
            this.education = education;
            this.description = description;
        }
    }

    export class Education{
        constructor(schoolName, degree, startDate, endDate){
            this.schoolName = schoolName;
            this.degree = degree;
            this.startDate = startDate;
            this.endDate = endDate;
        }   
    }


/*********** Career *************/

    export class CareerSection{
        constructor(title, careers){
            this.title = title;
            this.careers = careers;
        }
    }

    export class Career{
        constructor(companyName, position, logo, background,startDate, endDate, tasks){
            this.companyName = companyName;
            this.position = position;   
            this.startDate = startDate;
            this.endDate = endDate;
            this.tasks = tasks;
            this.logo = logo;
            this.background = background;
        }   
    }

/*********** Contact *************/

    export class ContactSection{
        constructor(title, description){
            this.title = title;
            this.description = description;
        }
    }

    export class ContactForm{
        constructor(name, email, subject, message){
            this.name = name;
            this.email = email;   
            this.subject = subject;
            this.message = message;
        }
    }

/*********** Social Icon *************/

    export class SocialIcon{
        constructor(name, url, icon){
            this.name = name;
            this.url = url;   
            this.icon = icon;
        }
    }

/*********** sections *************/
    export class Section{
        constructor(id, title, link){
            this.id = id;
            this.title = title;   
            this.link = link;
        }
    }

/********** Branding *************/

    export class Branding{
        constructor(colors, fonts){
            this.colors = colors;   
            this.fonts = fonts;
        }
    }

    export class Colors{
        constructor(primary, secondary, tercairy, quaternary){
            this.primary = primary;   
            this.secondary = secondary;
            this.tercairy = tercairy;
            this.quaternary = quaternary;
        }
    }
    export class Fonts{
        constructor(primary, secondary){
            this.primary = primary;   
            this.secondary = secondary;
        }
    }
    export class Font{
        constructor(name, url){
            this.name = name;   
            this.url = url;
        }
    }