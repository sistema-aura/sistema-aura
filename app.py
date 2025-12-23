from flask import Flask, request, redirect, send_from_directory
import os

app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# ✅ Verifica se o utilizador tem o cookie válido
def autenticado():
    return request.cookies.get("session_token") is not None

# 🔹 Página inicial redireciona para o index.html
@app.route("/")
def home():
    return redirect("/index.html")

# 🔹 Serve o index.html diretamente
@app.route("/index.html")
def index():
    return send_from_directory(BASE_DIR, "index.html")

# 🔒 Protege todas as outras páginas HTML
@app.route("/<path:ficheiro>")
def proteger(ficheiro):
    if ficheiro.endswith(".html") and ficheiro != "index.html":
        if not autenticado():
            return redirect("/index.html")

    caminho_absoluto = os.path.join(BASE_DIR, ficheiro)
    if os.path.exists(caminho_absoluto):
        pasta, nome = os.path.split(caminho_absoluto)
        return send_from_directory(pasta, nome)

    return "Ficheiro não encontrado", 404

# ✅ Flask será iniciado com gunicorn no Render (não precisa do .run())
# mas deixamos esta linha para testes locais
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
