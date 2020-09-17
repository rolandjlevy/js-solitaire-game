import { Block } from './src/Block.js';
import { Game } from './src/Game.js';
import { Score } from './src/Score.js';
import { Sound } from './src/Sound.js';

const body = document.querySelector('body');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

window.startGame = function() {
  window.blocks = [];
  window.sound = new Sound();
  window.score = new Score({rowLength, maxTime:100});
  const game = new Game(rowLength);
  game.createDivs();
  game.divs.forEach((div, index) => {
    const block = new Block({
      div,
      x: index % rowLength + 1,
      y: Math.floor(index / rowLength) + 1,
      state: 'filled'
    });
    if (game.isBlank(index)) {
      block.state = 'blank';
    } else {
      if (game.isEmpty(index)) block.state = 'empty';
      block.addMarble();
    }
    block.div.classList.add('block', 'init', block.state);
    block.div.addEventListener('mousedown', (e) => {
      const clickedBlock = blocks.find(bl => bl.div.id == e.currentTarget.id);
      block.processMove(clickedBlock, game, score);
    }, true);
    setTimeout(() => block.div.classList.remove('init'), 1);
    blocks.push(block);
  });
  score.marbles = blocks.filter(item => item.state !== 'blank');
  window.scrollTo(0,0);
}

const helpDisplay = document.querySelector('.help');

window.toggleHelp = function(state) {
  helpDisplay.classList[state]('show');
}

startGame();