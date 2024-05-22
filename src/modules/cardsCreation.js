export const items = [
    { id: 1, name: "Furniture", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 2, name: "Cars", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 3, name: "Pets", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 4, name: "Books", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 5, name: "Electronics", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 6, name: "Sports", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 7, name: "Food", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" },
    { id: 8, name: "Beauty", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/page1" }
];

export function createCards(items) {
    const container = document.getElementById('card-container');
    container.classList.add('row');

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        
        card.innerHTML = `
<div class="card">
    <a href="${item.link}" class="card__link">
        <img src="${item.imageUrl}" class="card__image" alt="${item.name}">
        <div class="card__body">
            <h5 class="card__title">${item.name}</h5>
        </div>
    </a>
</div>

        `;
        
        container.appendChild(card);
    });
}
 export default createCards