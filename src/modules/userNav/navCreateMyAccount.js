const createDropdownMenu = (items) => {
    const dropdownUl = document.createElement('ul');
    dropdownUl.setAttribute('class', 'dropdown-menu');
    items.forEach((item) => {
        const li = document.createElement('li');
        const liA = document.createElement('a');
        liA.innerHTML = item.DropdownItemName;
        liA.setAttribute('class', 'dropdown-item');
        liA.setAttribute('href', '#');
        li.appendChild(liA);
        dropdownUl.appendChild(li);
    });

    return dropdownUl;
}

let adminMyAccountButton = () => {
    const myAccountDropdownItems = [
        {DropdownItemName: 'Manage listings'},
        {DropdownItemName: 'Manage account'},
        {DropdownItemName: 'Manage categories'}
    ];
    return createDropdownMenu(myAccountDropdownItems);
}

let userMyAccountButton = () => {
    const myAccountDropdownItems = [
        {DropdownItemName: 'Manage listings'},
        {DropdownItemName: 'Manage account'}
    ];
    return createDropdownMenu(myAccountDropdownItems);
}

let createMyAccountButton = () => {
    // 0 - user
    // 1 - admin
    let user = 0;
    const myAccountDiv = document.createElement('div');
    myAccountDiv.setAttribute('class', 'dropdown');
    const myAccountA = document.createElement('button');
    myAccountA.setAttribute('class', 'btn btn-white dropdown-toggle ');
    myAccountA.setAttribute('type', 'button');
    myAccountA.setAttribute('data-bs-toggle', 'dropdown');
    myAccountA.setAttribute('aria-expanded', 'false');
    myAccountA.innerHTML = '<i class="bi bi-person-fill"></i>';
    myAccountDiv.appendChild(myAccountA);
    if (user == 0){
        myAccountDiv.appendChild(userMyAccountButton());
    } else if (user == 1){
        myAccountDiv.appendChild(adminMyAccountButton());
    }
    return myAccountDiv;
}

export { createMyAccountButton };