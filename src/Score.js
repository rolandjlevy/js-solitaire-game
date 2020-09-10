class Score {
  constructor({maxTime}) {
    this.moves = 0;
    this.timer = maxTime;
    this.initElements();
    this.countdown();
    this.clearAllIntervals();
    this.timerID = setInterval(() => {
      this.countdown();
    }, 1000);
  }
  initElements() {
    this.movesDisplay = document.querySelector('.moves-display');
    this.timerDisplay = document.querySelector('.timer-display');
    this.scoreDisplay = document.querySelector('.score-display');
    this.movesDisplay.textContent = this.moves;
  }
  countdown() {
    this.timerDisplay.textContent = String(this.timer).padStart(2, '0');
    this.scoreDisplay.textContent = (this.moves * this.timer).toLocaleString();
    if (this.timer == 0) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
    this.timer--;
  }
  clearAllIntervals() {
    let id = window.setInterval(function() {}, 0);
    while (id--) {
      window.clearInterval(id);
    }
  }
}