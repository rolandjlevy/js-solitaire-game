class Score {
  constructor({rowLength, maxTime}) {
    this.moves = 0;
    this.rowLength = rowLength;
    this.timer = maxTime;
    this.initElements();
    this.resetSubmissionForm();
    this.countdown({inc:0});
    this.clearAllIntervals();
    this.timerID = setInterval(() => {
      this.countdown({inc:1});
    }, 1000);
  }
  resetSubmissionForm() {
    this.addScoreForm.style.display = 'none';
    this.playerNameWrapper.innerHTML = '';
  }
  get currentScore() {
    return this.score;
  }
  updateScore() {
    this.score = this.moves * this.timer;
  }
  submit() {
    if (!this.moves) return;
    this.container.classList.add('disabled');
    this.clearAllIntervals();
    this.addScoreForm.style.display = 'initial';
    this.winDisplay.innerHTML = `<span>Well done! you got a score of <span class="moves">${(this.currentScore)}</span>. Please add your name or Repl username to the Leader Board:</span>`;
    this.playerNameWrapper.innerHTML = `<input id="player-name" type="text" class="m-b-10" required placeholder="Your name..." maxlength="20"><label for="player-name" class="error-message"></label>`;
    const playerName = document.querySelector('#player-name');
    playerName.focus();
  }
  gameCompleted() {
    this.marbles.some((item, index, array) => {
      const origin = item;
      if (index > 0) {
        const target = array[index - 1];
        if (target.y == origin.y && (target.state == 'filled' && origin.state == 'filled')) {
          //  console.log(target.div.id, ' and ', origin.div.id, ' are neighbours')
          return true;
        }
      }
      if (index < array.length - 1) {
        const target = array[index + 1];
        if (target.y == origin.y && (target.state == 'filled' && origin.state == 'filled')) {
          // console.log(target.div.id, ' and ', origin.div.id, ' are neighbours')
          return true;
        }
      }
    });
    return false;
  }
  initElements() {
    this.container = document.querySelector('.container');
    this.movesDisplay = document.querySelector('.moves-display');
    this.timerDisplay = document.querySelector('.timer-display');
    this.scoreDisplay = document.querySelector('.score-display');
    this.playerNameWrapper = document.querySelector('.player-name-wrapper');
    this.addScoreForm = document.querySelector('#add-score-form');
    this.winDisplay = document.querySelector('.win-display');
    this.movesDisplay.textContent = this.moves;
  }
  countdown({inc}) {
    this.updateScore();
    this.timerDisplay.textContent = String(this.timer).padStart(2, '0');
    this.scoreDisplay.textContent = this.currentScore.toLocaleString();
    if (this.timer == 0) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
    this.timer = this.timer - inc;
  }
  clearAllIntervals() {
    let id = window.setInterval(function() {}, 0);
    while (id--) {
      window.clearInterval(id);
    }
  }
}