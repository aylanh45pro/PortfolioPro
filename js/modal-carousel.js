// Script pour gu00e9rer la fenu00eatre modale et le carousel des projets
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour obtenir la traduction en fonction de la langue actuelle
    function getTranslation(key) {
        const currentLang = localStorage.getItem('language') || 'fr';
        return translations[currentLang][key];
    }


    const projectsDataTranslations = {
        fr: [
            {
                id: 'project1',
                title: 'Cablissimo',
                category: 'Web',
                description: 'Une application web moderne pour gérer efficacement les stocks de câbles et de composants électroniques. Ce projet a été développé pour simplifier le processus de gestion d\'inventaire pour une entreprise locale.',
                longDescription: `Cablissimo est une application web de gestion de stock développée pour une entreprise spécialisée dans la vente de câbles et de composants électroniques. Le projet a débuté par une analyse approfondie des besoins métiers, notamment la gestion multi-rôles (administrateur, client), la sécurité des accès, et la nécessité d'une interface intuitive adaptée à des utilisateurs non techniques.\n\nL'application permet de suivre l'inventaire en temps réel, de gérer les entrées et sorties de stock, de consulter l'historique des mouvements, et de générer des rapports détaillés pour l'analyse des ventes et des stocks. Un tableau de bord dynamique offre une visualisation claire des données clés (stocks faibles, produits populaires, alertes).\n\nLa gestion des utilisateurs inclut des droits différenciés, un système d'authentification sécurisé, et la possibilité pour les clients de passer commande, de suivre leurs livraisons, et de laisser des avis. L'administrateur dispose d'outils avancés pour ajouter/modifier des produits, gérer les commandes, consulter les statistiques, et intervenir sur les avis clients.\n\nLe projet a été réalisé en suivant une architecture MVC avec Flask pour le backend, SQL pour la base de données, et Bootstrap pour le frontend. Un soin particulier a été apporté à la sécurité (hashage des mots de passe, protection CSRF, validation des entrées), à l'accessibilité, et à l'expérience utilisateur (UX/UI).\n\nLa gestion de projet s'est appuyée sur des outils collaboratifs (Git, Trello), avec des sprints hebdomadaires et des revues régulières. J'ai assuré la conception, le développement principal, les tests, la documentation, et la mise en production sur un serveur Linux.\n\nCompétences acquises :\n- Développement web full stack (Flask, HTML/CSS, Bootstrap, JS)\n- Modélisation et gestion de base de données relationnelle (SQL)\n- Sécurité web (authentification, gestion des rôles, validation)\n- Visualisation de données et dataviz\n- Gestion de projet agile, documentation technique\n- Déploiement et maintenance sur serveur\n\nBilan : Le projet a permis d'automatiser et de fiabiliser la gestion des stocks, de réduire les erreurs humaines, et d'améliorer la satisfaction client grâce à une interface moderne et des fonctionnalités avancées.\n\nConclusion : Cablissimo a été une expérience formatrice, combinant analyse métier, développement technique, et gestion de projet, avec un impact concret pour l'entreprise utilisatrice.`,
                technologies: ['Python', 'HTML', 'CSS', 'Bootstrap', 'Flask', 'SQL'],
                features: ['Gestion d\'inventaire en temps réel', 'Tableau de bord interactif', 'Système d\'alertes', 'Génération de rapports', 'Recherche avancée'],
                images: [
                    { src: 'images/projects/project1-1.png', captionKey: 'project1_caption1' },
                    { src: 'images/projects/project1-2.png', captionKey: 'project1_caption2' },
                    { src: 'images/projects/project1-3.png', captionKey: 'project1_caption3' }
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
                longDescription: `Le projet Vocodeur est une application Java de traitement audio avancé, développée dans le cadre d'un projet universitaire. L'objectif était de concevoir un outil capable de manipuler des signaux sonores, d'appliquer des effets de vocodeur, et de proposer une interface à la fois console et graphique.\n\nAprès une phase de recherche sur les techniques de traitement du signal, j'ai implémenté plusieurs algorithmes : modification de la hauteur, effets de réverbération, filtrage, et création de voix robotiques. L'application permet de charger des fichiers audio, de visualiser le spectre en temps réel, et d'exporter les résultats dans différents formats.\n\nL'architecture suit le modèle MVC, avec une séparation claire entre la logique de traitement, l'interface utilisateur, et la gestion des fichiers. L'interface graphique (StdDraw) offre une visualisation dynamique du signal et des contrôles pour ajuster les paramètres des effets.\n\nLe projet a nécessité une gestion rigoureuse de la mémoire et des performances, le traitement audio en temps réel imposant des contraintes fortes. J'ai également mis en place des tests unitaires pour valider la robustesse des algorithmes.\n\nCompétences acquises :\n- Traitement du signal audio en Java\n- Algorithmique avancée (FFT, filtrage, effets)\n- Conception orientée objet et architecture MVC\n- Développement d'interfaces graphiques\n- Gestion de fichiers audio (lecture, écriture, conversion)\n- Travail en équipe et gestion de versions (Git)\n\nBilan : Le projet a permis de maîtriser les bases du traitement audio numérique, d'approfondir la programmation Java, et de livrer un outil fonctionnel et performant.\n\nConclusion : Vocodeur a été un défi technique stimulant, combinant mathématiques, algorithmique, et développement logiciel, avec une forte dimension créative.`,
                technologies: ['Java', 'StdDraw', 'Audio Processing'],
                features: ['Modification de la hauteur', 'Effets de réverbération', 'Visualisation du signal audio', 'Exportation en divers formats'],
                images: [
                    { src: 'images/projects/project2-1.png', captionKey: 'project2_caption1' },
                    { src: 'images/projects/project2-2.png', captionKey: 'project2_caption2' },
                    { src: 'images/projects/project2-3.png', captionKey: 'project2_caption3' }
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
                longDescription: `Le site E-Commerce est une plateforme web complète développée pour simuler la gestion d'une boutique en ligne. Le projet couvre l'ensemble du cycle de vente : catalogue produits, gestion du panier, commandes, paiement sécurisé, et administration.\n\nL'accent a été mis sur l'expérience utilisateur : interface responsive, navigation fluide, filtres de recherche, et accessibilité. Le back-office permet à l'administrateur de gérer les produits, suivre les commandes, consulter les statistiques de vente, et modérer les avis clients.\n\nLe développement a impliqué la création d'une base de données relationnelle (MySQL), la sécurisation des transactions (validation des entrées, gestion des sessions, protection contre les injections), et l'intégration de Bootstrap pour un design moderne.\n\nLa gestion de projet a suivi une méthodologie agile, avec des itérations courtes, des tests réguliers, et une documentation détaillée.\n\nCompétences acquises :\n- Développement web full stack (PHP, JS, HTML/CSS, Bootstrap)\n- Modélisation de base de données et requêtes SQL avancées\n- Sécurité des applications web\n- UX/UI et accessibilité\n- Gestion de projet, documentation, tests\n\nBilan : Le projet a permis de comprendre les enjeux d'une boutique en ligne, d'intégrer des fonctionnalités avancées, et de livrer une solution robuste et évolutive.\n\nConclusion : Ce site e-commerce a été l'occasion de mettre en pratique l'ensemble du cycle de développement web, de la conception à la mise en production, avec une forte dimension utilisateur.`,
                technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
                features: ['Catalogue de produits', 'Système de panier', 'Paiement en ligne', 'Gestion des commandes', 'Panneau d\'administration'],
                images: [
                    { src: 'images/projects/project3-1.png', captionKey: 'project3_caption1' },
                    { src: 'images/projects/project3-2.png', captionKey: 'project3_caption2' },
                    { src: 'images/projects/project3-3.png', captionKey: 'project3_caption3' }
                ],
                date: 'Avril 2025',
                client: 'Projet universitaire',
                role: 'Développeur Web',
                github: 'https://github.com/aylanh45pro/OvhCloudSite',
                demo: '#'
            },
            {
                id: 'project4',
                title: 'Puissance X',
                category: 'Jeu',
                description: 'Jeu Java console et graphique (MVC) : grille personnalisable, IA, mode multijoueur, architecture modulaire, expérience utilisateur, travail en équipe.',
                longDescription: `Puissance X est un jeu développé en Java, combinant une interface console et graphique, dans le cadre d'un projet collaboratif universitaire. L'objectif était de concevoir un jeu de type Puissance 4 étendu, avec grille personnalisable, intelligence artificielle, et mode multijoueur.\n\nLe projet a débuté par la définition des règles, la modélisation des classes (MVC), et la répartition des tâches au sein de l'équipe. J'ai participé à la conception de l'architecture logicielle, à l'implémentation du moteur de jeu, et à la création de l'interface graphique avec JavaFX.\n\nLes fonctionnalités incluent : choix du nombre de lignes/colonnes, IA de différents niveaux, sauvegarde/chargement de parties, gestion des scores, et personnalisation des couleurs. L'accent a été mis sur la robustesse du code, la modularité, et la qualité de l'expérience utilisateur.\n\nLa collaboration a nécessité l'utilisation de Git pour la gestion de versions, des réunions régulières, et une documentation partagée.\n\nCompétences acquises :\n- Programmation Java avancée\n- Architecture MVC et conception modulaire\n- Développement d'IA (algorithmes de jeu, heuristiques)\n- Interfaces graphiques (JavaFX)\n- Travail en équipe, gestion de projet\n\nBilan : Le projet a permis de développer des compétences en conception logicielle, en algorithmique, et en gestion de projet collaboratif.\n\nConclusion : Puissance X a été une expérience enrichissante, mêlant technique, créativité, et esprit d'équipe, avec un résultat final abouti et réutilisable.`,
                technologies: ['Java', 'JavaFX', 'Algorithmique', 'Travail d\'équipe'],
                features: ['Grille personnalisable', 'IA multilevel', 'Mode multijoueur', 'Interface graphique', 'Gestion des scores'],
                images: [
                    { src: 'images/projects/project3-1.jpg', captionKey: 'project3_caption1' },
                    { src: 'images/projects/project3-2.jpg', captionKey: 'project3_caption2' },
                    { src: 'images/projects/project3-3.jpg', captionKey: 'project3_caption3' }
                ],
                date: 'Mai 2025',
                client: 'Projet universitaire',
                role: 'Développeur Java',
                github: '#',
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
                    { src: 'images/projects/project1-1.png', caption: 'Main application page' },
                    { src: 'images/projects/project1-2.png', caption: 'Admin dashboard' },
                    { src: 'images/projects/project1-3.png', caption: 'Stock management interface' }
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
                    { src: 'images/projects/project2-1.png', caption: 'Main vocoder interface' },
                    { src: 'images/projects/project2-2.png', caption: 'Audio signal visualization' },
                    { src: 'images/projects/project2-3.png', caption: 'Effect parameters' }
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
                    { src: 'images/projects/project3-1.png', caption: 'Website homepage' },
                    { src: 'images/projects/project3-2.png', caption: 'Product page' },
                    { src: 'images/projects/project3-3.png', caption: 'Shopping cart' }
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
                    { src: 'images/projects/project4-1.png', caption: 'Image classification interface' },
                    { src: 'images/projects/project4-2.png', caption: 'Neural network layer visualization' },
                    { src: 'images/projects/project4-3.png', caption: 'Classification results' }
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
