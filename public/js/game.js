const randNum = () => Math.floor(Math.random() * 2);

class Game {
  constructor(code) {
    this.code = code;
  }
  static createCode() {
    const colorsList = colors();
    let key = [];
    colorsList.forEach(color => {
      if (randNum() === 0) key.push(color);
      else key.unshift(color);
    });
    const game = new Game(key);
    return game;
  }
  keyCode() {
    return this.code;
  }
  
}
