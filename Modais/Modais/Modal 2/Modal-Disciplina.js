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
  let Disciplina = document.getElementById("Disciplina").value;
  let Setor = document.getElementById("Setor").value;
  let Categoria = document.getElementById("Categoria").value;
  

  if (Disciplina == "") {
    alert("Disciplina requerida");
  }  else if (Setor == "") {
    alert("Setor Requerido");
  } else if (Categoria == "") {
    alert("Categoria Requerida");
  } else {
    alert(`${Disciplina} Cadastrada com sucesso`);
  }
}
