const sideBar = document.querySelector('.hamburger-menu-logo');
const display = document.querySelector('.sidebar');

sideBar.addEventListener('click', sidebarUpdate);

export function sidebarUpdate() {
    display.classList.toggle('js-sidebar');
}