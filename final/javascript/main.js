function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
        const nav = document.querySelector('.navigation');
        nav.classList.toggle("responsive");
    })
}

toggleMenu();