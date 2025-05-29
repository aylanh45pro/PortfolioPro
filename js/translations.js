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
        hero_description: "Passionné par le développement web et les nouvelles technologies.",
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
        project1_title: "Application web de gestion de Stock",
        project1_description: "Une application web moderne pour gérer efficacement les stocks de câbles et de composants électroniques.",
        
        // Project 2
        project2_category: "Processing",
        project2_title: "Vocodeur",
        project2_description: "Application de traitement audio permettant de manipuler et transformer des fichiers sonores avec des effets de vocodeur.",
        
        // Project 3
        project3_category: "Jeux",
        project3_title: "Jeu de Plateforme 2D",
        project3_description: "Un jeu de plateforme 2D développé avec JavaScript et la bibliothèque Phaser.",
        
        // Project 4
        project4_category: "Web",
        project4_title: "Site E-Commerce",
        project4_description: "Plateforme e-commerce complète avec système de panier, paiement en ligne et gestion des commandes.",
        
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
        
        // Project 1 Modal
        project1_caption1: "Page principale de l'application",
        project1_caption2: "Tableau de bord administrateur",
        project1_caption3: "Interface de gestion des stocks",
        
        // Project 2 Modal
        project2_caption1: "Interface principale du vocodeur",
        project2_caption2: "Visualisation du signal audio",
        project2_caption3: "Paramètres des effets",
        
        // Project 3 Modal
        project3_caption1: "Page d'accueil du site",
        project3_caption2: "Page de produit",
        project3_caption3: "Panier d'achat",
        
        // Project 4 Modal
        project4_caption1: "Interface de classification d'images",
        project4_caption2: "Visualisation des couches du réseau neuronal",
        project4_caption3: "Résultats de classification",
        
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
        contact_form_success: "Merci pour votre message ! Je vous répondrai dès que possible.",
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
            { command: 'ls -la projects/', output: 'total 6\ndrwxr-xr-x  2 portfolio user 4096 web-development\ndrwxr-xr-x  2 portfolio user 4096 mobile-apps\ndrwxr-xr-x  2 portfolio user 4096 machine-learning\n-rw-r--r--  1 portfolio user 8892 portfolio.html\n-rw-r--r--  1 portfolio user 5432 e-commerce.js\n-rw-r--r--  1 portfolio user 3211 weather-app.py' },
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
        hero_description: "Passionate about web development and new technologies.",
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
        project1_title: "Stock Management Web Application",
        project1_description: "A modern web application to efficiently manage stocks of cables and electronic components.",
        
        // Project 2
        project2_category: "Processing",
        project2_title: "Vocoder",
        project2_description: "Audio processing application allowing manipulation and transformation of sound files with vocoder effects.",
        
        // Project 3
        project3_category: "Games",
        project3_title: "2D Platform Game",
        project3_description: "A 2D platform game developed with JavaScript and the Phaser library.",
        
        // Project 4
        project4_category: "Web",
        project4_title: "E-Commerce Website",
        project4_description: "Complete e-commerce platform with shopping cart system, online payment, and order management.",
        
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
        
        // Project 1 Modal
        project1_caption1: "Main application page",
        project1_caption2: "Admin dashboard",
        project1_caption3: "Stock management interface",
        
        // Project 2 Modal
        project2_caption1: "Main vocoder interface",
        project2_caption2: "Audio signal visualization",
        project2_caption3: "Effect parameters",
        
        // Project 3 Modal
        project3_caption1: "Website homepage",
        project3_caption2: "Product page",
        project3_caption3: "Shopping cart",
        
        // Project 4 Modal
        project4_caption1: "Image classification interface",
        project4_caption2: "Neural network layer visualization",
        project4_caption3: "Classification results",
        
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
        contact_form_success: "Thank you for your message! I will get back to you as soon as possible.",
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
            { command: 'ls -la projects/', output: 'total 6\ndrwxr-xr-x  2 portfolio user 4096 web-development\ndrwxr-xr-x  2 portfolio user 4096 mobile-apps\ndrwxr-xr-x  2 portfolio user 4096 machine-learning\n-rw-r--r--  1 portfolio user 8892 portfolio.html\n-rw-r--r--  1 portfolio user 5432 e-commerce.js\n-rw-r--r--  1 portfolio user 3211 weather-app.py' },
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
