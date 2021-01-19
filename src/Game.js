export class Game {
  constructor(rowLength, s) {
    this.rowLength = rowLength;
    this.s = s;
    this.body = document.querySelector('body');
    this.helpDisplay = document.querySelector('.help');
    this.container = document.querySelector('.container');
    this.container.classList.remove('disabled');
    this.origin = null;
    this.container.classList.add('initialise');
    this.buttons = document.querySelectorAll('article .btn');
    this.initButtons(s);
  }
  toggleHelp(state) {
    console.log('window.scrollY');
    this.helpDisplay.classList[state]('show');
    const active = this.helpDisplay.classList.contains('show');
    const targetView = active && window.scrollY < 100 ? '.help-section' : '.game'; 
    // document.querySelector(targetView).scrollIntoView();
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
  add() {
    this.s.add();
  }
}