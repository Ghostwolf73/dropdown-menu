const menuIcon = document.querySelector('.myIcon');

menuIcon.addEventListener('click', ()=>{
    const menuList = document.querySelector('.nav-bar');
    menuList.classList.toggle('hide');
    if(menuIcon.innerHTML === '='){
        menuIcon.innerHTML = 'x'
    }
    else if(menuIcon.innerHTML === 'x'){
        menuIcon.innerHTML = "="
    }
    // console.log("fuck you")
})

