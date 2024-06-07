import { database } from "./_firebase";
import { ref, set, push } from "firebase/database";

// To add categories and generate unique IDs for them:
export const addCategory = (name, imageUrl) => {
    try {
        const newCategoryRef = push(ref(database, 'categories'));
        const id = newCategoryRef.key;
        set(newCategoryRef, {
            categoryId: id,
            categoryName: name,
            categoryImageUrl: imageUrl
        });
        console.log("Category added");
    } catch (err) {
        console.log("Category not added:", err);
    }
  };