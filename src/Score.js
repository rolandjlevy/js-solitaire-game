class Score {
  constructor({maxTime}) {
    this.moves = 0;
    this.timer = maxTime; // 100
    this.initElements();
  }
  initElements() {
    this.movesDisplay = document.querySelector('.moves-display');
    this.timerDisplay = document.querySelector('.timer-display');
    this.scoreDisplay = document.querySelector('.score-display');
  }
}