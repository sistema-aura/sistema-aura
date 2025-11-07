// script-dashboard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Seletores
const countPeople = document.getElementById("countPeople");
const countCases = document.getElementById("countCases");
const countInvestigations = document.getElementById("countInvestigations");
const countMeetings = document.getElementById("countMeetings");
const activityLog = document.getElementById("activityLog");

// Variáveis de dados
let totalPeople = 0;
let totalCases = 0;
let totalInvestigations = 0;
let totalMeetings = 0;

// Função para atualizar contadores
function updateCounts() {
  countPeople.textContent = totalPeople;
  countCases.textContent = totalCases;
  countInvestigations.textContent = totalInvestigations;
  countMeetings.textContent = totalMeetings;
  updateChart();
}

// Listener em tempo real para cada coleção
onSnapshot(collection(db, "people"), (snapshot) => {
  totalPeople = snapshot.size;
  addLog("Atualização: Pessoas (" + totalPeople + ")");
  updateCounts();
});

onSnapshot(collection(db, "cases"), (snapshot) => {
  totalCases = snapshot.size;
  addLog("Atualização: Casos (" + totalCases + ")");
  updateCounts();
});

onSnapshot(collection(db, "investigations"), (snapshot) => {
  totalInvestigations = snapshot.size;
  addLog("Atualização: Investigações (" + totalInvestigations + ")");
  updateCounts();
});

onSnapshot(collection(db, "meetings"), (snapshot) => {
  totalMeetings = snapshot.size;
  addLog("Atualização: Reuniões (" + totalMeetings + ")");
  updateCounts();
});

// Chart.js - gráfico de barras
let ctx = document.getElementById("barChart").getContext("2d");
let barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Pessoas", "Casos", "Investigações", "Reuniões"],
    datasets: [{
      label: "Registos Totais",
      data: [0, 0, 0, 0],
      backgroundColor: [
        "rgba(155, 77, 255, 0.6)",
        "rgba(184, 107, 255, 0.6)",
        "rgba(214, 170, 255, 0.6)",
        "rgba(250, 200, 255, 0.6)"
      ],
      borderColor: "#ffffff",
      borderWidth: 1,
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } }
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" }
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" }
      }
    }
  }
});

// Atualiza gráfico
function updateChart() {
  barChart.data.datasets[0].data = [totalPeople, totalCases, totalInvestigations, totalMeetings];
  barChart.update();
}

// Adiciona entradas ao log
function addLog(msg) {
  const li = document.createElement("li");
  li.textContent = `${new Date().toLocaleTimeString()} - ${msg}`;
  activityLog.prepend(li);
  if (activityLog.children.length > 10) {
    activityLog.removeChild(activityLog.lastChild);
  }
}

// Pesquisa global (básica)
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const termo = searchInput.value.trim().toLowerCase();
    if (!termo) return;
    addLog(`Pesquisa por "${termo}"`);
    alert(`(Em breve) Pesquisa global por: ${termo}`);
    searchInput.value = "";
  }
});

// Botão de sair (volta ao login)
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
