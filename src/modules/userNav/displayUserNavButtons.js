import { createAddNewListingButton } from "./navCreateAddNewListing";
import { createMyAccountButton } from "./navCreateMyAccount";
import { listingForm, renderListingCategories } from "../listingForm";
import { validateAndAddListing } from "../listingAdd";

const userNavButtonsDisplay = () => {
  const spotForAddNewListingButton = document.querySelector("#replace");
  const div = document.createElement("div");
  div.setAttribute(
    "class",
    "nav-item d-flex flex-row justify-content-center align-items-center align-self-center text-center"
  );
  const addNewListingButton = createAddNewListingButton();
  const myAccountButton = createMyAccountButton();
  div.appendChild(addNewListingButton);
  div.appendChild(myAccountButton);
  spotForAddNewListingButton.appendChild(div);
  document.getElementById("add-listing-btn").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("main").innerHTML = "";
    listingForm();
    renderListingCategories(); 
    validateAndAddListing();
  });
};
export default userNavButtonsDisplay;
