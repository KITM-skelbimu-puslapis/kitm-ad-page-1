import { database } from "../_firebase";
import { ref, child, get } from "firebase/database";

export const renderListingCategoriesForNav = () => {
    const dbRef = ref(database);
    get(child(dbRef, `categories`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const categories = Object.values(snapshot.val());
          categories.map((category) => {
            const dropdownMenu = document.querySelector('.dropdown-menu');
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = category.categoryName;
            a.setAttribute('class', 'dropdown-item');
            a.setAttribute('href', '#');
            li.appendChild(a);
            dropdownMenu.appendChild(li);
            a.addEventListener('click', () => {
            const button = document.querySelector('.dropdown-toggle');
            button.textContent = category.categoryName;
        });



          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

