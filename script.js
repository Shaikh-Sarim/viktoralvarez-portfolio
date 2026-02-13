// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            // Simple validation and feedback
            const name = inputs[0].value;
            const email = inputs[1].value;
            const message = inputs[2].value;

            if (name && email && message) {
                // Show success message
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = '✓ Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #00b894, #00a877)';
                
                // Reset form
                contactForm.reset();
                
                // Restore button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                }, 3000);
            }
        });
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe education cards
    document.querySelectorAll('.education-card').forEach(card => {
        observer.observe(card);
    });

    // Smooth active nav link highlight
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect for shapes
    const shapes = document.querySelectorAll('.shape');
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 20;
            shape.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });

    // Enhanced scroll reveal animations
    const allAnimatedElements = document.querySelectorAll('.about-content > div, .contact-info-item');
    allAnimatedElements.forEach((element, index) => {
        observer.observe(element);
    });

    // Add staggered animation for about section
    const aboutContent = document.querySelectorAll('.about-content > div');
    aboutContent.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer2.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        observer2.observe(element);
    });

    // Skill card hover effect with color change
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #00b894, #00a877)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.background = '';
        });
    });

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-content p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Viktor Alvarez. All rights reserved.`;
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Typewriter effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;

        const typeWriter = () => {
            if (index < originalText.length) {
                heroTitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        };

        // Start typewriter after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add active state to nav links
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--secondary-color);
        }

        .nav-link.active::after {
            width: 100%;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add scroll shadow to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Animate numbers in stats (if needed in future)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Preload animations for better performance
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.querySelectorAll('[class*="fade"], [class*="slide"]').forEach(el => {
        el.style.willChange = 'transform, opacity';
    });
});
