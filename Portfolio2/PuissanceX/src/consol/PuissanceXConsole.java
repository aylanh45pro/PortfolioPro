package consol;

import boardifier.control.Logger;
import boardifier.control.StageFactory;
import boardifier.model.GameException;
import boardifier.model.Model;
import boardifier.view.View;
import model.PuissanceXStageModel;
import control.PuissanceXController;

import java.util.Scanner;

/**
 * Classe principale pour lancer le jeu Puissance X en mode console.
 * 
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PuissanceXConsole {
    
    private static final String SEPARATOR = "====================================";

    /**
     * Point d'entrée principal du jeu Puissance X en mode console.
     * 
     * @param args Arguments de ligne de commande (optionnel: mode de jeu 1-3)
     */
    public static void main(String[] args) {
        configureLogger();
        afficherModesDisponibles();
        Scanner sc = new Scanner(System.in);
        int mode = selectionnerModeJeu(args, sc);
        Model model = creerModelEtJoueurs(mode);
        lancerJeu(model, sc);
        // Ne jamais fermer sc pour ne pas fermer System.in
    }
    
    /**
     * Configure le niveau et la verbosité du logger.
     */
    private static void configureLogger() {
        Logger.setLevel(Logger.LOGGER_TRACE);
        Logger.setVerbosity(Logger.VERBOSE_HIGH);
    }
    
    /**
     * Affiche les différents modes de jeu disponibles.
     */
    private static void afficherModesDisponibles() {
        Logger.info(SEPARATOR);
        Logger.info("|    Modes de Jeu Disponibles      |");
        Logger.info(SEPARATOR);
        Logger.info("| 1) Mode Joueur vs Joueur         |");
        Logger.info("| 2) Mode Joueur vs IA             |");
        Logger.info("| 3) Mode IA vs IA                 |");
        Logger.info(SEPARATOR);
    }
    
    /**
     * Sélectionne le mode de jeu en fonction des arguments ou de l'entrée utilisateur.
     * 
     * @param args Arguments de ligne de commande
     * @return Le mode de jeu sélectionné (1, 2 ou 3)
     */
    private static int selectionnerModeJeu(String[] args, Scanner sc) {
        int mode = traiterArgumentsLigneCommande(args);
        if (mode < 1 || mode > 3) {
            mode = demanderModeUtilisateur(sc);
        }
        return mode;
    }
    
    /**
     * Traite les arguments de ligne de commande pour extraire le mode de jeu.
     * 
     * @param args Arguments de ligne de commande
     * @return Le mode de jeu s'il est valide, 0 sinon
     */
    private static int traiterArgumentsLigneCommande(String[] args) {
        if (args.length == 1) {
            try {
                int mode = Integer.parseInt(args[0]);
                if (mode >= 1 && mode <= 3) {
                    Logger.info("Mode sélectionné via argument : " + mode);
                    return mode;
                } else {
                    Logger.info("Argument invalide. Valeur entre 1 et 3 attendue.");
                }
            } catch (NumberFormatException e) {
                Logger.info("Argument invalide. Nombre entier attendu.");
            }
        }
        return 0; // Mode invalide
    }
    
    /**
     * Demande à l'utilisateur de saisir un mode de jeu valide.
     * 
     * @return Le mode de jeu sélectionné (1, 2 ou 3)
     */
    private static int demanderModeUtilisateur(Scanner sc) {
        int mode = 3;
        boolean verifMode = true;
        int tentatives = 0;
        final int MAX_TENTATIVES = 3;
        while (verifMode && tentatives < MAX_TENTATIVES) {
            Logger.info("Entrez le mode de jeu (1-3) : ");
            if (!sc.hasNextLine()) break;
            String input = sc.nextLine();
            tentatives++;
            if (input != null && !input.isEmpty()) {
                mode = parseEntreeMode(input);
                if (mode >= 1 && mode <= 3) {
                    verifMode = false;
                } else {
                    Logger.info("ERREUR : Mode de jeu invalide");
                }
            }
        }
        if (verifMode) {
            Logger.info("Nombre maximal de tentatives atteint. Utilisation du mode 3 (IA vs IA) par défaut.");
            mode = 3;
        }
        return mode;
    }


    
    /**
     * Analyse l'entrée utilisateur pour extraire un mode de jeu valide.
     * 
     * @param input L'entrée utilisateur à analyser
     * @return Le mode de jeu s'il est valide, 0 sinon
     */
    private static int parseEntreeMode(String input) {
        try {
            return Integer.parseInt(input.trim());
        } catch (NumberFormatException nfe) {
            Logger.info("ERREUR : Veuillez entrer un nombre entre 1 et 3");
            return 0;
        }
    }
    
    /**
     * Crée le modèle de jeu et configure les joueurs selon le mode sélectionné.
     * 
     * @param mode Le mode de jeu sélectionné
     * @return Le modèle de jeu configuré
     */
    private static Model creerModelEtJoueurs(int mode) {
        Model model = new Model();
        
        switch (mode) {
            case 1:
                model.addHumanPlayer("player1");
                model.addHumanPlayer("player2");
                break;
            case 2:
                model.addHumanPlayer("player");
                model.addComputerPlayer("computer");
                break;
            case 3:
            default:
                model.addComputerPlayer("computer1");
                model.addComputerPlayer("computer2");
                break;
        }
        
        return model;
    }
    
    /**
     * Lance le jeu avec le modèle configuré.
     * 
     * @param model Le modèle de jeu configuré
     */
    private static void lancerJeu(Model model, Scanner sc) {
        PuissanceXStageModel.setSharedScanner(sc);
        StageFactory.registerModelAndView("PuissanceX", "model.PuissanceXStageModel", "view.PuissanceXStageView");
        View puissanceXView = new View(model);
        PuissanceXController control = new PuissanceXController(model, puissanceXView, sc);
        control.setFirstStageName("PuissanceX");
        try {
            control.startGame();
            control.stageLoop();
        } catch (GameException e) {
            Logger.info("Cannot start the game. Abort: " + e.getMessage());
        }
    }
}
