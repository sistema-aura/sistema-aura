from flask import Flask, request, redirect, url_for, session, send_from_directory
import os

app = Flask(__name__)
app.secret_key = 'segredo_super_secreto'

# Caminho absoluto para os ficheiros do site
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
STATIC_FOLDER = os.path.join(BASE_DIR, 'sistema-aura-main')

@app.route('/')
def raiz():
    return redirect('/dasboard.html')

# Servir qualquer ficheiro da pasta principal do site
@app.route('/<path:caminho>')
def servir_ficheiros(caminho):
    caminho_absoluto = os.path.join(STATIC_FOLDER, caminho)
    if os.path.exists(caminho_absoluto):
        pasta, ficheiro = os.path.split(caminho_absoluto)
        return send_from_directory(pasta, ficheiro)
    else:
        return "Página não encontrada", 404

if __name__ == '__main__':
    app.run(debug=True)
