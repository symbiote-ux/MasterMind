const randNum = () => Math.floor(Math.random() * 2);

class Game {
  constructor(code) {
    this.code = code;
    this.attempts = 1;
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
  get keyCode() {
    return this.code;
  }
  countAttempt(){
    this.attempts += 1;
    return this.attempts;
  }
  compareCode(playerCode) {
    let rightColorCount = 0;
    let rightColorAndPosCount = 0;
    let rightCode = [...this.code];
    playerCode.forEach((color, index) => {
      if (color === this.code[index]) rightColorAndPosCount += 1;
      if (rightCode.includes(color)) {
        rightColorCount += 1;
        const indexOfColor = rightCode.indexOf(color);
        rightCode.splice(indexOfColor, 1);
      }
    });
    return { rightColorCount, rightColorAndPosCount, attempt: this.attempts };
  }
  isCodeCracked(rightColorAndPosCount){
    return rightColorAndPosCount === this.code.length;
  }
}
