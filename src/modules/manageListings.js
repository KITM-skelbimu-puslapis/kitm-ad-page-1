import { database } from "./_firebase";
import { ref, child, get, remove, update } from "firebase/database";

export const manageListingsUi = () => {
  const main = document.querySelector("main");
  const addNewListingSection = document.createElement("section");
  addNewListingSection.classList.add(
    "form",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "w-100"
  );

  const newListingFormContainer = document.createElement("div");
  newListingFormContainer.classList.add(
    "form__form-container",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "w-100"
  );
  newListingFormContainer.style.maxWidth = "600px";

  const newListingForm = document.createElement("form");
  newListingForm.setAttribute("id", "new-listing-form");
  newListingForm.classList.add("w-100");
  newListingForm.style.maxWidth = "600px";

  const accordionForListings = document.createElement("div");
  accordionForListings.classList.add("accordion", "w-100");
  accordionForListings.setAttribute("id", "accordionExample");

  const noListingsMessage = document.createElement("p");
  noListingsMessage.textContent = "No listings yet.";
  noListingsMessage.style.display = "none";
  noListingsMessage.style.textAlign = "center";
  accordionForListings.appendChild(noListingsMessage);

  newListingForm.appendChild(accordionForListings);
  newListingFormContainer.appendChild(newListingForm);
  addNewListingSection.appendChild(newListingFormContainer);
  main.appendChild(addNewListingSection);


  const dbRef = ref(database);
  get(child(dbRef, `listings`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const listings = snapshot.val();
        Object.entries(listings).forEach(([key, listing], index) => {
          const divForAccordion = document.createElement("div");
          divForAccordion.classList.add("accordion-item");

          const editListingButton = document.createElement("button");
          editListingButton.setAttribute("type", "button");
          editListingButton.classList.add("btn", "btn-outline-secondary", "w-50");
          editListingButton.innerHTML = '<i class="bi bi-pencil"></i>';

          const removeListingButton = document.createElement("button");
          removeListingButton.setAttribute("type", "button");
          removeListingButton.classList.add("btn", "btn-outline-secondary", "w-50");
          removeListingButton.innerHTML = '<i class="bi bi-dash-lg"></i>';


          removeListingButton.addEventListener("click", () => {
            removeListing(key, divForAccordion);
          });


          editListingButton.addEventListener("click", () => {
            showEditModal(key, listing);
          });

          const collapseId = `collapse${index}`;

          divForAccordion.innerHTML = `
            <h2 class="accordion-header" id="heading${index}">
              <button id="spotForButtons" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                ${listing.listingTitle}
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
              <div class="accordion-body" style="word-wrap: break-word; white-space: pre-wrap;">
                Description: ${listing.listingDescription}
                <img src="${listing.listingImages}" alt="no photo" width="300" height="300">
                Price: ${listing.listingPrice} €
              </div>
            </div>
          `;

          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("d-flex", "justify-content-center", "mt-2");
          buttonContainer.appendChild(editListingButton);
          buttonContainer.appendChild(removeListingButton);

          divForAccordion.appendChild(buttonContainer);
          accordionForListings.appendChild(divForAccordion);
        });

        noListingsMessage.style.display = "none";
      } else {

        noListingsMessage.style.display = "block";
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const removeListing = (listingId, accordionItem) => {
    const listingRef = child(dbRef, `listings/${listingId}`);
    remove(listingRef)
      .then(() => {
        console.log("Listing removed successfully.");
        
        accordionItem.remove();
        
        if (accordionForListings.children.length === 1) {
          noListingsMessage.style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error removing listing: ", error);
      });
  };

  const showEditModal = (listingId, listing) => {
    const modalHtml = `
      <div class="modal fade" id="editListingModal" tabindex="-1" aria-labelledby="editListingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editListingModalLabel">Edit Listing</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="edit-listing-form">
                <div class="mb-3">
                  <label for="listingTitle" class="form-label">Title</label>
                  <input type="text" class="form-control" id="listingTitle" value="${listing.listingTitle}" required>
                </div>
                <div class="mb-3">
                  <label for="listingDescription" class="form-label">Description</label>
                  <textarea class="form-control" id="listingDescription" rows="3" required>${listing.listingDescription}</textarea>
                </div>
                <div class="mb-3">
                  <label for="listingPrice" class="form-label">Price</label>
                  <input type="number" class="form-control" id="listingPrice" value="${listing.listingPrice}" required>
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);

    const editListingModal = new bootstrap.Modal(document.getElementById('editListingModal'));
    editListingModal.show();

    const editListingForm = document.getElementById("edit-listing-form");
    editListingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const updatedListing = {
        listingTitle: document.getElementById("listingTitle").value,
        listingDescription: document.getElementById("listingDescription").value,
        listingPrice: document.getElementById("listingPrice").value,
      };
      updateListing(listingId, updatedListing, editListingModal);
    });
  };

  const updateListing = (listingId, updatedListing, modal) => {
    const listingRef = child(dbRef, `listings/${listingId}`);
    update(listingRef, updatedListing)
      .then(() => {
        console.log("Listing updated successfully.");
        modal.hide();
        location.reload();
      })
      .catch((error) => {
        console.error("Error updating listing: ", error);
      });
  };
}
