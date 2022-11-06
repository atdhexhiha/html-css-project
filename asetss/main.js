let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menu.oneclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove(active);
}