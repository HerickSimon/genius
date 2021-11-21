let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");

//cria ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//acende a proxima cor
let lightColor = (element, number) => {
  number = number * 1000;
  setTimeout(() => {
    element.classList.toggle("selected");
  }, number - 500);
  setTimeout(() => {
    element.classList.toggle("selected");
  }, number - 1000);
};

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    score++;
    alert(`Você acertou!\nPontuação: ${score}\nIniciando próximo nível!`);
    shuffleOrder();
  }
};

//funcao para o clique do usuario
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.toggle("selected");

  setTimeout(() => {
    createColorElement(color).classList.toggle("selected");
    checkOrder();
  }, 250);
};

//funcao que retorna a cor
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
  }
};

//funcao para game over
let gameOver = () => {
  alert(
    `Game Over!\nPontuação: ${score}\nClique em OK para iniciar um novo jogo`
  );
  order = [];

  playGame();
};

//funcao de inicio do jogo
let playGame = () => {
  alert(`Bem vindo ao Genius!\nIniciando novo jogo!\nBoa sorte!`);
  score = 0;
  shuffleOrder();
};

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//iniciando o jogo
playGame();
