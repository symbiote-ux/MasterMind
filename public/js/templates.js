const createGrid = (id, box) => {
  for (let index = 1; index <= 10; index++) {
    const rowBox = document.createElement('div');
    rowBox.id = `${id}_${index}`;
    rowBox.className = 'row';
    for (let i = 1; i <= 5; i++) {
      const colBox = document.createElement('div');
      colBox.className = 'col';
      rowBox.appendChild(colBox);
    }
    box.appendChild(rowBox);
  }
};

const createColorBox = () => {
  const colorsBox = document.querySelector('#colorsBox');
  const colors = ['red', 'blue', 'green', 'pink', 'black'];
  colors.forEach(color => {
    const box = document.createElement('div');
    box.id = color;
    box.style.backgroundColor = color;
    box.className = 'row';
    colorsBox.appendChild(box);
  });
};

const createPlayerMoveBox = () => {
  const playerMoveBox = document.querySelector('#playerMoveBox');
  createGrid('PM_Row', playerMoveBox);
};

const createClueBox = () => {
  const clueBox = document.querySelector('#clueBox');
  createGrid('CB_Row', clueBox);
};

const setup = () => {
  createClueBox();
  createPlayerMoveBox();
  createColorBox();
};

window.onload = setup;
