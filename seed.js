// ======== SEED DO SISTEMA AURA 💜 ========

const db = firebase.firestore();

// Mostrar mensagem temporária
function showMessage(text, type = "normal") {
  const result = document.getElementById("result");
  result.textContent = text;
  result.className = type;
}

// ======== PERFIS AURA ========
async function seedUsers() {
  showMessage("💜 Criando perfis da AURA... aguarde...", "loading");

  const auraProfiles = [
    { code: "A-01", name: "Duda Solano", role: "Veterano " },
    { code: "A-02", name: "Erica Madrazzo", role: "Recruta" },
    { code: "A-03", name: "Diego Brown", role: "Soldado" },
    { code: "A-04", name: "Kauã Melione", role: "Soldado" },
    { code: "A-05", name: "Aquiles Santos (Midnight)", role: "Recruta" },
    { code: "A-06", name: "Selenita Gilbert", role: "Soldado" }
  ];

  try {
    let created = 0;
    for (const p of auraProfiles) {
      const docRef = db.collection("users").doc(p.code);
      const exists = await docRef.get();

      if (!exists.exists) {
        await docRef.set({
          ...p,
          faction: "AURA",
          type: "AURA",
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        created++;
      }
    }

    showMessage(`✅ ${created} perfis da AURA criados com sucesso!`, "success");
  } catch (err) {
    console.error(err);
    showMessage(`❌ Erro ao criar perfis: ${err.message}`, "error");
  }
}

// ======== DADOS DE EXEMPLO ========
async function seedExamples() {
  showMessage("📂 Criando dados de exemplo...", "loading");

  const people = [
    { code: "P-01", name: "Victor Andrade (Baiano)", phone: "000-000", faction: "Membro" },
    { code: "P-02", name: "Vicente Carvalho (Jamaica)", phone: "000-000", faction: "Membro" },
    { code: "P-03", name: "Rodrigo Casarin", phone: "000-000", faction: "Membro" },
    { code: "P-04", name: "Rech Marino", phone: "000-000", faction: "Membro" },
    { code: "P-05", name: "John Akashi", phone: "000-000", faction: "Membro" },
    { code: "P-06", name: "Pedro Maicon (Barba Rosa)", phone: "000-000", faction: "Recruta" },
    { code: "P-07", name: "Nero Santyago", phone: "000-000", faction: "Recruta" },
    { code: "P-08", name: "Erick Mendez", phone: "000-000", faction: "Recruta" },
    { code: "P-09", name: "Aquiles Santos (Midnight)", phone: "000-000", faction: "Recruta" },
    { code: "P-10", name: "Erica Madrazzo", phone: "000-000", faction: "Recruta" }
  ];

  try {
    let created = 0;
    for (const p of people) {
      const docRef = db.collection("users").doc(p.code);
      const exists = await docRef.get();

      if (!exists.exists) {
        await docRef.set({
          ...p,
          type: "Pessoa",
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        created++;
      }
    }

    await db.collection("logs").add({
      action: "seed_examples",
      by: "Sistema AURA",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    showMessage(`✅ ${created} pessoas criadas com sucesso!`, "success");
  } catch (err) {
    console.error(err);
    showMessage(`❌ Erro ao criar exemplos: ${err.message}`, "error");
  }
}
