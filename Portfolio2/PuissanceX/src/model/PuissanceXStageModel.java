package model;

import java.util.Scanner;

import boardifier.model.*;

/**
 * Modèle de l'étape de jeu Puissance X.
 * Cette classe gère l'état du jeu, les éléments et les règles du jeu Puissance X.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */

public class PuissanceXStageModel extends GameStageModel {

    /** Nombre de pions restant à jouer pour le joueur 1 */
    private int pionRestantJoueur1;
    /** Nombre de pions restant à jouer pour le joueur 2 */
    private int pionRestantJoueur2;

    /** Nombre de pions à aligner pour gagner */
    private int nbPionsAAligner;

    /** Couleur choisie par le joueur 1 */
    private int couleurJoueur1;
    /** Couleur choisie par le joueur 2 */
    private int couleurJoueur2;

    /** Plateau de jeu Puissance X */
    private PuissanceXBoard plateau;
    /** Pot contenant les pions du joueur 1 */
    private PuissanceXPawnPot potJoueur1;
    /** Pot contenant les pions du joueur 2 */
    private PuissanceXPawnPot potJoueur2;
    /** Pions du joueur 1 */
    private Pawn[] pionsJoueur1;
    /** Pions du joueur 2 */
    private Pawn[] pionsJoueur2;
    /** Affichage du nom du joueur courant */
    private TextElement nomJoueurActuel;


    /** Nombre de pions par joueur */
    private int nbPionsParJoueur;
    /** Nombre de lignes du plateau */
    private int nbLigne;
    /** Nombre de colonnes du plateau */
    private int nbColonne;

    /**
     * Constructeur du modèle de l'étape de jeu Puissance X.
     *
     * @param name Nom de l'étape de jeu
     * @param model Modèle de jeu parent
     */
    public PuissanceXStageModel(String name, Model model) {
        super(name, model);
        // Les valeurs seront mises à jour lors de la création du plateau
        pionRestantJoueur1 = 0;
        pionRestantJoueur2 = 0;
        nbPionsParJoueur = 0;
        setupCallbacks();
    }

    /**
     * Définit les dimensions du plateau et calcule le nombre de pions nécessaires.
     * Le nombre de pions par joueur est calculé comme étant (nombre de cellules totales / 2) + 1.
     *
     * @param nbLigne Nombre de lignes du plateau
     * @param nbColonne Nombre de colonnes du plateau
     */
    public void setDimensions(int nbLigne, int nbColonne) {
        this.nbLigne = nbLigne;
        this.nbColonne = nbColonne;
        // Calcul du nombre de pions par joueur : (nombre de cellules totales / 2) + 1
        this.nbPionsParJoueur = ((nbLigne * nbColonne) / 2) + 1;
        this.pionRestantJoueur1 = nbPionsParJoueur;
        this.pionRestantJoueur2 = nbPionsParJoueur;
        boardifier.control.Logger.info("Nombre de pions par joueur: " + nbPionsParJoueur);
    }

    /**
     * Retourne le nombre de pions par joueur.
     *
     * @return Le nombre de pions par joueur
     */
    public int getNbPionsParJoueur() {
        return nbPionsParJoueur;
    }

    /**
     * Retourne le nombre de lignes du plateau.
     *
     * @return Le nombre de lignes du plateau
     */
    public int getNbLigne() {
        return nbLigne;
    }

    /**
     * Retourne le nombre de colonnes du plateau.
     *
     * @return Le nombre de colonnes du plateau
     */
    public int getNbColonne() {
        return nbColonne;
    }

    /**
     * Récupère le plateau de jeu.
     *
     * @return Le plateau de jeu Puissance X
     */
    public PuissanceXBoard getBoard() {
        return plateau;
    }
    /**
     * Définit le plateau de jeu et l'ajoute au conteneur.
     *
     * @param plateau Le plateau de jeu Puissance X à utiliser
     */
    public void setBoard(PuissanceXBoard plateau) {
        this.plateau = plateau;
        addContainer(plateau);
    }

    /**
     * Récupère le pot de pions du joueur 1.
     *
     * @return Le pot de pions du joueur 1
     */
    public PuissanceXPawnPot getYellowPot() {
        return potJoueur1;
    }
    /**
     * Définit le pot de pions du joueur 1 et l'ajoute au conteneur.
     *
     * @param pot Le pot de pions à utiliser pour le joueur 1
     */
    public void setYellowPot(PuissanceXPawnPot pot) {
        this.potJoueur1 = pot;
        addContainer(pot);
    }

    /**
     * Récupère le pot de pions du joueur 2.
     *
     * @return Le pot de pions du joueur 2
     */
    public PuissanceXPawnPot getRedPot() {
        return potJoueur2;
    }
    /**
     * Définit le pot de pions du joueur 2 et l'ajoute au conteneur.
     *
     * @param pot Le pot de pions à utiliser pour le joueur 2
     */
    public void setRedPot(PuissanceXPawnPot pot) {
        this.potJoueur2 = pot;
        addContainer(pot);
    }

    /**
     * Récupère les pions du joueur 1.
     *
     * @return Le tableau des pions du joueur 1
     */
    public Pawn[] getYellowPawns() {
        return pionsJoueur1;
    }
    /**
     * Définit les pions du joueur 1 et les ajoute au modèle.
     *
     * @param pions Le tableau des pions à utiliser pour le joueur 1
     */
    public void setYellowPawns(Pawn[] pions) {
        this.pionsJoueur1 = pions;
        for (Pawn pion : pions) {
            addElement(pion);
        }
    }

    /**
     * Récupère les pions du joueur 2.
     *
     * @return Le tableau des pions du joueur 2
     */
    public Pawn[] getRedPawns() {
        return pionsJoueur2;
    }
    /**
     * Définit les pions du joueur 2 et les ajoute au modèle.
     *
     * @param pions Le tableau des pions à utiliser pour le joueur 2
     */
    public void setRedPawns(Pawn[] pions) {
        this.pionsJoueur2 = pions;
        for (Pawn pion : pions) {
            addElement(pion);
        }
    }

    /**
     * Récupère l'élément de texte affichant le nom du joueur actuel.
     *
     * @return L'élément de texte affichant le nom du joueur actuel
     */
    public TextElement getPlayerName() {
        return nomJoueurActuel;
    }
    /**
     * Définit l'élément de texte affichant le nom du joueur actuel et l'ajoute au modèle.
     *
     * @param textElement L'élément de texte à utiliser pour afficher le nom du joueur actuel
     */
    public void setPlayerName(TextElement textElement) {
        this.nomJoueurActuel = textElement;
        addElement(textElement);
    }

    /**
     * Récupère le nombre de pions à aligner pour gagner.
     *
     * @return Le nombre de pions à aligner pour gagner
     */
    public int getNbPion() {
        return nbPionsAAligner;
    }
    /**
     * Définit le nombre de pions à aligner pour gagner.
     *
     * @param nbPions Le nombre de pions à aligner pour gagner
     */
    public void setNbPion(int nbPions) {
        this.nbPionsAAligner = nbPions;
    }

    /**
     * Récupère la couleur des pions du joueur 1.
     *
     * @return La couleur des pions du joueur 1 (une des constantes Pawn.PAWN_*)
     */
    public int getCouleurPion1() {
        return couleurJoueur1;
    }
    /**
     * Définit la couleur des pions du joueur 1.
     *
     * @param couleur La couleur des pions du joueur 1 (une des constantes Pawn.PAWN_*)
     */
    public void setCouleurPion1(int couleur) {
        this.couleurJoueur1 = couleur;
    }

    /**
     * Récupère la couleur des pions du joueur 2.
     *
     * @return La couleur des pions du joueur 2 (une des constantes Pawn.PAWN_*)
     */
    public int getCouleurPion2() {
        return couleurJoueur2;
    }
    /**
     * Définit la couleur des pions du joueur 2.
     *
     * @param couleur La couleur des pions du joueur 2 (une des constantes Pawn.PAWN_*)
     */
    public void setCouleurPion2(int couleur) {
        this.couleurJoueur2 = couleur;
    }

    /**
     * Configure les callbacks pour gérer le jeu.
     * Cette méthode initialise les écouteurs d'événements pour suivre
     * les actions des joueurs, comme le placement des pions sur le plateau.
     */
    private void setupCallbacks() {
        onPutInContainer( (element, gridDest, rowDest, colDest) -> {
            // Vérifier uniquement les pions placés sur le plateau
            if (gridDest != plateau) return;
            Pawn pion = (Pawn) element;

            // Décrémenter le compteur de pions restants selon le joueur
            if (pion.getColor() == couleurJoueur1) {
                pionRestantJoueur1--;
                boardifier.control.Logger.debug("Pions restants joueur 1: " + pionRestantJoueur1);
            }
            else {
                pionRestantJoueur2--;
                boardifier.control.Logger.debug("Pions restants joueur 2: " + pionRestantJoueur2);
            }

        });
    }



    // Attribut statique temporaire pour le Scanner partagé
    private static Scanner sharedScanner;
    public static void setSharedScanner(Scanner sc) {
        sharedScanner = sc;
    }


    @Override
    public StageElementsFactory getDefaultElementFactory() {
        return new PuissanceXStageFactory(this, sharedScanner);
    }
}