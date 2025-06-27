from flask import Blueprint, render_template, request, abort
from connexion_db import get_db

# Définir le Blueprint 'admin_dataviz'
admin_dataviz = Blueprint('admin_dataviz', __name__, template_folder='templates')

# Route associée
@admin_dataviz.route('/admin/dataviz/etat1')
def show_type_article_and_declinaison_stock():
    mycursor = get_db().cursor()

    # Requête pour récupérer les données des types de câbles
    sql_type_article = '''
    SELECT 
        tp.id_type_prise AS id_type_article,
        tp.nom_type_prise AS libelle,
        COUNT(DISTINCT dc.id_declinaison_cable) AS nbr_declinaisons,
        COUNT(DISTINCT c.id_cable) AS nbr_articles,
        COUNT(DISTINCT n.id_utilisateur) AS nbr_notes,
        AVG(n.note) AS note_moyenne,
        COUNT(DISTINCT com.id_utilisateur) AS nbr_commentaires
    FROM 
        type_prise tp
    LEFT JOIN 
        cable c ON tp.id_type_prise = c.id_type_prise
    LEFT JOIN 
        declinaison_cable dc ON c.id_cable = dc.id_cable
    LEFT JOIN 
        note n ON c.id_cable = n.id_cable
    LEFT JOIN 
        commentaire com ON c.id_cable = com.id_cable
    GROUP BY 
        tp.id_type_prise, tp.nom_type_prise
    ORDER BY 
        tp.nom_type_prise;
    '''
    mycursor.execute(sql_type_article)
    datas_show_type_article = mycursor.fetchall()

    # Préparation des données pour les graphiques (types de câbles)
    labels_type_article = [str(row['libelle']) for row in datas_show_type_article]
    values_nbr_articles_type = [int(row['nbr_articles']) for row in datas_show_type_article]
    values_note_moyenne_type = [float(row['note_moyenne']) if row['note_moyenne'] is not None else 0 for row in datas_show_type_article]
    values_nb_commentaires_type = [int(row['nbr_commentaires']) for row in datas_show_type_article]
    values_nb_notes_type = [int(row['nbr_notes']) for row in datas_show_type_article]

    # Requête pour récupérer les données des déclinaisons de câbles
    sql_declinaison_cable = '''
    SELECT 
        dc.id_declinaison_cable AS id_declinaison_cable,
        dc.prix_declinaison AS prix_declinaison,
        dc.stock AS stock,
        COUNT(DISTINCT c.id_cable) AS nbr_articles,
        COUNT(DISTINCT n.id_utilisateur) AS nbr_notes,
        AVG(n.note) AS note_moyenne,
        COUNT(DISTINCT com.id_utilisateur) AS nbr_commentaires
    FROM 
        declinaison_cable dc
    LEFT JOIN 
        cable c ON dc.id_cable = c.id_cable
    LEFT JOIN 
        note n ON c.id_cable = n.id_cable
    LEFT JOIN 
        commentaire com ON c.id_cable = com.id_cable
    GROUP BY 
        dc.id_declinaison_cable, dc.prix_declinaison, dc.stock
    ORDER BY 
        dc.prix_declinaison;
    '''
    mycursor.execute(sql_declinaison_cable)
    datas_show_declinaison_cable = mycursor.fetchall()

    # Préparation des données pour les graphiques (déclinaisons de câbles)
    labels_declinaison_cable = []
    values_nbr_articles_declinaison = []
    values_note_moyenne_declinaison = []
    values_nb_commentaires_declinaison = []
    values_nb_notes_declinaison = []
    cout_stock_declinaison = []
    nb_articles_stock_declinaison = []

    if datas_show_declinaison_cable:
        labels_declinaison_cable = [str(row['prix_declinaison']) for row in datas_show_declinaison_cable]
        values_nbr_articles_declinaison = [int(row['nbr_articles']) for row in datas_show_declinaison_cable]
        values_note_moyenne_declinaison = [
            float(row['note_moyenne']) if row['note_moyenne'] is not None else 0
            for row in datas_show_declinaison_cable
        ]
        values_nb_commentaires_declinaison = [int(row['nbr_commentaires']) for row in datas_show_declinaison_cable]
        values_nb_notes_declinaison = [int(row['nbr_notes']) for row in datas_show_declinaison_cable]
        cout_stock_declinaison = [row['prix_declinaison'] * row['stock'] for row in datas_show_declinaison_cable]
        nb_articles_stock_declinaison = [row['stock'] for row in datas_show_declinaison_cable]

    return render_template('admin/dataviz/dataviz_etat_1.html',
                           datas_show_type_article=datas_show_type_article,
                           labels_type_article=labels_type_article,
                           values_nbr_articles_type=values_nbr_articles_type,
                           values_note_moyenne_type=values_note_moyenne_type,
                           values_nb_commentaires_type=values_nb_commentaires_type,
                           values_nb_notes_type=values_nb_notes_type,

                           datas_show_declinaison_cable=datas_show_declinaison_cable,
                           labels_declinaison_cable=labels_declinaison_cable,
                           values_nbr_articles_declinaison=values_nbr_articles_declinaison,
                           values_note_moyenne_declinaison=values_note_moyenne_declinaison,
                           values_nb_commentaires_declinaison=values_nb_commentaires_declinaison,
                           values_nb_notes_declinaison=values_nb_notes_declinaison,

                           cout_stock_declinaison=cout_stock_declinaison,
                           nb_articles_stock_declinaison=nb_articles_stock_declinaison)
