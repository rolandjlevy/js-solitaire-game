class Game {
  constructor(rowLength) {
    this.rowLength = rowLength;
    this.container = document.querySelector('.container');
    this.origin = null;
  }
  createDivs() {
    this.container.innerHTML = '';
    let index = 0;
    while (index < this.rowLength * this.rowLength) {
      const div = document.createElement('div');
      this.container.appendChild(div);
      index++;
    }
    this.divs = document.querySelectorAll('main > div');
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