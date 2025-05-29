// Script pour gu00e9rer la fenu00eatre modale et le carousel des projets
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour obtenir la traduction en fonction de la langue actuelle
    function getTranslation(key) {
        const currentLang = localStorage.getItem('language') || 'fr';
        return translations[currentLang][key];
    }

    // Donnu00e9es des projets avec traductions
    const projectsDataTranslations = {
        fr: [
            {
                id: 'project1',
                title: 'Application web de gestion de Stock',
                category: 'Web',
                description: 'Une application web moderne pour gérer efficacement les stocks de câbles et de composants électroniques. Ce projet a été développé pour simplifier le processus de gestion d\'inventaire pour une entreprise locale.',
                longDescription: 'Cette application web de gestion de stock a été conçue pour répondre aux besoins spécifiques d\'une entreprise spécialisée dans les câbles et composants électroniques. Elle permet de suivre l\'inventaire en temps réel, de gérer les entrées et sorties de stock, et de générer des rapports détaillés.\n\nLe système comprend une interface utilisateur intuitive, un tableau de bord pour visualiser les données importantes, et des fonctionnalités de recherche avancée pour trouver rapidement des produits spécifiques. J\'ai également implémenté un système d\'alertes pour notifier les utilisateurs lorsque le stock d\'un produit est bas.',
                technologies: ['Python', 'HTML', 'CSS', 'Bootstrap', 'Flask', 'SQL'],
                features: ['Gestion d\'inventaire en temps réel', 'Tableau de bord interactif', 'Système d\'alertes', 'Génération de rapports', 'Recherche avancée'],
                images: [
                    { src: 'images/Cablissimo.png', captionKey: 'project1_caption1' },
                    { src: 'images/projects/project1-2.jpg', captionKey: 'project1_caption2' },
                    { src: 'images/projects/project1-3.jpg', captionKey: 'project1_caption3' }
                ],
                date: 'Janvier 2025',
                client: 'Projet personnel',
                role: 'Développeur Full Stack',
                github: 'https://github.com/aylanh45pro/FlaskWebApp1',
                demo: '#'
            },
            {
                id: 'project2',
                title: 'Vocodeur',
                category: 'Processing',
                description: 'Application de traitement audio permettant de manipuler et transformer des fichiers sonores avec des effets de vocodeur.',
                longDescription: 'Ce projet de vocodeur est une application de traitement audio avancée qui permet aux utilisateurs de manipuler et transformer des fichiers sonores. Le vocodeur analyse le signal audio et applique diverses transformations pour créer des effets sonores uniques.\n\nJ\'ai implémenté plusieurs algorithmes de traitement du signal pour permettre des fonctionnalités comme la modification de la hauteur, l\'ajout d\'effets de réverbération, et la création d\'effets de voix robotiques. L\'application dispose d\'une interface graphique intuitive qui permet aux utilisateurs de visualiser le signal audio en temps réel et d\'ajuster les paramètres des effets.',
                technologies: ['Java', 'StdDraw', 'Audio Processing'],
                features: ['Modification de la hauteur', 'Effets de réverbération', 'Visualisation du signal audio', 'Exportation en divers formats'],
                images: [
                    { src: 'images/projects/project2-1.jpg', captionKey: 'project2_caption1' },
                    { src: 'images/projects/project2-2.jpg', captionKey: 'project2_caption2' },
                    { src: 'images/projects/project2-3.jpg', captionKey: 'project2_caption3' }
                ],
                date: 'Mars 2025',
                client: 'Projet universitaire',
                role: 'Développeur principal',
                github: 'https://github.com/aylanh45pro/VocodeurAH',
                demo: '#'
            },
            {
                id: 'project3',
                title: 'Site E-Commerce',
                category: 'Web',
                description: 'Plateforme e-commerce complète avec système de panier, paiement en ligne et gestion des commandes.',
                longDescription: 'Ce site e-commerce est une plateforme complète que j\'ai développée pour permettre aux entreprises de vendre leurs produits en ligne. Le site comprend toutes les fonctionnalités essentielles d\'une boutique en ligne moderne, notamment un catalogue de produits, un système de panier d\'achat, et des options de paiement sécurisu00e9es.\n\nJ\'ai mis l\'accent sur l\'expérience utilisateur en créant une interface intuitive et responsive qui s\'adapte à tous les appareils. Le panneau d\'administration permet aux propriétaires de boutique de gérer facilement leurs produits, leurs commandes et leurs clients.',
                technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
                features: ['Catalogue de produits', 'Système de panier', 'Paiement en ligne', 'Gestion des commandes', 'Panneau d\'administration'],
                images: [
                    { src: 'images/projects/project3-1.jpg', captionKey: 'project3_caption1' },
                    { src: 'images/projects/project3-2.jpg', captionKey: 'project3_caption2' },
                    { src: 'images/projects/project3-3.jpg', captionKey: 'project3_caption3' }
                ],
                date: 'Avril 2025',
                client: 'Projet universitaire',
                role: 'Développeur Web',
                github: 'https://github.com/aylanh45pro/OvhCloudSite',
                demo: '#'
            },
            {
                id: 'project4',
                title: 'Algorithme d\'intelligence artificielle',
                category: 'Autres',
                description: 'Implémentation d\'un algorithme d\'apprentissage automatique pour la classification d\'images.',
                longDescription: 'Ce projet d\'intelligence artificielle se concentre sur le développement d\'un algorithme de classification d\'images utilisant des techniques d\'apprentissage automatique avancées. J\'ai implémenté un réseau de neurones convolutif (CNN) pour identifier et catégoriser différents objets dans des images.\n\nLe modèle a été entraîné sur un large ensemble de données et a atteint une précision de classification élevée. J\'ai également développé une interface utilisateur simple permettant de télécharger des images et de visualiser les résultats de la classification en temps réel.',
                technologies: ['Python', 'TensorFlow', 'Machine Learning', 'OpenCV', 'NumPy'],
                features: ['Classification d\'images', 'Réseau de neurones convolutif', 'Visualisation des résultats', 'Interface utilisateur simple'],
                images: [
                    { src: 'images/projects/project4-1.jpg', captionKey: 'project4_caption1' },
                    { src: 'images/projects/project4-2.jpg', captionKey: 'project4_caption2' },
                    { src: 'images/projects/project4-3.jpg', captionKey: 'project4_caption3' }
                ],
                date: 'Juin 2025',
                client: 'Projet personnel',
                role: 'Développeur IA',
                github: 'https://github.com/aylanh45pro',
                demo: '#'
            }
        ],
        en: [
            {
                id: 'project1',
                title: 'Stock Management Web Application',
                category: 'Web',
                description: 'A modern web application to efficiently manage cable and electronic component inventory. This project was developed to simplify the inventory management process for a local company.',
                longDescription: 'This stock management web application was designed to meet the specific needs of a company specializing in cables and electronic components. It allows real-time inventory tracking, management of stock inputs and outputs, and generation of detailed reports.\n\nThe system includes an intuitive user interface, a dashboard to visualize important data, and advanced search features to quickly find specific products. I also implemented an alert system to notify users when a product\'s stock is low.',
                technologies: ['Python', 'HTML', 'CSS', 'Bootstrap', 'Flask', 'SQL'],
                features: ['Real-time inventory management', 'Interactive dashboard', 'Alert system', 'Report generation', 'Advanced search'],
                images: [
                    { src: 'images/Cablissimo.png', caption: 'Main application page' },
                    { src: 'images/projects/project1-2.jpg', caption: 'Admin dashboard' },
                    { src: 'images/projects/project1-3.jpg', caption: 'Stock management interface' }
                ],
                date: 'January 2025',
                client: 'Personal project',
                role: 'Full Stack Developer',
                github: 'https://github.com/aylanh45pro/FlaskWebApp1',
                demo: '#'
            },
            {
                id: 'project2',
                title: 'Vocoder',
                category: 'Processing',
                description: 'Audio processing application allowing manipulation and transformation of sound files with vocoder effects.',
                longDescription: 'This vocoder project is an advanced audio processing application that allows users to manipulate and transform sound files. The vocoder analyzes the audio signal and applies various transformations to create unique sound effects.\n\nI implemented several signal processing algorithms to enable features such as pitch modification, reverb effects, and robotic voice creation. The application has an intuitive graphical interface that allows users to visualize the audio signal in real-time and adjust effect parameters.',
                technologies: ['Java', 'StdDraw', 'Audio Processing'],
                features: ['Pitch modification', 'Reverb effects', 'Audio signal visualization', 'Export in various formats'],
                images: [
                    { src: 'images/projects/project2-1.jpg', caption: 'Main vocoder interface' },
                    { src: 'images/projects/project2-2.jpg', caption: 'Audio signal visualization' },
                    { src: 'images/projects/project2-3.jpg', caption: 'Effect parameters' }
                ],
                date: 'March 2025',
                client: 'University project',
                role: 'Lead Developer',
                github: 'https://github.com/aylanh45pro/VocodeurAH',
                demo: '#'
            },
            {
                id: 'project3',
                title: 'E-Commerce Website',
                category: 'Web',
                description: 'Complete e-commerce platform with shopping cart system, online payment, and order management.',
                longDescription: 'This e-commerce website is a complete platform I developed to allow businesses to sell their products online. The site includes all the essential features of a modern online store, including a product catalog, shopping cart system, and secure payment options.\n\nI focused on user experience by creating an intuitive and responsive interface that adapts to all devices. The admin panel allows store owners to easily manage their products, orders, and customers.',
                technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
                features: ['Product catalog', 'Shopping cart system', 'Online payment', 'Order management', 'Admin panel'],
                images: [
                    { src: 'images/projects/project3-1.jpg', caption: 'Website homepage' },
                    { src: 'images/projects/project3-2.jpg', caption: 'Product page' },
                    { src: 'images/projects/project3-3.jpg', caption: 'Shopping cart' }
                ],
                date: 'April 2025',
                client: 'University project',
                role: 'Web Developer',
                github: 'https://github.com/aylanh45pro/OvhCloudSite',
                demo: '#'
            },
            {
                id: 'project4',
                title: 'Artificial Intelligence Algorithm',
                category: 'Others',
                description: 'Implementation of a machine learning algorithm for image classification.',
                longDescription: 'This artificial intelligence project focuses on developing an image classification algorithm using advanced machine learning techniques. I implemented a convolutional neural network (CNN) to identify and categorize different objects in images.\n\nThe model was trained on a large dataset and achieved high classification accuracy. I also developed a simple user interface allowing users to upload images and visualize classification results in real-time.',
                technologies: ['Python', 'TensorFlow', 'Machine Learning', 'OpenCV', 'NumPy'],
                features: ['Image classification', 'Convolutional neural network', 'Results visualization', 'Simple user interface'],
                images: [
                    { src: 'images/projects/project4-1.jpg', caption: 'Image classification interface' },
                    { src: 'images/projects/project4-2.jpg', caption: 'Neural network layer visualization' },
                    { src: 'images/projects/project4-3.jpg', caption: 'Classification results' }
                ],
                date: 'June 2025',
                client: 'Personal project',
                role: 'AI Developer',
                github: 'https://github.com/aylanh45pro',
                demo: '#'
            }
        ]
    };
    
    // Obtenir les données des projets en fonction de la langue actuelle
    const currentLang = localStorage.getItem('language') || 'fr';
    const projectsData = projectsDataTranslations[currentLang];
    
    
    // Su00e9lectionner tous les boutons "Du00e9tails du projet"
    const projectButtons = document.querySelectorAll('.project-btn');
    
    // Ajouter les u00e9couteurs d'u00e9vu00e9nements aux boutons
    projectButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openProjectModal(index);
        });
    });
    
    // Fonction pour ouvrir la fenu00eatre modale du projet
    function openProjectModal(projectIndex) {
        // Ru00e9cupu00e9rer les donnu00e9es du projet
        const project = projectsData[projectIndex];
        
        // Cru00e9er la structure HTML de la fenu00eatre modale
        const modalHTML = `
            <div class="project-modal" id="projectModal">
                <div class="modal-container">
                    <div class="modal-header">
                        <h2 class="modal-title">${project.title}</h2>
                        <button class="modal-close" aria-label="${getTranslation('modal_close')}">&times;</button>
                    </div>
                    <div class="carousel-container">
                        <div class="carousel">
                            <div class="carousel-inner">
                                ${project.images.map(image => `
                                    <div class="carousel-item">
                                        <img src="${image.src}" alt="${project.title}" class="carousel-img">
                                        <div class="carousel-caption">${getTranslation(image.captionKey)}</div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="carousel-controls">
                                <button class="carousel-control prev"><i class="fas fa-chevron-left"></i></button>
                                <button class="carousel-control next"><i class="fas fa-chevron-right"></i></button>
                            </div>
                        </div>
                        <div class="carousel-indicators">
                            ${project.images.map((_, i) => `
                                <div class="carousel-indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-details">
                            <h3>${getTranslation('modal_description')}</h3>
                            <p>${project.longDescription.replace(/\n/g, '<br>')}</p>
                        </div>
                        <div class="project-meta">
                            <div class="meta-item">
                                <span class="meta-label">${getTranslation('modal_category')}</span>
                                <span class="meta-value">${project.category}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">${getTranslation('modal_date')}</span>
                                <span class="meta-value">${project.date}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">${getTranslation('modal_client')}</span>
                                <span class="meta-value">${project.client}</span>
                            </div>
                            <div class="meta-item">
                                <span class="meta-label">${getTranslation('modal_role')}</span>
                                <span class="meta-value">${project.role}</span>
                            </div>
                        </div>
                        <div class="project-technologies">
                            <h4>${getTranslation('modal_technologies')}</h4>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `
                                    <span class="tech-tag">${tech}</span>
                                `).join('')}
                            </div>
                        </div>
                        <div class="project-features">
                            <h4>${getTranslation('modal_features')}</h4>
                            <ul>
                                ${project.features.map(feature => `
                                    <li>${feature}</li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="project-actions">
                            <a href="${project.github}" target="_blank" class="btn primary-btn"><i class="fab fa-github"></i> ${getTranslation('modal_view_code')}</a>
                            <a href="${project.demo}" target="_blank" class="btn secondary-btn"><i class="fas fa-external-link-alt"></i> ${getTranslation('modal_view_demo')}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter la fenu00eatre modale au corps du document
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Su00e9lectionner la fenu00eatre modale
        const modal = document.getElementById('projectModal');
        
        // Afficher la fenu00eatre modale avec un du00e9lai pour l'animation
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Gu00e9rer la fermeture de la fenu00eatre modale
        const closeButton = modal.querySelector('.modal-close');
        closeButton.addEventListener('click', closeModal);
        
        // Fermer la fenu00eatre modale en cliquant u00e0 l'extu00e9rieur
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Initialiser le carousel
        initCarousel();
    }
    
    // Fonction pour fermer la fenu00eatre modale
    function closeModal() {
        const modal = document.getElementById('projectModal');
        
        // Animer la fermeture
        modal.classList.remove('active');
        
        // Supprimer la fenu00eatre modale apru00e8s l'animation
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    
    // Fonction pour initialiser le carousel
    function initCarousel() {
        const carousel = document.querySelector('.carousel');
        const carouselInner = carousel.querySelector('.carousel-inner');
        const prevButton = carousel.querySelector('.carousel-control.prev');
        const nextButton = carousel.querySelector('.carousel-control.next');
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        let currentIndex = 0;
        const itemCount = carouselInner.children.length;
        
        // Fonction pour afficher une diapositive spu00e9cifique
        function showSlide(index) {
            if (index < 0) {
                index = itemCount - 1;
            } else if (index >= itemCount) {
                index = 0;
            }
            
            currentIndex = index;
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Mettre u00e0 jour les indicateurs
            indicators.forEach((indicator, i) => {
                if (i === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // u00c9couteurs d'u00e9vu00e9nements pour les boutons pru00e9cu00e9dent et suivant
        prevButton.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
        
        nextButton.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
        
        // u00c9couteurs d'u00e9vu00e9nements pour les indicateurs
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Afficher la premiu00e8re diapositive
        showSlide(0);
        
        // Ajouter la navigation au clavier
        document.addEventListener('keydown', function(e) {
            const modal = document.getElementById('projectModal');
            if (!modal) return;
            
            if (e.key === 'ArrowLeft') {
                showSlide(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showSlide(currentIndex + 1);
            } else if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
});
