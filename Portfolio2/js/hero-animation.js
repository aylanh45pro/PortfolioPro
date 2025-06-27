// Animation 3D pour la section hero avec Three.js (version allégée)

class HeroAnimation {
    constructor() {
        this.container = document.getElementById('hero-animation');
        if (!this.container) return;
        
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.mouseX = 0;
        this.mouseY = 0;
        
        // Vérifier si l'appareil est mobile ou a une faible puissance
        this.isLowPower = this.detectLowPowerDevice();
        
        this.init();
    }
    
    init() {
        // Cru00e9ation de la scu00e8ne
        this.scene = new THREE.Scene();
        
        // Cru00e9ation de la camu00e9ra
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 30;
        
        // Cru00e9ation du renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000, 0);
        this.container.appendChild(this.renderer.domElement);
        
        // Création des particules interactives
        this.createInteractiveParticles();
        
        // Ajout des u00e9couteurs d'u00e9vu00e9nements
        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        
        // Du00e9marrer l'animation
        this.animate();
    }
    
    detectLowPowerDevice() {
        // Détection simple des appareils à faible puissance
        return window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    createInteractiveParticles() {
        // Paramètres des particules (réduits pour de meilleures performances)
        const particleCount = this.isLowPower ? 30 : 60; // Beaucoup moins de particules
        const particleSize = this.isLowPower ? 4 : 3;
        const areaSize = 40;
        const connectionDistance = 8; // Distance réduite
        const connectionOpacity = 0.1;
        
        // Couleurs
        const particleColor = new THREE.Color(0xef8354);  // Orange accent
        const connectionColor = new THREE.Color(0x2d3142); // Bleu foncé
        
        // Création du groupe pour contenir les particules et connexions
        this.particleGroup = new THREE.Group();
        
        // Géométrie pour les particules
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];
        
        // Initialisation des positions et vitesses aléatoires
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Position aléatoire dans un cube
            positions[i3] = (Math.random() - 0.5) * areaSize;     // x
            positions[i3 + 1] = (Math.random() - 0.5) * areaSize; // y
            positions[i3 + 2] = (Math.random() - 0.5) * areaSize * 0.5; // z (plus plat)
            
            // Vitesse aléatoire
            velocities.push({
                x: (Math.random() - 0.5) * 0.05,
                y: (Math.random() - 0.5) * 0.05,
                z: (Math.random() - 0.5) * 0.02
            });
        }
        
        // Stockage des vitesses pour l'animation
        this.particleVelocities = velocities;
        
        // Création du matériau pour les particules
        const particleMaterial = new THREE.PointsMaterial({
            color: particleColor,
            size: particleSize,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });
        
        // Ajout des positions à la géométrie
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Création du système de particules
        this.particles = new THREE.Points(particleGeometry, particleMaterial);
        this.particleGroup.add(this.particles);
        
        // Création du matériau pour les connexions
        this.connectionMaterial = new THREE.LineBasicMaterial({
            color: connectionColor,
            transparent: true,
            opacity: connectionOpacity,
            blending: THREE.AdditiveBlending
        });
        
        // Stockage des paramètres pour les connexions
        this.connectionDistance = connectionDistance;
        
        // Optimisation : pré-allocation du tableau de connexions
        this.connections = [];
        
        // Ajout du groupe à la scène
        this.scene.add(this.particleGroup);
        
        // Création d'un point d'attraction qui suivra la souris
        this.mouseAttractor = new THREE.Vector3(0, 0, 15);
        this.mouseInfluenceRadius = 15;
        this.mouseStrength = 0.03;
    }
    
    onWindowResize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(this.width, this.height);
    }
    
    onMouseMove(event) {
        // Calculer la position de la souris normalisu00e9e (-1 u00e0 1)
        this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        if (this.particles && this.particleVelocities) {
            // Mise à jour de la position de l'attracteur de souris
            this.mouseAttractor.x = this.mouseX * 15;
            this.mouseAttractor.y = this.mouseY * 15;
            
            // Récupération des positions des particules
            const positions = this.particles.geometry.attributes.position.array;
            
            // Mise à jour des positions des particules
            for (let i = 0; i < this.particleVelocities.length; i++) {
                const i3 = i * 3;
                const velocity = this.particleVelocities[i];
                
                // Influence de la souris sur les particules proches (réduite)
                const dx = this.mouseX - positions[i3];
                const dy = this.mouseY - positions[i3 + 1];
                const dz = -positions[i3 + 2]; // Attirer vers l'avant
                const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
                
                // Définir des valeurs par défaut pour les paramètres d'influence de la souris
                if (!this.mouseInfluenceRadius) this.mouseInfluenceRadius = 10;
                if (!this.mouseStrength) this.mouseStrength = 0.02;
                
                if (distance < this.mouseInfluenceRadius) {
                    const influence = (1 - distance / this.mouseInfluenceRadius) * this.mouseStrength * 0.5; // Influence réduite
                    velocity.x += dx * influence;
                    velocity.y += dy * influence;
                    velocity.z += dz * influence;
                }
                
                // Application de la vitesse
                positions[i3] += velocity.x;
                positions[i3 + 1] += velocity.y;
                positions[i3 + 2] += velocity.z;
                
                // Amortissement de la vitesse
                velocity.x *= 0.97;
                velocity.y *= 0.97;
                velocity.z *= 0.97;
                
                // Limites de la zone
                const limit = 20;
                if (Math.abs(positions[i3]) > limit) {
                    positions[i3] = Math.sign(positions[i3]) * limit;
                    velocity.x *= -0.5;
                }
                if (Math.abs(positions[i3 + 1]) > limit) {
                    positions[i3 + 1] = Math.sign(positions[i3 + 1]) * limit;
                    velocity.y *= -0.5;
                }
                if (Math.abs(positions[i3 + 2]) > limit * 0.5) {
                    positions[i3 + 2] = Math.sign(positions[i3 + 2]) * limit * 0.5;
                    velocity.z *= -0.5;
                }
            }
            
            // Marquer les positions comme devant être mises à jour
            this.particles.geometry.attributes.position.needsUpdate = true;
            
            // Optimisation majeure : ne pas recréer toutes les connexions à chaque frame
            // Mettre à jour les connexions seulement tous les 5 frames
            if (!this.frameCount) this.frameCount = 0;
            this.frameCount++;
            
            if (this.frameCount % 5 === 0 || this.connections.length === 0) {
                // Suppression des anciennes connexions
                for (let i = this.connections.length - 1; i >= 0; i--) {
                    this.particleGroup.remove(this.connections[i]);
                }
                this.connections = [];
                
                // Limiter le nombre de connexions pour les appareils à faible puissance
                const maxConnections = this.isLowPower ? 30 : 100;
                let connectionCount = 0;
                
                // Création des nouvelles connexions entre particules proches
                for (let i = 0; i < positions.length; i += 3) {
                    // Optimisation : ne pas vérifier toutes les paires de particules
                    // Sauter certaines particules pour réduire les calculs
                    for (let j = i + 3; j < positions.length; j += (this.isLowPower ? 6 : 3)) {
                        if (connectionCount >= maxConnections) break;
                        
                        const dx = positions[i] - positions[j];
                        const dy = positions[i + 1] - positions[j + 1];
                        const dz = positions[i + 2] - positions[j + 2];
                        const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
                        
                        if (distance < this.connectionDistance) {
                            // Opacité basée sur la distance (plus proche = plus opaque)
                            const opacity = (1 - distance / this.connectionDistance) * 0.15;
                            
                            // Création de la ligne
                            const lineMaterial = this.connectionMaterial.clone();
                            lineMaterial.opacity = opacity;
                            
                            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
                                new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
                                new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2])
                            ]);
                            
                            const line = new THREE.Line(lineGeometry, lineMaterial);
                            this.particleGroup.add(line);
                            this.connections.push(line);
                            connectionCount++;
                        }
                    }
                    
                    if (connectionCount >= maxConnections) break;
                }
            }
        }
        
        // Légère rotation du groupe de particules
        if (this.particleGroup) {
            this.particleGroup.rotation.y += 0.001;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialisation de l'animation lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    // Option pour désactiver l'animation
    const disableAnimation = localStorage.getItem('disableHeroAnimation') === 'true';
    
    if (disableAnimation) {
        // Créer un arrière-plan statique clair si l'animation est désactivée
        const heroElement = document.querySelector('.hero');
        if (heroElement) {
            // Utiliser un fond clair avec un léger dégradé
            heroElement.style.background = 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-color) 100%)';
            
            // S'assurer que le texte est bien visible sur le fond clair
            const heroText = document.querySelector('.hero-text');
            if (heroText) {
                // Conserver la couleur de texte originale pour le fond clair
                heroText.style.color = 'var(--text-color)';
            }
        }
        return;
    }
    
    // Chargement de Three.js depuis CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = function() {
        // Initialiser l'animation avec un délai pour ne pas bloquer le chargement initial
        setTimeout(() => {
            new HeroAnimation();
        }, 500);
    };
    document.head.appendChild(script);
});
