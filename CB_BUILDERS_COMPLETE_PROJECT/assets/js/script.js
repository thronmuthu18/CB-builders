/**
 * CB BUILDERS - Production JavaScript Module
 * Architectural & Construction Website Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll) Library Once
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 80
        });
    }

    // 2. Hero Swiper Slider
    if (typeof Swiper !== 'undefined' && document.querySelector('.heroSlider')) {
        new Swiper('.heroSlider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }

    // 3. Testimonials Swiper Slider
    if (typeof Swiper !== 'undefined' && document.querySelector('.testimonialSlider')) {
        new Swiper('.testimonialSlider', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
            }
        });
    }

    // 4. Navigation & Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isActive = navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 5. Navbar Sticky Scroll Behavior
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 6. Smooth Scroll Anchor Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Projects Grid Filtering & Load More Pagination
    const ITEMS_PER_LOAD = 8;
    let currentFilter = 'all';
    let visibleCount = ITEMS_PER_LOAD;

    const cards = document.querySelectorAll('.project-card');
    const loadBtn = document.getElementById('loadMoreBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function applyFilter(filter) {
        currentFilter = filter;
        visibleCount = ITEMS_PER_LOAD;

        cards.forEach(card => card.style.display = 'none');

        const matched = Array.from(cards).filter(card =>
            filter === 'all' || card.dataset.category === filter
        );

        matched.slice(0, visibleCount).forEach(card => {
            card.style.display = 'block';
        });

        if (loadBtn) {
            loadBtn.style.display = matched.length > visibleCount ? 'inline-block' : 'none';
        }

        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterVal = btn.dataset.filter || 'all';
                applyFilter(filterVal);
            });
        });
    }

    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            const matched = Array.from(cards).filter(card =>
                currentFilter === 'all' || card.dataset.category === currentFilter
            );

            matched.slice(visibleCount, visibleCount + ITEMS_PER_LOAD).forEach(card => {
                card.style.display = 'block';
            });

            visibleCount += ITEMS_PER_LOAD;

            if (visibleCount >= matched.length) {
                loadBtn.style.display = 'none';
            }

            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    }

    // Initial filter run
    applyFilter('all');

    // 8. Image Popup Lightbox Modal
    const popup = document.createElement('div');
    popup.className = 'image-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-label', 'Project Image Preview');
    popup.innerHTML = `
        <button class="popup-close" aria-label="Close image popup">&times;</button>
        <img src="" alt="Project Image Preview">
    `;
    document.body.appendChild(popup);

    const popupImg = popup.querySelector('img');
    const closeBtn = popup.querySelector('.popup-close');

    function closePopup() {
        popup.classList.remove('active');
        if (popupImg) popupImg.src = '';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.project-card img').forEach(img => {
        img.addEventListener('click', () => {
            if (popupImg) {
                popupImg.src = img.src;
                popupImg.alt = img.alt || 'Project Preview';
            }
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });

    // 9. ESC Key Listener for Modals & Menus
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
            const projectModal = document.getElementById('projectModal');
            if (projectModal) projectModal.style.display = 'none';
            if (navToggle && navMenu && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // 10. Contact Form Setup & Input Naming
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input');
        if (inputs.length >= 3) {
            inputs[0].name = 'name';
            inputs[1].name = 'email';
            inputs[2].name = 'phone';
        }
        const textarea = contactForm.querySelector('textarea');
        if (textarea) textarea.name = 'message';
    }
});

// Helper XSS Sanitizer
function sanitizeInput(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    }).trim();
}

// Rate Limiting Throttler
let lastSubmitTime = 0;

// WhatsApp Contact Redirect Handler
function sendWhatsApp() {
    const now = Date.now();
    if (now - lastSubmitTime < 2000) return; // Prevent spam double-click
    lastSubmitTime = now;

    const nameInput = document.querySelector('input[placeholder="Your Name"], input[name="name"]');
    const emailInput = document.querySelector('input[placeholder="Your Email"], input[name="email"]');
    const phoneInput = document.querySelector('input[placeholder="Your Phone"], input[name="phone"]');
    const messageInput = document.querySelector('textarea[placeholder="Your Message"], textarea[name="message"]');
    const formMessage = document.getElementById('formMessage');

    const name = sanitizeInput(nameInput ? nameInput.value : '');
    const email = sanitizeInput(emailInput ? emailInput.value : '');
    const phone = sanitizeInput(phoneInput ? phoneInput.value : '');
    const message = sanitizeInput(messageInput ? messageInput.value : '');

    if (!name || !email || !phone || !message) {
        if (formMessage) {
            formMessage.textContent = 'Please fill in all fields before sending.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            setTimeout(() => { formMessage.style.display = 'none'; }, 4000);
        }
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        if (formMessage) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
            setTimeout(() => { formMessage.style.display = 'none'; }, 4000);
        }
        return;
    }

    const whatsappNumber = '916382539787'; // Official CB BUILDERS contact
    const textMessage = `New Project Enquiry from CB BUILDERS Website:\n\n` +
                        `👤 Name: ${name}\n` +
                        `📧 Email: ${email}\n` +
                        `📞 Phone: ${phone}\n` +
                        `💬 Message: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    
    if (formMessage) {
        formMessage.textContent = 'Redirecting to WhatsApp... 🚀';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
    }

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}
