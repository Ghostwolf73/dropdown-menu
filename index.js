const openMenu = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('#main-bar');
const closeMenu = document.querySelector('.myIcon');


openMenu.addEventListener("click", ()=>{
    menuIcon.classList.add('active');
})

closeMenu.addEventListener("click", ()=>{
    menuIcon.classList.remove('active');
})
