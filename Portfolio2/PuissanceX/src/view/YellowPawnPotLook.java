package view;


import boardifier.model.ContainerElement;
import boardifier.view.TableLook;

/**
 * Représentation visuelle du pot de pions jaunes.
 * Cette classe définit l'apparence du conteneur qui stocke les pions
 * du premier joueur (traditionnellement jaunes) dans l'interface console.
 * Le pot est représenté comme un tableau à une seule colonne.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class YellowPawnPotLook extends TableLook {

    /**
     * Constructeur de la représentation visuelle du pot de pions jaunes.
     * Crée un look de tableau avec une seule colonne et un nombre de lignes
     * correspondant au nombre de pions du joueur.
     * 
     * @param containerElement L'élément conteneur à représenter visuellement
     */
    public YellowPawnPotLook(ContainerElement containerElement) {
        super(containerElement, -1, 1);
    }
}