// MENU ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTIONS ACTIVE
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });


// NAVBAR
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bi-x');
    navbar.classList.remove('active');
};

// DARK-LIGHT MODE
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bi-brightness-high');
    document.body.classList.toggle('dark-mode');
};

// SCROLL REVEAL
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.profile-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content.satu img, .about-content.dua h3', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content.satu h3, .about-content.dua img', { origin: 'right' });

// FORM TO GOOGLESHEET JAMIE WILSON
const scriptURL = 'https://script.google.com/macros/s/AKfycbxuv0x15qgAOGWcWlFEueTeJqi7UofjGBwHXPxJ0qwLvfgPa4Bq_aWLKIP6NyGTuhQZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
      
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank You For Your Message!"
            setTimeout(function () {
                msg.innerHTML = ""

            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})