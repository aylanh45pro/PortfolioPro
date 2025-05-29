// Script pour gu00e9rer le mode sombre
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    // Vu00e9rifier si le mode sombre est du00e9ju00e0 activu00e9 dans localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Appliquer le mode sombre si nu00e9cessaire
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }
    
    // Fonction pour basculer le mode sombre
    function toggleDarkMode() {
        if (document.body.classList.contains('dark-mode')) {
            // Passer au mode clair
            document.body.classList.remove('dark-mode');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'false');
        } else {
            // Passer au mode sombre
            document.body.classList.add('dark-mode');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'true');
        }
    }
    
    // Ajouter l'u00e9couteur d'u00e9vu00e9nement au bouton
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Du00e9tecter les pru00e9fu00e9rences systu00e8me pour le mode sombre
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Si l'utilisateur n'a pas encore du00e9fini de pru00e9fu00e9rence et que son systu00e8me est en mode sombre
    if (localStorage.getItem('darkMode') === null && prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'true');
    }
});
