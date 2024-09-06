// Seleciona o elemento HTML onde os resultados da pesquisa serão exibidos
const carrosContainer = document.getElementById('carros-container');

// Função para criar um card para cada carro
function criarCardCarro(carro) {
  // Cria um div para representar o card do carro
  const divCarro = document.createElement('div');
  divCarro.classList.add('carro'); // Adiciona a classe CSS 'carro' para estilizar

  // Cria elementos HTML para as informações do carro e adiciona ao card
  const titulo = document.createElement('h2');
  titulo.textContent = carro.titulo;
  divCarro.appendChild(titulo);

  const descricao = document.createElement('p');
  descricao.textContent = carro.descricao;
  divCarro.appendChild(descricao);

  // Adiciona outros elementos do card, como anos de produção, versões, imagem
  const anosProducao = document.createElement('p');
  anosProducao.textContent = `Anos de produção: ${carro.anosProducao}`;
  divCarro.appendChild(anosProducao);

  const versoes = document.createElement('p');
  versoes.textContent = `Versões: ${carro.versoes.join(', ')}`;
  divCarro.appendChild(versoes);

  const imagem = document.createElement('img');
  imagem.src = carro.imagem;
  divCarro.appendChild(imagem);

  return divCarro; // Retorna o card criado
}

// Função para filtrar os carros com base no termo de pesquisa
function filtrarCarros(termoPesquisa) {
  // Converte o termo de pesquisa para minúsculas para facilitar a comparação
  const termoMin = termoPesquisa.toLowerCase();

  // Filtra os carros cujo título contenha o termo de pesquisa (em minúsculas)
  const carrosFiltrados = carros.filter(carro => {
    return carro.titulo.toLowerCase().includes(termoMin);
  });

  // Limpa o container antes de adicionar novos resultados
  carrosContainer.innerHTML = '';

  // Verifica se foram encontrados carros
  if (carrosFiltrados.length === 0) {
    // Se não encontrou carros, exibe uma mensagem de erro
    const mensagemErro = document.createElement('p');
    mensagemErro.textContent = 'Veículo não cadastrado.';
    carrosContainer.appendChild(mensagemErro);
  } else {
    // Se encontrou carros, renderiza os cards
    renderizarCarros(carrosFiltrados);
  }
}

// Seleciona o botão de pesquisa e adiciona um evento de clique
const botaoPesquisa = document.querySelector('.search-button');
botaoPesquisa.addEventListener('click', () => {
  const termoPesquisa = document.querySelector('.search-input').value;
  filtrarCarros(termoPesquisa);
});

// Seleciona o ícone de menu e a sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Adiciona eventos de mouseenter e mouseleave para mostrar/ocultar a sidebar
menuIcon.addEventListener('mouseenter', () => {
  sidebar.classList.toggle('active');
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.toggle('active');
});

// Função para renderizar os cards dos carros no container
function renderizarCarros(carros) {
  // Limpa o container antes de adicionar os novos cards
  carrosContainer.innerHTML = '';

  // Itera sobre os carros e cria um card para cada um
  carros.forEach(carro => {
    carrosContainer.appendChild(criarCardCarro(carro));
  });
}