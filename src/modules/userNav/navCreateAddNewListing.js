let createAddNewListingButton = () => {
    const AddNewListingButton = document.createElement('a');
    AddNewListingButton.setAttribute('class', 'btn btn-white');
    AddNewListingButton.setAttribute('type', 'button');
    AddNewListingButton.setAttribute('href', '#');
    const icon = document.createElement('i');
    icon.setAttribute('class','bi bi-calendar-plus')
    icon.textContent = '+';
    AddNewListingButton.appendChild(icon);
    return AddNewListingButton;
}
export { createAddNewListingButton };
