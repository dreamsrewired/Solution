// Reference ID Selectors
var homeText = document.getElementById('home-text'),
    serviceContents = document.getElementById('service-contents-wrap'),
    about = document.getElementById('about-contents'),
    team = document.getElementById('team-contents'),
    pricing = document.getElementById('pricing-contents'),
    portfolio = document.getElementById('portfolio-contents'),
    contact = document.getElementById('contact-container');

//Home Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset > 250) {
        homeText.style.display = 'none';
    } else {
        homeText.style.display = 'block';
    }
})

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 250 || window.pageYOffset !== 0) {
        homeText.style.display = 'block';
    }
})


// Service Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset > 550 || window.pageYOffset < 250) {
        serviceContents.style.display = 'none';
    } else {
        serviceContents.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 550 || window.pageYOffset < 250) {
        serviceContents.style.display = 'block';
    }
});


// About Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset < 1180 || window.pageYOffset > 2000) {
        about.style.display = 'none';
    } else {
        about.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 1180 || window.pageYOffset > 2000) {
        about.style.display = 'block';
    }
});


// Team Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset < 2000 || window.pageYOffset > 2600) {
        team.style.display = 'none';
    } else {
        team.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 2000 || window.pageYOffset > 2600) {
        team.style.display = 'block';
    }
});


// Pricing Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset < 3000 || window.pageYOffset > 3700) {
        pricing.style.display = 'none';
    } else {
        pricing.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 3000 || window.pageYOffset > 3700) {
        pricing.style.display = 'block';
    }
});


// Portfolio Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset < 4000 || window.pageYOffset > 4800) {
        portfolio.style.display = 'none';
    } else {
        portfolio.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 4000 || window.pageYOffset > 4800) {
        portfolio.style.display = 'block';
    }
});


// Contact Section Animation
window.addEventListener('load', function() {
    if (window.pageYOffset < 4850 || window.pageYOffset > 4500) {
        contact.style.display = 'none';
    } else {
        contact.style.display = 'block';
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset < 4850 || window.pageYOffset > 4500) {
        contact.style.display = 'block';
    }
});