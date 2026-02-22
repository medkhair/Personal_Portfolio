/**
 * Portfolio Website - JavaScript Detection
 * This file ensures GitHub recognizes this repository as a JavaScript project
 */

// Utility Functions
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const calculateExperience = (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    if (remainingMonths === 0) return `${years} year${years !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
};

export const slugify = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};

export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const getSkillLevel = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 75) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    if (percentage >= 40) return 'Beginner';
    return 'Learning';
};

export const sortProjectsByDate = (projects) => {
    return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const filterProjectsByTech = (projects, tech) => {
    return projects.filter(project => 
        project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
    );
};

export const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
};

export const copyToClipboard = (text) => {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return Promise.resolve();
    }
};

export const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
};

export const generateGreeting = (name) => {
    const timeOfDay = getTimeOfDay();
    return `Good ${timeOfDay}, ${name}!`;
};

export const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

export const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
};

export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
};

export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const groupBy = (array, key) => {
    return array.reduce((result, item) => {
        const group = item[key];
        result[group] = result[group] || [];
        result[group].push(item);
        return result;
    }, {});
};

export const removeDuplicates = (array) => {
    return [...new Set(array)];
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
};

export const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export const smoothScrollTo = (targetPosition, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

// Portfolio-specific utilities
export const getProjectCategory = (project) => {
    if (project.technologies.some(tech => ['React', 'Spring Boot', 'Node.js'].includes(tech))) {
        return 'Full Stack';
    }
    if (project.technologies.some(tech => ['React', 'HTML', 'CSS'].includes(tech))) {
        return 'Frontend';
    }
    return 'Other';
};

export const calculateTotalProjects = (projects) => {
    return projects.length;
};

export const getMostUsedTechnology = (projects) => {
    const techCount = {};
    projects.forEach(project => {
        project.technologies.forEach(tech => {
            techCount[tech] = (techCount[tech] || 0) + 1;
        });
    });
    return Object.keys(techCount).reduce((a, b) => techCount[a] > techCount[b] ? a : b);
};

export const getProjectStats = (projects) => {
    return {
        total: projects.length,
        fullStack: projects.filter(p => getProjectCategory(p) === 'Full Stack').length,
        frontend: projects.filter(p => getProjectCategory(p) === 'Frontend').length,
        mostUsedTech: getMostUsedTechnology(projects)
    };
};

// Animation helpers
export const fadeIn = (element, duration = 400) => {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
};

export const fadeOut = (element, duration = 400) => {
    element.style.opacity = 1;
    
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.max(1 - (progress / duration), 0);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    };
    
    requestAnimationFrame(animate);
};

// Export all utilities as default object
export default {
    formatDate,
    calculateExperience,
    slugify,
    truncateText,
    validateEmail,
    validatePhone,
    debounce,
    scrollToSection,
    getSkillLevel,
    sortProjectsByDate,
    filterProjectsByTech,
    calculateAge,
    copyToClipboard,
    getTimeOfDay,
    generateGreeting,
    isValidUrl,
    getContrastColor,
    formatNumber,
    randomInt,
    shuffleArray,
    groupBy,
    removeDuplicates,
    capitalizeFirstLetter,
    getInitials,
    calculateReadingTime,
    isInViewport,
    smoothScrollTo,
    getProjectCategory,
    calculateTotalProjects,
    getMostUsedTechnology,
    getProjectStats,
    fadeIn,
    fadeOut
};