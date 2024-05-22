import list from "./CategoryNameData";
const spotForNav = document.querySelector('header');




function createLoggedInUserNav() {
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

    const navbarToggler = document.createElement('button');
    navbarToggler.setAttribute('class', 'navbar-toggler');
    navbarToggler.setAttribute('type', 'button');
    navbarToggler.setAttribute('data-bs-toggle', 'collapse');
    navbarToggler.setAttribute('data-bs-target', '#navbarSupportedContent');
    navbarToggler.setAttribute('aria-controls', 'navbarSupportedContent');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');

    const navbarTogglerIcon = document.createElement('span');
    navbarTogglerIcon.setAttribute('class', 'navbar-toggler-icon');

    const navbarCollapse = document.createElement('div');
    navbarCollapse.setAttribute('class', 'collapse navbar-collapse');
    navbarCollapse.setAttribute('id', 'navbarSupportedContent');

    const navUl = document.createElement('ul');
    navUl.setAttribute('class', 'navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-100');

    // SEARCH
    const navSearchLi = document.createElement('li');
    navSearchLi.setAttribute('class', 'nav-item w-75');

    const navForm = document.createElement('form');
    navForm.setAttribute('class', 'd-flex');
    const navInput = document.createElement('input');
    navInput.setAttribute('class', 'form-control me-2');
    navInput.setAttribute('type', 'search');
    navInput.setAttribute('placeholder', 'Search');
    navInput.setAttribute('aria-label', 'Search');

    const navButton = document.createElement('button');
    navButton.setAttribute('class', 'btn btn-outline-white');
    navButton.setAttribute('type', 'submit');
    navButton.textContent = 'Search';

    navForm.appendChild(navInput);
    navForm.appendChild(navButton);
    navSearchLi.appendChild(navForm);

    // CATEGOIRY DROPDOWN
    const navDropdownLi = document.createElement('li');
    navDropdownLi.setAttribute('class', 'nav-item dropdown');

    const navDropdown = document.createElement('a');
    navDropdown.setAttribute('class', 'nav-link dropdown-toggle');
    navDropdown.setAttribute('href', '#');
    navDropdown.setAttribute('id', 'navbarDropdown');
    navDropdown.setAttribute('role', 'button');
    navDropdown.setAttribute('data-bs-toggle', 'dropdown');
    navDropdown.setAttribute('aria-haspopup', 'true');
    navDropdown.setAttribute('aria-expanded', 'false');
    navDropdown.textContent = 'Categories';

    const navDropdownMenu = document.createElement('ul');
    navDropdownMenu.setAttribute('class', 'dropdown-menu');
    navDropdownMenu.setAttribute('aria-labelledby', 'navbarDropdown');

    for (let i = 0; i < list.length; i++) {
        const navDropdownItemi = document.createElement('li');
        const navDropdownLinki = document.createElement('a');
        navDropdownLinki.setAttribute('class', 'dropdown-item');
        navDropdownLinki.setAttribute('href', '#');
        navDropdownLinki.textContent = `${list[i].categoryName}`;
        navDropdownItemi.appendChild(navDropdownLinki);
        navDropdownMenu.appendChild(navDropdownItemi);
    }
    


    navDropdownLi.appendChild(navDropdown);
    navDropdownLi.appendChild(navDropdownMenu);

    // LOGIN
    const navLoginLi = document.createElement('li');
    navLoginLi.setAttribute('class', 'nav-item');
    const navLoginLink = document.createElement('a');
    navLoginLink.setAttribute('class', 'nav-link');
    navLoginLink.setAttribute('href', '#');
    navLoginLink.textContent = 'Login';

    navLoginLi.appendChild(navLoginLink);

    // REGISTRATION
    const navRegisterLi = document.createElement('li');
    navRegisterLi.setAttribute('class', 'nav-item');
    const navRegisterLink = document.createElement('a');
    navRegisterLink.setAttribute('class', 'nav-link');
    navRegisterLink.setAttribute('href', '#');
    navRegisterLink.textContent = 'Register';

    navRegisterLi.appendChild(navRegisterLink);

    navUl.appendChild(navDropdownLi);
    navUl.appendChild(navSearchLi);
    navUl.appendChild(navLoginLi);
    navUl.appendChild(navRegisterLi);
    navbarCollapse.appendChild(navUl);
    navbarToggler.appendChild(navbarTogglerIcon);
    navLogoLink.appendChild(navLogo);
    containerFluid.appendChild(navLogoLink);
    containerFluid.appendChild(navbarToggler);
    containerFluid.appendChild(navbarCollapse);
    nav.appendChild(containerFluid);
    spotForNav.appendChild(nav);
}

export default createLoggedInUserNav;
