const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');
const helpDisplay = document.querySelector('.help');

let blocks;
let score;

function startGame() {
  blocks = [];
  score = new Score({rowLength, maxTime:100});
  const game = new Game(rowLength);
  game.createDivs();
  game.divs.forEach((div, index) => {
    const block = new Block({
      div,
      x: index % rowLength + 1,
      y: Math.floor(index / rowLength) + 1,
      state: 'filled'
    });
    block.div.id = index + 1;
    if (game.isBlank(index)) {
      block.state = 'blank';
    } else {
      if (game.isEmpty(index)) block.state = 'empty';
      block.addMarble();
    }
    block.div.classList.add('block', 'init', block.state);
    block.div.addEventListener('click', (e) => {
      const clickedBlock = blocks.find(bl => bl.div.id == e.currentTarget.id);
      block.processMove(clickedBlock, game, score);
    }, true);
    setTimeout(() => block.div.classList.remove('init'), 1);
    blocks.push(block);
  });
  score.marbles = blocks.filter(item => item.state !== 'blank');
  window.scrollTo(0,0);
  // score.moves = 1;
  // score.timer = 10;
  // score.updateScore()
  // score.submit();
}

startGame();

function toggleHelp(state) {
  helpDisplay.classList[state]('show');
}