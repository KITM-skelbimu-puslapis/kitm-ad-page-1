import { createLoginButton } from "./navCreateLogin";
import { createRegisterButton } from "./navCreateRegister";
const guestNavButtonsDisplay = () => {
    const spotForAddNewListingButton = document.querySelector('#replace');
    const div = document.createElement('div');
    div.setAttribute('class', 'nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center');
    const loginButton = createLoginButton();
    const registerButton = createRegisterButton();
    div.appendChild(loginButton);
    div.appendChild(registerButton);
    spotForAddNewListingButton.appendChild(div);
}
export { guestNavButtonsDisplay };