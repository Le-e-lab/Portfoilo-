const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

let btnClick = document.querySelector('.visit-btn');g

btnClick.addEventListener('click', () => {
    window.location.href = "https://github.com/Le-e-lab?tab=repositories"
});

// const downloadBtn = document.querySelector('#d-btn');
// const fileLink = "id=109LRY3zNTwtNJSIhnPXnK6MJINX-3I52&export=download&authuser=0"

// downloadBtn.addEventListener('click', () => {
//     window.location.href = fileLink
// });

function changeColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(changeColor, 2000);