document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector("#menu");

    if (menuIcon && navLinks) {
        menuIcon.onclick = () => {
            navLinks.classList.toggle("active");
        };
    }
});






// let btnClick = document.querySelector('.visit-btn');g

// btnClick.addEventListener('click', () => {
//     window.location.href = "https://github.com/Le-e-lab?tab=repositories"
// });

// const downloadBtn = document.querySelector('#d-btn');
// const fileLink = "id=109LRY3zNTwtNJSIhnPXnK6MJINX-3I52&export=download&authuser=0"

// downloadBtn.addEventListener('click', () => {
//     window.location.href = fileLink
// });