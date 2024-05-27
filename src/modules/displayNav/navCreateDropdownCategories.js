const dropdownCategories = [
    {categoryName: 'Furniture'},
    {categoryName: 'Cars'},
    {categoryName: 'Pets'},
    {categoryName: 'Books'},
    {categoryName: 'Electronics'},
    {categoryName: 'Sports'},
    {categoryName: 'Food'},
    {categoryName: 'Beauty'}
]
let createDropdownCategories = () => {
    const ul = document.querySelector('.dropdown-menu');
    dropdownCategories.forEach((item) => {
        const li = document.createElement('li');
        const liA = document.createElement('a');
        liA.textContent = item.categoryName;
        liA.setAttribute('class', 'dropdown-item');
        liA.setAttribute('href', '#');
        li.appendChild(liA);
        ul.appendChild(li);
    })
}
export { createDropdownCategories };
