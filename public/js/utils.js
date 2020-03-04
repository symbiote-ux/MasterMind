const handleDrag = e => {
  e.dataTransfer.setData('id', e.target.id);
};

const allowDrop = e => {
  e.preventDefault();
};

const handleDrop = e => {
  e.preventDefault();
  const id = e.dataTransfer.getData('id');
  const color = document.getElementById(id).style.backgroundColor;
  e.target.style.backgroundColor = color;
};
