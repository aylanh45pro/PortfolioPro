package view;

import boardifier.model.ContainerElement;
import boardifier.view.TableLook;

/**
 * Représentation visuelle du pot de pions rouges.
 * Cette classe définit l'apparence du conteneur qui stocke les pions
 * du second joueur (traditionnellement rouges) dans l'interface console.
 * Le pot est représenté comme un tableau à une seule colonne.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class RedPawnPotLook extends TableLook {

    /**
     * Constructeur de la représentation visuelle du pot de pions rouges.
     * Crée un look de tableau avec une seule colonne et un nombre de lignes
     * correspondant au nombre de pions du joueur.
     * 
     * @param containerElement L'élément conteneur à représenter visuellement
     */
    public RedPawnPotLook(ContainerElement containerElement) {
        super(containerElement, -1, 1);
    }
}