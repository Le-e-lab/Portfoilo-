document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector("#menu");

    if (menuIcon && navLinks) {
        menuIcon.onclick = () => {
            navLinks.classList.toggle("active");
        };
    }
});

function changeBackgroundColor() {
    const colors = [
        "#0f172a", // Dark Blue
        "#1e293b", // Dark Gray-Blue
        "#4a044e", // Dark Purple
        "#581c87", // Deep Violet
        "#3f3f46", // Dark Slate
        "#312e81", // Indigo Night
        "#172554"  // Midnight Blue
    ]; 

    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        document.body.style.transition = "background-color 3s ease-in-out";
        index = (index + 1) % colors.length; // Loop through colors
    }, 6000); // Change every 3 seconds
}

document.addEventListener("DOMContentLoaded", changeBackgroundColor);


// function changeBackgroundColor() {
//     const colors = ["#1e3a8a", "#065f46", "#b91c1c", "#7c3aed", "#f59e0b", "#14b8a6", "#4ade80"]; // Customize colors here
//     let index = 0;

//     setInterval(() => {
//         document.body.style.backgroundColor = colors[index];
//         document.body.style.transition = "background-color 3s ease-in-out";
//         index = (index + 1) % colors.length; // Loop through colors
//     }, 3000); // Change every 3 seconds
// }

// document.addEventListener("DOMContentLoaded", changeBackgroundColor);


// document.addEventListener("DOMContentLoaded", function () {
//     const colors = ["#ff6347", "#6a5acd", "#32cd32", "#ff69b4", "#20b2aa"];
//     let currentIndex = 0;
//     const navbar = document.querySelector(".navbar");

//     setInterval(() => {
//         navbar.style.backgroundColor = colors[currentIndex];
//         navbar.style.transition = "background-color 3s ease";

//         currentIndex++;
//         if (currentIndex === colors.length) {
//             currentIndex = 0; // Reset index to loop colors
//         }
//     }, 3000); // Change color every 3 seconds
// });




// let btnClick = document.querySelector('.visit-btn');g

// btnClick.addEventListener('click', () => {
//     window.location.href = "https://github.com/Le-e-lab?tab=repositories"
// });

// const downloadBtn = document.querySelector('#d-btn');
// const fileLink = "id=109LRY3zNTwtNJSIhnPXnK6MJINX-3I52&export=download&authuser=0"

// downloadBtn.addEventListener('click', () => {
//     window.location.href = fileLink
// });