// Script pour gu00e9rer la fenu00eatre modale et le carousel des projets
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour obtenir la traduction en fonction de la langue actuelle
    function getTranslation(key) {
        const currentLang = localStorage.getItem('language') || 'fr';
        return translations[currentLang][key];
    }

    // Fonction pour formater la description longue
    function formatLongDescription(description) {
        // Diviser le texte en paragraphes
        const paragraphs = description.split('\n\n').filter(p => p.trim() !== '');
        
        // Formater chaque paragraphe
        return paragraphs.map(paragraph => {
            // Gérer les listes à puces
            if (paragraph.includes('- ')) {
                const items = paragraph.split('- ').filter(item => item.trim() !== '');
                return `<ul>${items.map(item => `<li>${item.trim()}</li>`).join('')}</ul>`;
            }
            
            // Gérer les titres de sections
            if (paragraph.includes(':') && paragraph.length < 100) {
                return `<h4>${paragraph.trim()}</h4>`;
            }
            
            // Paragraphe normal
            return `<p>${paragraph.trim()}</p>`;
        }).join('');
    }

    const projectsDataTranslations = {
        fr: [
            {
                id: 'project1',
                title: 'Cablissimo',
                category: 'Web',
                description: 'Une application web moderne pour gérer efficacement les stocks de câbles. Ce projet a été développé pour simplifier le processus de gestion d\'inventaire pour une entreprise locale.',
                longDescription: `Cablissimo est une application web de gestion de stock développée dans le cadre d'un projet étudiant en groupe pour une entreprise spécialisée dans la vente de câbles et de composants électroniques.

L'interface principale de gestion des stocks de Cablissimo a été développée avec Bootstrap et une feuille de style personnalisée pour garantir une expérience utilisateur optimale. On y voit le tableau de bord interactif qui affiche en temps réel l'état des stocks, avec des fonctionnalités de filtrage et de tri. Les colonnes du tableau sont générées dynamiquement grâce à Jinja2, et les données sont mises à jour en temps réel via des requêtes AJAX.

L'arborescence complète du projet suit rigoureusement le modèle MVC (Modèle-Vue-Contrôleur), avec une séparation claire des responsabilités :
- controllers/ : Contient la logique métier et les routes Flask
- templates/ : Les vues HTML organisées par type d'utilisateur
- static/ : Les ressources statiques (CSS, JS, images)
- models/ : Les modèles de données et l'interaction avec la base de données

Cette organisation modulaire démontre ma compréhension des bonnes pratiques de développement et d'architecture logicielle.

La page de connexion de l'application implémente plusieurs mécanismes de sécurité :
- Hachage des mots de passe avec Werkzeug
- Protection contre les attaques CSRF
- Gestion des sessions Flask
- Validation des formulaires côté client et serveur

Compétences techniques illustrées :

Développement Frontend :
- HTML5/CSS3 avec Bootstrap pour un design responsive
- JavaScript pour l'interactivité et les requêtes AJAX
- Templating Jinja2 pour la génération dynamique des vues

Backend et Base de Données :
- Framework Flask pour le routage et la logique métier
- SQLAlchemy pour l'ORM et les requêtes à la base de données
- Architecture MVC pour une séparation claire des responsabilités

Sécurité :
- Authentification et gestion des sessions
- Protection contre les vulnérabilités web courantes
- Validation des données et gestion des erreurs

Ce projet a été livré dans les délais et répond parfaitement aux besoins du client, démontrant ma capacité à gérer un projet web complet de bout en bout.`,
                technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
                features: ['Gestion d\'inventaire en temps réel', 'Tableau de bord interactif', 'Système d\'alertes', 'Génération de rapports', 'Recherche avancée', 'Gestion multi-utilisateurs'],
                images: [
                    { src: 'images/projects/cablissimo_inventory.png', captionKey: 'project1_caption1' },
                    { src: 'images/projects/Cablissimo_structure_projet.png', captionKey: 'project1_caption2' },
                    { src: 'images/projects/project1-3.png', captionKey: 'project1_caption3' }
                ],
                date: 'Janvier 2025',
                client: 'Projet Universitaire',
                role: 'Développeur Full Stack',
                github: 'https://github.com/aylanh45pro/FlaskWebApp1',
                demo: '#'
            },
            {
                id: 'project2',
                title: 'Vocoder',
                category: 'Traitement Audio',
                description: 'Application de traitement audio permettant de manipuler et transformer des fichiers sonores avec des effets de vocodeur.',
                longDescription: `Le Vocoder est une application de traitement audio développée en Java, permettant de manipuler et transformer des fichiers sonores avec des effets de type vocodeur.

L'interface principale de l'application a été développée avec la bibliothèque StdDraw. On y voit la visualisation en temps réel du signal audio sous forme d'onde et de spectre fréquentiel. Cette interface a été conçue pour être à la fois informative et interactive :
- Le panneau supérieur affiche la forme d'onde temporelle
- Le panneau inférieur montre le spectre fréquentiel via FFT
- Les contrôles à droite permettent d'ajuster les paramètres en temps réel

L'implémentation des algorithmes de traitement du signal utilise la transformée de Fourier rapide (FFT) pour l'analyse spectrale. Le code illustre :
- La classe FFTProcessor qui encapsule les calculs de transformée
- Les méthodes d'analyse et de synthèse des formants vocaux
- L'optimisation des performances avec des tampons circulaires

Le panneau de configuration des effets permet à l'utilisateur d'ajuster les paramètres du vocodeur :
- Fréquence de coupure des filtres
- Taux de modulation
- Profondeur de l'effet
- Paramètres de réverbération

Compétences techniques illustrées :

Traitement du Signal :
- Implémentation de la FFT pour l'analyse spectrale
- Conception de filtres numériques (passe-bas, passe-haut)
- Algorithmes de synthèse vocale et d'effets audio

Programmation Java Avancée :
- Programmation orientée objet avec patterns de conception
- Gestion efficace de la mémoire pour le traitement en temps réel
- Multithreading pour la performance

Interface Graphique :
- Visualisation dynamique avec StdDraw
- Composants graphiques personnalisés
- Gestion des événements utilisateur

Ce projet m'a permis de combiner des concepts théoriques complexes avec des aspects pratiques de développement logiciel.`,
                technologies: ['Java', 'StdDraw', 'Audio Processing', 'FFT', 'Algorithms'],
                features: ['Modification de la hauteur', 'Effets de réverbération', 'Visualisation du signal audio', 'Exportation en divers formats', 'Traitement temps réel'],
                images: [
                    { src: 'images/projects/Vocoder_preuve_signal.png', captionKey: 'project2_caption1' },
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
                description: 'Plateforme e-commerce complète développée en Python/Flask avec système de panier, gestion des utilisateurs, interface d\'administration et intégration de paiement.',
                longDescription: `Ce projet de site e-commerce a été développé en Python avec le framework Flask, dans le but de créer une plateforme de vente en ligne complète et fonctionnelle.

La plateforme permet aux utilisateurs de parcourir un catalogue de produits, de consulter les détails de chaque article, de les ajouter à un panier virtuel et de passer commande. Elle intègre également un système de gestion des utilisateurs (inscription, connexion) et une zone d'administration pour gérer les produits, les stocks et suivre les commandes.

L'interface utilisateur a été conçue pour être intuitive et responsive, grâce à l'utilisation du framework Bootstrap. L'architecture du projet repose sur les principes MVC (Modèle-Vue-Contrôleur).

Le backend, développé avec Flask, gère la logique métier, les interactions avec la base de données et le routage des requêtes. Les vues sont générées dynamiquement à l'aide de templates HTML, utilisant le moteur de templates Jinja2 intégré à Flask.

Une base de données SQL est utilisée pour stocker les informations relatives aux produits, aux utilisateurs et aux commandes. Les fichiers statiques (CSS, JavaScript, images) sont servis par Flask et organisés de manière structurée.

Compétences techniques illustrées :

Développement web backend avec Flask :
- Création de routes pour l'affichage des produits
- Gestion du panier (ajout, suppression, mise à jour des quantités)
- Processus de commande

Gestion de base de données SQL :
- Modélisation des tables (produits, utilisateurs, commandes)
- Requêtes et relations entre tables

Développement frontend :
- Design responsive avec Bootstrap
- Pages catalogue, fiches produits, panier
- Formulaires de commande

Authentification et session management :
- Système de connexion/inscription
- Gestion des sessions utilisateur
- Sécurisation de l'accès aux données

Cette réalisation m'a permis de consolider mes compétences en développement web full-stack avec Python et Flask.`,
                technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
                features: ['Catalogue de produits', 'Système de panier', 'Gestion des utilisateurs', 'Interface d\'administration', 'Gestion des commandes', 'Design responsive'],
                images: [
                    { src: 'images/projects/setup.png', captionKey: 'project3_caption1' },
                    { src: 'images/projects/project3-2.png', captionKey: 'project3_caption2' },
                    { src: 'images/projects/project3-3.png', captionKey: 'project3_caption3' }
                ],
                date: 'Avril 2025',
                client: 'Projet universitaire',
                role: 'Développeur Web',
                github: '#',
                demo: '#'
            },
            {
                id: 'project4',
                title: 'Puissance X',
                category: 'Jeu',
                description: 'Jeu Java console et graphique (MVC) : grille personnalisable, IA, mode multijoueur, architecture modulaire, expérience utilisateur, travail en équipe.',
                longDescription: `Puissance X est un jeu de stratégie développé en Java, étendant le concept du Puissance 4 classique avec des fonctionnalités avancées comme une grille personnalisable et une IA à plusieurs niveaux de difficulté.

Le jeu permet aux joueurs de s'affronter sur une grille dont les dimensions (nombre de lignes et de colonnes) peuvent être définies avant le début de la partie. Les joueurs peuvent choisir de jouer contre un autre joueur local ou contre une IA.

L'IA a été conçue pour offrir différents niveaux de défi, allant de stratégies simples à des approches plus élaborées. Des fonctionnalités comme la sauvegarde et le chargement de parties, la gestion des scores, et la personnalisation des couleurs des pions ont également été implémentées.

L'interface principale du jeu a été développée avec JavaFX. You can see:
- The customizable game grid with its colored pawns
- The side panel displaying game information
- Game controls and customization options

The game's artificial intelligence implementation uses:
- Minimax algorithm with alpha-beta pruning
- Grid evaluation heuristics
- Performance optimization with caching

The grid customization window allows players to:
- Define grid dimensions
- Choose pawn colors
- Configure AI level

The project architecture follows the MVC pattern. The game engine (Model) encapsulates rules logic, grid management, and AI algorithms. The user interface (View), developed with JavaFX, handles the display of the grid, pawns, and player interactions.

Technical skills illustrated:

Java and JavaFX Development:
- Modern and responsive graphical interfaces
- Advanced event handling
- Custom components and CSS styles

Artificial Intelligence:
- Minimax algorithm with optimizations
- Evaluation heuristics
- Different difficulty levels

Software Architecture:
- Strict MVC pattern
- Design patterns (Observer, Strategy, Factory)
- Unit testing with JUnit

Project Management:
- Versioning with Git
- Technical documentation
- Teamwork

This project demonstrates my ability to design and implement a complete Java application, combining modern graphical interface, complex game logic, and artificial intelligence.`,
                technologies: ['Java', 'JavaFX', 'Algorithms', 'AI', 'MVC'],
                features: ['Grille personnalisable', 'IA multiniveau', 'Mode multijoueur', 'Interface graphique', 'Gestion des scores', 'Sauvegarde de parties'],
                images: [
                    { src: 'images/projects/project4-1.png', captionKey: 'project4_caption1' },
                    { src: 'images/projects/project4-2.png', captionKey: 'project4_caption2' },
                    { src: 'images/projects/project4-3.png', captionKey: 'project4_caption3' }
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
                title: 'Cablissimo',
                category: 'Web',
                description: 'A modern web application to efficiently manage cable and electronic component inventory. This project was developed to simplify the inventory management process for a local company.',
                longDescription: `Cablissimo is a stock management web application developed as part of a group student project for a company specializing in cables and electronic components.

The main stock management interface of Cablissimo was developed with Bootstrap and a custom stylesheet to ensure an optimal user experience. It shows the interactive dashboard that displays real-time stock status, with filtering and sorting functionalities. Table columns are dynamically generated using Jinja2, and data is updated in real-time via AJAX requests.

The complete project structure rigorously follows the MVC (Model-View-Controller) pattern, with clear separation of responsibilities:
- controllers/: Contains business logic and Flask routes
- templates/: HTML views organized by user type
- static/: Static resources (CSS, JS, images)
- models/: Data models and database interaction

This modular organization demonstrates my understanding of development best practices and software architecture.

The application login page implements several security mechanisms:
- Password hashing with Werkzeug
- CSRF attack protection
- Flask session management
- Client and server-side form validation

Technical skills illustrated:

Frontend Development:
- HTML5/CSS3 with Bootstrap for responsive design
- JavaScript for interactivity and AJAX requests
- Jinja2 templating for dynamic view generation

Backend and Database:
- Flask framework for routing and business logic
- SQLAlchemy for ORM and database queries
- MVC architecture for clear separation of responsibilities

Security:
- Authentication and session management
- Protection against common web vulnerabilities
- Data validation and error handling

This project was delivered on time and perfectly meets the client's needs, demonstrating my ability to manage a complete web project from end to end.`,
                technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'Bootstrap'],
                features: ['Real-time inventory management', 'Interactive dashboard', 'Alert system', 'Report generation', 'Advanced search', 'Multi-user management'],
                images: [
                    { src: 'images/projects/cablissimo_inventory.png', captionKey: 'project1_caption1' },
                    { src: 'images/projects/Cablissimo_structure_projet.png', captionKey: 'project1_caption2' },
                    { src: 'images/projects/project1-3.png', captionKey: 'project1_caption3' }
                ],
                date: 'January 2025',
                client: 'University project',
                role: 'Full Stack Developer',
                github: 'https://github.com/aylanh45pro/FlaskWebApp1',
                demo: '#'
            },
            {
                id: 'project2',
                title: 'Vocoder',
                category: 'Audio Processing',
                description: 'Audio processing application allowing manipulation and transformation of sound files with vocoder effects.',
                longDescription: `The Vocoder is a Java audio processing application that allows manipulation and transformation of sound files with vocoder-type effects.

The main application interface was developed with the StdDraw library. It shows real-time visualization of the audio signal as waveform and frequency spectrum. This interface was designed to be both informative and interactive:
- The upper panel displays the temporal waveform
- The lower panel shows the frequency spectrum via FFT
- Controls on the right allow real-time parameter adjustment

The implementation of signal processing algorithms uses Fast Fourier Transform (FFT) for spectral analysis. The code illustrates:
- The FFTProcessor class that encapsulates transform calculations
- Methods for analysis and synthesis of vocal formants
- Performance optimization with circular buffers

The effects configuration panel allows users to adjust vocoder parameters:
- Filter cutoff frequency
- Modulation rate
- Effect depth
- Reverb parameters

Technical skills illustrated:

Signal Processing:
- FFT implementation for spectral analysis
- Digital filter design (low-pass, high-pass)
- Vocal synthesis and audio effects algorithms

Advanced Java Programming:
- Object-oriented programming with design patterns
- Efficient memory management for real-time processing
- Multithreading for performance

Graphical Interface:
- Dynamic visualization with StdDraw
- Custom graphical components
- User event handling

This project allowed me to combine complex theoretical concepts with practical software development aspects.`,
                technologies: ['Java', 'StdDraw', 'Audio Processing', 'FFT', 'Algorithms'],
                features: ['Pitch modification', 'Reverb effects', 'Audio signal visualization', 'Export in various formats', 'Real-time processing'],
                images: [
                    { src: 'images/projects/Vocoder_preuve_signal.png', captionKey: 'project2_caption1' },
                    { src: 'images/projects/project2-2.png', captionKey: 'project2_caption2' },
                    { src: 'images/projects/project2-3.png', captionKey: 'project2_caption3' }
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
                description: 'Complete e-commerce platform developed in Python/Flask with shopping cart system, user management, administration interface and payment integration.',
                longDescription: `This e-commerce website project was developed in Python with the Flask framework, aiming to create a complete and functional online sales platform.

The platform allows users to browse a product catalog, view details of each item, add them to a virtual cart, and place orders. It also integrates a user management system (registration, login) and an administration area for managing products, stocks, and tracking orders.

The user interface was designed to be intuitive and responsive, thanks to the use of the Bootstrap framework. The project architecture is based on MVC (Model-View-Controller) principles.

The backend, developed with Flask, handles business logic, database interactions, and request routing. Views are dynamically generated using HTML templates, using the Jinja2 template engine integrated into Flask.

An SQL database is used to store information related to products, users, and orders. Static files (CSS, JavaScript, images) are served by Flask and organized structurally.

Technical skills illustrated:

Backend web development with Flask:
- Creating routes for product display
- Cart management (add, delete, update quantities)
- Order process

SQL database management:
- Table modeling (products, users, orders)
- Queries and relationships between tables

Frontend development:
- Responsive design with Bootstrap
- Catalog pages, product sheets, cart
- Order forms

Authentication and session management:
- Login/registration system
- User session management
- Data access security

This realization helped me consolidate my skills in full-stack web development with Python and Flask.`,
                technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
                features: ['Product catalog', 'Shopping cart system', 'User management', 'Administration interface', 'Order management', 'Responsive design'],
                images: [
                    { src: 'images/projects/setup.png', captionKey: 'project3_caption1' },
                    { src: 'images/projects/project3-2.png', captionKey: 'project3_caption2' },
                    { src: 'images/projects/project3-3.png', captionKey: 'project3_caption3' }
                ],
                date: 'April 2025',
                client: 'University project',
                role: 'Web Developer',
                github: '#',
                demo: '#'
            },
            {
                id: 'project4',
                title: 'Puissance X',
                category: 'Game',
                description: 'Java console and graphics game (MVC): customizable grid, AI, multiplayer mode, modular architecture, user experience, teamwork.',
                longDescription: `Puissance X is a strategy game developed in Java, extending the classic Connect 4 concept with advanced features like a customizable game grid and AI with multiple difficulty levels.

The game allows players to compete on a grid whose dimensions (number of rows and columns) can be defined before the start of the game. Players can choose to play against another local player or against an AI.

The AI was designed to offer different levels of challenge, ranging from simple strategies to more elaborate approaches. Features such as saving and loading games, score management, and customization of pawn and interface colors were also implemented.

The main game interface was developed with JavaFX. You can see:
- The customizable game grid with its colored pawns
- The side panel displaying game information
- Game controls and customization options

The game's artificial intelligence implementation uses:
- Minimax algorithm with alpha-beta pruning
- Grid evaluation heuristics
- Performance optimization with caching

The grid customization window allows players to:
- Define grid dimensions
- Choose pawn colors
- Configure AI level

The project architecture follows the MVC pattern. The game engine (Model) encapsulates rules logic, grid management, and AI algorithms. The user interface (View), developed with JavaFX, handles the display of the grid, pawns, and player interactions.

Technical skills illustrated:

Java and JavaFX Development:
- Modern and responsive graphical interfaces
- Advanced event handling
- Custom components and CSS styles

Artificial Intelligence:
- Minimax algorithm with optimizations
- Evaluation heuristics
- Different difficulty levels

Software Architecture:
- Strict MVC pattern
- Design patterns (Observer, Strategy, Factory)
- Unit testing with JUnit

Project Management:
- Versioning with Git
- Technical documentation
- Teamwork

This project demonstrates my ability to design and implement a complete Java application, combining modern graphical interface, complex game logic, and artificial intelligence.`,
                technologies: ['Java', 'JavaFX', 'Algorithms', 'AI', 'MVC'],
                features: ['Customizable grid', 'Multilevel AI', 'Multiplayer mode', 'Graphical interface', 'Score management', 'Game saving'],
                images: [
                    { src: 'images/projects/project4-1.png', captionKey: 'project4_caption1' },
                    { src: 'images/projects/project4-2.png', captionKey: 'project4_caption2' },
                    { src: 'images/projects/project4-3.png', captionKey: 'project4_caption3' }
                ],
                date: 'May 2025',
                client: 'University project',
                role: 'Java Developer',
                github: '#',
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
    projectButtons.forEach(button => { // 'index' n'est plus nécessaire ici
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectIndex = parseInt(button.getAttribute('data-project')); // Récupérer l'index depuis l'attribut data-project
            openProjectModal(projectIndex);
        });
    });

    // Variable pour stocker la modale actuellement ouverte
    let currentModalProjectIndex = null;

    // Fonction pour mettre à jour la modale ouverte lors du changement de langue
    function updateOpenModal() {
        if (currentModalProjectIndex !== null) {
            // Fermer la modale actuelle
            const modal = document.getElementById('projectModal');
            if (modal) {
                modal.remove();
            }
            // Rouvrir avec les nouvelles traductions
            setTimeout(() => {
                openProjectModal(currentModalProjectIndex);
            }, 100);
        }
    }

    // Écouter les changements de langue
    window.addEventListener('storage', function(e) {
        if (e.key === 'preferredLanguage') {
            updateOpenModal();
        }
    });

    // Écouter les changements de langue via un événement personnalisé
    document.addEventListener('languageChanged', function() {
        updateOpenModal();
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
                    <div class="modal-body">
                    <div class="carousel-container">
                        <div class="carousel">
                            <div class="carousel-inner">
                                ${project.images.map(image => `
                                    <div class="carousel-item">
                                        <img src="${image.src}" alt="${project.title}" class="carousel-img">
                                            <div class="carousel-caption">${getTranslation(image.captionKey) || image.caption || ''}</div>
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
                            <div class="project-details">
                                <div class="project-description">
                                    ${formatLongDescription(project.longDescription)}
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
                                    ${project.github && project.github !== '#' ? `
                                        <a href="${project.github}" target="_blank" class="btn primary-btn">
                                            <i class="fab fa-github"></i> ${getTranslation('modal_view_code')}
                                        </a>
                                    ` : ''}
                                    ${project.demo && project.demo !== '#' ? `
                                        <a href="${project.demo}" target="_blank" class="btn secondary-btn">
                                            <i class="fas fa-external-link-alt"></i> ${getTranslation('modal_view_demo')}
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
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

        // Mettre à jour la variable currentModalProjectIndex
        currentModalProjectIndex = projectIndex;
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

        // Mettre à jour la variable currentModalProjectIndex
        currentModalProjectIndex = null;
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
