// Fichier de traduction pour le site
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_education: "Formation",
        nav_contact: "Contact",
        
        // Hero section
        hero_greeting: "Bonjour, je suis",
        hero_student: "Étudiant en",
        hero_description: "Passionné par l'informatique' et les nouvelles technologies.",
        hero_projects_btn: "Voir mes projets",
        hero_contact_btn: "Me contacter",
        
        // About section
        about_title: "À propos de moi",
        about_subtitle: "Qui suis-je?",
        about_description1: "Je suis un étudiant passionné en informatique, spécialisé dans le développement web et les applications mobiles. Mon parcours académique m'a permis d'acquérir de solides compétences techniques et une approche méthodique de la résolution de problèmes.",
        about_description2: "J'aime relever des défis techniques et créer des solutions innovantes. Mon objectif est de continuer à apprendre et à me perfectionner dans le domaine du développement logiciel.",
        about_name: "Nom:",
        about_email: "Email:",
        about_age: "Âge:",
        about_location: "Localisation:",
        about_cv_btn: "Télécharger CV",
        
        // Skills section
        skills_title: "Mes compétences",
        skills_subtitle: "Compétences techniques & outils",
        skills_description: "Au cours de mes études et projets personnels, j'ai développé diverses compétences techniques et maîtrisé plusieurs outils essentiels au développement moderne.",
        skills_web_dev: "Développement Web",
        skills_programming: "Programmation",
        skills_tools: "Outils & Technologies",
        skills_soft: "Compétences Transversales",
        
        // Projects section
        projects_title: "Mes projets",
        projects_subtitle: "Découvrez mes travaux récents",
        projects_description: "Voici une sélection de projets sur lesquels j'ai travaillé récemment. Chaque projet représente un défi unique que j'ai relevé.",
        projects_all: "Tous",
        projects_web: "Web",
        projects_mobile: "Mobile",
        projects_processing: "Traitements",
        projects_games: "Jeux",
        projects_other: "Autres",
        projects_view_btn: "Voir le projet",
        projects_code_btn: "Voir le code",
        projects_details_btn: "Détails du projet",
        
        // Project 1
        project1_category: "Web",
        project1_title: "Cablissimo",
        project1_description: "Web application for stock management of cables and electronic components. Multi-role management (admin/client), advanced security, intuitive interface, report generation, and data visualization.<br><strong>Skills:</strong> Flask, SQL, security, MVC architecture, UX/UI, dataviz, project management.",
        
        // Project 2
        project2_category: "Audio Processing",
        project2_title: "Vocoder",
        project2_description: "Java audio processing application: signal manipulation, vocoder effects, console interface, audio file management, advanced algorithms.<br><strong>Skills:</strong> Java, signal processing, algorithms, file manipulation, object-oriented design.",
        
        // Project 3
        project3_category: "Web",
        project3_title: "E-Commerce Website",
        project3_description: "Complete e-commerce platform developed in Python/Flask with shopping cart system, user management, administration interface and payment integration.<br><strong>Skills:</strong> Flask, SQL, authentication, UX/UI, session management, web architecture.",
        
        // Project 4
        project4_category: "Game",
        project4_title: "Puissance X",
        project4_description: "Java console and graphical game (MVC): customizable grid, AI, multiplayer mode, modular architecture, user experience, teamwork.<br><strong>Skills:</strong> Java, MVC architecture, AI, graphical interface, collaborative project management.",
        
        // Project 5
        project5_category: "Autres",
        project5_title: "Algorithme d'intelligence artificielle",
        project5_description: "Implémentation d'un algorithme d'apprentissage automatique pour la classification d'images.",
        
        // Project 6
        project6_category: "Processing",
        project6_title: "Application de fitness",
        project6_description: "Application Processing pour suivre ses activités sportives et ses progrès avec des statistiques détaillées.",
        
        // Modal Project
        modal_close: "Fermer",
        modal_description: "Description",
        modal_category: "Catégorie",
        modal_date: "Date",
        modal_client: "Client",
        modal_role: "Rôle",
        modal_technologies: "Technologies utilisées",
        modal_features: "Fonctionnalités principales",
        modal_view_code: "Voir le code",
        modal_view_demo: "Démo en ligne",
        modal_demo: "Voir la démo",
        
        // Project 1 Modal
        project1_caption1: "Interface principale de gestion des stocks",
        project1_caption2: "Architecture du projet et organisation des fichiers",
        project1_caption3: "Page de connexion sécurisée",
        
        // Project 2 Modal
        project2_caption1: "Interface principale avec visualisation du signal audio",
        project2_caption2: "Implémentation des algorithmes FFT",
        project2_caption3: "Panneau de configuration des effets",
        
        // Project 3 Modal
        project3_caption1: "Page d'accueil du site e-commerce",
        project3_caption2: "Interface de gestion des produits",
        project3_caption3: "Système de panier et commande",
        
        // Project 4 Modal
        project4_caption1: "Interface principale du jeu Puissance X",
        project4_caption2: "Implémentation de l'algorithme IA",
        project4_caption3: "Fenêtre de personnalisation de la grille",
        
        // Education section
        education_title: "Formation",
        education_subtitle: "Mon parcours académique",
        education_description: "Voici les principales étapes de mon parcours académique et mes formations en informatique.",
        
        // Contact section
        contact_title: "Contact",
        contact_subtitle: "Entrons en contact",
        contact_description: "N'hésitez pas à me contacter pour discuter de projets, opportunités ou simplement pour échanger sur des sujets techniques.",
        contact_location: "Localisation",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_form_name: "Votre nom",
        contact_form_email: "Votre email",
        contact_form_subject: "Sujet",
        contact_form_message: "Votre message",
        contact_form_send: "Envoyer le message",
        contact_form_sending: "Envoi en cours...",
        contact_form_success: "Merci pour votre message ! Je vous répondrai dès que possible.",
        contact_form_error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        contact_form_network_error: "Erreur de connexion. Vérifiez votre connexion internet et réessayez.",
        contact_error_name: "Veuillez entrer un nom valide (au moins 2 caractères)",
        contact_error_email: "Veuillez entrer une adresse email valide",
        contact_error_subject: "Veuillez entrer un sujet (au moins 3 caractères)",
        contact_error_message: "Veuillez entrer un message (au moins 10 caractères)",
        contact_privacy: "Vos données personnelles ne seront utilisées que pour répondre à votre message et ne seront pas conservées après traitement.",
        
        // Footer
        footer_rights: "Tous droits réservés.",
        footer_toggle_animation: "Désactiver l'animation d'arrière-plan",
        footer_toggle_animation_on: "Activer l'animation d'arrière-plan",
        dark_mode_on: "Activer le mode sombre",
        dark_mode_off: "Désactiver le mode sombre",
        footer_copyright: "© 2025 Aylan Haddouchi. Tous droits réservés.",
        footer_home: "Accueil",
        footer_about: "À propos",
        footer_skills: "Compétences",
        footer_projects: "Projets",
        footer_education: "Formation",
        footer_contact: "Contact",
        
        // Terminal
        terminal_title: "portfolio@user: ~/projects",
        terminal_commands: [
            { command: 'whoami', output: 'Aylan Haddouchi - Étudiant en BUT Informatique' },
            { command: 'ls -la projects/', output: 'total 4\ndrwxr-xr-x  2 portfolio user 4096 Site web e-commerce\n-rwxr-xr-x  2 portfolio user 4096 App de traitement audio\n-rwxr-xr-x  2 portfolio user 4096 App de gestion de stock\n-rw-r--r--  1 portfolio user 8892 PuissanceX ' },
            { command: 'cat skills.txt', output: 'HTML5, CSS3, JavaScript, C, Python, Java, SQL, Git' }
        ],
        
        // Typed text
        typed_strings: ['BUT Informatique', 'Développement', 'Informatique', 'Programmation']
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_education: "Education",
        nav_contact: "Contact",
        
        // Hero section
        hero_greeting: "Hello, I am",
        hero_student: "Student in",
        hero_description: "Passionate about computer sciences and new technologies.",
        hero_projects_btn: "View my projects",
        hero_contact_btn: "Contact me",
        
        // About section
        about_title: "About me",
        about_subtitle: "Who am I?",
        about_description1: "I am a passionate computer science student, specialized in web development and mobile applications. My academic journey has allowed me to acquire solid technical skills and a methodical approach to problem-solving.",
        about_description2: "I enjoy tackling technical challenges and creating innovative solutions. My goal is to continue learning and improving in the field of software development.",
        about_name: "Name:",
        about_email: "Email:",
        about_age: "Age:",
        about_location: "Location:",
        about_cv_btn: "Download CV",
        
        // Skills section
        skills_title: "My skills",
        skills_subtitle: "Technical skills & tools",
        skills_description: "Throughout my studies and personal projects, I have developed various technical skills and mastered several tools essential to modern development.",
        skills_web_dev: "Web Development",
        skills_programming: "Programming",
        skills_tools: "Tools & Technologies",
        skills_soft: "Soft Skills",
        
        // Projects section
        projects_title: "My projects",
        projects_subtitle: "Discover my recent work",
        projects_description: "Here is a selection of projects I have worked on recently. Each project represents a unique challenge I have tackled.",
        projects_all: "All",
        projects_web: "Web",
        projects_mobile: "Mobile",
        projects_processing: "Processing",
        projects_games: "Games",
        projects_other: "Others",
        projects_view_btn: "View project",
        projects_code_btn: "View code",
        projects_details_btn: "Project details",
        
        // Project 1
        project1_category: "Web",
        project1_title: "Cablissimo",
        project1_description: "Web application for stock management of cables and electronic components. Multi-role management (admin/client), advanced security, intuitive interface, report generation, and data visualization.<br><strong>Skills:</strong> Flask, SQL, security, MVC architecture, UX/UI, dataviz, project management.",
        
        // Project 2
        project2_category: "Audio Processing",
        project2_title: "Vocoder",
        project2_description: "Java audio processing application: signal manipulation, vocoder effects, console interface, audio file management, advanced algorithms.<br><strong>Skills:</strong> Java, signal processing, algorithms, file manipulation, object-oriented design.",
        
        // Project 3
        project3_category: "Web",
        project3_title: "E-Commerce Website",
        project3_description: "Complete e-commerce platform developed in Python/Flask with shopping cart system, user management, administration interface and payment integration.<br><strong>Skills:</strong> Flask, SQL, authentication, UX/UI, session management, web architecture.",
        
        // Project 4
        project4_category: "Game",
        project4_title: "Puissance X",
        project4_description: "Java console and graphical game (MVC): customizable grid, AI, multiplayer mode, modular architecture, user experience, teamwork.<br><strong>Skills:</strong> Java, MVC architecture, AI, graphical interface, collaborative project management.",
        
        // Project 5
        project5_category: "Others",
        project5_title: "Artificial Intelligence Algorithm",
        project5_description: "Implementation of a machine learning algorithm for image classification.",
        
        // Project 6
        project6_category: "Processing",
        project6_title: "Fitness Application",
        project6_description: "Processing application to track sports activities and progress with detailed statistics.",
        
        // Modal Project
        modal_close: "Close",
        modal_description: "Description",
        modal_category: "Category",
        modal_date: "Date",
        modal_client: "Client",
        modal_role: "Role",
        modal_technologies: "Technologies used",
        modal_features: "Main features",
        modal_view_code: "View code",
        modal_view_demo: "Online demo",
        modal_demo: "View demo",
        
        // Project 1 Modal
        project1_caption1: "Main stock management interface",
        project1_caption2: "Project architecture and file organization",
        project1_caption3: "Secure login page",
        
        // Project 2 Modal
        project2_caption1: "Main interface with audio signal visualization",
        project2_caption2: "FFT algorithms implementation",
        project2_caption3: "Effects configuration panel",
        
        // Project 3 Modal
        project3_caption1: "E-commerce website homepage",
        project3_caption2: "Product management interface",
        project3_caption3: "Shopping cart and order system",
        
        // Project 4 Modal
        project4_caption1: "Puissance X main game interface",
        project4_caption2: "AI algorithm implementation",
        project4_caption3: "Grid customization window",
        
        // Education section
        education_title: "Education",
        education_subtitle: "My academic journey",
        education_description: "Here are the main steps of my academic journey and my training in computer science.",
        
        // Contact section
        contact_title: "Contact",
        contact_subtitle: "Let's get in touch",
        contact_description: "Feel free to contact me to discuss projects, opportunities, or simply to exchange on technical topics.",
        contact_location: "Location",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_form_name: "Your name",
        contact_form_email: "Your email",
        contact_form_subject: "Subject",
        contact_form_message: "Your message",
        contact_form_send: "Send message",
        contact_form_sending: "Sending...",
        contact_form_success: "Thank you for your message! I will get back to you as soon as possible.",
        contact_form_error: "An error occurred while sending. Please try again.",
        contact_form_network_error: "Connection error. Check your internet connection and try again.",
        contact_error_name: "Please enter a valid name (at least 2 characters)",
        contact_error_email: "Please enter a valid email address",
        contact_error_subject: "Please enter a subject (at least 3 characters)",
        contact_error_message: "Please enter a message (at least 10 characters)",
        contact_privacy: "Your personal data will only be used to respond to your message and will not be kept after processing.",
        
        // Footer
        footer_rights: "All rights reserved.",
        footer_toggle_animation: "Disable background animation",
        footer_toggle_animation_on: "Enable background animation",
        dark_mode_on: "Enable dark mode",
        dark_mode_off: "Disable dark mode",
        footer_copyright: "© 2025 Aylan Haddouchi. All rights reserved.",
        footer_home: "Home",
        footer_about: "About",
        footer_skills: "Skills",
        footer_projects: "Projects",
        footer_education: "Education",
        footer_contact: "Contact",
        
        // Terminal
        terminal_title: "portfolio@user: ~/projects",
        terminal_commands: [
            { command: 'whoami', output: 'Aylan Haddouchi - Computer Science Student' },
            { command: 'ls -la projects/', output: 'total 4\ndrwxr-xr-x  2 portfolio user 4096 e-commerce website\n-rwxr-xr-x  2 portfolio user 4096 audio processing app\n-rwxr-xr-x  2 portfolio user 4096 stock management app\n-rw-r--r--  1 portfolio user 8892 PuissanceX ' },
            { command: 'cat skills.txt', output: 'HTML5, CSS3, JavaScript, C, Python, Java, SQL, Git' }
        ],
        
        // Typed text
        typed_strings: ['Computer Science', 'Development', 'IT', 'Programming']
    }
};

// Exporter les traductions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations };
}
