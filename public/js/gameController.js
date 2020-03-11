const colors = () => [ 'red', 'blue', 'green', 'pink', 'black', 'lime', 'grey', 'orange', 'yellow' ];

const fillCode = code => {
  const codeBox = Array.from(document.querySelectorAll('.displayCorrectCode'));
  codeBox.forEach((box, index) => {
    box.style.backgroundColor = code[index];
  });
};

const enableRow = (noOfAttempt = 1) => {
  const rowId = `PM_Row_${noOfAttempt}`;
  const row = document.getElementById(rowId);
  const colList = Array.from(row.querySelectorAll('.col'));
  colList.forEach(col => {
    col.addEventListener('drop', handleDrop);
    col.addEventListener('dragover', allowDrop);
  });
};

const displayClue = (rightColor, rightColorAndPos, attempt) => {
  const rowId = `CB_Row_${attempt}`;
  const clueBox = document.getElementById(rowId);
  const colList = Array.from(clueBox.querySelectorAll('.clueCol'));
  for (let i = 0; i < rightColor; i++) {
    colList[i].style.backgroundColor = i < rightColorAndPos ? 'green' : 'yellow';
  }
};

const checkCode = function() {
  const row = event.target.parentElement;
  const playerMoves = Array.from(row.querySelectorAll('.col'));
  const playerCode = playerMoves.map(move => move.style.backgroundColor);
  const { rightColorCount, rightColorAndPosCount, attempt } = this.compareCode( playerCode );
  displayClue(rightColorCount, rightColorAndPosCount, attempt);
};

const attachEventListener = game => {
  const checkButton = document.querySelector('.logo');
  checkButton.addEventListener('click', checkCode.bind(game));
};

const main = () => {
  setup();
  const game = Game.createCode();
  attachEventListener(game);
  fillCode(game.keyCode);
  enableRow();
};

window.onload = main;
