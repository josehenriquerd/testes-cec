//Abrir Modal
const openModal = () => {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");
  overlay.style.display = "flex";
  modal.style.display = "flex";
  setTimeout(() => {
    document.addEventListener("click", handleClickOutside, false);
  }, 200);
};

//Fechar Modal por botao
function closeModal() {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");
  modal.style.display = "none";
  overlay.style.display = "none";
}

//Fechar Modal Clicando Fora
const handleClickOutside = (event) => {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.removeEventListener("click", handleClickOutside, false);
  }
};

//Validacao das informacoes
function Confirmacao() {
  let Turma = document.getElementById("Turma").value;
  let setor = document.getElementById("Setor").value;
  let quantidade = document.getElementById("Quantidade").value;
  let ano = document.getElementById("Ano").value;

  if (Turma == "") {
    alert("Turma requerida");
  } else if (ano == "" || ano) {
    alert("Ano da turma requerida");
  } else if (setor == "") {
    alert("Setor Requerido");
  } else if (quantidade == "") {
    alert("Quantidade de Alunos requeridos");
  } else {
    alert(`${Turma}/${ano} Cadastrada com sucesso`);
  }
}
