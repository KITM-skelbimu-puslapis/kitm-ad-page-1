import { database } from "./_firebase";
import { ref, child, get } from "firebase/database";
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
const fetchListings = async () => {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, 'listings'));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
export const search = () => {
    const searchForm = document.querySelector('form[role="search"]');
    const mainElement = document.querySelector('main');
    const searchInput = document.querySelector('.form-control');
    if (!searchForm || !mainElement || !searchInput) {
        console.error('Required elements not found.');
        return;
    }
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await handleSearch(mainElement, searchInput);
    });
}
const truncateDescription = (description, maxLength) => {
    const words = description.split(' ');
    const truncated = words.slice(0, maxLength).join(' ');
    if (words.length > maxLength) {
        return truncated + '...';
    } else {
        return truncated;
    }
};
const handleSearch = async (mainElement, searchInput) => {
    const searchText = searchInput.value.trim();
    const listings = await fetchListings();
    if (listings) {
        mainElement.innerHTML = '';
        const selectedCategory = document.querySelector('#categoryDropdownButton').textContent.trim();
        const categoryId = categorieNameToCode[selectedCategory];
        const titleText = `${selectedCategory} : "${searchText}"`;
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = titleText;
        categoryTitle.classList.add('text-center', 'my-4');
        mainElement.appendChild(categoryTitle);
        const filteredListings = Object.values(listings).filter(listing => {
            return listing.listingTitle.toLowerCase().includes(searchText.toLowerCase()) &&
                   listing.listingCategory === categoryId;
        });
        if (filteredListings.length === 0) {
            const noListingMessage = document.createElement('div');
            noListingMessage.style.minHeight = '69vh';
            noListingMessage.textContent = 'No listings found.';
            noListingMessage.classList.add('text-center', 'my-4', 'text-muted');
            mainElement.appendChild(noListingMessage);
        } else {
            const row = document.createElement('div');
            row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'g-4');
            row.style.minHeight = '70vh';
            filteredListings.forEach(listing => {
                const card = document.createElement('div');
                card.classList.add('col');
                card.innerHTML = `
                    <div class="card h-100 d-flex flex-column">
                        <img src="${listing.listingImages[0]}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="Listing Image">
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
            mainElement.style.marginTop = '65px';
        }
    } else {
        mainElement.innerHTML = '<div class="text-center my-4 text-muted">No listings available.</div>';
    }
}

