// Script pour gérer le spinner de chargement
document.addEventListener('DOMContentLoaded', function() {
    // Cacher le spinner de chargement une fois que la page est chargée
    const loadingOverlay = document.getElementById('loading-overlay');
    
    // Fonction pour cacher le spinner
    function hideSpinner() {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
            
            // Supprimer complètement le spinner après l'animation de transition
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }
    
    // Cacher le spinner après un court délai pour s'assurer que tout est chargé
    setTimeout(hideSpinner, 800);
    
    // Cacher également le spinner si la page est déjà chargée
    if (document.readyState === 'complete') {
        hideSpinner();
    }
    
    // Écouter l'événement load au cas où DOMContentLoaded a déjà été déclenché
    window.addEventListener('load', hideSpinner);
});
