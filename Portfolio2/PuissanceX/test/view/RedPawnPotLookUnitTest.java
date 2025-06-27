package view;

import boardifier.model.ContainerElement;
import boardifier.model.GameStageModel;
import boardifier.view.TableLook;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.*;

public class RedPawnPotLookUnitTest {

    private class TestContainer extends ContainerElement {
        public TestContainer(GameStageModel gameStageModel) {
            super("test", 1, 1, 0, 0, gameStageModel);
        }
    }

    @Test
    public void testRedPawnPotConstructor() {
        ContainerElement container = new TestContainer(null);

        // Créer une instance de RedPawnPotLook
        RedPawnPotLook redPawnPotLook = new RedPawnPotLook(container);

        // Vérifier que l'objet a été créé avec succès
        Assertions.assertNotNull(redPawnPotLook, "RedPawnPotLook doit être correctement instancié");

        // Vérifier que c'est bien une instance de TableLook
        Assertions.assertTrue(redPawnPotLook instanceof TableLook, "RedPawnPotLook doit hériter de TableLook");
    }

    @Test
    public void testConstructorParameters() {

        ContainerElement container = new TestContainer(null);
        RedPawnPotLook redPawnPotLook = new RedPawnPotLook(container);

        Assertions.assertNotNull(redPawnPotLook, "Le constructeur doit s'exécuter sans erreur");
    }
}
