const randNum = () => Math.floor(Math.random() * 2);

class Game {
  constructor(code) {
    this.code = code;
    this.noOfAttempts = 1;
  }
  static createCode() {
    const colorsList = colors();
    let key = [];
    colorsList.forEach(color => {
      if (randNum() === 0) key.push(color);
      else key.unshift(color);
    });
    key.splice(2, 2);
    const game = new Game(key);
    return game;
  }
  keyCode() {
    return this.code;
  }
  compareCode(playerCode) {
    let rightColor = 0;
    let rightColorAndPos = 0;
    let rightCode = [...this.code];
    playerCode.forEach((color, index) => {
      if (color === this.code[index]) {
        rightColorAndPos += 1;
      }
      if (rightCode.includes(color)) {
        rightColor += 1;
        const i = rightCode.indexOf(color);
        rightCode.splice(i, 1);
      }
    });
    return {
      rightColor,
      rightColorAndPos,
      attempt: this.noOfAttempts
    };
  }
}
