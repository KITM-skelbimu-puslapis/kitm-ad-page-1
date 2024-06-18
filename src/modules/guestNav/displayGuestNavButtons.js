import { createLoginButton } from "./navCreateLogin";
import { createRegisterButton } from "./navCreateRegister";
import { renderLoginForm, attachLoginHandler } from "../loginForm";
import { renderRegistrationForm, registerUser } from "../registrationForm";

const guestNavButtonsDisplay = () => {
    const spotForAddNewListingButton = document.querySelector('#replace');
    const div = document.createElement('div');
    div.setAttribute('class', 'nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center');
    const loginButton = createLoginButton();
    const registerButton = createRegisterButton();
    div.appendChild(loginButton);
    div.appendChild(registerButton);
    spotForAddNewListingButton.appendChild(div);
    document.getElementById("login-btn").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("main").innerHTML = "";
        renderLoginForm();
        attachLoginHandler();
    })
    document.getElementById("register-btn").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("main").innerHTML = "";
        renderRegistrationForm();
        registerUser();
    })
}
export { guestNavButtonsDisplay };