// login.js
import { update } from "firebase/database";
import { app, database } from "./_firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// To render the login form:
export const renderLoginForm = () => {
  const main = document.querySelector("main");
  const loginSection = document.createElement("section");
  loginSection.classList.add("login-form", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  
  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-form__form-container", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  
  const loginForm = document.createElement("form");
  loginForm.setAttribute("id", "login-form");
  loginForm.innerHTML = `
    <div class="form-floating my-3">
      <input type="email" class="form-control" id="login-email" placeholder="name@example.com" required>
      <label for="login-email">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="login-password" placeholder="Password" required>
      <label for="login-password">Password</label>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button type="submit" id="login-btn" class="btn btn-secondary">Login</button>
    </div>`;
    
  loginContainer.appendChild(loginForm);
  loginSection.appendChild(loginContainer);
  main.appendChild(loginSection);
};

// To create a login message:
const createLoginMessage = (text) => {
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.createElement("p");
  loginMessage.textContent = text;
  loginForm.appendChild(loginMessage);
  setTimeout(() => {
    loginForm.removeChild(loginMessage);
  }, 5000);
};

// To handle login:
export const attachLoginHandler = () => {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const auth = getAuth();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const loginTime = new Data()
        update(ref(database, 'users/' + user.uid), {
          last_login: loginTime
        });
        createLoginMessage("Login successful! Welcome back.");
        console.log("Logged in successfully:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login failed:", errorCode, errorMessage);
        createLoginMessage("Login failed. Please check your credentials and try again.");
      });
  });
};
