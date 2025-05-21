// Initialisation des animations AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 120,
    delay: 100,
    anchorPlacement: 'top-bottom'
});

// Données des projets
const projectsData = {
    1: {
        title: "Projet 1",
        description: "Description détaillée du projet 1. Ce projet démontre mes compétences en développement web et ma capacité à créer des interfaces utilisateur modernes et réactives.",
        image: "https://via.placeholder.com/800x600",
        technologies: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    2: {
        title: "Projet 2",
        description: "Description détaillée du projet 2. Une application web complète avec une base de données et une API RESTful.",
        image: "https://via.placeholder.com/800x600",
        technologies: ["Node.js", "Express", "MongoDB", "React"]
    },
    3: {
        title: "Projet 3",
        description: "Description détaillée du projet 3. Un site e-commerce avec panier d'achat et système de paiement intégré.",
        image: "https://via.placeholder.com/800x600",
        technologies: ["Vue.js", "Node.js", "Stripe", "MongoDB"]
    }
};

// Gestion du modal des projets
const modal = document.getElementById('project-modal');
const modalImage = modal.querySelector('.modal-image');
const modalTitle = modal.querySelector('.modal-info h2');
const modalDescription = modal.querySelector('.modal-description');
const modalTechnologies = modal.querySelector('.modal-technologies');
const closeModal = document.querySelector('.close-modal');
const viewButtons = document.querySelectorAll('.view-project');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectsData[projectId];
        
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        
        // Afficher les technologies
        modalTechnologies.innerHTML = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fermer le modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fermer le modal en cliquant en dehors
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
    console.log('Données du formulaire:', data);
    
    // Réinitialisation du formulaire
    contactForm.reset();
    
    // Message de confirmation
    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
});

// Gestion de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation au survol des cartes compétences
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(() => {
            icon.style.transform = 'scale(1.2) rotate(-5deg)';
        }, 200);
        setTimeout(() => {
            icon.style.transform = 'scale(1.2) rotate(0deg)';
        }, 400);
    });
});

// Animation pour les éléments de contact
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('i');
        icon.style.transform = 'translateX(5px)';
        setTimeout(() => {
            icon.style.transform = 'translateX(0)';
        }, 300);
    });
});

// Gestion du changement de langue dynamique
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLanguage);
    
    // Effet de parallaxe pour l'arrière-plan
    window.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        shapes.forEach((shape, index) => {
            const speed = 1 + index * 0.2;
            const xOffset = (x - 0.5) * 20 * speed;
            const yOffset = (y - 0.5) * 20 * speed;
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Assurer l'animation du champ CV
    const cvItem = document.querySelector('.contact-item:last-child');
    
    // Forcer l'animation si elle n'est pas déjà appliquée
    if (cvItem && !cvItem.classList.contains('aos-animate')) {
        // Observer l'élément CV
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Quand l'élément est visible
                if (entry.isIntersecting) {
                    // Ajouter les classes si elles ne sont pas déjà présentes
                    if (!cvItem.classList.contains('aos-init')) {
                        cvItem.classList.add('aos-init');
                    }
                    if (!cvItem.classList.contains('aos-animate')) {
                        cvItem.classList.add('aos-animate');
                    }
                    // Arrêter d'observer une fois l'animation appliquée
                    observer.unobserve(cvItem);
                }
            });
        }, {
            threshold: 0.1 // Déclencher quand au moins 10% de l'élément est visible
        });
        
        // Commencer à observer l'élément
        observer.observe(cvItem);
    }
}); 