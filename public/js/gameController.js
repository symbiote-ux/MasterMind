const colors = () => [
  'red',
  'blue',
  'green',
  'pink',
  'black',
  'lime',
  'grey',
  'orange',
  'yellow'
];

const fillCode = code => {
  const codeBox = Array.from(document.querySelectorAll('.displayCorrectCode'));
  codeBox.forEach((box, index) => {
    box.style.backgroundColor = code[index];
  });
};

const disableRow = attempt => {
  const rowId = `PM_Row_${attempt}`;
  const row = document.getElementById(rowId);
  const colList = Array.from(row.querySelectorAll('.col'));
  colList.forEach(col => {
    col.removeEventListener('drop', handleDrop);
    col.removeEventListener('dragover', allowDrop);
  });
  row.querySelector('.logo').style.pointerEvents = 'none';
};

const enableRow = (noOfAttempt = 1) => {
  const rowId = `PM_Row_${noOfAttempt}`;
  const row = document.getElementById(rowId);
  const colList = Array.from(row.querySelectorAll('.col'));
  colList.forEach(col => {
    col.addEventListener('drop', handleDrop);
    col.addEventListener('dragover', allowDrop);
  });
  row.querySelector('.logo').style.pointerEvents = 'auto';
};

const displayClue = (rightColor, rightColorAndPos, attempt) => {
  const rowId = `CB_Row_${attempt}`;
  const clueBox = document.getElementById(rowId);
  const colList = Array.from(clueBox.querySelectorAll('.clueCol'));
  for (let i = 0; i < rightColor; i++) {
    colList[i].style.backgroundColor =
      i < rightColorAndPos ? 'green' : 'yellow';
  }
};

const displayColorAndMsg = (game, msg) => {
  const msgBox = document.querySelector('#msg');
  msgBox.innerText = msg;
  msgBox.style.display = 'block';
  fillCode(game.keyCode);
};

const checkCode = function() {
  const row = event.target.parentElement;
  const playerMoves = Array.from(row.querySelectorAll('.col'));
  const playerCode = playerMoves.map(move => move.style.backgroundColor);
  const { rightColorCount, rightColorAndPosCount, attempt } = this.compareCode(
    playerCode
  );
  if (this.isCodeCracked(rightColorAndPosCount)) {
    displayColorAndMsg(this, 'You have Cracked the Code');
  }
  if (attempt === 17) {
    displayColorAndMsg(this, 'Max Attempt Limit Reached');
  }
  displayClue(rightColorCount, rightColorAndPosCount, attempt);
  disableRow(attempt);
  const noOfAttempt = this.countAttempt();
  enableRow(noOfAttempt);
};

const attachEventListener = game => {
  const checkButtons = document.querySelectorAll('.logo');
  checkButtons.forEach(button => {
    button.addEventListener('click', checkCode.bind(game));
    button.style.pointerEvents = 'none';
  });
};

const main = () => {
  setup();
  const game = Game.createCode();
  attachEventListener(game);
  enableRow();
};

window.onload = main;
