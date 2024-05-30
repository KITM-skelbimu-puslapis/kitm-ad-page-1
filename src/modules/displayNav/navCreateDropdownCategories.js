const dropdownCategories = [
    {categoryName: 'Furniture'},
    {categoryName: 'Cars'},
    {categoryName: 'Pets'},
    {categoryName: 'Books'},
    {categoryName: 'Electronics'},
    {categoryName: 'Sports'},
    {categoryName: 'Food'},
    {categoryName: 'Beauty'}
];
let createDropdownCategories = () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownCategories.forEach((item) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.categoryName;
        a.setAttribute('class', 'dropdown-item');
        a.setAttribute('href', '#');
        li.appendChild(a);
        dropdownMenu.appendChild(li);
        a.addEventListener('click', () => {
            const button = document.querySelector('.dropdown-toggle');
            button.textContent = item.categoryName;
        });
    });
};
export { createDropdownCategories };
