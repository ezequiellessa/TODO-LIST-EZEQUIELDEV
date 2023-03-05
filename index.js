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

  // Adiciona o botão Concluído
  const botaoConcluido = document.createElement('button');
  botaoConcluido.textContent = 'Concluído';
  novoItem.appendChild(botaoConcluido);
  botaoConcluido.classList.add('botaoConcluido');
  botaoConcluido.classList.add('botaoApagar');


 // Adiciona o evento onclick ao botão Concluído
 botaoConcluido.onclick = function() {
  novoItem.classList.toggle('liConcluida');
};
}

// //  classList.add é um método que adiciona uma ou mais classes a
//  um elemento HTML, enquanto classList.toggle é um método que adiciona uma classe a um elemento se ela não estiver presente e a remove se já estiver presente.

// // Portanto, a principal diferença entre classList.add e
//  classList.toggle é que classList.add sempre adiciona uma classe,
//   enquanto classList.toggle pode adicionar ou remover uma classe, 
//   dependendo de sua presença atual no elemento.

// // Por exemplo, se um elemento HTML tiver a classe "classe-1"
// , a chamada de classList.add("classe-1") não terá nenhum efeito, 
// pois a classe já está presente. Já a chamada de classList.toggle("classe-1") removeria a classe do elemento, pois ela já está presente.

// // Em resumo, use classList.add se você quiser adicionar uma classe
// independentemente de sua presença atual no elemento, e use 
// classList.toggle se você quiser alternar a presença de uma
//  classe no elemento.




