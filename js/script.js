const menuList = document.getElementById('navigationMenu');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOpenOverlay = document.getElementById('mainNavWrap');

function toggle_menu(id) {
    event.stopPropagation();
    const element = document.getElementById(id);
    if(element.classList.contains('active')) {
        element.classList.remove('active');
        menuOpenOverlay.classList.remove('active');
        event.currentTarget.classList.remove('active');
     } else {
        element.classList.add('active');
        menuOpenOverlay.classList.add('active');
        event.currentTarget.classList.add('active');
     }
 };

 
 // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.stopPropagation();
    menuList.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    menuOpenOverlay.classList.remove('active');
}
