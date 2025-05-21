const translations = {
    fr: {
        nav: {
            home: "Accueil",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact"
        },
        hero: {
            title: "Bienvenue sur mon Portfolio",
            subtitle: "Développeur Web Full Stack passionné par la création d'expériences web modernes et innovantes.",
            cta: "Voir mes projets"
        },
        projects: {
            title: "Mes Projets",
            view: "Voir le projet",
            project1: {
                title: "Projet 1",
                description: "Description du projet 1"
            },
            project2: {
                title: "Projet 2",
                description: "Description du projet 2"
            },
            project3: {
                title: "Projet 3",
                description: "Description du projet 3"
            }
        },
        skills: {
            title: "Mes Compétences",
            html5: "HTML5",
            css3: "CSS3",
            javascript: "JavaScript",
            frontend: {
                title: "Frontend",
                description: "HTML, CSS, JavaScript, React"
            }
        },
        contact: {
            title: "Contact",
            github: "GitHub",
            github_link: "Voir mon profil GitHub",
            email: "Email",
            linkedin: "LinkedIn",
            linkedin_link: "Voir mon profil LinkedIn",
            cv: "CV",
            cv_fr: "CV Français",
            cv_en: "CV Anglais"
        },
        footer: {
            copyright: "© 2024 Mon Portfolio. Tous droits réservés."
        }
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            title: "Welcome to my Portfolio",
            subtitle: "Full Stack Web Developer passionate about creating modern and innovative web experiences.",
            cta: "View my projects"
        },
        projects: {
            title: "My Projects",
            view: "View project",
            project1: {
                title: "Project 1",
                description: "Project 1 description"
            },
            project2: {
                title: "Project 2",
                description: "Project 2 description"
            },
            project3: {
                title: "Project 3",
                description: "Project 3 description"
            }
        },
        skills: {
            title: "My Skills",
            html5: "HTML5",
            css3: "CSS3",
            javascript: "JavaScript",
            frontend: {
                title: "Frontend",
                description: "HTML, CSS, JavaScript, React"
            }
        },
        contact: {
            title: "Contact",
            github: "GitHub",
            github_link: "View my GitHub profile",
            email: "Email",
            linkedin: "LinkedIn",
            linkedin_link: "View my LinkedIn profile",
            cv: "CV",
            cv_fr: "French CV",
            cv_en: "English CV"
        },
        footer: {
            copyright: "© 2024 My Portfolio. All rights reserved."
        }
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Mettre à jour les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Mettre à jour les textes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        for (const key of keys) {
            value = value[key];
        }
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else {
            element.textContent = value;
        }
    });
    
    // Sauvegarder la préférence de langue
    localStorage.setItem('preferredLanguage', lang);
}

// Charger la langue préférée au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLanguage);
}); 