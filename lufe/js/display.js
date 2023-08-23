document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = JSON.parse(localStorage.getItem("contactInfo"));
  
    if (contactInfo) {
      showContactInfo(contactInfo);
    }
  
    document.getElementById("deleteButton").addEventListener("click", deleteContactInfo);
  });
  
  function showContactInfo(contactInfo) {
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
    window.location.href = "index.html";
  }
  