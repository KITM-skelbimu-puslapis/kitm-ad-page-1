import { createAddNewListingButton } from "./navCreateAddNewListing";
import { createMyAccountButton } from "./navCreateMyAccount";
let userNavButtonsDisplay = () => {
    const spotForAddNewListingButton = document.querySelector('#navbarSupportedContent');
    const div = document.createElement('div');
    div.setAttribute('class', 'nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center');
    const addNewListingButton = createAddNewListingButton();
    const myAccountButton = createMyAccountButton();
    div.appendChild(addNewListingButton);
    div.appendChild(myAccountButton);
    spotForAddNewListingButton.appendChild(div);
}
export default userNavButtonsDisplay
