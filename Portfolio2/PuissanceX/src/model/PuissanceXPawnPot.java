package model;

import boardifier.model.GameStageModel;
import boardifier.model.ContainerElement;

/**
 * Pot pour les pions représente l'élément où les pions sont stockés au début de la partie.
 * Un ContainerElement avec un nombre dynamique de lignes (basé sur la taille du plateau) et 1 colonne est nécessaire.
 * Le nombre de pions est calculé comme étant (nombre de cellules totales / 2) + 1.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */

public class PuissanceXPawnPot extends ContainerElement {
    /**
     * Constructeur compatible avec l'ancien code.
     * Utilise une valeur fixe de 6 pions, ce qui est probablement sous-optimal.
     * Préférez le constructeur qui prend en compte les dimensions de la grille.
     * @param x position x
     * @param y position y
     * @param gameStageModel modèle de l'étape de jeu
     */
    public PuissanceXPawnPot(int x, int y, GameStageModel gameStageModel) {
        super("pawnpot", x, y, 6, 1, gameStageModel);
        boardifier.control.Logger.info("Attention: utilisation du constructeur par défaut avec 6 pions fixes");
    }

    /**
     * Constructeur qui calcule dynamiquement le nombre de pions nécessaires
     * en fonction des dimensions de la grille
     * @param x position x
     * @param y position y
     * @param nbLignes nombre de lignes de la grille
     * @param nbColonnes nombre de colonnes de la grille
     * @param gameStageModel modèle de l'étape de jeu
     */
    public PuissanceXPawnPot(int x, int y, int nbLignes, int nbColonnes, GameStageModel gameStageModel) {
        // Calcul du nombre de pions: (nbr de cellules totales / 2) + 1
        // On utilise nbPions calculé au lieu de la valeur fixe 9
        super("pawnpot", x, y, ((nbLignes * nbColonnes) / 2) + 1, 1, gameStageModel);
    }
}
