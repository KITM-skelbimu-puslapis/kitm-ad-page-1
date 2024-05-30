import { createDropdownCategories } from "./navCreateDropdownCategories";
import { guestNavButtonsDisplay } from "../guestNav/displayGuestNavButtons";
import userNavButtonsDisplay from "../userNav/displayUserNavButtons";
let displayNav = () => {
    createDropdownCategories()
    // 0 - guest
    // 1 - user/admin
    let guest = 1;
    if (guest === 0){
        guestNavButtonsDisplay()
    } else if (guest === 1){
        userNavButtonsDisplay()    
    }
}
displayNav()
export {displayNav}



