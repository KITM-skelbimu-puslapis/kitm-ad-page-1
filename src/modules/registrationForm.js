const registrationForm = () => {
  const main = document.querySelector("main");
  const registrationSection = document.createElement("section");
  registrationSection.classList.add("registration-form", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  const registrationContainer = document.createElement("div");
  registrationContainer.classList.add("registration-form__form-container", "d-flex", "flex-column", "justify-content-center", "align-items-center");
  const registrationForm = document.createElement("form");
  registrationForm.innerHTML = `<div class="form-floating my-3">
  <input type="text" class="form-control" id="floatingUsername" placeholder="Username" required>
  <label for="floatingUsername">Username</label>
</div>
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
  <label for="floatingEmail">Email</label>
</div>
<div class="form-floating mb-5">
 <input type="password" class="form-control" id="floatingPassword" minlength="8" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$" placeholder="Password" required data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="The pasword must be at least 8 characters long and inlude a lower-case letter, an upper-case letter, a number (0-9), and a special character (e.g. _!?).">
 <label for="floatingPassword">Password</label>
</div>
<div class="mb-5">
<div class="form-check ">
  <input class="form-check-input" type="checkbox" value="" id="checkbox-terms" required>
  <label class="form-check-label" for="checkbox-terms">
    I have read and agree to the <a class="link-style" href="">Terms of Service</a>.
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="checkbox-privacy" required>
  <label class="form-check-label" for="checkbox-privacy">
    I have read and agree to the <a class="link-style" href="">Privacy Policy</a>.
  </label>
</div>
</div>
<div class="d-flex justify-content-center mb-3">
    <button type="submit" class="btn btn-secondary">Sign in</button>
  </div>`;
  registrationContainer.appendChild(registrationForm);
  registrationSection.appendChild(registrationContainer);
  main.appendChild(registrationSection);
  const passwordPopoverTrigger = document.getElementById('floatingPassword');
  new bootstrap.Popover(passwordPopoverTrigger);
};

export default registrationForm;