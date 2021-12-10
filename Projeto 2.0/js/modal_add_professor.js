function cadastrar(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'flex';
    let overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
}
function fechar(){
    var modal = document.querySelector('.modal')
    let overlay = document.getElementById("overlay");
    modal.style.display = 'none';
    overlay.style.display = "none";
}