import { database } from "./_firebase";
import { ref, child, get } from "firebase/database";

export const listingForm = () => {
  const main = document.querySelector("main");
  const addNewListingSection = document.createElement("section");
  addNewListingSection.classList.add(
    "form",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  const newListingFormContainer = document.createElement("div");
  newListingFormContainer.classList.add(
    "form__form-container",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  const newListingForm = document.createElement("form");
  newListingForm.setAttribute("id", "new-listing-form");
  newListingForm.innerHTML = `<div class="my-3">
        <input type="text" class="form-control" id="listing-title" aria-label="Listing title" placeholder="Listing title" required>
      </div>
      <div class="mb-3">
       <select name="listing-category" class="form-select" id="listing-category" aria-label="Category" required> 
       <option value="">Listing category</option>
       </select>
      </div>
      <div class="mb-3">
        <textarea type="text" class="form-control" id="listing-description" aria-label="Description" placeholder="Description" required></textarea>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">&euro;</span>
        <input type="number" step="0.01" class="form-control" id="listing-price" aria-label="Price" placeholder="Price" required>
      </div>
      <div class="mb-3">
        <input class="form-control" type="file" id="listing-photos" accept="image/jpeg" aria-label="Photos" multiple required />
      </div>
      <div class="d-flex justify-content-center mb-3">
          <button type="submit" id="add-listing-btn" class="btn btn-secondary">Add</button>
      </div>`;
  newListingFormContainer.appendChild(newListingForm);
  addNewListingSection.appendChild(newListingFormContainer);
  main.appendChild(addNewListingSection);
};

export const renderListingCategories = () => {
  const dbRef = ref(database);
  get(child(dbRef, `categories`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const categories = Object.values(snapshot.val());
        categories.map((category) => {
          const categorySelect = document.getElementById("listing-category");
          const categoryOption = document.createElement("option");
          categoryOption.value = category.categoryId;
          categoryOption.textContent = category.categoryName;
          categorySelect.appendChild(categoryOption);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
