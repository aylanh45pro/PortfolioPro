package view;

import model.Pawn;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


import java.io.*;
import java.util.*;

public class PawnLookUnitTest {

    @Test
    public void testPawnLookYellow() {
        // Stub minimal pour Model
        class StubModel extends boardifier.model.Model {}
        // Stub minimal pour GameStageModel
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        // Création d'un pion jaune numéro 3
        Pawn pawn = new Pawn(3, Pawn.PAWN_YELLOW, new StubGameStageModel());
        // Sous-classe pour accéder à render()
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        // Vérifie que le rendu contient la séquence de couleur jaune et le numéro
        Assertions.assertTrue(rendu.contains("\033[0;30m")); // BLACK
        Assertions.assertTrue(rendu.contains("\033[43m")); // YELLOW_BACKGROUND
        Assertions.assertTrue(rendu.contains("3")); // numéro du pion
        Assertions.assertTrue(rendu.contains("\033[0m")); // RESET
    }

    @Test
    public void testPawnLookRed() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(4, Pawn.PAWN_RED, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[0;30m")); // BLACK
        Assertions.assertTrue(rendu.contains("\033[41m")); // RED_BACKGROUND
        Assertions.assertTrue(rendu.contains("4"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

    @Test
    public void testPawnLookBlue() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(5, Pawn.PAWN_BLUE, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[0;30m")); // BLACK
        Assertions.assertTrue(rendu.contains("\033[44m")); // BLUE_BACKGROUND
        Assertions.assertTrue(rendu.contains("5"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

    @Test
    public void testPawnLookBlack() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(6, Pawn.PAWN_BLACK, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[0;97m")); // WHITE
        Assertions.assertTrue(rendu.contains("\033[40m")); // BLACK_BACKGROUND
        Assertions.assertTrue(rendu.contains("6"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

    @Test
    public void testPawnLookPurple() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(7, Pawn.PAWN_PURPLE, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[0;30m")); // BLACK
        Assertions.assertTrue(rendu.contains("\033[45m")); // PURPLE_BACKGROUND
        Assertions.assertTrue(rendu.contains("7"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

    @Test
    public void testPawnLookGreen() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(8, Pawn.PAWN_GREEN, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[0;30m")); // BLACK
        Assertions.assertTrue(rendu.contains("\033[42m")); // GREEN_BACKGROUND
        Assertions.assertTrue(rendu.contains("8"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

    @Test
    public void testPawnLookBrown() {
        class StubModel extends boardifier.model.Model {}
        class StubGameStageModel extends boardifier.model.GameStageModel {
            public StubGameStageModel() { super("testStage", new StubModel()); }
            @Override public boardifier.model.StageElementsFactory getDefaultElementFactory() { return null; }
        }
        Pawn pawn = new Pawn(9, Pawn.PAWN_BROWN, new StubGameStageModel());
        class TestPawnLook extends PawnLook {
            public TestPawnLook(Pawn p) { super(p); }
            public void callRender() { render(); }
            public String getRendered() { return shape[0][0]; }
        }
        TestPawnLook look = new TestPawnLook(pawn);
        look.callRender();
        String rendu = look.getRendered();
        Assertions.assertTrue(rendu.contains("\033[1;30m")); // BLACK_BOLD
        Assertions.assertTrue(rendu.contains("\033[0;101m")); // RED_BACKGROUND_BRIGHT
        Assertions.assertTrue(rendu.contains("9"));
        Assertions.assertTrue(rendu.contains("\033[0m"));
    }

}

