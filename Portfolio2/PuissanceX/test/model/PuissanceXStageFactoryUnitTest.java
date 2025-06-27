package model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import boardifier.model.Model;
import boardifier.model.TextElement;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Scanner;

public class PuissanceXStageFactoryUnitTest {

    private Model model;
    private PuissanceXStageModel stageModel;
    private PuissanceXStageFactory factory;

    @BeforeEach
    public void setUp() {
        model = new Model();
        model.addHumanPlayer("Joueur 1");
        model.addHumanPlayer("Joueur 2");
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        // Préparer un Scanner simulé pour la factory
        Scanner testScanner = new Scanner("5\n5\n3\n1\n2\n1\n15\n");
        factory = new PuissanceXStageFactory(stageModel, testScanner);
    }

    @Test
    public void testConstructor() {
        Assertions.assertNotNull(factory);
    }



    @Test
    public void testSetup() {
        // Simulation des entrées utilisateur
        String input = "5\n" + // nombre de colonnes
                      "5\n" + // nombre de lignes
                      "3\n" + // nombre de pions à aligner
                      "1\n" + // couleur du joueur 1 (jaune)
                      "2\n" + // couleur du joueur 2 (rouge)
                      "1\n" + // activation du chrono
                      "15\n"; // temps du chrono
        InputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);
        factory.setup();

        // Vérification du texte du joueur
        TextElement playerName = stageModel.getPlayerName();
        Assertions.assertNotNull(playerName);
        Assertions.assertEquals(stageModel.getCurrentPlayerName(), playerName.getText());
        Assertions.assertEquals(0, playerName.getX());
        Assertions.assertEquals(0, playerName.getY());

        // Vérification du plateau
        PuissanceXBoard board = stageModel.getBoard();
        Assertions.assertNotNull(board);
        Assertions.assertEquals(0, board.getX());
        Assertions.assertEquals(1, board.getY());

        // Vérification des pots de pions
        PuissanceXPawnPot yellowPot = stageModel.getYellowPot();
        PuissanceXPawnPot redPot = stageModel.getRedPot();
        Assertions.assertNotNull(yellowPot);
        Assertions.assertNotNull(redPot);
        Assertions.assertEquals(50, yellowPot.getX());
        Assertions.assertEquals(0, yellowPot.getY());
        Assertions.assertEquals(65, redPot.getX());
        Assertions.assertEquals(0, redPot.getY());

        // Vérification des pions
        Pawn[] yellowPawns = stageModel.getYellowPawns();
        Pawn[] redPawns = stageModel.getRedPawns();
        Assertions.assertNotNull(yellowPawns);
        Assertions.assertNotNull(redPawns);
        Assertions.assertEquals(13, yellowPawns.length);
        Assertions.assertEquals(13, redPawns.length);

        // Vérification des couleurs des pions
        for (int i = 0; i < 13; i++) {
            Assertions.assertEquals(1, yellowPawns[i].getColor());
            Assertions.assertEquals(2, redPawns[i].getColor());
            Assertions.assertEquals(i + 1, yellowPawns[i].getNumber());
            Assertions.assertEquals(i + 1, redPawns[i].getNumber());
        }

        // Vérification du placement des pions dans les pots
        for (int i = 0; i < 13; i++) {
            Assertions.assertEquals(yellowPawns[i], yellowPot.getElement(i, 0));
            Assertions.assertEquals(redPawns[i], redPot.getElement(i, 0));
        }
    }

    @Test
    public void testGetNbColonne() {
        // Simulation des entrées utilisateur
        String input = "7\n5\n3\n1\n2\n";
        Scanner testScanner = new Scanner(input);
        factory = new PuissanceXStageFactory(stageModel, testScanner);
        factory.setup();
        
        Assertions.assertEquals(7, factory.getNbColonne());
    }

    @Test
    public void testGetNbLigne() {
        // Simulation des entrées utilisateur
        String input = "5\n8\n3\n1\n2\n";
        Scanner testScanner = new Scanner(input);
        factory = new PuissanceXStageFactory(stageModel, testScanner);
        factory.setup();
        
        Assertions.assertEquals(8, factory.getNbLigne());
    }

    @Test
    public void testGetNbPionsPourGagner() {
        // Simulation des entrées utilisateur
        String input = "5\n5\n4\n1\n2\n";
        Scanner testScanner = new Scanner(input);
        factory = new PuissanceXStageFactory(stageModel, testScanner);
        factory.setup();
        
        Assertions.assertEquals(4, factory.getNbPionsPourGagner());
    }

}
