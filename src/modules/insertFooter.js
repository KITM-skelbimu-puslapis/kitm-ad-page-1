const insertFooter = () => {
const footer = document.querySelector("footer");
footer.classList = "custom-footer d-lg-flex flex-row flex-wrap justify-content-evenly bg-body-tertiary";

const row = document.createElement("div");
row.classList = "row p-3";

const helpColumn = document.createElement("div");
helpColumn.classList = "col-lg col-md-5";

const helpSection = document.createElement("section");
helpSection.classList = "custom-footer__help-section container";

const helpHeader = document.createElement("p");
helpHeader.textContent = "Customer Support:";
helpHeader.classList = "mb-0 fw-bold";
helpSection.appendChild(helpHeader);

const helpList = document.createElement("ul");
helpList.classList = "list-unstyled";

const phoneItem = document.createElement("li");
const phoneLink = document.createElement("a");
phoneLink.href = "tel:+1234567890";
phoneLink.textContent = "+1 (234) 567-890";
phoneItem.appendChild(phoneLink);
helpList.appendChild(phoneItem);

const emailItem = document.createElement("li");
const emailLink = document.createElement("a");
emailLink.href = "mailto:support@example.com";
emailLink.textContent = "support@example.com";
emailItem.appendChild(emailLink);
helpList.appendChild(emailItem);

const hoursItem = document.createElement("li");
hoursItem.textContent = "Monday - Friday, 9 AM - 5 PM";
helpList.appendChild(hoursItem);

helpSection.appendChild(helpList);
helpColumn.appendChild(helpSection);
row.appendChild(helpColumn);

const documentColumn = document.createElement("div");
documentColumn.classList = "col-lg col-md-5";

const documentSection = document.createElement("section");
documentSection.classList = "container";

const docList = document.createElement("ul");
docList.classList = "list-unstyled";

const faqItem = document.createElement("li");
const faqLink = document.createElement("a");
faqLink.classList = "fw-bold";
faqLink.href = "/faq";
faqLink.textContent = "FAQ";
faqItem.appendChild(faqLink);
docList.appendChild(faqItem);

const privacyItem = document.createElement("li");
const privacyLink = document.createElement("a");
privacyLink.classList = "fw-bold";
privacyLink.href = "/privacy-policy";
privacyLink.textContent = "Privacy Policy";
privacyItem.appendChild(privacyLink);
docList.appendChild(privacyItem);

const termsItem = document.createElement("li");
const termsLink = document.createElement("a");
termsLink.classList = "fw-bold";
termsLink.href = "/terms-of-service";
termsLink.textContent = "Terms of Service";
termsItem.appendChild(termsLink);
docList.appendChild(termsItem);

documentSection.appendChild(docList);
documentColumn.appendChild(documentSection);
row.appendChild(documentColumn);

const copyright = document.createElement("p");
copyright.classList = "custom-footer__copyright w-100 text-center mb-0"
copyright.innerHTML = "&#169 Ad Page";
row.appendChild(copyright);

footer.appendChild(row);
}

export default insertFooter;