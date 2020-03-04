const addImage = imgPath => {
  const img = document.createElement('img');
  if (!imgPath) return img;
  img.src = imgPath;
  img.className = 'logo';
  img.id = 'IMG';
  return img;
};

const enableRow = (noOfAttempt = 1) => {
  const rowId = `PM_Row_${noOfAttempt}`;
  const row = document.getElementById(rowId);
  const imgBtn = row.querySelector('#IMG');
  // imgBtn.addEventListener('click', checkCode);
  const colList = Array.from(row.querySelectorAll('.col'));
  colList.forEach(col => {
    col.addEventListener('drop', handleDrop);
    col.addEventListener('dragover', allowDrop);
  });
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
    box.draggable = 'true';
    box.addEventListener('dragstart', handleDrag);
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
  enableRow();
};
