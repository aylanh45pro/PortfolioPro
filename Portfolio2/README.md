# Portfolio Étudiant

Un portfolio moderne et élégant pour présenter vos projets et compétences en tant qu'étudiant.

## Fonctionnalités

- Design moderne et responsive
- Animations fluides avec AOS (Animate On Scroll)
- Section projets avec modal détaillé
- Section compétences avec icônes
- Formulaire de contact
- Navigation fluide
- Thème clair et professionnel

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- AOS (Animate On Scroll)
- Font Awesome (pour les icônes)

## Installation

1. Clonez ce dépôt :
```bash
git clone [URL_DU_REPO]
```

2. Ouvrez le fichier `index.html` dans votre navigateur

## Personnalisation

### Projets

Pour ajouter ou modifier des projets, modifiez l'objet `projectsData` dans le fichier `script.js` :

```javascript
const projectsData = {
    1: {
        title: "Titre du projet",
        description: "Description détaillée",
        image: "URL_de_l_image",
        technologies: ["Tech1", "Tech2", "Tech3"]
    },
    // Ajoutez d'autres projets...
};
```

### Styles

Les variables CSS principales sont définies dans le fichier `styles.css` :

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #2c3e50;
    --background-color: #ffffff;
    --text-color: #333333;
    --accent-color: #e74c3c;
}
```

Modifiez ces variables pour personnaliser les couleurs du site.

## Structure des fichiers

```
portfolio/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. 