document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.getElementById("saveButton");
  
  saveButton.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const job = document.getElementById("job").value;

    const contactInfo = { name, email, phone, linkedin, job };
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
    window.location.href = "display.html";
  });
});
