// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('form-status');

    // Fonction pour obtenir la traduction en fonction de la langue actuelle
    function getTranslation(key) {
        const currentLang = localStorage.getItem('language') || 'fr';
        return translations[currentLang] && translations[currentLang][key] 
            ? translations[currentLang][key] 
            : key;
    }

    // Fonction pour afficher un message de statut
    function showStatus(message, isSuccess = true) {
        statusDiv.textContent = message;
        statusDiv.className = `form-status ${isSuccess ? 'success' : 'error'}`;
        statusDiv.style.display = 'block';
        
        // Faire défiler vers le message
        statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }

    // Fonction pour réinitialiser le formulaire
    function resetForm() {
        form.reset();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.textContent = getTranslation('contact_form_send');
    }

    // Validation côté client
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || name.length < 2) {
            showStatus(getTranslation('contact_error_name') || 'Veuillez entrer un nom valide (au moins 2 caractères)', false);
            return false;
        }

        if (!email || !isValidEmail(email)) {
            showStatus(getTranslation('contact_error_email') || 'Veuillez entrer une adresse email valide', false);
            return false;
        }

        if (!subject || subject.length < 3) {
            showStatus(getTranslation('contact_error_subject') || 'Veuillez entrer un sujet (au moins 3 caractères)', false);
            return false;
        }

        if (!message || message.length < 10) {
            showStatus(getTranslation('contact_error_message') || 'Veuillez entrer un message (au moins 10 caractères)', false);
            return false;
        }

        return true;
    }

    // Fonction pour valider l'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Gestionnaire d'envoi du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Valider le formulaire
        if (!validateForm()) {
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        try {
            // Désactiver le bouton et changer le texte
            submitBtn.disabled = true;
            submitBtn.textContent = getTranslation('contact_form_sending') || 'Envoi en cours...';

            // Préparer les données du formulaire
            const formData = new FormData(form);
            
            // Ajouter des informations supplémentaires
            formData.append('_language', localStorage.getItem('language') || 'fr');
            formData.append('_timestamp', new Date().toISOString());

            // Envoyer à Formspree
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Succès
                showStatus(getTranslation('contact_form_success') || 'Merci pour votre message ! Je vous répondrai dès que possible.', true);
                resetForm();
            } else {
                // Erreur du serveur
                const errorData = await response.json();
                console.error('Erreur Formspree:', errorData);
                
                if (errorData.errors) {
                    const errorMessages = errorData.errors.map(error => error.message).join(', ');
                    showStatus(`Erreur: ${errorMessages}`, false);
                } else {
                    showStatus(getTranslation('contact_form_error') || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.', false);
                }
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
            showStatus(getTranslation('contact_form_network_error') || 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.', false);
        } finally {
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Validation en temps réel
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            // Validation individuelle des champs
            if (this.id === 'email' && this.value) {
                if (!isValidEmail(this.value)) {
                    this.setCustomValidity(getTranslation('contact_error_email') || 'Adresse email invalide');
                } else {
                    this.setCustomValidity('');
                }
            }
        });

        input.addEventListener('input', function() {
            // Nettoyer les messages d'erreur personnalisés
            this.setCustomValidity('');
            
            // Masquer le message de statut si l'utilisateur modifie le formulaire
            if (statusDiv.style.display !== 'none') {
                statusDiv.style.display = 'none';
            }
        });
    });

    // Mettre à jour les traductions lors du changement de langue
    document.addEventListener('languageChanged', function() {
        // Mettre à jour les placeholders
        document.getElementById('name').placeholder = getTranslation('contact_form_name');
        document.getElementById('email').placeholder = getTranslation('contact_form_email');
        document.getElementById('subject').placeholder = getTranslation('contact_form_subject');
        document.getElementById('message').placeholder = getTranslation('contact_form_message');
    });
}); 