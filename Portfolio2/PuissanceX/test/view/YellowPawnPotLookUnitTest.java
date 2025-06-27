package view;

import boardifier.model.ContainerElement;
import boardifier.model.GameStageModel;
import boardifier.view.TableLook;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.*;

public class YellowPawnPotLookUnitTest {

    private class TestContainer extends ContainerElement {
        public TestContainer(GameStageModel gameStageModel) {
            super("test", 1, 1, 0, 0, gameStageModel);
        }
    }

    @Test
    public void testYellowPawnPotConstructor() {
        ContainerElement container = new TestContainer(null);

        // Créer une instance de YellowPawnPotLook
        YellowPawnPotLook YellowPawnPotLook = new YellowPawnPotLook(container);

        // Vérifier que l'objet a été créé avec succès
        Assertions.assertNotNull(YellowPawnPotLook, "YellowPawnPotLook doit être correctement instancié");

        // Vérifier que c'est bien une instance de TableLook
        Assertions.assertTrue(YellowPawnPotLook instanceof TableLook, "YellowPawnPotLook doit hériter de TableLook");
    }

    @Test
    public void testConstructorParameters() {

        ContainerElement container = new TestContainer(null);
        YellowPawnPotLook YellowPawnPotLook = new YellowPawnPotLook(container);

        Assertions.assertNotNull(YellowPawnPotLook, "Le constructeur doit s'exécuter sans erreur");
    }
}
