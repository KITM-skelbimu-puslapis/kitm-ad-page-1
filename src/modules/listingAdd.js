import { database } from "./_firebase";
import { ref as dbRef, push, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { storage, storageRef } from "./_firebase";
import { ref as stRef, uploadBytes, getDownloadURL } from "firebase/storage";

// To print an error message:
const printMessage = (text) => {
    const listingForm = document.getElementById("new-listing-form");
    const formMessage = document.createElement("p");
    formMessage.textContent = text;
    listingForm.appendChild(formMessage);
    setTimeout(() => {
      listingForm.removeChild(formMessage);
    }, "5000");
  };

// To add listings to DB and generate unique IDs for them, processing the photos:
const addListing = async (title, categoryId, description, price, photos) => {
  try {
    const auth = getAuth();
    const user = await new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User is signed out."));
        }
      });
    });
    const userId = user.uid;
    const newListingRef = push(dbRef(database, "listings"));
    const listingId = newListingRef.key;
    const photoUrls = [];
    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];
      const photoName = `${new Date().toISOString()}_${photo.name}`;
      const filePath = `${userId}/${listingId}/${photoName}`;
      const photoRef = stRef(storageRef, filePath);
      await uploadBytes(photoRef, photo);
      console.log("Photo uploaded successfully");
      const downloadURL = await getDownloadURL(photoRef);
      photoUrls.push(downloadURL);
    }
    await set(newListingRef, {
      userId: userId,
      listingId: listingId,
      listingTitle: title,
      listingCategory: categoryId,
      listingDescription: description,
      listingPrice: price,
      listingImages: photoUrls
    })
    .then(console.log("Listing added"));
  } catch (err) {
    console.log("Listing not added:", err);
  }
};

// To validate listing and add to DB
export const validateAndAddListing = () => {
  const listingForm = document.getElementById("new-listing-form");
  listingForm.addEventListener("submit", (e) => {
      const listingTitle = document.getElementById("listing-title").value;
      const listingCategory = document.getElementById("listing-category").value;
      const listingDescription = document.getElementById("listing-description").value;
      const listingPrice = Number(document.getElementById("listing-price").value);
      const listingPhotos = document.getElementById("listing-photos").files;
      let validPhotos = true;
      if (!listingForm.checkValidity()) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Form validation failed");
      } else {
          e.preventDefault();
          if (listingPrice < 0) {
              printMessage("Price must be a number not lower than 0.");
          } else if ((listingTitle.match(/[a-zA-Z]/g)?.length ?? 0) < 3) {
              printMessage("Title must be at least 3 letters long.");
          } else if ((listingDescription.match(/[a-zA-Z]/g)?.length ?? 0) < 30) {
              printMessage("Description must be at least 30 letters long.");
          } else {
              for (let i = 0; i < listingPhotos.length; i++) {
                  const photo = listingPhotos[i];
                  if (!photo.type.startsWith("image/jpeg")) {
                      validPhotos = false;
                      break
                  }
              }
              if (!validPhotos) {
                  printMessage("Please upload only JPEG images.");
              } else {
                  addListing(listingTitle, listingCategory, listingDescription, listingPrice, Object.values(listingPhotos));
                  printMessage("Listing added!");
              }
          }
      }
  });
};