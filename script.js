document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector("#menu");

    if (menuIcon && navLinks) {
        menuIcon.onclick = () => {
            navLinks.classList.toggle("active");
        };
    }
});

function openContactForm() {
    document.getElementById("contactForm").style.display = "flex";
}

function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
}

// document.getElementById("emailForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     let mailtoLink = `mailto:mutsambiwalesley@gmail.com?subject=Message from ${name}&body=${message} (From: ${email})`;
    
//     window.location.href = mailtoLink;

//     closeContactForm(); // Close form after sending
// });
