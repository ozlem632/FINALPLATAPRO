document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('hamburger');
    const submenu = document.getElementById('submenu');

    menuTrigger.addEventListener('click', function() {
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
        } else {
            submenu.style.display = 'none';
        }
    });
});
