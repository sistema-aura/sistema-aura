from flask import Flask, request, redirect, send_from_directory
import os

app = Flask(__name__)

# Caminho da pasta onde estão os ficheiros HTML + JS
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

def autenticado():
    return request.cookies.get("session_token") is not None

@app.route("/")
def home():
    return redirect("/index.html")

@app.route("/index.html")
def index():
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/<path:ficheiro>")
def proteger(ficheiro):
    # ⚠️ Só protege ficheiros .html (podes adaptar)
    if ficheiro.endswith(".html") and ficheiro != "index.html":
        if not autenticado():
            return redirect("/index.html")

    caminho_absoluto = os.path.join(BASE_DIR, ficheiro)
    if os.path.exists(caminho_absoluto):
        pasta, nome = os.path.split(caminho_absoluto)
        return send_from_directory(pasta, nome)
    return "Ficheiro não encontrado", 404

if __name__ == "__main__":
    app.run(debug=True)
