document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = JSON.parse(localStorage.getItem("contactInfo"));
  
    if (contactInfo) {
      showContactInfoSection(contactInfo);
    } else {
      showContactFormSection();
    }
  
    document.getElementById("deleteButton").addEventListener("click", deleteContactInfo);
  });
  
  function showContactFormSection() {
    document.getElementById("contactFormSection").style.display = "block";
    document.getElementById("contactInfoSection").style.display = "none";
  
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const linkedin = document.getElementById("linkedin").value;
      const job = document.getElementById("job").value;
  
      const contactInfo = { name, email, phone, linkedin, job };
      localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
      showContactInfoSection(contactInfo);
    });
  }
  
  function showContactInfoSection(contactInfo) {
    document.getElementById("contactFormSection").style.display = "none";
    document.getElementById("contactInfoSection").style.display = "block";
  
    const contactInfoHTML = `
      <p><strong>Name:</strong> ${contactInfo.name}</p>
      <p><strong>Email:</strong> ${contactInfo.email}</p>
      <p><strong>Phone:</strong> ${contactInfo.phone}</p>
      <p><strong>LinkedIn Account:</strong> ${contactInfo.linkedin}</p>
      <p><strong>Job:</strong> ${contactInfo.job}</p>
    `;
    document.getElementById("contactInfo").innerHTML = contactInfoHTML;
  }
  
  function deleteContactInfo() {
    localStorage.removeItem("contactInfo");
    showContactFormSection();
  }
  