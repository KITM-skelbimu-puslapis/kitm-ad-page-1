import { database } from "./_firebase";
import { ref, child, get } from "firebase/database";

export const createCategorySection = () => {
  const main = document.querySelector("main");
  const categorySection = document.createElement("section");
  categorySection.id = "category-section";
  const tableContainer = document.createElement("div");
  tableContainer.classList.add("table-responsive", "w-100");
  categorySection.classList.add("container", "category-manager", "category-manager"); // className
  const categoryTable = document.createElement("table");
  categoryTable.id = "category-table";
  categoryTable.classList.add("table", "table-striped");
  const tableHead = document.createElement("thead");
  tableHead.innerHTML = `
    <tr>
    <th scope="col" colspan="4"><a href="" id="add-category-btn" class="link-style"><i class="bi bi-plus-square-fill"></i></a></th>
    </tr>
    <tr>
      <th scope="col">Category Name</th>
      <th scope="col">Image URL</th>
      <th scope="col" colspan="2">Options</th>
    </tr>
    `;
  categoryTable.appendChild(tableHead);
  tableContainer.appendChild(categoryTable);
  categorySection.appendChild(tableContainer);
  main.appendChild(categorySection);
};

export const loadCategoryManager = () => {
  const categoryTable = document.getElementById("category-table");
  const tableBody = document.createElement("tbody");
  tableBody.id = "category-tbody";
  const dbRef = ref(database);
  get(child(dbRef, `categories`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const categories = Object.values(snapshot.val());
        categories.map((category) => {
          const categoryRow = document.createElement("tr");
          categoryRow.setAttribute("data-category-id", category.categoryId);
          categoryRow.innerHTML = `
          <td><input type="text" value="${category.categoryName}" name="category-name" disabled/></td>
          <td><input type="text" value="${category.categoryImageUrl}" name="category-image" disabled/></td>
          <td><a href="" class="link-style"><i class="bi bi-pencil-fill"></i></a></td>
          <td><a href="" class="link-style"><i class="bi bi-trash3-fill"></i></a></td>
          `;
          tableBody.appendChild(categoryRow);
        });
      }
    })
    .then(() => {
      categoryTable.appendChild(tableBody);
    })
    .catch((error) => {
      console.error(error);
    });
};
