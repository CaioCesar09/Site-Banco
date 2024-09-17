// Adicionando um ouvinte de evento de clique ao botão
document.getElementById('openMenuBtn').addEventListener('click', function() {
    // Obtendo o elemento do menu
    var menu = document.getElementById('menu');
    // Verificando se o menu está oculto
    if (menu.style.display === 'none') {
      // Se estiver oculto, exibindo o menu
      menu.style.display = 'block';
    } else {
      // Se estiver visível, ocultando o menu
      menu.style.display = 'none';
    }
  });
  document.getElementById("botao").addEventListener("click", function() {
    window.location.href = "index.html";
});

let saldoVisible = true;

function toggleSaldo() {
  const saldoElement = document.getElementById('saldo');
  if (saldoVisible) {
    saldoElement.innerHTML = '*****';
    saldoVisible = false;
  } else {
    saldoElement.innerHTML = 'R$ 100,00';
    saldoVisible = true;
  }
}