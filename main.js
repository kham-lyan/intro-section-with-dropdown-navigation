const dropdownBtn = document.querySelectorAll('.nav-link');
const dropdownMenu = document.querySelector('.dropdownMenu');

dropdownBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.classList);
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('active');

    })
})

const mobileMenu = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const body = document.querySelector('body');

function showNav() {
    primaryNav.setAttribute("data-visible", true);
    mobileMenu.setAttribute("aria-expanded", true);
    body.style.backgroundColor = "hsl(0, 0%, 0%, 0.5)";
}

function hideNav() {
    primaryNav.setAttribute("data-visible", false);
    mobileMenu.setAttribute("aria-expanded", false);
    body.style.backgroundColor = "";
}

mobileMenu.addEventListener('click', (e) => {
    const visibility = primaryNav.getAttribute("data-visible");

    e.stopPropagation();
    JSON.parse(visibility) ? hideNav() : showNav();
})

