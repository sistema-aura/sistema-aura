from flask import Flask, request, redirect, send_from_directory
import os

app = Flask(__name__)

# Caminho da pasta do teu site
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
SITE_FOLDER = os.path.join(BASE_DIR, "sistema-aura")

# 🔐 Verifica se o utilizador tem o cookie de sessão (simples)
def autenticado():
    token = request.cookies.get("session_token")
    return token is not None

# Protege todas as rotas
@app.route("/<path:caminho>")
def proteger(caminho):
    if not autenticado():
        return redirect("/index.html")

    caminho_absoluto = os.path.join(SITE_FOLDER, caminho)
    if os.path.exists(caminho_absoluto):
        pasta, ficheiro = os.path.split(caminho_absoluto)
        return send_from_directory(pasta, ficheiro)

    return "Página não encontrada", 404

# Página inicial
@app.route("/")
def home():
    return redirect("/index.html")

if __name__ == "__main__":
    app.run(debug=True)
