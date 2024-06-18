import addCategory from "./addCategoriesToDb";
import { database } from "./_firebase";
import { ref, child, remove, get, set } from "firebase/database";
import { createCategorySection, loadCategoryManager } from "./categoryManager";

const isDuplicate = async (categoryField, categoryProperty) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `categories`));
    if (snapshot.exists()) {
      const categories = Object.values(snapshot.val());
      return categories.some((category) => {
        return categoryField.value === category[categoryProperty];
      });
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};

// export const cancelCategoryCreation = () => {
//   console.log("Cancelled");
//   const main = document.querySelector("main");
//   const categorySection = document.getElementById("category-section");
//   main.removeChild(categorySection);
//   createCategorySection();
//   loadCategoryManager();
// }

export const addCategoryManagerRow = () => {
  document.getElementById("add-category-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td><input type="text" value="" id="new-ctaegory-name" required/></td>
          <td><input type="text" value="" id="new-ctaegory-image" required/></td>
          <td id="save-btn-cell"><a href="" id="save-category-btn" class="link-style"><i class="bi bi-check-square-fill"></i></a></td>
          <td id="cancel-btn-cell"><a href="" id="cancel-category-btn" class="link-style"><i class="bi bi-x-square-fill"></i></a></td>    
        `;
    document.getElementById("category-tbody").appendChild(newRow);
    const saveBtn = document.getElementById("save-category-btn");
    const cancelBtn = document.getElementById("cancel-category-btn");
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("category-tbody").removeChild(newRow);
    });
    saveBtn.addEventListener("click", async (e) => {
      const categoryName = document.getElementById("new-ctaegory-name");
      const categoryImage = document.getElementById("new-ctaegory-image");
      if (!categoryName.value || !categoryImage.value) {
        categoryName.placeholder = "Cannot be empty";
        categoryImage.placeholder = "Cannot be empty";
      } else if (await isDuplicate(categoryName, "categoryName")) {
        categoryName.value = "";
        categoryName.placeholder = "Already exists";
      } else if (await isDuplicate(categoryImage, "categoryImageUrl")) {
        categoryImage.value = "";
        categoryImage.placeholder = "Already exists";
      } else {
        e.preventDefault();
        categoryName.setAttribute("name", "category-name");
        categoryName.setAttribute("required", "true");
        categoryImage.setAttribute("name", "category-image");
        categoryImage.setAttribute("required", "true");
        addCategory(categoryName.value, categoryImage.value);
        categoryName.disabled = true;
        categoryImage.disabled = true;
        categoryName.removeAttribute("id");
        categoryImage.removeAttribute("id");
        const editBtn = document.createElement("td");
        editBtn.innerHTML = `<a href="" class="link-style"><i class="bi bi-pencil-fill"></i></a>`;
        newRow.replaceChild(editBtn, document.getElementById("save-btn-cell"));
        const deleteBtn = document.createElement("td");
        deleteBtn.innerHTML = `<a href="" class="link-style"><i class="bi bi-trash3-fill"></i></a>`;
        newRow.replaceChild(
          deleteBtn,
          document.getElementById("cancel-btn-cell")
        );
        try {
          const dbRef = ref(database);
          get(child(dbRef, `categories`)).then((snapshot) => {
            if (snapshot.exists()) {
              const categories = Object.values(snapshot.val());
              categories.map((category) => {
                if (categoryName.value === category.categoryName) {
                  newRow.setAttribute("data-category-id", category.categoryId);
                }
              });
            }
          });
        } catch (error) {
          console.error(error);
        }
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
    if (target.classList.contains("bi-pencil-fill")) {
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
      saveBtn.id = "save-btn-cell";
      saveBtn.innerHTML = `<a href="" id="save-category-btn" class="link-style"><i class="bi bi-check-square-fill"></i></a>`;
      const cancelBtn = document.createElement("td");
      cancelBtn.id = "cancel-btn-cell";
      cancelBtn.innerHTML = `<a href="" id="cancel-category-btn" class="link-style"><i class="bi bi-x-square-fill"></i></a>`;
      const editReplacement = target.closest("td");
      const targetRow = target.closest("tr");
      const deleteReplacement = targetRow.lastElementChild;
      targetRow.replaceChild(saveBtn, editReplacement);
      targetRow.replaceChild(cancelBtn, deleteReplacement);

      document
        .getElementById("cancel-category-btn")
        .addEventListener("click", (e) => {
          e.preventDefault();
          categoryNameInput.disabled = true;
          categoryImageInput.disabled = true;
          const editBtn = document.createElement("td");
          editBtn.innerHTML = `<a href="" class="link-style"><i class="bi bi-pencil-fill"/i></a>`;
          const deleteBtn = document.createElement("td");
          deleteBtn.innerHTML = `<td><a href="" class="link-style"><i class="bi bi-trash3-fill"></i></a></td>`;
          targetRow.replaceChild(editBtn, saveBtn);
          targetRow.replaceChild(deleteBtn, cancelBtn);
        });

      document
        .getElementById("save-category-btn")
        .addEventListener("click", async (e) => {
          if (!categoryNameInput.value || !categoryImageInput.value) {
            categoryNameInput.placeholder = "Cannot be empty";
            categoryImageInput.placeholder = "Cannot be empty";
          } else if (await isDuplicate(categoryNameInput, "categoryName")) {
            categoryNameInput.value = "";
            categoryNameInput.placeholder = "Already exists";
          } else if (
            await isDuplicate(categoryImageInput, "categoryImageUrl")
          ) {
            categoryImageInput.value = "";
            categoryImageInput.placeholder = "Already exists";
          } else {
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
                editBtn.innerHTML = `<a href="" class="link-style"><i class="bi bi-pencil-fill"></i></a>`;
                const deleteBtn = document.createElement("td");
                deleteBtn.innerHTML = `<td><a href="" class="link-style"><i class="bi bi-trash3-fill"></i></a></td>`;
                targetRow.replaceChild(editBtn, saveBtn);
                targetRow.replaceChild(deleteBtn, cancelBtn);
                console.log("Updated category in database.");
              })
              .catch((error) => {
                console.error("Error updating category:", error);
              });
          }
        });
    }
  });
};
