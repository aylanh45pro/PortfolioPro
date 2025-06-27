package model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import boardifier.model.Model;
import boardifier.model.TextElement;
import control.PuissanceXController;
import boardifier.view.View;
import boardifier.control.StageFactory;

import java.util.Scanner;

public class    PuissanceXStageModelUnitTest {

    private Model model;
    private PuissanceXStageModel stageModel;
    private PuissanceXController controller;
    private View view;

    @BeforeEach
    public void setUp() {
        model = new Model();
        view = new View(model);
        model.addHumanPlayer("Joueur 1");
        model.addHumanPlayer("Joueur 2");
        StageFactory.registerModelAndView("PuissanceX", "model.PuissanceXStageModel", "view.PuissanceXStageView");
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        model.setGameStage(stageModel);
        stageModel.setDimensions(5, 5);
        PuissanceXPawnPot yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        PuissanceXPawnPot redPot = new PuissanceXPawnPot(0, 0, stageModel);
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        // Préparer un Scanner simulé pour le contrôleur
        Scanner testScanner = new Scanner("1A\n2B\nstop\n");
        controller = new PuissanceXController(model, view, testScanner);
    }

    @Test
    public void testSetDimensions() {
        stageModel.setDimensions(5, 5);
        Assertions.assertEquals(5, stageModel.getNbLigne());
        Assertions.assertEquals(5, stageModel.getNbColonne());
        Assertions.assertEquals(13, stageModel.getNbPionsParJoueur()); // (5*5)/2 + 1
    }

    @Test
    public void testBoardAccessors() {
        PuissanceXBoard board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        Assertions.assertEquals(board, stageModel.getBoard());
    }

    @Test
    public void testPawnPotAccessors() {
        PuissanceXPawnPot yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        PuissanceXPawnPot redPot = new PuissanceXPawnPot(0, 0, stageModel);
        
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        
        Assertions.assertEquals(yellowPot, stageModel.getYellowPot());
        Assertions.assertEquals(redPot, stageModel.getRedPot());
    }
    @Test
    public void testPawnAccessors() {
        Pawn[] yellowPawns = new Pawn[13];
        Pawn[] redPawns = new Pawn[13];
        for (int i = 0; i < 13; i++) {
            yellowPawns[i] = new Pawn(i, 1, stageModel);
            redPawns[i] = new Pawn(i, 2, stageModel);
        }
        
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);
        
        Assertions.assertArrayEquals(yellowPawns, stageModel.getYellowPawns());
        Assertions.assertArrayEquals(redPawns, stageModel.getRedPawns());
    }

    @Test
    public void testPlayerNameAccessors() {
        TextElement playerName = new TextElement("Joueur 1", stageModel);
        stageModel.setPlayerName(playerName);
        Assertions.assertEquals(playerName, stageModel.getPlayerName());
    }

    @Test
    public void testNbPionAccessors() {
        stageModel.setNbPion(3);
        Assertions.assertEquals(3, stageModel.getNbPion());
    }

    // Tests des accesseurs des couleurs
    @Test
    public void testColorAccessors() {
        stageModel.setCouleurPion1(1);
        stageModel.setCouleurPion2(2);
        
        Assertions.assertEquals(1, stageModel.getCouleurPion1());
        Assertions.assertEquals(2, stageModel.getCouleurPion2());
    }

    @Test
    public void testSetupCallbacks() {
        stageModel.setDimensions(5, 5);
        PuissanceXBoard board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        
        // Initialiser les pions
        Pawn[] yellowPawns = new Pawn[13];
        Pawn[] redPawns = new Pawn[13];
        for (int i = 0; i < 13; i++) {
            yellowPawns[i] = new Pawn(i, 1, stageModel);
            redPawns[i] = new Pawn(i, 2, stageModel);
        }
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);
        
        board.addElement(yellowPawns[0], 0, 0);
        Assertions.assertEquals(yellowPawns[0], board.getElement(0, 0));
        board.addElement(redPawns[0], 1, 0);
        Assertions.assertEquals(redPawns[0], board.getElement(1, 0));
        Assertions.assertNotNull(board.getElement(0, 0));
        Assertions.assertNotNull(board.getElement(1, 0));
    }



    @Test
    public void testDefaultElementFactory() {
        Assertions.assertNotNull(stageModel.getDefaultElementFactory());
        Assertions.assertTrue(stageModel.getDefaultElementFactory() instanceof PuissanceXStageFactory);
    }

    @Test
    public void testVictoryConditions() {
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        model.setGameStage(stageModel);
        stageModel.setDimensions(5, 5);
        PuissanceXBoard board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        
        stageModel.setCouleurPion1(1);
        stageModel.setCouleurPion2(2);
        stageModel.setNbPion(3);
        PuissanceXPawnPot yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        PuissanceXPawnPot redPot = new PuissanceXPawnPot(0, 0, stageModel);
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        
        // Initialisation des pions
        Pawn[] yellowPawns = new Pawn[13];
        Pawn[] redPawns = new Pawn[13];
        for (int i = 0; i < 13; i++) {
            yellowPawns[i] = new Pawn(i, 1, stageModel);
            redPawns[i] = new Pawn(i, 2, stageModel);
        }
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);

        // Test 1: Victoire avec pion en (1,0)
        board.addElement(yellowPawns[0], 0, 0);
        board.addElement(yellowPawns[1], 1, 0);
        board.addElement(yellowPawns[2], 2, 0);
        board.addElement(redPawns[0], 0, 1);
        board.addElement(redPawns[1], 1, 1);
        
        model.setIdPlayer(0); // Joueur 1
        controller.endOfTurn();
        Assertions.assertTrue(model.isEndStage());
        Assertions.assertEquals(0, model.getIdWinner());

        // Réinitialisation pour le test suivant
        model.reset();
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        model.setGameStage(stageModel);
        stageModel.setDimensions(5, 5);
        board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        stageModel.setCouleurPion1(1);
        stageModel.setCouleurPion2(2);
        stageModel.setNbPion(3);
        yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        redPot = new PuissanceXPawnPot(0, 0, stageModel);
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);
        
        // Test 2: Victoire avec pion en (1,1)
        board.addElement(yellowPawns[0], 0, 0);
        board.addElement(yellowPawns[1], 1, 1);
        board.addElement(yellowPawns[2], 2, 2);
        board.addElement(redPawns[0], 0, 1);
        board.addElement(redPawns[1], 1, 0);
        
        model.setIdPlayer(0);
        controller.endOfTurn();
        Assertions.assertTrue(model.isEndStage());
        Assertions.assertEquals(0, model.getIdWinner());

        // Réinitialisation pour le test suivant
        model.reset();
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        model.setGameStage(stageModel);
        stageModel.setDimensions(5, 5);
        board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        stageModel.setCouleurPion1(1);
        stageModel.setCouleurPion2(2);
        stageModel.setNbPion(3);
        yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        redPot = new PuissanceXPawnPot(0, 0, stageModel);
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);
        
        // Test 3: Victoire avec pion en (0,1)
        board.addElement(yellowPawns[0], 0, 0);
        board.addElement(yellowPawns[1], 0, 1);
        board.addElement(yellowPawns[2], 0, 2);
        board.addElement(redPawns[0], 1, 0);
        board.addElement(redPawns[1], 1, 1);
        
        model.setIdPlayer(0);
        controller.endOfTurn();
        Assertions.assertTrue(model.isEndStage());
        Assertions.assertEquals(0, model.getIdWinner());

        // Réinitialisation pour le test suivant
        model.reset();
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        model.setGameStage(stageModel);
        stageModel.setDimensions(5, 5);
        board = new PuissanceXBoard(0, 0, 5, 5, stageModel);
        stageModel.setBoard(board);
        stageModel.setCouleurPion1(1);
        stageModel.setCouleurPion2(2);
        stageModel.setNbPion(3);
        yellowPot = new PuissanceXPawnPot(0, 0, stageModel);
        redPot = new PuissanceXPawnPot(0, 0, stageModel);
        stageModel.setYellowPot(yellowPot);
        stageModel.setRedPot(redPot);
        
        stageModel.setYellowPawns(yellowPawns);
        stageModel.setRedPawns(redPawns);
        
        // Test 4: Match nul - plus de pions disponibles
        for (int i = 0; i < 12; i++) {
            board.addElement(yellowPawns[i], i/5, i%5);
            board.addElement(redPawns[i], (i+1)/5, (i+1)%5);
        }
        
        model.setIdPlayer(0);
        controller.endOfTurn();
        Assertions.assertTrue(model.isEndStage());
        Assertions.assertEquals(-1, model.getIdWinner());
    }
}
