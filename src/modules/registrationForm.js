import { app, database } from "./_firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, child, get } from "firebase/database";
import { renderLoginForm, attachLoginHandler } from "./loginForm";


// To render the registration form:
export const renderRegistrationForm = () => {
  const main = document.querySelector("main");
  const registrationSection = document.createElement("section");
  registrationSection.classList.add(
    "form",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  registrationSection.id = "registration-section";
  const registrationContainer = document.createElement("div");
  registrationContainer.classList.add(
    "form__form-container",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  const registrationForm = document.createElement("form");
  registrationForm.setAttribute("id", "registration-form");
  registrationForm.innerHTML = `<div class="form-floating my-3">
  <input type="text" class="form-control" id="register-username" placeholder="Username" required>
  <label for="register-username">Username</label>
</div>
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="register-email" placeholder="name@example.com" required>
  <label for="register-email">Email</label>
</div>
<div class="form-floating mb-5">
 <input type="password" class="form-control" id="register-password" minlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$" placeholder="Password" required data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="The pasword must be at least 8 characters long and inlude a lower-case letter, an upper-case letter, a number (0-9), and a special character (e.g. _!?).">
 <label for="register-password">Password</label>
</div>
<div class="mb-5">
<div class="form-check ">
  <input class="form-check-input" type="checkbox" value="" id="register-checkbox-terms" required>
  <label class="form-check-label" for="register-checkbox-terms">
    I have read and agree to the <a class="link-style" href="">Terms of Service</a>.
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="register-checkbox-privacy" required>
  <label class="form-check-label" for="register-checkbox-privacy">
    I have read and agree to the <a class="link-style" href="">Privacy Policy</a>.
  </label>
</div>
</div>
<div class="d-flex justify-content-center mb-3">
    <button type="submit" id="register-btn" class="btn btn-secondary">Register</button>
  </div>`;
  registrationContainer.appendChild(registrationForm);
  registrationSection.appendChild(registrationContainer);
  main.appendChild(registrationSection);
  const passwordPopoverTrigger = document.getElementById("register-password");
  new bootstrap.Popover(passwordPopoverTrigger, {
    trigger: 'focus'
  });
};

// To create a validation message:
const createRegistrationMessage = (text) => {
  const registrationForm = document.getElementById("registration-form");
  const registrationMessage = document.createElement("p");
  registrationMessage.textContent = text;
  registrationForm.appendChild(registrationMessage);
  setTimeout(() => {
    registrationForm.removeChild(registrationMessage);
  }, "5000");
};

// To check if a username isn't taken:
const checkUsernameAvailable = async () => {
  const username = document.getElementById("register-username");
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, "users"));
    if (snapshot.exists()) {
      let userEntries = snapshot.val();
      for (let userId in userEntries) {
        if (userEntries[userId].username === username.value) {
          console.log("Username is taken");
          return false;
        }
      }
      console.log("Username is available");
      return true;
    } else {
      console.log("No database available");
      createRegistrationMessage("Oops! There was an issue.");
      return false;
    }
  } catch (error) {
    console.error(error);
    createRegistrationMessage("Oops! There was an issue.");
    return false;
  }
};

// To send new user data to "Authentication" after validation and save it in DB:
const sendUserData = () => {
  const auth = getAuth();
  let email = document.getElementById("register-email");
  let password = document.getElementById("register-password");
  let username = document.getElementById("register-username");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        username: username.value,
        email: email.value,
        role: "regularUser",
        registrationDate: new Date().toLocaleString(),
      });
      createRegistrationMessage("Success! Thank you for registering. You'll be redirected shortly.");
      console.log("User created");
      email.value = "";
      password.value = "";
      username.value = "";
      document.getElementById("register-checkbox-terms").checked = false;
      document.getElementById("register-checkbox-privacy").checked = false;
      setTimeout(() => {
        document.querySelector("main").removeChild(document.getElementById("registration-section"));
        renderLoginForm();
        attachLoginHandler();
      }, 5000)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("User creation failed.", errorCode, errorMessage);
      createRegistrationMessage(
        "Oops! Looks like this email is already registered."
      );
    });
};

export const registerUser = () => {
  const registrationForm = document.getElementById("registration-form");
  registrationForm.addEventListener("submit", (e) => {
    if (!registrationForm.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Form validation failed");
    } else {
      e.preventDefault();
      checkUsernameAvailable().then((isUsernameAvailable) => {
        if (!isUsernameAvailable) {
          console.log("Form validation failed");
          createRegistrationMessage("Oops! This username is taken.");
        } else {
          console.log("Form validation succeeded");
          sendUserData();
        }
      }).catch(error => {
        console.error("Error checking username availability:", error);
        createRegistrationMessage("Oops! There was an issue.");
      });
    }
  });
};
