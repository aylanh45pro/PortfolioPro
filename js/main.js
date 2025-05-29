

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Navbar background change on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active link on scroll
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Permettre la navigation au clavier pour le menu hamburger
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// ===== LANGUAGE SWITCHER =====
let currentLang = 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    if (lang === currentLang) return;
    
    // Mettre à jour la langue courante
    currentLang = lang;
    
    // Mettre à jour l'attribut lang de la balise html
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Mettre à jour les classes actives sur les labels de langue
    document.querySelectorAll('.language-label').forEach(label => {
        if (label.getAttribute('data-lang') === lang) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
    
    // Mettre à jour la classe du toggle
    const toggle = document.getElementById('language-toggle');
    if (lang === 'en') {
        toggle.classList.add('en');
    } else {
        toggle.classList.remove('en');
    }
    
    // Mettre à jour les textes
    updateTexts();
    
    // Mettre à jour le lien du CV
    updateCVLink();
    
    // Mettre à jour le texte du bouton d'animation
    updateAnimationToggleText();
    
    // Mettre à jour l'animation typed.js
    updateTypedText();
    
    // Mettre à jour les commandes du terminal
    updateTerminalCommands();
    
    // Sauvegarder la préférence de langue dans localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Fonction pour mettre à jour tous les textes
function updateTexts() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Fonction pour mettre à jour le lien du CV
function updateCVLink() {
    // Cibler spécifiquement le lien du CV avec data-key="about_cv_btn"
    const cvLink = document.querySelector('a[data-key="about_cv_btn"]');
    if (cvLink) {
        if (currentLang === 'fr') {
            cvLink.setAttribute('href', 'assets/FR_CV_Aylan_Haddouchi.pdf');
            console.log('CV link updated to French version');
        } else {
            cvLink.setAttribute('href', 'assets/EN_CV_Aylan_Haddouchi.pdf');
            console.log('CV link updated to English version');
        }
    } else {
        console.warn('CV link not found');
    }
}

// Fonction pour mettre à jour le texte du bouton d'animation
function updateAnimationToggleText() {
    const toggleButton = document.getElementById('toggle-animation');
    if (toggleButton) {
        const isDisabled = localStorage.getItem('disableHeroAnimation') === 'true';
        const key = isDisabled ? 'footer_toggle_animation_on' : 'footer_toggle_animation';
        toggleButton.textContent = translations[currentLang][key];
    }
}

// Fonction pour mettre à jour l'animation typed.js
function updateTypedText() {
    if (window.typed) {
        window.typed.destroy();
    }
    
    const options = {
        strings: translations[currentLang].typed_strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    };
    
    window.typed = new Typed('.typed-text', options);
}

// Initialiser le sélecteur de langue
function initLanguageSelector() {
    // Vérifier s'il y a une préférence de langue sauvegardée
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        changeLanguage(savedLang);
    }
    
    // Ajouter les écouteurs d'événements
    const toggle = document.getElementById('language-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            changeLanguage(newLang);
        });
    }
    
    // Ajouter des écouteurs sur les labels de langue
    document.querySelectorAll('.language-label').forEach(label => {
        label.addEventListener('click', () => {
            const lang = label.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

// ===== TYPED.JS EFFECT =====
let options = {
    strings: translations.fr.typed_strings,
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
};

window.typed = new Typed('.typed-text', options);

// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Hero section animations
sr.reveal('.hero-text h1', {});
sr.reveal('.hero-text h2', { delay: 400 });
sr.reveal('.hero-text p', { delay: 600 });
sr.reveal('.hero-buttons', { delay: 800 });
sr.reveal('.social-icons', { delay: 1000 });
sr.reveal('.hero-image', { origin: 'right' });

// Section headers
sr.reveal('.section-header', {});

// About section
sr.reveal('.about-image', { origin: 'left' });
sr.reveal('.about-text', { origin: 'right' });

// Skills section
sr.reveal('.skills-text', {});
sr.reveal('.skill-category', { interval: 200 });

// Projects section
sr.reveal('.projects-filter', {});
sr.reveal('.project-item', { interval: 200 });

// Education section
sr.reveal('.timeline-item', { interval: 200 });

// Contact section
sr.reveal('.contact-info', { origin: 'left' });
sr.reveal('.contact-form', { origin: 'right' });

// ===== SKILLS PROGRESS BARS =====
const skillItems = document.querySelectorAll('.skill-item');

const animateProgressBars = () => {
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar');
        const progress = progressBar.getAttribute('data-progress');
        
        progressBar.style.width = `${progress}%`;
    });
};

// Animate on scroll to skills section
const skillsSection = document.querySelector('#skills');

const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// ===== PROJECT FILTERING =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 200);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 500);
            }
        });
    });
});

// ===== PARALLAX SCROLLING EFFECT =====
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would normally send the form data to a server
        // For this demo, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        const formSuccess = document.createElement('div');
        formSuccess.className = 'form-success';
        formSuccess.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Merci pour votre message ! Je vous répondrai dès que possible.</p>
        `;
        
        contactForm.innerHTML = '';
        contactForm.appendChild(formSuccess);
    });
}

// ===== TERMINAL ANIMATION =====
// Les commandes du terminal seront mises à jour en fonction de la langue
let terminalCommands = [];

// Initialiser les commandes du terminal en fonction de la langue courante
function updateTerminalCommands() {
    terminalCommands = translations[currentLang].terminal_commands;
}

function typeText(element, text, speed = 50) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

async function animateTerminal() {
    for (let i = 0; i < terminalCommands.length; i++) {
        const commandElement = document.getElementById(`typed-command-${i+1}`);
        const outputElement = document.getElementById(`terminal-output-${i+1}`);
        
        if (commandElement && outputElement) {
            // Type the command
            await typeText(commandElement, terminalCommands[i].command, 70);
            
            // Wait before showing output
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Show output
            outputElement.textContent = terminalCommands[i].output;
            
            // Wait before next command
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    // Add blinking cursor to the current line
    const currentCommandElement = document.querySelector('.terminal-current-command');
    if (currentCommandElement) {
        await typeText(currentCommandElement, 'echo "Ready for new projects!"', 70);
    }
}

// ===== ANIMATION BACKGROUND TOGGLE =====
function setupAnimationToggle() {
    const toggleButton = document.getElementById('toggle-animation');
    if (!toggleButton) return;
    
    // Vérifier l'état actuel de l'animation
    const isAnimationDisabled = localStorage.getItem('disableHeroAnimation') === 'true';
    
    // Mettre à jour le texte du bouton en fonction de l'état actuel
    updateToggleButtonText(toggleButton, isAnimationDisabled);
    
    // Ajouter l'écouteur d'événement au bouton
    toggleButton.addEventListener('click', () => {
        // Inverser l'état actuel
        const newState = localStorage.getItem('disableHeroAnimation') !== 'true';
        
        // Sauvegarder le nouvel état dans localStorage
        localStorage.setItem('disableHeroAnimation', newState);
        
        // Mettre à jour le texte du bouton
        updateToggleButtonText(toggleButton, newState);
        
        // Informer l'utilisateur qu'un rechargement est nécessaire
        alert('Les changements seront appliqués au prochain chargement de la page.');
    });
}

function updateToggleButtonText(button, isDisabled) {
    if (isDisabled) {
        button.textContent = translations[currentLang].footer_toggle_animation_on;
        button.classList.remove('secondary-btn');
        button.classList.add('primary-btn');
    } else {
        button.textContent = translations[currentLang].footer_toggle_animation;
        button.classList.remove('primary-btn');
        button.classList.add('secondary-btn');
    }
}

// ===== INITIALIZE REVEAL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Reveal text elements in hero section
    const revealTextElements = document.querySelectorAll('.reveal-text');
    
    setTimeout(() => {
        revealTextElements.forEach(el => {
            el.classList.add('active');
        });
    }, 500);
    
    // Initialiser le sélecteur de langue
    initLanguageSelector();
    
    // Mettre à jour les textes avec la langue courante
    updateTexts();
    
    // Mettre à jour les commandes du terminal
    updateTerminalCommands();
    
    // Start terminal animation after a short delay
    setTimeout(() => {
        animateTerminal();
    }, 1000);
    
    // Initialiser le bouton de bascule d'animation
    setupAnimationToggle();
});
