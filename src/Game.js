export class Game {
  constructor(rowLength) {
    this.rowLength = rowLength;
    this.container = document.querySelector('.container');
    this.container.classList.remove('disabled');
    this.origin = null;
    setTimeout(() => {
      this.container.classList.add('init');
    }, 100);
    this.buttons = document.querySelectorAll('article .btn');
    this.initButtons();
  }
  createDivs() {
    this.container.innerHTML = '';
    let index = 0;
    while (index < this.rowLength * this.rowLength) {
      const div = document.createElement('div');
      div.id = index + 1;
      this.container.appendChild(div);
      index++;
    }
    this.divs = document.querySelectorAll('main > div');
  }
  initButtons() {
    this.buttons.forEach(item => {
      item.addEventListener('click', this.handleClickEvent);
    });
  }
  handleClickEvent(e) {
    let soundFileName = 'pat.mp3';
    if (e.target.name == 'submit-score') {
      if (score.moves) soundFileName = 'applause.mp3';
    }
    sound.init(`sounds/${soundFileName}`);
  }
  isBlank(index) {
    const i = index, rl = this.rowLength;
    return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
  }
  isEmpty(index) {
    const i = index, rl = this.rowLength;
    return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
  }
}