package model;

import boardifier.model.GameStageModel;
import boardifier.model.StageElementsFactory;
import boardifier.model.TextElement;

import java.util.Scanner;

/**
 * Fabrique d'éléments pour l'étape de jeu Puissance X.
 * Cette classe est responsable de l'initialisation et de la configuration
 * de tous les éléments du jeu (plateau, pions, pots, etc.).
 * 
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PuissanceXStageFactory extends StageElementsFactory {
    private final Scanner sc; // Scanner partagé
    /** Modèle de l'étape de jeu Puissance X */
    private final PuissanceXStageModel stageModel;
    /** Nombre de colonnes du plateau */
    private int nbColonne;
    /** Nombre de lignes du plateau */
    private int nbLigne;
    /** Nombre de pions à aligner pour gagner */
    private int nbPionsPourGagner;

    /**
     * Constructeur de la fabrique d'éléments pour l'étape de jeu Puissance X.
     * 
     * @param gameStageModel Le modèle de l'étape de jeu
     * @param sc Le Scanner partagé
     */
    public PuissanceXStageFactory(GameStageModel gameStageModel, Scanner sc) {
        super(gameStageModel);
        this.stageModel = (PuissanceXStageModel) gameStageModel;
        this.sc = sc;
    }

    /**
     * Récupère le nombre de colonnes du plateau.
     * 
     * @return Le nombre de colonnes
     */
    public int getNbColonne(){
        return nbColonne;
    }

    /**
     * Récupère le nombre de lignes du plateau.
     * 
     * @return Le nombre de lignes
     */
    public int getNbLigne(){
        return nbLigne;
    }

    /**
     * Récupère le nombre de pions à aligner pour gagner.
     * 
     * @return Le nombre de pions à aligner pour gagner
     */
    public int getNbPionsPourGagner() {
        return nbPionsPourGagner;
    }

    /**
     * Initialise les paramètres du jeu en demandant à l'utilisateur de saisir :
     * - Le nombre de colonnes (entre 5 et 10)
     * - Le nombre de lignes (entre 5 et 10)
     * - Le nombre de pions à aligner pour gagner (supérieur à 2 et inférieur aux dimensions)
     * - Les couleurs des pions pour chaque joueur
     */
    public void init() {
        // Utiliser le Scanner partagé
        // Demander le nombre de colonnes
        demanderNombreColonnes(sc);
        // Demander le nombre de lignes
        demanderNombreLignes(sc);
        // Demander le nombre de pions à aligner pour gagner
        demanderNombrePionsAAligner(sc);
        // Demander les couleurs des pions
        demanderCouleursPions(sc);
        // NE PAS fermer le Scanner ici
    }
    
    /**
     * Affiche un en-tête formaté pour les différentes sections du menu
     * @param titre Le titre à afficher
     */
    private void afficherEnTete(String titre) {
        boardifier.control.Logger.info("====================================");
        boardifier.control.Logger.info("|    " + titre + "    |");
        boardifier.control.Logger.info("====================================");
    }
    
    /**
     * Demande à l'utilisateur de saisir le nombre de colonnes
     * @param sc Le scanner pour la saisie utilisateur
     */
    private void demanderNombreColonnes(Scanner sc) {
        while (true) {
            afficherEnTete("Nombre de Colonnes (5-10)");
            boardifier.control.Logger.info("Entrez le nombre de colonnes : ");
            this.nbColonne = sc.nextInt();
            
            if (this.nbColonne >= 5 && this.nbColonne <= 10) {
                return;
            }
            
            boardifier.control.Logger.info("ERREUR : Nombre de colonnes invalide. Veuillez entrer un nombre entre 5 et 10.");
        }
    }
    
    /**
     * Demande à l'utilisateur de saisir le nombre de lignes
     * @param sc Le scanner pour la saisie utilisateur
     */
    private void demanderNombreLignes(Scanner sc) {
        while (true) {
            afficherEnTete("Nombre de Lignes (5-10)");
            boardifier.control.Logger.info("Entrez le nombre de lignes : ");
            this.nbLigne = sc.nextInt();
            
            if (this.nbLigne >= 5 && this.nbLigne <= 10) {
                return;
            }
            
            boardifier.control.Logger.info("ERREUR : Nombre de lignes invalide. Veuillez entrer un nombre entre 5 et 10.");
        }
    }
    
    /**
     * Demande à l'utilisateur de saisir le nombre de pions à aligner pour gagner
     * @param sc Le scanner pour la saisie utilisateur
     */
    private void demanderNombrePionsAAligner(Scanner sc) {
        while (true) {
            afficherEnTete("Nombre de Pions à Aligner pour Gagner");
            boardifier.control.Logger.info("Entrez le nombre de pions à aligner pour gagner : ");
            this.nbPionsPourGagner = sc.nextInt();
            
            if (this.nbPionsPourGagner <= this.nbColonne && this.nbPionsPourGagner <= this.nbLigne && this.nbPionsPourGagner > 2) {
                stageModel.setNbPion(this.nbPionsPourGagner);
                return;
            }
            
            boardifier.control.Logger.info("Le nombre de pions doit être supérieur à 2 et inférieur au nombre de colonne et de ligne.");
        }
    }
    
    /**
     * Affiche le menu des couleurs disponibles
     */
    private void afficherMenuCouleurs() {
        boardifier.control.Logger.info("1) Jaune ");
        boardifier.control.Logger.info("2) Rouge ");
        boardifier.control.Logger.info("3) Bleu ");
        boardifier.control.Logger.info("4) Noir ");
        boardifier.control.Logger.info("5) Violet ");
        boardifier.control.Logger.info("6) Vert ");
        boardifier.control.Logger.info("7) Marron ");
    }

    /**
     * Demande aux joueurs de choisir les couleurs des pions
     * @param sc Le scanner pour la saisie utilisateur
     */
    private void demanderCouleursPions(Scanner sc) {
        while (true) {
            afficherEnTete("Couleurs des pions");
            afficherMenuCouleurs();

            int[] couleurs = choisirCouleurs(sc);
            if (couleurs.length > 0) {  // Changé de couleurs != null
                stageModel.setCouleurPion1(couleurs[0]);
                stageModel.setCouleurPion2(couleurs[1]);
                return;
            }
        }
    }

    private int[] choisirCouleurs(Scanner sc) {
        int[] couleursChoisies = new int[2];

        for (int i = 0; i < 2; i++) {
            boardifier.control.Logger.info("Entrez la couleur du pion du joueur " + (i+1) + " : ");
            int choixCouleur = sc.nextInt();

            // Vérifier si la couleur est valide
            if (choixCouleur < 1 || choixCouleur > 7) {
                boardifier.control.Logger.info("ERREUR : Choix de couleur invalide. Veuillez entrer un nombre entre 1 et 7.");
                return new int[0];  // Tableau vide au lieu de null
            }

            // Vérifier si la couleur n'a pas déjà été choisie
            if (i == 1 && choixCouleur == couleursChoisies[0]) {
                boardifier.control.Logger.info("ERREUR : Cette couleur a déjà été choisie par le joueur 1. Veuillez choisir une autre couleur.");
                return new int[0];  // Tableau vide au lieu de null
            }

            couleursChoisies[i] = choixCouleur;
        }

        return couleursChoisies;
    }

    /**
     * Configure tous les éléments du jeu après l'initialisation des paramètres.
     * Cette méthode crée le plateau, les pots de pions et les pions pour chaque joueur,
     * puis les ajoute au modèle de jeu.
     */
    @Override
    public void setup() {
        TextElement text = new TextElement(stageModel.getCurrentPlayerName(), stageModel);
        text.setLocation(0,0);
        stageModel.setPlayerName(text);

        init();

        // Définir les dimensions dans le modèle et calculer le nombre de pions
        stageModel.setDimensions(this.nbLigne, this.nbColonne);
        int nbPionsParJoueur = stageModel.getNbPionsParJoueur();

        PuissanceXBoard board = new PuissanceXBoard(0, 1, this.nbLigne, this.nbColonne, stageModel);
        stageModel.setBoard(board);

        // Initialiser les pots pour chaque joueur
        PuissanceXPawnPot potJoueur1 = new PuissanceXPawnPot(50, 0, this.nbLigne, this.nbColonne, stageModel);
        stageModel.setYellowPot(potJoueur1); // "Yellow" est conservé pour compatibilité
        PuissanceXPawnPot potJoueur2 = new PuissanceXPawnPot(65, 0, this.nbLigne, this.nbColonne, stageModel);
        stageModel.setRedPot(potJoueur2); // "Red" est conservé pour compatibilité

        // Récupération des couleurs choisies par les joueurs
        int couleurJoueur1 = stageModel.getCouleurPion1();
        int couleurJoueur2 = stageModel.getCouleurPion2();

        // Création des pions pour chaque joueur avec leurs couleurs respectives
        Pawn[] pionsJoueur1 = new Pawn[nbPionsParJoueur];
        for(int i=0; i<nbPionsParJoueur; i++) {
            pionsJoueur1[i] = new Pawn(i + 1, couleurJoueur1, stageModel);
        }
        stageModel.setYellowPawns(pionsJoueur1);

        Pawn[] pionsJoueur2 = new Pawn[nbPionsParJoueur];
        for(int i=0; i<nbPionsParJoueur; i++) {
            pionsJoueur2[i] = new Pawn(i + 1, couleurJoueur2, stageModel);
        }
        stageModel.setRedPawns(pionsJoueur2);

        // Ajouter tous les pions dans les pots
        for (int i=0; i<nbPionsParJoueur; i++) {
            potJoueur1.addElement(pionsJoueur1[i], i, 0);
            potJoueur2.addElement(pionsJoueur2[i], i, 0);
        }

        boardifier.control.Logger.info("Grille " + this.nbLigne + "x" + this.nbColonne + " créée avec " + nbPionsParJoueur + " pions par joueur");
    }
}