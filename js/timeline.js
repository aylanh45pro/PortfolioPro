// Script pour animer la frise chronologique
document.addEventListener('DOMContentLoaded', function() {
    // Su00e9lectionner tous les u00e9lu00e9ments de la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Fonction pour vu00e9rifier si un u00e9lu00e9ment est visible dans la fenu00eatre
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Fonction pour vu00e9rifier si un u00e9lu00e9ment est partiellement visible
    function isElementPartiallyVisible(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        
        // Vu00e9rifier si l'u00e9lu00e9ment est partiellement visible
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        
        return (vertInView && horInView);
    }
    
    // Fonction pour afficher les u00e9lu00e9ments visibles
    function showVisibleItems() {
        timelineItems.forEach(item => {
            if (isElementPartiallyVisible(item)) {
                item.classList.add('show');
            }
        });
    }
    
    // Afficher les u00e9lu00e9ments visibles au chargement initial
    showVisibleItems();
    
    // Afficher les u00e9lu00e9ments visibles lors du du00e9filement
    window.addEventListener('scroll', showVisibleItems);
});
