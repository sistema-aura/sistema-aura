
from flask import Flask, request, redirect, url_for, session, send_from_directory
import os

app = Flask(__name__)
app.secret_key = 'segredo_super_secreto'

# Caminho absoluto para os ficheiros do site
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_FOLDER = os.path.join(BASE_DIR, 'sistema-aura-main')

# Página de login
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        if request.form['password'] == 'aurinha123':
            session['autenticado'] = True
            return redirect('/dashboard.html')
    return '''
    <h2>Login</h2>
    <form method="POST">
        <input type="password" name="password" placeholder="Senha">
        <button type="submit">Entrar</button>
    </form>
    '''

# Logout
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

# Proteger todos os ficheiros dentro de sistema-aura-main
@app.route('/<path:caminho>')
def proteger_paginas(caminho):
    if not session.get('autenticado'):
        return redirect(url_for('login'))

    caminho_absoluto = os.path.join(STATIC_FOLDER, caminho)
    if os.path.exists(caminho_absoluto):
        pasta, ficheiro = os.path.split(caminho_absoluto)
        return send_from_directory(pasta, ficheiro)
    else:
        return "Página não encontrada", 404

if __name__ == '__main__':
    app.run(debug=True)
