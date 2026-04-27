// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
avLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// CTA Button functionality
const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        const whatsappUrl = 'https://wa.me/919876543210?text=Hi%20MetroSkin%21%20I%20would%20like%20to%20order%20a%20metro%20card%20skin.';
        window.open(whatsappUrl, '_blank');
    });
});

// Add animation on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in-out';
        }
    });
}, observerOptions);
const animatedElements = document.querySelectorAll('.product-card, .feature, .testimonial');
animatedElements.forEach(el => observer.observe(el));

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);