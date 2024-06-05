const createAddNewListingButton = () => {
    const AddNewListingButton = document.createElement('a');
    AddNewListingButton.setAttribute('class', 'btn btn-white');
    AddNewListingButton.setAttribute('type', 'button');
    AddNewListingButton.setAttribute('href', '#');
    const icon = document.createElement('i');
    icon.innerHTML = '<i class="bi bi-bag-plus-fill"></i>';
    AddNewListingButton.appendChild(icon);
    return AddNewListingButton;
}
export { createAddNewListingButton };
