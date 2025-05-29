// Script pour amu00e9liorer l'accessibilitu00e9 du site
document.addEventListener('DOMContentLoaded', function() {
    // Amu00e9liorer l'accessibilitu00e9 pour les boutons avec role="button"
    const accessibleButtons = document.querySelectorAll('[role="button"]');
    
    accessibleButtons.forEach(button => {
        // Ajouter la navigation au clavier
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    // Amu00e9liorer l'accessibilitu00e9 pour le su00e9lecteur de langue
    const languageLabels = document.querySelectorAll('.language-label');
    const languageToggle = document.getElementById('language-toggle');
    
    languageLabels.forEach(label => {
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                
                // Changer la langue en fonction du label
                const lang = label.getAttribute('data-lang');
                if (lang) {
                    // Si la fonction changeLanguage est disponible
                    if (typeof changeLanguage === 'function') {
                        changeLanguage(lang);
                        
                        // Mettre u00e0 jour les attributs aria-pressed
                        languageLabels.forEach(l => {
                            l.setAttribute('aria-pressed', l === label);
                        });
                    }
                }
            }
        });
    });
    
    if (languageToggle) {
        languageToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                
                // Basculer entre les langues
                const currentLang = document.documentElement.getAttribute('data-lang') || 'fr';
                const newLang = currentLang === 'fr' ? 'en' : 'fr';
                
                // Si la fonction changeLanguage est disponible
                if (typeof changeLanguage === 'function') {
                    changeLanguage(newLang);
                    
                    // Mettre u00e0 jour les attributs aria-pressed
                    languageLabels.forEach(label => {
                        const labelLang = label.getAttribute('data-lang');
                        label.setAttribute('aria-pressed', labelLang === newLang);
                    });
                }
            }
        });
    }
    
    // Amu00e9liorer l'accessibilitu00e9 pour le bouton de retour en haut de page
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
    
    // Amu00e9liorer l'accessibilitu00e9 pour le bouton de mode sombre
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        // Mettre u00e0 jour l'attribut aria-label en fonction de l'u00e9tat actuel
        function updateDarkModeAriaLabel() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const currentLang = document.documentElement.getAttribute('data-lang') || 'fr';
            
            if (translations && translations[currentLang]) {
                darkModeToggle.setAttribute('aria-label', 
                    isDarkMode ? translations[currentLang].dark_mode_off : translations[currentLang].dark_mode_on
                );
            }
        }
        
        // Appeler la fonction au chargement
        updateDarkModeAriaLabel();
        
        // Observer les changements de classe sur le body pour mettre u00e0 jour l'aria-label
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    updateDarkModeAriaLabel();
                }
            });
        });
        
        observer.observe(document.body, { attributes: true });
    }
});
