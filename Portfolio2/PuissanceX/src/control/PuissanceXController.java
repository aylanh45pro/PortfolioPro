package control;

import boardifier.control.ActionFactory;
import boardifier.control.ActionPlayer;
import boardifier.control.Controller;
import boardifier.model.GameElement;
import boardifier.model.ContainerElement;
import boardifier.model.Model;
import boardifier.model.Player;
import boardifier.model.action.ActionList;
import boardifier.view.View;
import model.PuissanceXStageModel;
import model.PuissanceXBoard;
import model.Pawn;

import java.security.SecureRandom;
import java.util.Scanner;

/**
 * Contrôleur principal du jeu Puissance X.
 * Gère le déroulement du jeu, les tours des joueurs et les conditions de victoire.
 * 
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PuissanceXController extends Controller {

    private final Scanner consoleIn;
    boolean firstPlayer;
    private final SecureRandom secureRandom;

    /**
     * Constructeur du contrôleur Puissance X
     * @param model Le modèle du jeu
     * @param view La vue du jeu
     */
    public PuissanceXController(Model model, View view, Scanner sc) {
        super(model, view);
        firstPlayer = true;
        secureRandom = new SecureRandom();
        this.consoleIn = sc;
    }

    /**
     * Détermine aléatoirement le premier joueur à jouer
     */
    public void firstChoice() {
        // Choisir aléatoirement le premier joueur en utilisant SecureRandom
        if (secureRandom.nextDouble() < 0.5) {
            model.setNextPlayer();
        }
    }

    /**
     * Gère la boucle principale du jeu.
     * Cette méthode s'exécute jusqu'à la fin de la partie.
     */
    @Override
    public void stageLoop() {
        // Le Scanner consoleIn est déjà initialisé et partagé
        firstChoice();
        update();
        while (!model.isEndStage()) {
            playTurn();
            endOfTurn();
            update();
        }
    }

    /**
     * Gère le tour d'un joueur (humain ou ordinateur)
     */
    public void playTurn() {
        Player p = model.getCurrentPlayer();
        if (p.getType() == Player.COMPUTER) {
            playComputerTurn();
        }
        else {
            playHumanTurn(p);
        }
    }
    
    /**
     * Gère le tour d'un joueur ordinateur
     */
    private void playComputerTurn() {
        boardifier.control.Logger.info("COMPUTER PLAYS");
        PuissanceXDecider decider = new PuissanceXDecider(model, this);
        ActionPlayer play = new ActionPlayer(model, this, decider, null);
        play.start();
    }
    
    /**
     * Gère le tour d'un joueur humain
     * @param p Le joueur humain actuel
     */
    private void playHumanTurn(Player p) {
        boolean ok = false;
        while (!ok) {
            boardifier.control.Logger.info(p.getName() + " > ", this);
            if (!consoleIn.hasNextLine()) return;
            String line = consoleIn.nextLine();

            // Gestion des commandes spéciales
            if (handleSpecialCommands(line)) {
                return;
            }

            // Analyse et exécution du coup
            if (line.length() >= 2 && line.length() <= 3) {
                ok = analyseAndPlay(line);
            }

            if (!ok) {
                afficherAideFormatCoup();
            }
        }
    }
    
    // La méthode jouerCoupAutomatique a été supprimée car nous utilisons maintenant un Scanner partagé
    
    /**
     * Traite les commandes spéciales comme null ou "stop"
     * @param line La commande entrée par l'utilisateur
     * @return true si une commande spéciale a été traitée
     */
    private boolean handleSpecialCommands(String line) {
        if (line == null) {
            boardifier.control.Logger.info("Entrée terminée, arrêt du jeu.", this);
            arreterJeu();
            return true;
        }
        
        if (line.equals("stop")) {
            boardifier.control.Logger.info("Arrêt du jeu !!!", this);
            arreterJeu();
            return true;
        }
        
        if (line.equals("help")) {
            afficherAideFormatCoup();
            return true;
        }
        
        return false;
    }
    
    /**
     * Arrête le jeu en cours avec un match nul
     */
    private void arreterJeu() {
        model.setIdWinner(-1);
        model.stopStage();
    }
    
    /**
     * Affiche des instructions d'aide sur le format attendu pour les coups
     */
    private void afficherAideFormatCoup() {
        boardifier.control.Logger.info("Instruction incorrecte. Format attendu : <numéro de pion><colonne>");
        boardifier.control.Logger.info("Exemple : 1A pour jouer le pion 1 dans la colonne A");
    }

    /**
     * Vérifie les conditions de fin de tour et de fin de partie
     * - Vérifie si le dernier coup est gagnant
     * - Vérifie s'il reste des pions aux joueurs
     * - Passe au joueur suivant si la partie continue
     */
    @Override
    public void endOfTurn() {
        PuissanceXStageModel stageModel = (PuissanceXStageModel) model.getGameStage();

        // Vérifier victoire
        if (verifierVictoireDernierCoup(stageModel)) {
            return;
        }

        // Vérifier match nul
        if (verifierMatchNul(stageModel)) {
            return;
        }

        // Continuer le jeu
        passerAuJoueurSuivant(stageModel);
    }

    /**
     * Vérifie si le dernier coup joué est gagnant
     * @param stageModel Le modèle de l'étape de jeu
     * @return true si le coup est gagnant, false sinon
     */
    private boolean verifierVictoireDernierCoup(PuissanceXStageModel stageModel) {
        PuissanceXBoard plateau = stageModel.getBoard();
        int couleurJoueurActuel = getCouleurJoueurActuel(stageModel);

        for (int col = 0; col < plateau.getNbCols(); col++) {
            for (int row = plateau.getNbRows() - 1; row >= 0; row--) {
                if (estDernierPionJoue(plateau, row, col, couleurJoueurActuel)) {
                    boardifier.control.Logger.info("Vérifie victoire pour pion en " + row + "," + col);
                    if (verifierVictoire(row, col)) {
                        declareVictoire();
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * Vérifie si la position contient le dernier pion joué par le joueur actuel
     */
    private boolean estDernierPionJoue(PuissanceXBoard plateau, int row, int col, int couleurJoueurActuel) {
        if (plateau.isEmptyAt(row, col)) {
            return false;
        }

        GameElement element = plateau.getElement(row, col);
        return element instanceof Pawn pion && pion.getColor() == couleurJoueurActuel;
    }

    /**
     * Récupère la couleur du joueur actuellement en train de jouer
     */
    private int getCouleurJoueurActuel(PuissanceXStageModel stageModel) {
        int couleurJoueur1 = stageModel.getCouleurPion1();
        int couleurJoueur2 = stageModel.getCouleurPion2();
        return (model.getIdPlayer() == 0) ? couleurJoueur1 : couleurJoueur2;
    }

    /**
     * Déclare la victoire du joueur actuel
     */
    private void declareVictoire() {
        boardifier.control.Logger.info(model.getCurrentPlayer().getName() + " a gagné la partie !");
        model.setIdWinner(model.getIdPlayer());
        model.stopStage();
    }

    /**
     * Vérifie si c'est un match nul (au moins un joueur n'a plus de pions)
     * @param stageModel Le modèle de l'étape de jeu
     * @return true si c'est un match nul, false sinon
     */
    private boolean verifierMatchNul(PuissanceXStageModel stageModel) {
        boolean joueur1SansPions = verifierJoueurSansPions(stageModel.getYellowPot());
        boolean joueur2SansPions = verifierJoueurSansPions(stageModel.getRedPot());

        if (joueur1SansPions || joueur2SansPions) {
            declareMatchNul();
            return true;
        }
        return false;
    }

    /**
     * Vérifie si un joueur n'a plus de pions dans son pot
     * @param pot Le pot du joueur à vérifier
     * @return true si le joueur n'a plus de pions, false sinon
     */
    private boolean verifierJoueurSansPions(ContainerElement pot) {
        for (int i = 0; i < pot.getNbRows(); i++) {
            if (!pot.isEmptyAt(i, 0)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Déclare un match nul
     */
    private void declareMatchNul() {
        boardifier.control.Logger.info("Match nul ! Au moins un joueur n'a plus de pions disponibles.");
        model.setIdWinner(-1); // -1 indique un match nul
        model.stopStage();
    }

    /**
     * Passe au joueur suivant
     * @param stageModel Le modèle de l'étape de jeu
     */
    private void passerAuJoueurSuivant(PuissanceXStageModel stageModel) {
        model.setNextPlayer();
        Player p = model.getCurrentPlayer();
        stageModel.getPlayerName().setText(p.getName());
    }

    /**
     * Trouve la première ligne vide dans une colonne donnée
     * @param colonne La colonne à vérifier
     * @return L'index de la première ligne vide (-1 si la colonne est pleine)
     */
    public int ligneVide(int colonne) {
        PuissanceXStageModel stageModel = (PuissanceXStageModel) model.getGameStage();
        PuissanceXBoard board = stageModel.getBoard();

        for (int i = board.getNbRows() - 1; i >= 0; i--) {
            if (board.isEmptyAt(i, colonne)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Vérifie si un coup est gagnant en vérifiant les alignements dans toutes les directions
     * @param row La ligne du dernier pion placé
     * @param col La colonne du dernier pion placé
     * @return true si le coup est gagnant, false sinon
     */
    public boolean verifierVictoire(int row, int col) {
        PuissanceXStageModel stageModel = (PuissanceXStageModel) model.getGameStage();
        PuissanceXBoard board = stageModel.getBoard();

        // Récupérer le pion qui vient d'être placé
        GameElement element = board.getElement(row, col);
        if (!(element instanceof Pawn pion)) return false;
    
        int couleurJoueur = pion.getColor();

        // Nombre de pions alignés nécessaires pour gagner
        int alignementVictoire = stageModel.getNbPion();

        // Directions à vérifier : horizontal, vertical, diagonale \ et diagonale /
        int[][] directions = {
            {0, 1}, // horizontal
            {1, 0}, // vertical
            {1, 1}, // diagonale \
            {1, -1} // diagonale /
        };
    
        for (int[] dir : directions) {
            int compteur = 1; // Le pion actuel compte pour 1
            
            // Vérifier dans une direction
            compteur += compterPions(board, row, col, dir[0], dir[1], couleurJoueur);
            
            // Vérifier dans la direction opposée
            compteur += compterPions(board, row, col, -dir[0], -dir[1], couleurJoueur);
            
            if (compteur >= alignementVictoire) return true;
        }
    
        return false;
    }
    
    /**
     * Compte le nombre de pions de même couleur alignés dans une direction donnée
     * @param board Le plateau de jeu
     * @param startRow La ligne de départ
     * @param startCol La colonne de départ
     * @param rowDir La direction en ligne (-1, 0, 1)
     * @param colDir La direction en colonne (-1, 0, 1)
     * @param couleur La couleur du pion à chercher
     * @return Le nombre de pions alignés dans la direction (sans compter le pion de départ)
     */
    private int compterPions(PuissanceXBoard board, int startRow, int startCol, int rowDir, int colDir, int couleur) {
        int count = 0;
        int r = startRow + rowDir;
        int c = startCol + colDir;
        
        while (r >= 0 && r < board.getNbRows() && c >= 0 && c < board.getNbCols() && !board.isEmptyAt(r, c)) {
            GameElement e = board.getElement(r, c);
            if (e instanceof Pawn pawn && pawn.getColor() == couleur) {
                count++;
                r += rowDir;
                c += colDir;
            } else {
                break;
            }
        }
        
        return count;
    }

    /**
     * Analyse et exécute le coup d'un joueur
     * @param line La chaîne de caractères représentant le coup (format: "numeroColonne")
     * @return true si le coup est valide et a été joué, false sinon
     */
    private boolean analyseAndPlay(String line) {
        if (line == null || line.isEmpty()) {
            return false;
        }
        
        PuissanceXStageModel gameStage = (PuissanceXStageModel) model.getGameStage();
    
        // Validation de la colonne sélectionnée
        int[] result = validerColonne(line, gameStage);
        if (result.length == 0) return false;
        
        int pawnIndex = result[0];
        int col = result[1];
    
        // Vérifier si la colonne a de la place
        int row = ligneVide(col);
        if (row < 0) return false; // La colonne est pleine
    
        // Récupérer le pot correspondant au joueur actuel
        ContainerElement pot = model.getIdPlayer() == 0 ? gameStage.getYellowPot() : gameStage.getRedPot();
        
        if (pot.isEmptyAt(pawnIndex, 0)) return false;
        GameElement pawn = pot.getElement(pawnIndex, 0);
    
        ActionList actions = ActionFactory.generatePutInContainer(model, pawn, "PuissanceX", row, col);
        actions.setDoEndOfTurn(true);
        ActionPlayer play = new ActionPlayer(model, this, actions);
        play.start();
    
        return true;
    }
    
    /**
     * Valide et analyse la saisie utilisateur pour extraire le numéro de pion et la colonne
     * @param line La chaîne de caractères représentant le coup (format: "numeroColonne")
     * @param gameStage Le modèle de l'étape de jeu actuelle
     * @return Un tableau [pawnIndex, col] si le format est valide, un tableau vide sinon
     */
    private int[] validerColonne(String line, PuissanceXStageModel gameStage) {
        // Séparation du numéro de pion et de la colonne
        StringBuilder pawnStr = new StringBuilder();
        char colChar = ' ';
        PuissanceXBoard board = gameStage.getBoard();
    
        // Parcourir la chaîne pour séparer les chiffres de la lettre
        int i;
        for (i = 0; i < line.length(); i++) {
            if (Character.isDigit(line.charAt(i))) {
                pawnStr.append(line.charAt(i));
            } else {
                colChar = line.charAt(i);
                break;
            }
        }
    
        // Vérifier que le format est correct
        if (pawnStr.isEmpty() || colChar == ' ' || i != line.length() - 1) {
            return new int[0];
        }
    
        // Convertir le numéro de pion en entier
        int pawnIndex;
        try {
            pawnIndex = Integer.parseInt(pawnStr.toString()) - 1; // -1 car l'indexation commence à 0
        } catch (NumberFormatException e) {
            return new int[0];
        }
    
        // Vérifier que l'indice du pion est valide
        if (pawnIndex < 0 || pawnIndex >= gameStage.getNbPionsParJoueur()) {
            return new int[0];
        }
    
        // Traitement de la colonne
        int col = Character.toUpperCase(colChar) - 'A';
    
        // Vérifier que la colonne est valide
        if (col < 0 || col >= board.getNbCols()) {
            return new int[0];
        }
        
        return new int[] {pawnIndex, col};
    }
}