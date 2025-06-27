package model;

import boardifier.model.ElementTypes;
import boardifier.model.GameStageModel;
import boardifier.model.Model;
import boardifier.model.StageElementsFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class PawnUnitTest {

    private static class StubGameStageModel extends GameStageModel {
        public StubGameStageModel() {
            // On fournit un nom "testStage" et un Model stub
            super("testStage", new StubModel());
        }

        @Override
        public StageElementsFactory getDefaultElementFactory() {
            // Implémentation basique nécessaire pour satisfaire la classe abstraite
            return new StageElementsFactory(this) {
                @Override
                public void setup() {
                    // Ne fait rien pour les tests
                }
            };
        }
    }

    private static class StubModel extends Model {
        public StubModel() {
            super();
        }
    }

    @Test
    public void testConstructor() {
        GameStageModel stubGameStageModel = new StubGameStageModel();

        // Création d'un pion
        int number = 1;
        int color = Pawn.PAWN_YELLOW;
        Pawn pawn = new Pawn(number, color, stubGameStageModel);

        // Vérification des attributs du pion
        Assertions.assertEquals(number, pawn.getNumber());
        Assertions.assertEquals(color, pawn.getColor());
        Assertions.assertEquals(ElementTypes.getType("pawn"), pawn.getType());

        // Vérification que le GameStageModel est bien celui fourni au constructeur
        Assertions.assertSame(stubGameStageModel, pawn.getGameStage());

        // Vérification que l'élément est visible par défaut
        Assertions.assertTrue(pawn.isVisible());
    }

    @Test
    public void testConstructorWithDifferentParameters() {
        // Test avec d'autres valeurs pour vérifier le comportement
        GameStageModel stubGameStageModel = new StubGameStageModel();
        int number = 5;
        int color = Pawn.PAWN_RED;
        Pawn pawn = new Pawn(number, color, stubGameStageModel);

        Assertions.assertEquals(number, pawn.getNumber());
        Assertions.assertEquals(color, pawn.getColor());
    }

    @Test
    public void testGetNumber() {
        // Test de la méthode getNumber
        GameStageModel stubGameStageModel = new StubGameStageModel();
        int expectedNumber = 3;
        Pawn pawn = new Pawn(expectedNumber, Pawn.PAWN_BLUE, stubGameStageModel);

        int actualNumber = pawn.getNumber();

        Assertions.assertEquals(expectedNumber, actualNumber);
    }

    @Test
    public void testGetColor() {
        // Test de la méthode getColor
        GameStageModel stubGameStageModel = new StubGameStageModel();
        int expectedColor = Pawn.PAWN_GREEN;
        Pawn pawn = new Pawn(7, expectedColor, stubGameStageModel);

        int actualColor = pawn.getColor();

        Assertions.assertEquals(expectedColor, actualColor);
    }
}