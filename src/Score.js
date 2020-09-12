class Score {
  constructor({maxTime}) {
    this.moves = 0;
    this.timer = maxTime;
    this.initElements();
    this.countdown({inc:0});
    this.clearAllIntervals();
    this.timerID = setInterval(() => {
      this.countdown({inc:1});
    }, 1000);
  }
  initElements() {
    this.movesDisplay = document.querySelector('.moves-display');
    this.timerDisplay = document.querySelector('.timer-display');
    this.scoreDisplay = document.querySelector('.score-display');
    this.playerNameWrapper = document.querySelector('.player-name-wrapper');
    this.addScoreForm = document.querySelector('#add-score-form');
    this.winDisplay = document.querySelector('.win-display');
    this.movesDisplay.textContent = this.moves;
  }
  countdown({inc}) {
    this.timerDisplay.textContent = String(this.timer).padStart(2, '0');
    this.scoreDisplay.textContent = (this.moves * this.timer).toLocaleString();
    if (this.timer == 0) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
    this.timer = this.timer - inc;
    // const winStatus = blocks.every((item, index) => item.currentNum == item.div.id);
    const winStatus = false;
    if (winStatus == true) {
      this.addScoreForm.style.display = 'initial';
      this.winDisplay.innerHTML = `<span>Well done! you won with a score of <span class="moves">${(this.moves * this.timer)}</span>. Please add your name or Repl username to the Leader Board:</span>`;
      this.playerNameWrapper.innerHTML = `<input id="player-name" type="text" class="m-b-10" required placeholder="Your name..." maxlength="20"><label for="player-name" class="error-message"></label>`;
      const playerName = document.querySelector('#player-name');
      //playerName.focus();
    }
  }
  clearAllIntervals() {
    let id = window.setInterval(function() {}, 0);
    while (id--) {
      window.clearInterval(id);
    }
  }
}