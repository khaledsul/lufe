document.addEventListener("DOMContentLoaded", function() {
  const contactInfo = JSON.parse(localStorage.getItem("contactInfo"));

  if (contactInfo) {
    showContactInfo(contactInfo);
  } else {
    showContactForm();
  }
});

function showContactForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const job = document.getElementById("job").value;

    const contactInfo = { name, email, phone, linkedin, job };
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
    window.location.href = "display.html";
  });
}

function showContactInfo(contactInfo) {
  const contactInfoHTML = `
    <p><strong>Name:</strong> ${contactInfo.name}</p>
    <p><strong>Email:</strong> ${contactInfo.email}</p>
    <p><strong>Phone:</strong> ${contactInfo.phone}</p>
    <p><strong>LinkedIn Account:</strong> ${contactInfo.linkedin}</p>
    <p><strong>Job:</strong> ${contactInfo.job}</p>
  `;

  document.getElementById("contactInfo").innerHTML = contactInfoHTML;
  document.getElementById("deleteButton").addEventListener("click", deleteContactInfo);
}

function deleteContactInfo() {
  localStorage.removeItem("contactInfo");
  window.location.href = "index.html";
}

  