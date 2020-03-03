const colors = () => ['red', 'blue', 'green', 'pink', 'black', 'lime', 'grey'];

const fillCode = code => {
  const codeBox = Array.from(document.querySelectorAll('.displayCorrectCode'));
  codeBox.forEach((box, index) => {
    box.style.backgroundColor = code[index];
  });
};

const main = () => {
  setup();
  const game = Game.createCode();
  fillCode(game.keyCode());
};

window.onload = main;
