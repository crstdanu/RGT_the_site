
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Navbar collapse auto-close functionality
document.addEventListener('DOMContentLoaded', function() {
    // Funcție pentru închiderea meniului navbar
    function closeNavbar() {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbar, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }

    // Închide meniul când se dă click în afara lui
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.navbar-toggler');
        
        // Verifică dacă meniul este deschis și click-ul nu este pe toggler sau în meniu
        if (navbar && navbar.classList.contains('show') && 
            !navbar.contains(event.target) && 
            !toggler.contains(event.target)) {
            closeNavbar();
        }
    });

    // Închide meniul când se dă click pe link-urile de navigare
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            closeNavbar();
        });
    });
});