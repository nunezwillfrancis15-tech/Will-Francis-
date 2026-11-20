// Close the mobile navigation after a section link is selected.
document.querySelectorAll('#navLinks .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#navLinks');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
