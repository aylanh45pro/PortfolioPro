package model;

import boardifier.model.GameStageModel;
import boardifier.model.Model;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PuissanceXPawnPotUnitTest {

    private Model model;
    private GameStageModel gameStageModel;

    @BeforeEach
    public void setUp() {
        model = new Model();
        gameStageModel = new PuissanceXStageModel("test", model);
    }

    @Test
    public void testConstructeurParDefaut() {
        // Test du constructeur par défaut avec 6 pions fixes
        PuissanceXPawnPot pot = new PuissanceXPawnPot(10, 20, gameStageModel);

        assertEquals(6, pot.getNbRows(), "Le nombre de lignes devrait être 6");
        assertEquals(1, pot.getNbCols(), "Le nombre de colonnes devrait être 1");
        assertEquals(10, pot.getX(), "La position X devrait être 10");
        assertEquals(20, pot.getY(), "La position Y devrait être 20");
    }

    @Test
    public void testConstructeurAvecDimensions() {
        // Test du constructeur avec dimensions 5x5 (13 pions)
        PuissanceXPawnPot pot = new PuissanceXPawnPot(10, 20, 5, 5, gameStageModel);

        // Pour une grille 5x5, le nombre de pions devrait être (5*5/2)+1 = 13
        int nbPionsAttendu = ((5 * 5) / 2) + 1;
        assertEquals(nbPionsAttendu, pot.getNbRows(), "Le nombre de lignes devrait être 13");
        assertEquals(1, pot.getNbCols(), "Le nombre de colonnes devrait être 1");
    }

    @Test
    public void testConstructeurGrilleDifferentesTailles() {
        // Test avec différentes tailles de grille
        int[][] dimensions = {{3, 3}, {4, 4}, {5, 5}, {6, 6}, {7, 7}};

        for (int[] dim : dimensions) {
            PuissanceXPawnPot pot = new PuissanceXPawnPot(0, 0, dim[0], dim[1], gameStageModel);
            int nbPionsAttendu = ((dim[0] * dim[1]) / 2) + 1;
            assertEquals(nbPionsAttendu, pot.getNbRows(),
                    "Pour une grille " + dim[0] + "x" + dim[1] + ", le nombre de pions devrait être " + nbPionsAttendu);
        }
    }

    @Test
    public void testCapaciteMaximale() {
        // Test avec une grille 10x10 (limite supérieure raisonnable)
        PuissanceXPawnPot pot = new PuissanceXPawnPot(0, 0, 10, 10, gameStageModel);
        int nbPionsAttendu = ((10 * 10) / 2) + 1;
        assertEquals(nbPionsAttendu, pot.getNbRows(),
                "Pour une grille 10x10, le nombre de pions devrait être " + nbPionsAttendu);
    }

    @Test
    public void testPositionnement() {
        // Test des différentes positions du pot
        int[][] positions = {{0, 0}, {10, 10}, {-10, -10}, {100, 100}};

        for (int[] pos : positions) {
            PuissanceXPawnPot pot = new PuissanceXPawnPot(pos[0], pos[1], 5, 5, gameStageModel);
            assertEquals(pos[0], pot.getX(), "La position X devrait être " + pos[0]);
            assertEquals(pos[1], pot.getY(), "La position Y devrait être " + pos[1]);
        }
    }
}
