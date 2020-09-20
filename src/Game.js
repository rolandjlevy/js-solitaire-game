export class Game {
  constructor(rowLength, s) {
    this.rowLength = rowLength;
    this.s = s;
    this.helpDisplay = document.querySelector('.help');
    this.container = document.querySelector('.container');
    this.container.classList.remove('disabled');
    this.origin = null;
    setTimeout(() => {
      this.container.classList.add('init');
    }, 100);
    this.buttons = document.querySelectorAll('article .btn');
    this.initButtons(s);
  }
  add() {
    this.s.submit();
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
  initButtons(score) {
    this.buttons.forEach(item => {
      item.addEventListener('click', (e) => {
        let soundFileName = 'pat.mp3';
        if (e.target.name == 'submit-score') {
          if (score.moves) soundFileName = 'applause.mp3';
        }
        sound.init(`sounds/${soundFileName}`);
      });
    });
  }
  isBlank(index) {
    const i = index, rl = this.rowLength;
    return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
  }
  isEmpty(index) {
    const i = index, rl = this.rowLength;
    return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
  }
  toggleHelp(state) {
    this.helpDisplay.classList[state]('show');
  }
}