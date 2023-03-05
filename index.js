const inputTarefa = document.querySelector('.inputTarefa');
const buttonTarefa = document.querySelector('.buttonAdicionar');
const lista = document.querySelector('ul');

buttonTarefa.onclick = function() {
  const tarefa = inputTarefa.value;

  // Verifica se o valor do input não está vazio
  if (tarefa.trim() !== "") {

    const novoItem = document.createElement('li');
    novoItem.textContent = tarefa;
    lista.appendChild(novoItem);
    inputTarefa.value = "";

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
};

// A diferença entre tarefa.trim() !== "" e tarefa.value !== "" é que o primeiro verifica se a string tarefa sem espaços em branco (utilizando o método trim()) é diferente de uma string vazia (""), enquanto o segundo verifica se o valor do atributo value do elemento input é diferente de uma string vazia ("").

// A utilização do método trim() é importante para remover espaços em branco que possam ter sido digitados antes ou depois do texto da tarefa. Já o atributo value do elemento input é a propriedade que contém o valor atual do campo de entrada.

// Por exemplo, se o usuário digitar " Tarefa 1 " (com espaços em branco antes e depois), o valor de tarefa será a string " Tarefa 1 ". Se usarmos tarefa.value !== "", a condição será verdadeira, pois o valor do atributo value é " Tarefa 1 ", mesmo contendo espaços em branco. Já se usarmos tarefa.trim() !== "", a condição também será verdadeira, pois a string " Tarefa 1 " sem espaços em branco é "Tarefa 1", que não é uma string vazia.

// classList.add é um método que adiciona uma ou mais classes a um elemento HTML, enquanto classList.toggle é um método que adiciona uma classe a um elemento se ela não estiver presente e a remove se já estiver presente.

// Portanto, a principal diferença entre classList.add e classList.toggle é que classList.add sempre adiciona uma classe, enquanto classList.toggle pode adicionar ou remover uma classe, dependendo de sua presença atual no elemento.

