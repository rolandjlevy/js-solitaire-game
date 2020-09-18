export class Score {
  constructor({rowLength, maxTime}) {
    this.moves = 0;
    this.rowLength = rowLength;
    this.timer = maxTime;
    this.boardCentreId = 25;
    this.bonusAmount = null;
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
    this.moves = 0;
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
    this.checkForBonus();
    this.winDisplay.innerHTML = `<span>Well done! you got a score of <span class="moves">${(this.currentScore)}</span>. ${this.bonusMessage()}Please add your name or Repl username to the Leader Board:</span>`;
    this.playerNameWrapper.innerHTML = `<input id="player-name" type="text" class="m-b-10" required placeholder="Your name..." maxlength="20"><label for="player-name" class="error-message"></label>`;
    const playerName = document.querySelector('#player-name');
    playerName.focus();
  }
  checkForBonus() {
    const filled = this.marbles.filter(item => item.state == 'filled');
    this.bonusAmount = null;
    if (filled.length > 1) return;
    const lastMarble = filled.shift();
    this.bonusAmount = Number(lastMarble.div.id) == this.boardCentreId ? 1000 : 500;
    this.score += this.bonusAmount;
    this.scoreDisplay.textContent = this.currentScore.toLocaleString();
  }
  bonusMessage() {
    if (!this.bonusAmount) return '';
    const boardCentre = this.bonusAmount == 1000 ? ' in the center of the board' : '';
    return `You have won a bonus of ${this.bonusAmount} as there is only one marble remaining${boardCentre}!! `;
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
  initMarbles() {
    this.marbles = blocks.filter(item => item.state !== 'blank');
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