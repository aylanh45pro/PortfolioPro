package model;

import boardifier.model.ElementTypes;
import boardifier.model.GameElement;
import boardifier.model.GameStageModel;

/**
 * Un élément de pion basique pour le jeu Puissance X.
 * Chaque pion possède deux paramètres fixes : un numéro et une couleur.
 * Il n'y a pas de setters car l'état d'un pion est fixé à sa création.
 * 
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class Pawn extends GameElement {

    private final int number;
    private final int color;
    
    /**
     * Constantes pour les couleurs des pions (1-7)
     */
    public static final int PAWN_YELLOW = 1;
    public static final int PAWN_RED = 2;
    public static final int PAWN_BLUE = 3;
    public static final int PAWN_BLACK = 4;
    public static final int PAWN_PURPLE = 5;
    public static final int PAWN_GREEN = 6;
    public static final int PAWN_BROWN = 7;


    /**
     * Constructeur d'un pion.
     * 
     * @param number Le numéro du pion
     * @param color La couleur du pion (utiliser les constantes PAWN_*)
     * @param gameStageModel Le modèle de l'étape de jeu auquel ce pion appartient
     */
    public Pawn(int number, int color, GameStageModel gameStageModel) {
        super(gameStageModel);
        // registering element types defined especially for this game
        ElementTypes.register("pawn",50);
        type = ElementTypes.getType("pawn");
        this.number = number;
        this.color = color;
    }

    /**
     * Récupère le numéro du pion.
     * 
     * @return Le numéro du pion
     */
    public int getNumber() {
        return number;
    }

    /**
     * Récupère la couleur du pion.
     * 
     * @return La couleur du pion (une des constantes PAWN_*)
     */
    public int getColor() {
        return color;
    }

}
