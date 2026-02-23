/* ============================================
   FELLOWSHIP INTERNATIONAL ROMANIAN CHURCH
   JavaScript Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeScrollAnimations();
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('fade-in-up');
        observer.observe(card);
    });

    // Observe about columns
    document.querySelectorAll('.about-column').forEach(column => {
        column.classList.add('fade-in-up');
        observer.observe(column);
    });

    // Observe about history
    const aboutHistory = document.querySelector('.about-history');
    if (aboutHistory) {
        aboutHistory.classList.add('fade-in-up');
        observer.observe(aboutHistory);
    }

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.add('fade-in-up');
        observer.observe(item);
    });

    // Observe event cards
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.add('fade-in-up');
        observer.observe(card);
    });

    // Observe contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.classList.add('fade-in-left');
        observer.observe(item);
    });
}

// ============================================
// SMOOTH SCROLL BEHAVIOR ENHANCEMENT
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HIGHLIGHT ACTIVE NAV LINK
// ============================================

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ============================================
// ADD ANIMATION STYLES DYNAMICALLY
// ============================================

const style = document.createElement('style');
style.innerHTML = `
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
    }

    .fade-in-up.animated {
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .fade-in-left {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-in-left.animated {
        animation: fadeInLeft 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInLeft {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-menu a.active {
        color: #DC143C;
    }

    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// PRELOAD GALLERY IMAGES (when added)
// ============================================

function loadGalleryImages() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        // This function can be used to load actual images
        // For now, placeholders are shown
        // When you add real images, update the gallery-placeholder divs
    });
}

// ============================================
// FACEBOOK EVENT SYNC HELPER
// ============================================

// To add actual Facebook events in the future:
// 1. Use Facebook Graph API to fetch events
// 2. Display them in the events section
// Current implementation shows link to Facebook page

function embedFacebookEvents() {
    // This function can be enhanced to fetch real events from Facebook API
    // For now, users are directed to the Facebook page
    console.log('Facebook events loading system initialized');
}

// Initialize on page load
window.addEventListener('load', function () {
    loadGalleryImages();
    embedFacebookEvents();
});

// ============================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('Fellowship International Romanian Church - Website initialized');
console.log('Contact: pastorcornel@fellowshipenglewood.com | Phone: 312-972-4262');
