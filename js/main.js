// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Fade In Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial check for elements in view
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Here you would typically send the data to your backend
            // For now, we'll just log it
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    });
}

// Sticky Header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Add Google Maps (You'll need to replace YOUR_API_KEY with an actual Google Maps API key)
function initMap() {
    const location = { lat: 14.7645, lng: 121.0621 }; // Replace with actual coordinates
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#c9c9c9"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#81C784"}]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Eco Solutions Waste Services'
    });
}

// Load Google Maps API (You'll need to add your API key in the HTML)
// Add this script tag to your HTML:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>

// Add this function after the existing code
function toggleProducts(productId) {
    const productSection = document.getElementById(productId);
    const allProducts = document.querySelectorAll('.product-catalog');
    
    // Close all other product sections
    allProducts.forEach(section => {
        if (section.id !== productId && section.classList.contains('active')) {
            section.classList.remove('active');
        }
    });
    
    // Toggle the clicked section
    productSection.classList.toggle('active');
    
    // Scroll into view if section is opening
    if (productSection.classList.contains('active')) {
        setTimeout(() => {
            productSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// Interactive Map Functions
function showRegionInfo(regionId) {
    const regionInfo = document.getElementById(regionId);
    if (regionInfo) {
        regionInfo.classList.add('active');
    }
}

function hideRegionInfo(regionId) {
    const regionInfo = document.getElementById(regionId);
    if (regionInfo) {
        regionInfo.classList.remove('active');
    }
}

// Close region info when clicking outside
document.addEventListener('click', function(event) {
    const regionInfos = document.querySelectorAll('.region-info');
    regionInfos.forEach(info => {
        if (!info.contains(event.target)) {
            info.classList.remove('active');
        }
    });
});

// Prevent closing when clicking inside region info
document.querySelectorAll('.region-info').forEach(info => {
    info.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Add page transition element to the DOM
document.body.insertAdjacentHTML('beforeend', '<div class="page-transition"></div>');
const pageTransition = document.querySelector('.page-transition');

// Handle page transitions
document.querySelectorAll('a').forEach(link => {
    // Skip transition for "Engage with Us" and anchor links
    if (link.getAttribute('href')?.startsWith('#')) {
        return;
    }
    
    if (link.href && link.href.startsWith(window.location.origin)) {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = link.href;

            // Simple fade out transition
            pageTransition.classList.add('active');

            // Navigate after short fade
            setTimeout(() => {
                window.location.href = target;
            }, 400);
        });
    }
});

// Smooth scroll for "Engage with Us" and other anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Handle page load animations
document.addEventListener('DOMContentLoaded', () => {
    // Remove transition overlay
    pageTransition.classList.remove('active');

    // Initialize scroll animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe elements with animations
    document.querySelectorAll('.solution-card, .facility-card, .partner-image, .contact-content > *, .locations-content > *').forEach(element => {
        observer.observe(element);
    });
});

function showRegion(regionId) {
    const region = document.getElementById(regionId);
    if (region) {
        region.style.display = 'block';
        // Position the info box near the cursor
        document.addEventListener('mousemove', function(e) {
            region.style.left = (e.pageX + 20) + 'px';
            region.style.top = (e.pageY + 20) + 'px';
        });
    }
}

function hideRegion(regionId) {
    const region = document.getElementById(regionId);
    if (region) {
        region.style.display = 'none';
    }
}