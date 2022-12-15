function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
        const nav = document.querySelector('.navigation');
        nav.classList.toggle("responsive");
    })
}

function copyright(){
    const date = new Date().getFullYear();
    document.querySelector("#copyright").innerHTML = "&copy" + date + " Temple Inn & Suites";
}

// function lastModified(){
//     const modified = document.lastModified;
//     document.querySelector("#lastmodification").innerHTML = "Last Modification " + modified;
// }

function main(){
    toggleMenu();
    copyright();
    // lastModified();
}

main();