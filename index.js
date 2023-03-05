const inputTarefa = document.querySelector('.inputTarefa');
const buttonTarefa = document.querySelector('.buttonAdicionar');
const lista = document.querySelector('ul');

// ADICIONA O ONCLICK
buttonTarefa.onclick = function() {
   const tarefa = inputTarefa.value;
   const novoItem = document.createElement('li');
   novoItem.textContent = tarefa;
   lista.appendChild(novoItem);


  // Adiciona o botão Apagar
  const botaoApagar = document.createElement('button');
  botaoApagar.textContent = 'Apagar';
  novoItem.appendChild(botaoApagar);
  botaoApagar.classList.add('botaoApagar'); // adiciona a classe
  
  // Adiciona o evento onclick ao botão Apagar
  botaoApagar.onclick = function() {
      novoItem.remove();
  };

}
