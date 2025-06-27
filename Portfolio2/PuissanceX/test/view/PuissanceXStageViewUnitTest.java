package view;

import boardifier.model.Model;
import boardifier.model.GameStageModel;
import boardifier.view.View;
import boardifier.control.StageFactory;
import model.PuissanceXStageModel;
import model.PuissanceXBoard;
import model.Pawn;
import model.PuissanceXPawnPot;
import boardifier.model.TextElement;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class PuissanceXStageViewUnitTest {

    private Model model;
    private View view;
    private PuissanceXStageModel stageModel;
    private PuissanceXStageView stageView;

    @BeforeEach
    public void setUp() throws boardifier.model.GameException {
        model = new Model();
        view = new View(model);
        model.addHumanPlayer("Joueur 1");
        model.addHumanPlayer("Joueur 2");

        StageFactory.registerModelAndView("PuissanceX", "model.PuissanceXStageModel", "view.PuissanceXStageView");

        stageModel = new PuissanceXStageModel("PuissanceX", model);

        stageModel.setDimensions(5, 5);
        stageModel.setNbPion(4);

        PuissanceXBoard board = new PuissanceXBoard(0, 1, 5, 5, stageModel);
        stageModel.setBoard(board);

        PuissanceXPawnPot yellowPot = new PuissanceXPawnPot(50, 0, 5, 5, stageModel);
        stageModel.setYellowPot(yellowPot);
        PuissanceXPawnPot redPot = new PuissanceXPawnPot(65, 0, 5, 5, stageModel);
        stageModel.setRedPot(redPot);

        TextElement playerName = new TextElement("Joueur 1", stageModel);
        stageModel.setPlayerName(playerName);

        int nbPions = stageModel.getNbPionsParJoueur();
        Pawn[] yellowPawns = new Pawn[nbPions];
        Pawn[] redPawns = new Pawn[nbPions];
        
        for(int i=0; i<nbPions; i++) {
            yellowPawns[i] = new Pawn(i+1, Pawn.PAWN_YELLOW, stageModel);
            redPawns[i] = new Pawn(i+1, Pawn.PAWN_RED, stageModel);
        }
        
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);

        stageView = new PuissanceXStageView("PuissanceX", stageModel);
    }

    @Test
    public void testCreateLooks() {
        Assertions.assertDoesNotThrow(() -> stageView.createLooks());
    }

    @Test
    public void testStageViewInitialization() {
        Assertions.assertNotNull(stageView);
        Assertions.assertNotNull(stageModel);
        Assertions.assertTrue(stageModel instanceof PuissanceXStageModel);
    }

    @Test
    public void testStageViewWithBoard() {
        PuissanceXBoard board = stageModel.getBoard();
        Assertions.assertNotNull(board);
        Assertions.assertEquals(stageModel.getNbLigne(), board.getNbRows());
        Assertions.assertEquals(stageModel.getNbColonne(), board.getNbCols());
    }

    @Test
    public void testStageViewWithPawnPots() {
        PuissanceXPawnPot yellowPot = stageModel.getYellowPot();
        PuissanceXPawnPot redPot = stageModel.getRedPot();
        
        Assertions.assertNotNull(yellowPot);
        Assertions.assertNotNull(redPot);

        int expectedPawns = stageModel.getNbPionsParJoueur();
        Assertions.assertEquals(expectedPawns, yellowPot.getNbRows());
        Assertions.assertEquals(expectedPawns, redPot.getNbRows());
    }

    @Test
    public void testStageViewWithPawns() {
        Pawn[] yellowPawns = stageModel.getYellowPawns();
        Pawn[] redPawns = stageModel.getRedPawns();
        
        Assertions.assertNotNull(yellowPawns);
        Assertions.assertNotNull(redPawns);

        int expectedPawns = stageModel.getNbPionsParJoueur();
        Assertions.assertEquals(expectedPawns, yellowPawns.length);
        Assertions.assertEquals(expectedPawns, redPawns.length);

        for (Pawn pawn : yellowPawns) {
            Assertions.assertEquals(Pawn.PAWN_YELLOW, pawn.getColor());
        }
        for (Pawn pawn : redPawns) {
            Assertions.assertEquals(Pawn.PAWN_RED, pawn.getColor());
        }
    }
}
