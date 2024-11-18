let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
// Função para alternar a visibilidade dos cards e alterar o texto do botão
function toggleCards() {
    var cardContainer = document.getElementById("cardContainer");
    var toggleButton = document.getElementById("toggleButton");

    // Verifica se os cards estão visíveis ou não
    if (cardContainer.style.display === "none") {
        cardContainer.style.display = "block";  // Exibe os cards
        toggleButton.innerText = "1 Trimestre";  // Altera o texto do botão
    } else {
        cardContainer.style.display = "none";  // Esconde os cards
        toggleButton.innerText = "1 Trimestre";  // Altera o texto do botão
    }
}
