const btn = document.getElementById("btnSurpresa");
const conteudo = document.getElementById("conteudo");
const tempoJuntos = document.getElementById("tempoJuntos");

// Data do namoro (ano, mês (0-11), dia)
const dataNamoro = new Date(2025, 2, 10); // Junho é mês 5 (começa no 0)

btn.addEventListener("click", () => {
  conteudo.classList.remove("escondido");
  btn.style.display = "none";
  atualizarTempo();
  setInterval(atualizarTempo, 1000); // atualiza o contador todo segundo
});

function atualizarTempo() {
  const agora = new Date();
  const diff = agora - dataNamoro;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);
  const diasRestantes = (dias % 365) % 30;

  tempoJuntos.textContent =
    `${anos} anos, ${meses} meses, ${diasRestantes} dias, ` +
    `${horas}h ${minutos}min ${segundos}s`;
}
