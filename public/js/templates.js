const addImage = imgPath => {
  const img = document.createElement('img');
  if (!imgPath) return img;
  img.src = imgPath;
  img.className = 'logo';
  return img;
};

const createGrid = (id, box, imgSrc, row, col) => {
  for (let index = 1; index <= 17; index++) {
    const rowBox = document.createElement('div');
    rowBox.id = `${id}_${index}`;
    rowBox.className = row;
    for (let i = 1; i <= 7; i++) {
      const colBox = document.createElement('div');
      colBox.className = col;
      rowBox.appendChild(colBox);
    }
    rowBox.appendChild(addImage(imgSrc));
    box.appendChild(rowBox);
  }
};

const createColorBox = () => {
  const colorsBox = document.querySelector('#colorsBox');
  const colorsList = colors();
  colorsList.forEach(color => {
    const box = document.createElement('div');
    box.id = color;
    box.style.backgroundColor = color;
    box.className = 'colorOption';
    colorsBox.appendChild(box);
  });
};

const createPlayerMoveBox = () => {
  const playerMoveBox = document.querySelector('#playerMoveBox');
  const imgSrc = '../images/like.jpg';
  createGrid('PM_Row', playerMoveBox, imgSrc, 'row', 'col');
};

const createClueBox = () => {
  const clueBox = document.querySelector('#clueBox');
  createGrid('CB_Row', clueBox, '', 'clueRow', 'clueCol');
};

const setup = () => {
  createClueBox();
  createPlayerMoveBox();
  createColorBox();
};
