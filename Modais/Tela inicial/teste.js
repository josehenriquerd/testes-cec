let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }

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