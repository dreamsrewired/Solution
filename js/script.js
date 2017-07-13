/** nav menu bar display */


var nav = document.getElementById('nav'),
    navIcon = document.getElementById('nav-icon'),
    main = document.getElementById('main');

function navToggle() {
    if(nav.style.height === '400px') {
        nav.style.height = '0px';
        main.style.top = '0px';
    } else {
        nav.style.height = '400px';
        main.style.top = '480px';
    }
}

navIcon.addEventListener('click', navToggle);