#! /usr/bin/python
# -*- coding:utf-8 -*-
from flask import Flask, request, render_template, redirect, flash, session, g
import pymysql.cursors

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.secret_key = 'une cle(token) : grain de sel(any random string)'

def get_db():
    if 'db' not in g:
        try:
            g.db = pymysql.connect(
                host="localhost",                 # à modifier
                user="ahaddou2",                     # à modifier
                password="mdp",                # à modifier
                database="BDD_ahaddou2",        # à modifier
                charset='utf8mb4',
                cursorclass=pymysql.cursors.DictCursor
            )
            # à activer sur les machines personnelles :
            activate_db_options(g.db)
        except pymysql.MySQLError as e:
            print(f"Erreur de connexion à la base de données: {e}")
            return None
    return g.db

@app.teardown_appcontext
def teardown_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()

def activate_db_options(db):
    cursor = db.cursor()
    # Vérifier et activer l'option ONLY_FULL_GROUP_BY si nécessaire
    cursor.execute("SHOW VARIABLES LIKE 'sql_mode'")
    result = cursor.fetchone()
    if result:
        modes = result['Value'].split(',')
        if 'ONLY_FULL_GROUP_BY' not in modes:
            print('MYSQL : il manque le mode ONLY_FULL_GROUP_BY')   # mettre en commentaire
            cursor.execute("SET sql_mode=(SELECT CONCAT(@@sql_mode, ',ONLY_FULL_GROUP_BY'))")
            db.commit()
        else:
            print('MYSQL : mode ONLY_FULL_GROUP_BY  ok')   # mettre en commentaire
    # Vérifier et activer l'option lower_case_table_names si nécessaire
    cursor.execute("SHOW VARIABLES LIKE 'lower_case_table_names'")
    result = cursor.fetchone()
    if result:
        if result['Value'] != '0':
            print('MYSQL : valeur de la variable globale lower_case_table_names differente de 0')   # mettre en commentaire
            cursor.execute("SET GLOBAL lower_case_table_names = 0")
            db.commit()
        else :
            print('MYSQL : variable globale lower_case_table_names=0  ok')    # mettre en commentaire
    cursor.close()

@app.route('/', methods=['GET'])
def show_layout():
    return render_template('layout.html')

@app.route('/genre-film/show', methods=['GET'])
def show_genre():
    mycursor = get_db().cursor()
    sql = '''SELECT genresFilms.id AS idGenre, genresFilms.libelleGenre AS libelleGenre, genresFilms.logo AS logo
           FROM genresFilms'''
    mycursor.execute(sql)
    genresFilms = mycursor.fetchall()
    mycursor.close()
    return render_template('genre/show_genre.html', genresFilms = genresFilms)

@app.route('/genre-film/add', methods=['GET'])
def add_genre():
    return render_template('genre/add_genre.html')

@app.route('/genre-film/add', methods=['POST'])
def valid_add_genre():
    mycursor = get_db().cursor()
    libelleGenre = request.form.get('libelleGenre') or ''
    logo = request.form.get('logo', '') or ''
    tuple_insert = (libelleGenre, logo)
    sql = '''INSERT INTO genresFilms (libelleGenre, logo)
             VALUES (%s, %s)'''
    mycursor.execute(sql, tuple_insert)
    get_db().commit()
    mycursor.close()
    flash(f"Genre ajouté avec succès ! pour le genre {libelleGenre}")
    return redirect('/genre-film/show')

@app.route('/genre-film/delete', methods=['GET'])
def delete_genre():
    mycursor = get_db().cursor()
    id = request.args.get('id', '')
    tuple_delete = (id, )
    sql = "DELETE FROM genresFilms WHERE id = %s"
    mycursor.execute(sql, tuple_delete)
    get_db().commit()
    mycursor.close()
    flash(f'Un genre supprimé, id : {id}', 'alert-warning')
    return redirect('/genre-film/show')

@app.route('/genre-film/edit', methods=['GET'])
def edit_genre():
    mycursor = get_db().cursor()
    id = request.args.get('id', '')
    sql = "SELECT id, libelleGenre, logo FROM genresFilms WHERE id = %s"
    mycursor.execute(sql, (id,))
    genresFilms = mycursor.fetchone()
    mycursor.close()
    return render_template('genre/edit_genre.html', genresFilms = genresFilms)

@app.route('/genre-film/edit', methods=['POST'])
def valid_edit_genre():
    mycursor = get_db().cursor()
    id = request.form.get('id')
    libelleGenre = request.form.get('libelleGenre') or None
    logo = request.form.get('logo', '') or None
    sql = '''UPDATE genresFilms 
             SET libelleGenre = %s, logo = %s
             WHERE id = %s'''
    tuple_update = (libelleGenre, logo, id)
    mycursor.execute(sql, tuple_update)
    get_db().commit()
    mycursor.close()
    flash(f'Genre modifié avec succès ! pour le genre {libelleGenre}', 'alert-success')
    return redirect('/genre-film/show')

@app.route('/film/show', methods=['GET'])
def show_film():
    mycursor = get_db().cursor()
    sql = "SELECT * FROM films"
    mycursor.execute(sql)
    films = mycursor.fetchall()
    mycursor.close()
    return render_template('film/show_film.html', films=films)

@app.route('/film/add', methods=['GET'])
def add_film():
    mycursor = get_db().cursor()
    sql = "SELECT id AS id, libelleGenre AS libelleGenre FROM genresFilms"
    mycursor.execute(sql)
    genresFilms = mycursor.fetchall()
    mycursor.close()
    return render_template('film/add_film.html', genresFilms=genresFilms)

@app.route('/film/add', methods=['POST'])
def valid_add_film():
    mycursor = get_db().cursor()
    titreFilm = request.form.get('titreFilm', '')
    dateSortie = request.form.get('dateSortie', '')
    nomRealisateur = request.form.get('nomRealisateur', '')
    genre_id = request.form.get('genre_id', '')
    duree = request.form.get('duree', '')
    affiche = request.form.get('affiche', '')
    tuple_insert =(titreFilm, dateSortie, nomRealisateur, genre_id, duree, affiche)
    sql = "INSERT INTO films (titreFilm, dateSortie, nomRealisateur, genre_id, duree, affiche) VALUES (%s, %s, %s, %s, %s, %s)"
    mycursor.execute(sql, tuple_insert)
    get_db().commit()
    mycursor.close()
    flash(f'Film ajouté avec succès : {titreFilm}', 'alert-success')
    return redirect('/film/show')

@app.route('/film/delete', methods=['GET'])
def delete_film():
    mycursor = get_db().cursor()
    id = request.args.get('id', '')
    tuple_delete = (id, )
    sql = "DELETE FROM films WHERE id = %s"
    mycursor.execute(sql, tuple_delete)
    get_db().commit()
    mycursor.close()
    flash(f'Un film supprimé, id : {id}', 'alert-warning')
    return redirect('/film/show')

@app.route('/film/edit', methods=['GET'])
def edit_film():
    mycursor = get_db().cursor()
    id = request.args.get('id', '')
    sql = "SELECT id, titreFilm, genre_id, duree, dateSortie, nomRealisateur, affiche FROM films WHERE id = %s"
    mycursor.execute(sql, (id,))
    films = mycursor.fetchone()
    sql_genres = "SELECT id, libelleGenre FROM genresFilms"
    mycursor.execute(sql_genres)
    genresFilms = mycursor.fetchall()
    mycursor.close()
    return render_template('film/edit_film.html', films=films, genresFilms=genresFilms)

@app.route('/film/edit', methods=['POST'])
def valid_edit_film():
    mycursor = get_db().cursor()
    id = request.form.get('id')
    titreFilm = request.form.get('titreFilm', '')
    dateSortie = request.form.get('dateSortie', '')
    nomRealisateur = request.form.get('nomRealisateur', '')
    genre_id = request.form.get('genre_id', '')
    duree = request.form.get('duree', '')
    affiche = request.form.get('affiche', '')
    tuple_update = (titreFilm, dateSortie, nomRealisateur, genre_id, duree, affiche, id)
    sql = '''UPDATE films 
             SET titreFilm = %s, dateSortie = %s, nomRealisateur = %s, genre_id = %s, duree = %s, affiche = %s 
             WHERE id = %s'''
    mycursor.execute(sql, tuple_update)
    get_db().commit()
    mycursor.close()
    flash(f'Film modifié avec succès : {titreFilm}', 'alert-success')
    return redirect('film/show')


@app.route('/film/filtre', methods=['GET'])
def filtre_film():
    mycursor = get_db().cursor()
    filter_word = request.args.get('titre', '')
    filter_time_min = request.args.get('durée min', '')
    filter_time_max = request.args.get('durée max', '')

    sql = "SELECT * FROM films WHERE 1=1"
    sql_args = []

    if filter_word:
        sql += " AND titreFilm LIKE %s"
        sql_args.append(f"%{filter_word}%")

    if filter_time_min.isdecimal() and filter_time_max.isdecimal():
        sql += " AND duree BETWEEN %s AND %s"
        sql_args.extend([filter_time_min, filter_time_max])

    mycursor.execute(sql, sql_args)
    films = mycursor.fetchall()

    flash(u'Filtres appliqués', 'alert-success')
    mycursor.close()
    return render_template('film/front_film_filtre_show.html', films=films)


if __name__ == '__main__':
    app.run()
