function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
        const nav = document.querySelector('.navigation');
        nav.classList.toggle("responsive");
    })

    const fakeNav = document.createAttribute("nav");
    document.querySelector("nav").appendChild(fakeNav)
}

toggleMenu();