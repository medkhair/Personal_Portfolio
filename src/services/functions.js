

export function importColors(colors) {

    const style = document.documentElement.style;
    style.setProperty('--Medkhair-color-primary', colors.primary);
    style.setProperty('--Medkhair-color-secondary', colors.secondary);
    style.setProperty('--Medkhair-color-tercairy', colors.tercairy);
    style.setProperty('--Medkhair-color-quaternary', colors.quaternary);
    
}

export function importFonts(fonts) {

    const linkPrimary = document.createElement('link');
    linkPrimary.href = fonts.primary.url;
    linkPrimary.rel = 'stylesheet';
    document.head.appendChild(linkPrimary);

    const linkSecondary = document.createElement('link');
    linkSecondary.href = fonts.secondary.url;
    linkSecondary.rel = 'stylesheet';
    document.head.appendChild(linkSecondary);
}


export function formatDateToFrench(date){
    const options = { year: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('en-EN', options);
}