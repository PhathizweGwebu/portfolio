const burgerMenu = document.querySelector(".fa-bars");
const navItems = document.querySelector(".nav-list");



burgerMenu.addEventListener("click", ()=>{
    alert("clicked");
    navItems.classList.toggle('active');
})