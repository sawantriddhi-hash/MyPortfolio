// Get the contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let messageText = document.getElementById("messageText").value.trim();

    let message = document.getElementById("message");

    // Validate the form
    if (name === "" || email === "" || messageText === "") {
        message.innerHTML = "Please fill all the fields.";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "Thank you! Your message has been sent successfully.";
        message.style.color = "green";

        // Clear the form
        document.getElementById("contactForm").reset();
    }
});