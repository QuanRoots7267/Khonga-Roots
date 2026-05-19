// Initialize animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                eventType: document.getElementById('event-type').value,
                date: document.getElementById('date').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Log and show confirmation
            console.log('Booking request submitted:', formData);
            alert('Thank you for your booking request! We will contact you shortly at ' + formData.email);
            
            // Clear form
            this.reset();
        });
    }

    // Gallery hover zoom effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animations to cards
    const animatedElements = document.querySelectorAll(
        '.style-card, .video-card, .gallery-item, .info-item, .info-card'
    );
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Navbar styling on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.2)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(255, 107, 53, 0.1)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Add stagger animation for video cards on load
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Style select elements
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach(select => {
        select.style.appearance = 'none';
        select.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg fill=\'white\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")';
        select.style.backgroundRepeat = 'no-repeat';
        select.style.backgroundPosition = 'right 8px center';
        select.style.paddingRight = '35px';
    });

    // Prevent option text color issues
    selectElements.forEach(select => {
        for (let i = 0; i < select.options.length; i++) {
            select.options[i].style.color = '#333';
            select.options[i].style.backgroundColor = '#f5f5f5';
        }
    });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
});
