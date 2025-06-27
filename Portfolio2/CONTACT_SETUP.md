# Configuration du formulaire de contact pour GitHub Pages

## Vue d'ensemble

Le formulaire de contact de votre portfolio utilise **Formspree**, un service gratuit qui permet de traiter les formulaires statiques. C'est la solution idéale pour GitHub Pages qui ne supporte pas le traitement côté serveur.

## Fonctionnalités

✅ **Validation côté client** complète  
✅ **Messages d'erreur** traduits en français et anglais  
✅ **Interface responsive** avec indicateurs visuels  
✅ **Protection anti-spam** intégrée  
✅ **Notifications de statut** en temps réel  
✅ **Compatible avec GitHub Pages**  

## Configuration actuelle

Le formulaire est pré-configuré avec l'endpoint Formspree :
```
https://formspree.io/f/xdkonqzp
```

## Pour utiliser votre propre endpoint Formspree

1. **Créez un compte gratuit** sur [formspree.io](https://formspree.io)

2. **Créez un nouveau formulaire** et notez votre endpoint unique

3. **Remplacez l'endpoint** dans `index.html` :
   ```html
   <form id="contactForm" action="https://formspree.io/f/VOTRE_ENDPOINT" method="POST">
   ```

4. **Configurez vos préférences** dans le dashboard Formspree :
   - Email de notification
   - Message de confirmation automatique
   - Protection anti-spam
   - Exportation des données

## Comment ça fonctionne

1. **L'utilisateur remplit le formulaire** sur votre site
2. **JavaScript valide les données** côté client
3. **Les données sont envoyées** à Formspree via AJAX
4. **Formspree traite et transfère** l'email vers votre boîte mail
5. **Un message de confirmation** s'affiche à l'utilisateur

## Fichiers impliqués

- `index.html` : Structure du formulaire
- `js/contact-form.js` : Logique de validation et envoi
- `js/translations.js` : Traductions français/anglais
- `css/style.css` : Styles pour les messages de statut

## Limitation du plan gratuit Formspree

- **50 soumissions/mois** pour le plan gratuit
- **Pas de limite** pour les plans payants
- **Protection anti-spam** incluse

## Test du formulaire

1. Ouvrez votre site en local ou déployé
2. Remplissez le formulaire de contact
3. Vérifiez que vous recevez l'email
4. Testez les validations (champs vides, email invalide, etc.)

## Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez votre connexion internet
- Vérifiez l'endpoint Formspree dans `index.html`
- Regardez la console du navigateur pour les erreurs

### L'email n'arrive pas
- Vérifiez vos spams
- Vérifiez la configuration dans le dashboard Formspree
- Attendez quelques minutes (peut parfois être retardé)

### Problèmes de traduction
- Vérifiez que `js/translations.js` est bien chargé
- Vérifiez que toutes les clés de traduction sont présentes

## Sécurité

Le formulaire inclut plusieurs mesures de sécurité :
- **Validation côté client** pour l'expérience utilisateur
- **Protection CSRF** via Formspree
- **Pas de données sensibles** stockées côté client
- **Respect RGPD** avec notice de confidentialité

## Support

En cas de problème :
1. Consultez la [documentation Formspree](https://help.formspree.io/)
2. Vérifiez les fichiers JavaScript dans la console
3. Testez avec différents navigateurs

---

Le formulaire de contact est maintenant entièrement fonctionnel et prêt pour la production sur GitHub Pages ! 🚀 