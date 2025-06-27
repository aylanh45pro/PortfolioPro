package model;

import boardifier.model.Model;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;
import java.awt.Point;
import java.util.List;

public class PuissanceXBoardUnitTest {

    private Model model;
    private PuissanceXStageModel stageModel;
    private PuissanceXBoard board;

    @BeforeEach
    public void setUp() {
        model = new Model();
        stageModel = new PuissanceXStageModel("PuissanceX", model);
        stageModel.setDimensions(5, 5);
        board = new PuissanceXBoard(0, 1, 5, 5, stageModel);
    }

    @Test
    public void testBoardInitialization() {
        Assertions.assertNotNull(board);
        Assertions.assertEquals(5, board.getNbRows());
        Assertions.assertEquals(5, board.getNbCols());
    }

    @Test
    public void testIsColumnFull() {
        for (int col = 0; col < board.getNbCols(); col++) {
            Assertions.assertFalse(board.isColumnFull(col));
        }

        for (int row = 0; row < board.getNbRows(); row++) {
            board.addElement(new Pawn(1, Pawn.PAWN_YELLOW, stageModel), row, 0);
        }

        Assertions.assertTrue(board.isColumnFull(0));

        for (int col = 1; col < board.getNbCols(); col++) {
            Assertions.assertFalse(board.isColumnFull(col));
        }
    }

    @Test
    public void testComputeValidCells() {
        List<Point> validCells = board.computeValidCells();
        Assertions.assertEquals(board.getNbCols(), validCells.size());

        for (Point p : validCells) {
            Assertions.assertEquals(board.getNbRows() - 1, p.y);
        }

        for (int row = 0; row < board.getNbRows(); row++) {
            board.addElement(new Pawn(1, Pawn.PAWN_YELLOW, stageModel), row, 0);
        }

        validCells = board.computeValidCells();
        Assertions.assertEquals(board.getNbCols() - 1, validCells.size());
        for (Point p : validCells) {
            Assertions.assertNotEquals(0, p.x);
        }
    }

    @Test
    public void testSetValidCells() {
        board.setValidCells();

        for (int col = 0; col < board.getNbCols(); col++) {
            Assertions.assertTrue(board.getReachableCells()[board.getNbRows() - 1][col]);
        }

        for (int row = 0; row < board.getNbRows() - 1; row++) {
            for (int col = 0; col < board.getNbCols(); col++) {
                Assertions.assertFalse(board.getReachableCells()[row][col]);
            }
        }
    }

    @Test
    public void testValidCellsWithPartialFill() {
        for (int row = 2; row < board.getNbRows(); row++) {
            board.addElement(new Pawn(1, Pawn.PAWN_YELLOW, stageModel), row, 0);
        }

        board.setValidCells();

        Assertions.assertTrue(board.getReachableCells()[1][0]);

        for (int row = 2; row < board.getNbRows(); row++) {
            Assertions.assertFalse(board.getReachableCells()[row][0]);
        }

        for (int col = 1; col < board.getNbCols(); col++) {
            Assertions.assertTrue(board.getReachableCells()[board.getNbRows() - 1][col]);
        }
    }
}
