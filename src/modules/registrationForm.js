export const registrationForm = () => {
  const main = document.querySelector("main");
  const registrationSection = document.createElement("section");
  registrationSection.classList.add("registration-form", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  const registrationContainer = document.createElement("div");
  registrationContainer.classList.add("registration-form__form-container", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  const registrationForm = document.createElement("form");
//   registrationForm.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");
  registrationForm.innerHTML = `<div class="form-floating my-3">
  <input type="text" class="form-control" id="floatingUsername" placeholder="Username" required>
  <label for="floatingUsername">Username</label>
</div>
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
  <label for="floatingEmail">Email</label>
</div>
<div class="form-floating mb-5">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
  <label for="floatingPassword">Password</label>
</div>
<div class="mb-5">
<div class="form-check ">
  <input class="form-check-input" type="checkbox" value="" id="checkbox-terms" required>
  <label class="form-check-label" for="checkbox-terms">
    I have read and agree to the <a class="registration-form__policy-link" href="">Terms of Service</a>.
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkbox-privacy" required>
  <label class="form-check-label" for="checkbox-privacy">
    I have read and agree to the <a class="registration-form__policy-link" href="">Privacy Policy</a>.
  </label>
</div>
</div>
<div class="d-flex justify-content-center mb-3">
    <button type="submit" class="btn btn-secondary">Sign in</button>
  </div>`;
  registrationContainer.appendChild(registrationForm);
  registrationSection.appendChild(registrationContainer);
  main.appendChild(registrationSection);
};
