import app from "./_firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// To render the registration form:
export const renderRegistrationForm = () => {
  const main = document.querySelector("main");
  const registrationSection = document.createElement("section");
  registrationSection.classList.add(
    "registration-form",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );
  const registrationContainer = document.createElement("div");
  registrationContainer.classList.add(
    "registration-form__form-container",
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
  new bootstrap.Popover(passwordPopoverTrigger);
};

// To send new user data to DB after validation:
const auth = getAuth();
const sendUserData = () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  // const username = document.getElementById("register-username").value;
  // the authentication sectio does not accept username. Not sure what to do with the field at the moment, but user registration works.
  // Firebase does its own validation for duplicate profiles.

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// To validate input and create user:
export const registerUser = () => {
  document.getElementById("register-btn").onclick = (e) => {
    e.preventDefault();
    const registrationForm = document.getElementById("registration-form");
    if (registrationForm.checkValidity()) {
      sendUserData();
    } else {
      console.log("wrong data");
    }
  };
};
