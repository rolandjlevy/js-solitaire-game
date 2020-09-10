class Score {
  constructor({maxTime}) {
    this.moves = 0;
    this.timer = maxTime; // 100
    this.initElements();
    this.timerID = setInterval(() => {
      this.countdown();
    }, 1000);
  }
  initElements() {
    this.movesDisplay = document.querySelector('.moves-display');
    this.timerDisplay = document.querySelector('.timer-display');
    this.scoreDisplay = document.querySelector('.score-display');
  }
  countdown() {
    this.timerDisplay.textContent = String(this.timer).padStart(2, '0');
    this.scoreDisplay.textContent = (this.moves * this.timer).toLocaleString();
    if (this.timer == 0) clearInterval(this.timerID);
    this.timer--;
  }
}