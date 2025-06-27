package model;

import boardifier.control.Logger;
import boardifier.model.GameStageModel;
import boardifier.model.ContainerElement;

import java.util.ArrayList;
import java.util.List;
import java.awt.*;

/**
 * Représente le plateau de jeu Puissance X.
 * Cette classe étend ContainerElement pour gérer la grille de jeu.
 * 
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */

public class PuissanceXBoard extends ContainerElement {

    /**
     * Constructeur du plateau de jeu Puissance X.
     * 
     * @param x Position x du plateau sur l'écran
     * @param y Position y du plateau sur l'écran
     * @param nbLigne Nombre de lignes du plateau
     * @param nbColonne Nombre de colonnes du plateau
     * @param gameStageModel Modèle de l'étape de jeu auquel ce plateau appartient
     */
    public PuissanceXBoard(int x, int y, int nbLigne, int nbColonne,  GameStageModel gameStageModel) {
        super("PuissanceX", x, y,  nbLigne, nbColonne, gameStageModel);
    }

    /**
     * Définit les cellules valides où un pion peut être placé.
     * Cette méthode est appelée pour mettre à jour les cellules atteignables
     * sur le plateau en fonction du numéro du pion actuel.
     *
     */
    public void setValidCells() {
        Logger.debug("called",this);
        resetReachableCells(false);
        List<Point> valid = computeValidCells();
        if (valid != null) {
            for(Point p : valid) {
                reachableCells[p.y][p.x] = true;
            }
        }
    }

    /**
     * Calcule les cellules valides où un pion peut être placé.
     * Dans Puissance X, un pion ne peut être placé qu'au sommet de chaque colonne
     * non pleine, en suivant les règles de la gravité.
     * 
     * @return Une liste de points représentant les positions valides
     */
    public List<Point> computeValidCells() {
        List<Point> lst = new ArrayList<>();

        // Pour chaque colonne
        for(int col = 0; col < nbCols; col++) {
            // Vérifier si la colonne n'est pas pleine
            if (!isColumnFull(col)) {
                // Trouver la première ligne vide en partant du bas
                int row = nbRows - 1;
                while (row >= 0 && !isEmptyAt(row, col)) {
                    row--;
                }
                // Si on a trouvé une ligne vide, l'ajouter
                if (row >= 0) {
                    lst.add(new Point(col, row));
                }
            }
        }

        return lst;
    }

    /**
     * Vérifie si une colonne est pleine.
     * Une colonne est considérée comme pleine si sa case la plus haute est occupée.
     * 
     * @param col L'indice de la colonne à vérifier
     * @return true si la colonne est pleine, false sinon
     */
    public boolean isColumnFull(int col) {
        // Si la case du haut est occupée, la colonne est pleine
        return !isEmptyAt(0, col);
    }
}