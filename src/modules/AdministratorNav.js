import list from "./CategoryNameData";
const spotForNav = document.querySelector('header');




function createGuestNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-md bg-body-tertiary w-100');

    const containerFluid = document.createElement('div');
    containerFluid.setAttribute('class', 'container-fluid d-flex justify-content-between');

    const navLogoLink = document.createElement('a');
    navLogoLink.setAttribute('class', 'navbar-brand');
    navLogoLink.setAttribute('href', '#');

    const navLogo = document.createElement('img');
    navLogo.setAttribute('src', '#');
    navLogo.setAttribute('alt', 'navImg');

    

    
    
    navLogoLink.appendChild(navLogo);
    containerFluid.appendChild(navLogoLink);
    nav.appendChild(containerFluid);
    spotForNav.appendChild(nav);
}

export default createGuestNav;
