from flask import Flask, request, redirect, send_from_directory
import firebase_admin
from firebase_admin import credentials, auth
import os

# 🔹 Inicializar Flask
app = Flask(__name__)

# 🔹 Firebase Admin SDK
cred = credentials.Certificate("firebase-adminsdk.json")
firebase_admin.initialize_app(cred)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
SITE_FOLDER = os.path.join(BASE_DIR, "sistema-aura-main")

# 🔐 Função de verificação do token
def verificar_token():
    token = request.cookies.get("token")
    if not token:
        return False
    try:
        auth.verify_id_token(token)
        return True
    except:
        return False

# 🔒 Protege todas as páginas do site
@app.route("/<path:caminho>")
def proteger(caminho):
    if not verificar_token():
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

