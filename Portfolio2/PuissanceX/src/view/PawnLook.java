package view;

import boardifier.model.GameElement;
import boardifier.view.ConsoleColor;
import boardifier.view.ElementLook;
import model.Pawn;

/**
 * Représentation visuelle d'un pion dans le jeu Puissance X.
 * Cette classe définit l'apparence des pions dans l'interface console,
 * en attribuant une couleur de fond et une couleur de texte selon la couleur du pion.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PawnLook extends ElementLook {

    /**
     * Constructeur de la représentation visuelle d'un pion.
     * Crée un look de taille 1x1 pour représenter le pion dans la console.
     *
     * @param element L'élément de jeu (pion) à représenter visuellement
     */
    public PawnLook(GameElement element) {
        super(element, 1, 1);
    }

    /**
     * Génère la représentation visuelle du pion.
     * Cette méthode détermine la couleur de fond et la couleur du texte en fonction
     * de la couleur du pion, puis affiche le numéro du pion sur ce fond.
     * Les couleurs disponibles sont : jaune, rouge, bleu, noir, violet, vert et marron.
     */
    @Override
    protected void render() {
        if (element instanceof Pawn pion) {
            int couleurPion = pion.getColor();

            switch (couleurPion) {
                case Pawn.PAWN_YELLOW:
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.YELLOW_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_RED:
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.RED_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_BLUE:
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.BLUE_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_BLACK:
                    shape[0][0] = ConsoleColor.WHITE + ConsoleColor.BLACK_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_PURPLE:
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.PURPLE_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_GREEN:
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.GREEN_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
                    break;
                case Pawn.PAWN_BROWN:
                    // Simulation du marron (fond rouge clair + texte noir gras)
                    shape[0][0] = ConsoleColor.BLACK_BOLD + ConsoleColor.RED_BACKGROUND_BRIGHT + pion.getNumber() + ConsoleColor.RESET;
                    break;
                default:
                    // Couleur par défaut en cas d'erreur
                    shape[0][0] = ConsoleColor.BLACK + ConsoleColor.WHITE_BACKGROUND + pion.getNumber() + ConsoleColor.RESET;
            }
        }
    }
}