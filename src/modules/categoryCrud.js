import addCategory from "./addCategoriesToDb";
import { database } from "./_firebase";
import { ref, child, remove, get, set } from "firebase/database";

export const addCategoryManagerRow = () => {
  document.getElementById("add-category-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td><input type="text" value="" id="new-ctaegory-name" required/></td>
          <td><input type="text" value="" id="new-ctaegory-image" required/></td>
          <td colspan="2" id="save-btn-cell"><a href="" id="save-category-btn"><i class="bi bi-check-square-fill"></i></a></td>   
        `;
    document.getElementById("category-tbody").appendChild(newRow);
    const saveBtn = document.getElementById("save-category-btn");
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const categoryName = document.getElementById("new-ctaegory-name");
      categoryName.setAttribute("name", "category-name");
      categoryName.setAttribute("required");
      const categoryImage = document.getElementById("new-ctaegory-image");
      categoryImage.setAttribute("name", "category-image");
      categoryImage.setAttribute("required");
      addCategory(categoryName.value, categoryImage.value);
      categoryName.disabled = true;
      categoryImage.disabled = true;
      categoryName.removeAttribute("id");
      categoryImage.removeAttribute("id");
      const editBtn = document.createElement("td");
      editBtn.innerHTML = `<a href=""><i class="bi bi-pencil"></i></a>`;
      newRow.replaceChild(editBtn, document.getElementById("save-btn-cell"));
      const deleteBtn = document.createElement("td");
      deleteBtn.innerHTML = `<a href=""><i class="bi bi-trash3-fill"></i></a>`;
      newRow.appendChild(deleteBtn);
      try {
        const dbRef = ref(database);
        get(child(dbRef, `categories`)).then((snapshot) => {
          if (snapshot.exists()) {
            const categories = Object.values(snapshot.val());
            categories.map((category) => {
              if (categoryName.value === category.categoryName) {
                newRow.setAttribute("data-category-id", category.categoryId);
                console.log("ID attached to category row");
              }
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    });
  });
};

export const deleteCategory = () => {
  const categorySection = document.getElementById("category-section");
  categorySection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains("bi-trash3-fill")) {
      const categoryToDelete = target
        .closest("tr")
        .getAttribute("data-category-id");
      const categoryRef = ref(database, "categories/" + categoryToDelete);
      remove(categoryRef)
        .then(() => {
          console.log("Removed category from database.");
          target.closest("tr").remove();
        })
        .catch((error) => {
          console.error("Error removing category:", error);
        });
    }
  });
};

export const editCategory = () => {
  const categorySection = document.getElementById("category-section");
  categorySection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains("bi-pencil")) {
      const categoryToEdit = target
        .closest("tr")
        .getAttribute("data-category-id");
      const categoryNameInput = target
        .closest("tr")
        .querySelector('input[name="category-name"]');
      categoryNameInput.disabled = false;
      const categoryImageInput = target
        .closest("tr")
        .querySelector('input[name="category-image"]');
      categoryImageInput.disabled = false;
      const saveBtn = document.createElement("td");
      saveBtn.setAttribute("colspan", "2");
      saveBtn.id = "save-btn-cell";
      saveBtn.innerHTML = `<a href="" id="save-category-btn"><i class="bi bi-check-square-fill"></i></a>`;
      const buttonReplacement = target.closest("td");
      const targetRow = target.closest("tr");
      targetRow.replaceChild(saveBtn, buttonReplacement);
      targetRow.removeChild(targetRow.lastElementChild);

      document
        .getElementById("save-category-btn")
        .addEventListener("click", (e) => {
          e.preventDefault();
          set(ref(database, "categories/" + categoryToEdit), {
            categoryName: categoryNameInput.value,
            categoryImageUrl: categoryImageInput.value,
            categoryId: categoryToEdit,
          })
            .then(() => {
              categoryNameInput.disabled = true;
              categoryImageInput.disabled = true;
              const editBtn = document.createElement("td");
              editBtn.innerHTML = `<a href=""><i class="bi bi-pencil"></i></a>`;
              const deleteBtn =  document.createElement("td");
              deleteBtn.innerHTML = `<td><a href=""><i class="bi bi-trash3-fill"></i></a></td>`
              targetRow.replaceChild(
                editBtn,
                saveBtn
              );
              targetRow.appendChild(deleteBtn);
              console.log("Updated category in database.");
            })
            .catch((error) => {
              console.error("Error updating category:", error);
            });
        });
    }
  });
};
