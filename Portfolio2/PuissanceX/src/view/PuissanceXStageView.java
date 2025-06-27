package view;

import boardifier.control.Logger;
import boardifier.model.GameStageModel;
import boardifier.view.ClassicBoardLook;
import boardifier.view.GameStageView;

import boardifier.view.TextLook;
import model.PuissanceXStageModel;


/**
 * Vue du plateau de jeu Puissance X.
 * Cette classe est responsable de la création des éléments visuels du jeu,
 * notamment le plateau, les pots de pions et les pions eux-mêmes.
 * Elle étend la classe GameStageView du framework Boardifier.
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PuissanceXStageView extends GameStageView {
    
    /**
     * Constructeur de la vue du plateau de jeu Puissance X.
     * 
     * @param name Le nom de la vue
     * @param gameStageModel Le modèle de jeu associé à cette vue
     */
    public PuissanceXStageView(String name, GameStageModel gameStageModel) {
        super(name, gameStageModel);
    }

    /**
     * Crée les représentations visuelles (looks) pour tous les éléments du jeu.
     * Cette méthode est appelée automatiquement lors de l'initialisation de la vue.
     * Elle crée les looks pour :
     * - Le nom du joueur actif
     * - Le plateau de jeu
     * - Les pots de pions pour chaque joueur
     * - Tous les pions des deux joueurs
     */
    @Override
    public void createLooks() {
        PuissanceXStageModel model = (PuissanceXStageModel)gameStageModel;

        // Obtenir le nombre de pions par joueur
        int nbPionsParJoueur = model.getNbPionsParJoueur();

        addLook(new TextLook(model.getPlayerName()));
        addLook(new ClassicBoardLook(2, 4, model.getBoard(), 1, 1, true));
        addLook(new YellowPawnPotLook(model.getYellowPot()));
        addLook(new RedPawnPotLook(model.getRedPot()));

        // Utiliser le nombre dynamique de pions
        for(int i=0; i<nbPionsParJoueur; i++) {
            addLook(new PawnLook(model.getYellowPawns()[i]));
            addLook(new PawnLook(model.getRedPawns()[i]));
        }

        Logger.debug("finished creating game stage looks with " + nbPionsParJoueur + " pawns per player", this);
    }
}
