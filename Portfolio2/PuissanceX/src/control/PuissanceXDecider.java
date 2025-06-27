package control;

import boardifier.control.ActionFactory;
import boardifier.control.Controller;
import boardifier.control.Decider;
import boardifier.model.GameElement;
import boardifier.model.Model;
import boardifier.model.action.ActionList;
import model.PuissanceXBoard;
import model.PuissanceXPawnPot;
import model.PuissanceXStageModel;
import model.Pawn;

import java.awt.Point;
import java.util.List;
import java.security.SecureRandom;
/**
 * Classe qui implémente l'intelligence artificielle du jeu Puissance X.
 * Propose deux stratégies : un algorithme Minimax avec élagage alpha-beta (decideMinimax)
 * et un algorithme plus simple basé sur des règles (decideComplexe). *
 *
 * @author Antoine Duarte, Aylan Haddouchi, Baptiste Didier (référent), Gautier Beley, Mehdi Lafay
 * @version 1.0
 */
public class PuissanceXDecider extends Decider {

    private static final SecureRandom RANDOM = new SecureRandom();

    // Constantes pour les messages de log
    private static final String LOG_CASE_VIDE = "Case vide en (";
    private static final String LOG_PION_NON_ALIGNE = "Pion non aligné en (";
    private static final String LOG_PION_ALIGNE = "Pion aligné trouvé en (";
    private static final String LOG_COMPTEUR = "), compteur: ";
    private static final String LOG_PION_INITIAL = "Pion initial en (";
    private static final String PUISSANCE_X = "PuissanceX";
    private static final String LIGNE_TEXT = " ligne ";



    /**
     * Constructeur du décideur Puissance X.
     * @param model Le modèle du jeu
     * @param control Le contrôleur du jeu
     */
    public PuissanceXDecider(Model model, Controller control) {
        super(model, control);
    }

    /**
     * Méthode principale de décision.
     * Cette implémentation utilise l'algorithme Minimax par défaut.
     * Pour utiliser l'algorithme basé sur des règles simples (decideComplexe), il suffit de modifier
     * cette méthode pour qu'elle retourne decideComplexe() au lieu de decideMinimax().
     * @return ActionList Les actions à effectuer pour le coup choisi
     */
    @Override
    public ActionList decide() {
        // Utiliser l'algorithme Minimax par défaut
        return decideIntermediaire();
    }

    /**
     * Algorithme de décision basé sur des règles simples.
     * La stratégie suit l'ordre de priorité suivant :
     * 1. Chercher un coup gagnant
     * 2. Bloquer un coup gagnant de l'adversaire
     * 3. Jouer au centre ou près du centre
     * 4. Jouer aléatoirement
     * @return ActionList Les actions à effectuer pour le coup choisi
     */
    public ActionList decideComplexe() {
        PuissanceXStageModel stage = (PuissanceXStageModel)model.getGameStage();
        PuissanceXBoard board = stage.getBoard();

        // Obtenir le pion à jouer
        GameElement pawn = obtenirPionAJouer(stage);
        if (pawn == null) {
            return null; // Aucun pion disponible
        }

        // Déterminer où jouer le pion selon la stratégie
        Point destination = determinerDestination(board, stage);
        if (destination == null) {
            boardifier.control.Logger.info("ERREUR : Aucune cellule valide trouvée");
            return null;
        }

        // Créer et retourner les actions
        return creerActions(pawn, destination.x, destination.y);
    }

    /**
     * Obtient un pion du pot approprié pour le joueur actuel
     * @param stage Le modèle du jeu
     * @return Le pion à jouer ou null si aucun pion n'est disponible
     */
    private GameElement obtenirPionAJouer(PuissanceXStageModel stage) {
        // Déterminer le pot à utiliser en fonction de l'ID du joueur
        PuissanceXPawnPot pot = (model.getIdPlayer() == 0) ? stage.getYellowPot() : stage.getRedPot();
        boardifier.control.Logger.info("Utilisation du pot du joueur " + (model.getIdPlayer() + 1));

        // Vérifier si le pot n'est pas vide
        if (pot == null) {
            boardifier.control.Logger.info("Erreur : Le pot est null");
            return null;
        }

        // Trouver un pion dans le pot
        boardifier.control.Logger.info("Nombre de pions dans le pot : " + pot.getNbRows());
        for (int i = 0; i < pot.getNbRows(); i++) {
            if (!pot.isEmptyAt(i, 0)) {
                boardifier.control.Logger.info("Pion trouvé à la position " + i);
                return pot.getElement(i, 0);
            }
        }

        boardifier.control.Logger.info("ERREUR : Aucun pion disponible dans le pot");
        return null;
    }

    /**
     * Détermine où jouer le pion selon la stratégie
     * @param board Le plateau de jeu
     * @param stage Le modèle du jeu
     * @return Point contenant les coordonnées où jouer
     */
    private Point determinerDestination(PuissanceXBoard board, PuissanceXStageModel stage) {
        // 1. Chercher un coup gagnant
        Point coup = trouverCoupGagnant(board, stage);
        if (coup != null) {
            return coup;
        }

        // 2. Chercher un coup bloquant
        coup = trouverCoupBloquant(board, stage);
        if (coup != null) {
            return coup;
        }

        // 3. Jouer au centre ou près du centre
        coup = jouerAuCentre(board);
        if (coup != null) {
            return coup;
        }

        // 4. Jouer aléatoirement
        return jouerAleatoirement(board);
    }


    /**
     * Crée les actions pour jouer un pion à une position donnée
     * @param pawn Le pion à jouer        boardifier.control.Logger.info("IA joue en colonne " + colDest + " ligne " + rowDest);
     * @param colDest La colonne de destination
     * @param rowDest La ligne de destination
     * @return Les actions à effectuer
     */
    private ActionList creerActions(GameElement pawn, int colDest, int rowDest) {
        ActionList actions = ActionFactory.generatePutInContainer(model, pawn, PUISSANCE_X, rowDest, colDest);
        actions.setDoEndOfTurn(true);
        return actions;
    }


    public ActionList decideIntermediaire() {
        PuissanceXStageModel stage = (PuissanceXStageModel) model.getGameStage();
        PuissanceXBoard board = stage.getBoard();

        // Obtenir le pot et le pion
        PuissanceXPawnPot pot = obtenirPot(stage);
        if (pot == null) {
            return null;
        }

        GameElement pawn = obtenirPionDisponible(pot);
        if (pawn == null) {
            boardifier.control.Logger.info("ERREUR : Aucun pion disponible dans le pot");
            return null;
        }

        // Déterminer la meilleure colonne selon la stratégie
        Point coupOptimal = determinerCoupOptimal(board, stage);
        if (coupOptimal == null) {
            return null;
        }

        boardifier.control.Logger.info("IA joue en colonne " + coupOptimal.x + LIGNE_TEXT + coupOptimal.y);
        ActionList actions = ActionFactory.generatePutInContainer(model, pawn, PUISSANCE_X, coupOptimal.y, coupOptimal.x);
        actions.setDoEndOfTurn(true);

        return actions;
    }

    /**
     * Obtient le pot approprié selon l'ID du joueur
     */
    private PuissanceXPawnPot obtenirPot(PuissanceXStageModel stage) {
        if (model.getIdPlayer() == 0) {
            boardifier.control.Logger.info("Utilisation du pot du joueur 1 (IA intermédiaire)");
            return stage.getYellowPot();
        } else {
            boardifier.control.Logger.info("Utilisation du pot du joueur 2 (IA intermédiaire)");
            return stage.getRedPot();
        }
    }

    /**
     * Trouve le premier pion disponible dans le pot
     */
    private GameElement obtenirPionDisponible(PuissanceXPawnPot pot) {
        for (int i = 0; i < pot.getNbRows(); i++) {
            if (!pot.isEmptyAt(i, 0)) {
                return pot.getElement(i, 0);
            }
        }
        return null;
    }

    /**
     * Détermine le coup optimal selon la stratégie intermédiaire
     */
    private Point determinerCoupOptimal(PuissanceXBoard board, PuissanceXStageModel stage) {
        // 1. Chercher un coup gagnant immédiat
        Point coupGagnant = trouverCoupGagnant(board, stage);
        if (coupGagnant != null) {
            boardifier.control.Logger.info("IA intermédiaire: Coup gagnant trouvé en colonne " + coupGagnant.x);
            return coupGagnant;
        }

        // 2. Bloquer un coup gagnant de l'adversaire
        Point coupBloquant = trouverCoupBloquant(board, stage);
        if (coupBloquant != null) {
            boardifier.control.Logger.info("IA intermédiaire: Coup bloquant trouvé en colonne " + coupBloquant.x);
            return coupBloquant;
        }

        // 3. Évaluer et choisir la meilleure colonne
        return choisirMeilleureColonne(board);
    }

    /**
     * Évalue toutes les colonnes possibles et retourne la meilleure
     */
    private Point choisirMeilleureColonne(PuissanceXBoard board) {
        int meilleurScore = Integer.MIN_VALUE;
        int meilleureColonne = -1;
        int meilleureLigne = -1;

        // Évaluer chaque colonne possible
        for (int col = 0; col < board.getNbCols(); col++) {
            int row = trouverLigneVide(board, col);
            if (row != -1) {
                int score = evaluerColonne(board, col, row);

                if (score > meilleurScore) {
                    meilleurScore = score;
                    meilleureColonne = col;
                    meilleureLigne = row;
                }
            }
        }

        // Si aucune colonne n'a été trouvée, jouer aléatoirement
        if (meilleureColonne == -1) {
            return jouerAleatoirement(board);
        }

        boardifier.control.Logger.info("IA intermédiaire: Meilleure colonne trouvée: " + meilleureColonne + " avec score: " + meilleurScore);
        return new Point(meilleureColonne, meilleureLigne);
    }

    /**
     * Joue un coup aléatoire si aucune stratégie n'a abouti
     */
    private Point jouerAleatoirement(PuissanceXBoard board) {
        List<Point> validCells = board.computeValidCells();
        if (validCells.isEmpty()) {
            return null; // Aucun coup valide
        }

        Point randomPoint = validCells.get(RANDOM.nextInt(validCells.size()));
        int ligneVide = trouverLigneVide(board, randomPoint.x);
        return new Point(randomPoint.x, ligneVide);
    }

    /**
     * Évalue une colonne donnée pour l'algorithme intermédiaire.
     * Attribue des scores en fonction de différents critères.
     * @param board Le plateau de jeu
     * @param col La colonne à évaluer
     * @param row La ligne où le pion serait placé
     * @return Un score représentant la qualité de cette colonne
     */
    private int evaluerColonne(PuissanceXBoard board, int col, int row) {
        int score = calculerBonusCentral(board, col);
        int couleurJoueur = (model.getIdPlayer() == 0) ? 1 : 2;

        // Compter les pions adjacents de même couleur
        int compteurPions = 0;
        compteurPions += compterPionsHorizontaux(board, col, row, couleurJoueur);
        compteurPions += compterPionVertical(board, col, row, couleurJoueur);
        compteurPions += compterPionsDiagonaux(board, col, row, couleurJoueur);

        // Ajouter les bonus pour les connexions
        score += compteurPions * 5;

        // Bonus supplémentaire pour les connexions multiples
        if (compteurPions >= 2) {
            score += 10;
        }

        return score;
    }

    /**
     * Calcule le bonus basé sur la proximité du centre
     */
    private int calculerBonusCentral(PuissanceXBoard board, int col) {
        int centreCol = board.getNbCols() / 2;
        int distanceCentre = Math.abs(col - centreCol);
        return board.getNbCols() - distanceCentre * 2;
    }

    /**
     * Compte les pions de même couleur horizontalement adjacents
     */
    private int compterPionsHorizontaux(PuissanceXBoard board, int col, int row, int couleurJoueur) {
        int compteur = 0;
        for (int c = Math.max(0, col - 1); c <= Math.min(board.getNbCols() - 1, col + 1); c++) {
            if (c != col && estPionDeMaCouleur(board, row, c, couleurJoueur)) {
                compteur++;
            }
        }
        return compteur;
    }

    /**
     * Compte le pion de même couleur verticalement en dessous
     */
    private int compterPionVertical(PuissanceXBoard board, int col, int row, int couleurJoueur) {
        if (row + 1 < board.getNbRows() && estPionDeMaCouleur(board, row + 1, col, couleurJoueur)) {
            return 1;
        }
        return 0;
    }

    /**
     * Compte les pions de même couleur sur les diagonales
     */
    private int compterPionsDiagonaux(PuissanceXBoard board, int col, int row, int couleurJoueur) {
        int compteur = 0;

        // Diagonale bas-gauche
        if (row + 1 < board.getNbRows() && col - 1 >= 0 &&
                estPionDeMaCouleur(board, row + 1, col - 1, couleurJoueur)) {
            compteur++;
        }

        // Diagonale bas-droite
        if (row + 1 < board.getNbRows() && col + 1 < board.getNbCols() &&
                estPionDeMaCouleur(board, row + 1, col + 1, couleurJoueur)) {
            compteur++;
        }

        return compteur;
    }

    /**
     * Vérifie si un pion à une position donnée appartient au joueur actuel
     */
    private boolean estPionDeMaCouleur(PuissanceXBoard board, int row, int col, int couleurJoueur) {
        if (board.isEmptyAt(row, col)) {
            return false;
        }

        GameElement element = board.getElement(row, col);
        return element instanceof Pawn pawn && pawn.getColor() == couleurJoueur;
    }


    /**
     * Recherche un coup gagnant pour le joueur actuel
     * @param board Le plateau de jeu
     * @param stage Le modèle du jeu
     * @return Point Le coup gagnant ou null si aucun coup gagnant n'est trouvé
     */
    private Point trouverCoupGagnant(PuissanceXBoard board, PuissanceXStageModel stage) {
        // Récupérer la couleur du joueur actuel
        int couleurJoueur = (model.getIdPlayer() == 0) ? stage.getCouleurPion1() : stage.getCouleurPion2();
        return trouverCoupDecisif(board, stage, couleurJoueur);
    }

    /**
     * Recherche un coup qui bloque une victoire potentielle de l'adversaire
     * @param board Le plateau de jeu
     * @param stage Le modèle du jeu
     * @return Point Le coup bloquant ou null si aucun coup bloquant n'est trouvé
     */
    private Point trouverCoupBloquant(PuissanceXBoard board, PuissanceXStageModel stage) {
        // Récupérer les couleurs des joueurs
        int couleurJoueur1 = stage.getCouleurPion1();
        int couleurJoueur2 = stage.getCouleurPion2();
        
        // Déterminer la couleur de l'adversaire
        int couleurAdversaire = (model.getIdPlayer() == 0) ? couleurJoueur2 : couleurJoueur1;
        
        return trouverCoupDecisif(board, stage, couleurAdversaire);
    }
    
    /**
     * Recherche un coup décisif (gagnant ou bloquant) pour la couleur spécifiée
     * @param board Le plateau de jeu
     * @param stage Le modèle du jeu
     * @param couleurPion La couleur du pion à vérifier
     * @return Point Le coup décisif ou null si aucun coup n'est trouvé
     */
    private Point trouverCoupDecisif(PuissanceXBoard board, PuissanceXStageModel stage, int couleurPion) {
        for (int col = 0; col < board.getNbCols(); col++) {
            if (!board.isColumnFull(col)) {
                int row = trouverLigneVide(board, col);
                if (row != -1) {
                    // Simuler le coup
                    board.addElement(new Pawn(1, couleurPion, stage), row, col);
                    boolean estVictoire = verifierVictoire(board, row, col);
                    board.removeElement(board.getElement(row, col));
                    
                    if (estVictoire) {
                        return new Point(col, row);
                    }
                }
            }
        }
        return null;
    }

    /**
     * Recherche un coup au centre ou le plus proche possible du centre
     * @param board Le plateau de jeu
     * @return Point Le coup au centre ou null si aucune colonne n'est disponible
     */
    private Point jouerAuCentre(PuissanceXBoard board) {
        int colonneCentrale = board.getNbCols() / 2;
        int[] prioriteColonnes = new int[board.getNbCols()];

        // Initialiser les priorités (distance par rapport au centre)
        for (int i = 0; i < board.getNbCols(); i++) {
            prioriteColonnes[i] = Math.abs(i - colonneCentrale);
        }

        // Trouver la colonne disponible la plus proche du centre
        int meilleurColonne = -1;
        int meilleurePriorite = board.getNbCols();

        for (int i = 0; i < board.getNbCols(); i++) {
            if (!board.isColumnFull(i) && prioriteColonnes[i] < meilleurePriorite) {
                    meilleurePriorite = prioriteColonnes[i];
                    meilleurColonne = i;
            }
        }

        if (meilleurColonne != -1) {
            return new Point(meilleurColonne, trouverLigneVide(board, meilleurColonne));
        }
        return null;
    }

    /**
     * Trouve la première ligne vide dans une colonne donnée
     * @param board Le plateau de jeu
     * @param col La colonne à vérifier
     * @return int La ligne vide ou -1 si la colonne est pleine
     */
    private int trouverLigneVide(PuissanceXBoard board, int col) {
        for (int row = board.getNbRows() - 1; row >= 0; row--) {
            if (board.isEmptyAt(row, col)) {
                return row;
            }
        }
        return -1;
    }

    /**
     * Vérifie si un pion est aligné dans une direction donnée
     * @param board Le plateau de jeu
     * @param startRow La ligne de départ
     * @param startCol La colonne de départ
     * @param rowDelta Le déplacement en ligne
     * @param colDelta Le déplacement en colonne
     * @param couleurJoueur La couleur du joueur
     * @return Le nombre de pions alignés dans cette direction
     */
    private int compterPionsAlignes(PuissanceXBoard board, int startRow, int startCol, 
                                 int rowDelta, int colDelta, int couleurJoueur) {
        int compteur = 0;
        int r = startRow;
        int c = startCol;
        boolean continuer = true;
        
        while (r >= 0 && r < board.getNbRows() && c >= 0 && c < board.getNbCols() && continuer) {
            if (!board.isEmptyAt(r, c) && board.getElement(r, c) instanceof Pawn pionAligne && 
                pionAligne.getColor() == couleurJoueur) {
                compteur++;
                boardifier.control.Logger.info(LOG_PION_ALIGNE + r + "," + c + LOG_COMPTEUR + compteur);
                r += rowDelta;
                c += colDelta;
            } else if (board.isEmptyAt(r, c)) {
                boardifier.control.Logger.info(LOG_CASE_VIDE + r + "," + c + ")");
                continuer = false;
            } else {
                boardifier.control.Logger.info(LOG_PION_NON_ALIGNE + r + "," + c + ")");
                continuer = false;
            }
        }
        
        return compteur;
    }

    // Constantes pour les directions d'alignement
    private static final DirectionAlignement DIRECTION_HORIZONTALE = new DirectionAlignement(0, -1, 0, 1, "horizontal");
    private static final DirectionAlignement DIRECTION_VERTICALE = new DirectionAlignement(-1, 0, 1, 0, "vertical");
    private static final DirectionAlignement DIRECTION_DIAGONALE1 = new DirectionAlignement(-1, -1, 1, 1, "diagonale \\");
    private static final DirectionAlignement DIRECTION_DIAGONALE2 = new DirectionAlignement(-1, 1, 1, -1, "diagonale /");

    /**
     * Vérifie s'il y a un alignement horizontal gagnant
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @param couleurJoueur La couleur du joueur
     * @param alignementVictoire Le nombre de pions à aligner pour gagner
     * @return True si l'alignement est gagnant
     */
    private boolean verifierAlignementHorizontal(PuissanceXBoard board, int row, int col, 
                                              int couleurJoueur, int alignementVictoire) {
        boardifier.control.Logger.info("Vérification horizontale:");
        boardifier.control.Logger.info(LOG_PION_INITIAL + row + "," + col + ")");
        
        return verifierAlignementDirection(board, row, col, DIRECTION_HORIZONTALE, couleurJoueur, alignementVictoire);
    }
    
    /**
     * Vérifie s'il y a un alignement vertical gagnant
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @param couleurJoueur La couleur du joueur
     * @param alignementVictoire Le nombre de pions à aligner pour gagner
     * @return True si l'alignement est gagnant
     */
    private boolean verifierAlignementVertical(PuissanceXBoard board, int row, int col, 
                                            int couleurJoueur, int alignementVictoire) {
        boardifier.control.Logger.info("Vérification verticale:");
        boardifier.control.Logger.info(LOG_PION_INITIAL + row + "," + col + ")");
        
        return verifierAlignementDirection(board, row, col, DIRECTION_VERTICALE, couleurJoueur, alignementVictoire);
    }
    
    /**
     * Vérifie s'il y a un alignement diagonal \ gagnant
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @param couleurJoueur La couleur du joueur
     * @param alignementVictoire Le nombre de pions à aligner pour gagner
     * @return True si l'alignement est gagnant
     */
    private boolean verifierAlignementDiagonal1(PuissanceXBoard board, int row, int col, 
                                            int couleurJoueur, int alignementVictoire) {
        boardifier.control.Logger.info("Vérification diagonale \\:");
        boardifier.control.Logger.info(LOG_PION_INITIAL + row + "," + col + ")");
        
        return verifierAlignementDirection(board, row, col, DIRECTION_DIAGONALE1, couleurJoueur, alignementVictoire);
    }
    
    /**
     * Vérifie s'il y a un alignement diagonal / gagnant
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @param couleurJoueur La couleur du joueur
     * @param alignementVictoire Le nombre de pions à aligner pour gagner
     * @return True si l'alignement est gagnant
     */
    private boolean verifierAlignementDiagonal2(PuissanceXBoard board, int row, int col, 
                                            int couleurJoueur, int alignementVictoire) {
        boardifier.control.Logger.info("Vérification diagonale /:");
        boardifier.control.Logger.info(LOG_PION_INITIAL + row + "," + col + ")");
        
        return verifierAlignementDirection(board, row, col, DIRECTION_DIAGONALE2, couleurJoueur, alignementVictoire);
    }

    /**
         * Classe interne pour représenter une direction d'alignement
         */
        private record DirectionAlignement(int rowDelta1, int colDelta1, int rowDelta2, int colDelta2, String nom) {
    }
    
    /**
     * Vérifie l'alignement dans une direction donnée (factorisation des méthodes d'alignement)
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @param direction L'objet contenant les informations de direction
     * @param couleurJoueur La couleur du joueur
     * @param alignementVictoire Le nombre de pions à aligner pour gagner
     * @return True si l'alignement est gagnant
     */
    private boolean verifierAlignementDirection(PuissanceXBoard board, int row, int col,
                                              DirectionAlignement direction,
                                              int couleurJoueur, int alignementVictoire) {
        // Compter dans la première direction
        int compteur1 = compterPionsAlignes(board, row + direction.rowDelta1, col + direction.colDelta1, 
                                          direction.rowDelta1, direction.colDelta1, couleurJoueur);
        
        // Compter dans la seconde direction
        int compteur2 = compterPionsAlignes(board, row + direction.rowDelta2, col + direction.colDelta2, 
                                          direction.rowDelta2, direction.colDelta2, couleurJoueur);
        
        // Compter le pion central + les pions alignés
        int total = 1 + compteur1 + compteur2;
        
        boardifier.control.Logger.info("Total alignement " + direction.nom + ": " + total);
        if (total >= alignementVictoire) {
            boardifier.control.Logger.info("Victoire " + direction.nom + "!");
            return true;
        }
        
        return false;
    }
    
    /**
     * Vérifie si le pion à la position donnée fait partie d'un alignement gagnant
     * @param board Le plateau de jeu
     * @param row La ligne du pion
     * @param col La colonne du pion
     * @return boolean True si le pion fait partie d'un alignement gagnant, false sinon
     */
    private boolean verifierVictoire(PuissanceXBoard board, int row, int col) {
        GameElement element = board.getElement(row, col);
        if (!(element instanceof Pawn pion)) {
            boardifier.control.Logger.info("Pas de pion à vérifier en (" + row + "," + col + ")");
            return false;
        }

        int couleurJoueur = pion.getColor();
        String couleurTexte = couleurJoueur == Pawn.PAWN_YELLOW ? "Jaune" : "Rouge";
        boardifier.control.Logger.info("Couleur du joueur: " + couleurTexte);
        
        PuissanceXStageModel stage = (PuissanceXStageModel)model.getGameStage();
        int alignementVictoire = stage.getNbPion();
        boardifier.control.Logger.info("Alignement nécessaire: " + alignementVictoire);

        // Vérifier les quatre directions d'alignement possible
        return verifierAlignementHorizontal(board, row, col, couleurJoueur, alignementVictoire) ||
               verifierAlignementVertical(board, row, col, couleurJoueur, alignementVictoire) ||
               verifierAlignementDiagonal1(board, row, col, couleurJoueur, alignementVictoire) ||
               verifierAlignementDiagonal2(board, row, col, couleurJoueur, alignementVictoire);
    }
}