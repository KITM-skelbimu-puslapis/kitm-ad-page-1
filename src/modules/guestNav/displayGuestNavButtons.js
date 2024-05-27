import { createLoginButton } from "./navCreateLogin";
import { createRegisterButton } from "./navCreateRegister";
let guestNavButtonsDisplay = () => {
    const spotForAddNewListingButton = document.querySelector('#navbarSupportedContent');
    const div = document.createElement('div');
    div.setAttribute('class', 'nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center');
    const loginButton = createLoginButton();
    const registerButton = createRegisterButton();
    div.appendChild(loginButton);
    div.appendChild(registerButton);
    spotForAddNewListingButton.appendChild(div);
}
export { guestNavButtonsDisplay };