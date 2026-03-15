window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navBar.classList.add('navbar-scroll');   
    } else {
        navBar.classList.remove('navbar-scroll');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    const togglebutton = document.querySelector('.navbar__mobile-menu-toggle');

    togglebutton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    })

})