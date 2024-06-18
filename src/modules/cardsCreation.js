import { database } from "./_firebase";
import { ref, child, get } from "firebase/database";

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

const categorieNameToCode = {
    Furniture: "-Nzlu7UoGbCfwp0CkmMp",
    Cars: "-Nzlu7Uqh6XPAhIEtAwe",
    Pets: "-Nzlu7UriSIU8lICFtL1",
    Books: "-Nzlu7UriSIU8lICFtL2",
    Electronics: "-Nzlu7UsFFUkdJXWRvzX",
    Sports: "-Nzlu7UsFFUkdJXWRvzY",
    Food: "-Nzlu7UsFFUkdJXWRvzZ",
    Beauty: "-Nzlu7UtpPFkH7GqoPEO"
};

const truncateDescription = (description, maxLength) => {
    const words = description.split(' ');
    const truncated = words.slice(0, maxLength).join(' ');
    return words.length > maxLength ? truncated + '...' : truncated;
};

const displayListings = (mainElement, listings) => {
    const row = document.createElement('div');
    row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'g-4');
    row.style.minHeight = '70vh';

    listings.forEach(listing => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="card h-100 d-flex flex-column">
                <img src="${listing.listingImages ? listing.listingImages[0] : 'https://via.placeholder.com/150'}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="Listing Image">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${listing.listingTitle}</h5>
                    <p class="card-text">${truncateDescription(listing.listingDescription, 15)}</p>
                    <div class="mt-auto">
                        <p class="card-text"><strong>Price: $${listing.listingPrice}</strong></p>
                        <a href="#" class="btn btn-secondary mt-auto">Buy</a>
                    </div>
                </div>
            </div>
        `;
        row.appendChild(card);
    });
    mainElement.appendChild(row);
    mainElement.style.marginTop = '55px';
};
const loadCategoryListings = async (categoryCode, mainElement, categoryTitle) => {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, 'listings'));
        if (snapshot.exists()) {
            const allListings = snapshot.val();
            const listingsArray = Object.values(allListings);
            const listings = listingsArray.filter(listing => listing.listingCategory === categoryCode);
            mainElement.innerHTML = '';
            const titleElement = document.createElement('h2');
            titleElement.textContent = categoryTitle;
            titleElement.classList.add('text-center', 'my-4');
            mainElement.appendChild(titleElement);

            if (listings.length === 0) {
                const noListingMessage = document.createElement('div');
                noListingMessage.style.minHeight = '69vh';
                noListingMessage.textContent = 'No listings yet.';
                noListingMessage.classList.add('text-center', 'my-4', 'text-muted');
                mainElement.appendChild(noListingMessage);
            } else {
                displayListings(mainElement, listings);
            }
        } else {
            mainElement.innerHTML = '<div class="text-center my-4 text-muted">No listings available.</div>';
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        mainElement.innerHTML = '<div class="text-center my-4 text-muted">Error loading listings.</div>';
    }
};
export function createCards(items) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.className = 'container';
    const container = document.createElement('div');
    container.id = 'card-container';
    container.className = 'card-container';
    section.appendChild(container);
    main.appendChild(section);
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-container__item';
        card.innerHTML = `
            <div class="card" data-category="${item.name}">
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
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', async event => {
            event.preventDefault();
            const category = card.getAttribute('data-category');
            const categoryCode = categorieNameToCode[category];
            if (categoryCode) {
                await loadCategoryListings(categoryCode, main, category);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('turetu veikt');
});
