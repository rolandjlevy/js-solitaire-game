export class Block {
  constructor({div, x, y, state}) {
    this.div = div;
    this.x = x;
    this.y = y;
    this.state = state;
  }
  init(index) {
    if (game.isBlank(index)) {
      this.state = 'blank';
    } else {
      if (game.isEmpty(index)) this.state = 'empty';
      const marble = document.createElement('div');
      marble.classList.add('marble');
      this.div.appendChild(marble);
    }
    this.div.classList.add('block', 'fade-in', this.state);
  }
  handleClickEvent(score) {
    this.div.addEventListener('mousedown', (e) => {
      const clickedBlock = blocks.find(bl => bl.div.id == e.currentTarget.id);
      this.processMove(clickedBlock, score);
    }, true);
  }
  processMove(block, score) {
    if (game.origin) {
      if (game.origin.div.id == block.div.id) {
        block.div.classList.remove('active');
        game.origin = null;
      } else {
        const marbleToTake = this.isValidTake({target:block, blocks});
        if (marbleToTake) {
          this.takeMarble({target:block, blocks, marbleToTake});
          game.origin = null;
          sound.init('sounds/whoosh.mp3');
          score.movesDisplay.textContent = ++score.moves;
        }
      }
    } else {
      if (block.state != 'filled') return;
      sound.init('sounds/click.mp3');
      block.div.classList.add('active');
      game.origin = block;
    }
  }
  isValidTake({target, blocks}) {
    if (target.state !== 'empty') return false;
    const orig = game.origin;
    if (target.y == orig.y && Math.abs(target.x - orig.x) % 2 == 0) {
      const midHorizId = Number(orig.div.id) + (orig.x < target.x ? 1 : -1);
      const midHoriz = blocks.find(item => item.div.id == midHorizId);
      if (midHoriz.state == 'filled') return midHoriz;
    }
    if (target.x == orig.x && Math.abs(target.y - orig.y) % 2 == 0) {
      const midVertId = Number(orig.div.id) + game.rowLength * (orig.y < target.y ? 1 : -1);
      const midVert = blocks.find(item => item.div.id == midVertId);
      if (midVert.state == 'filled') return midVert;
    }
    return false;
  }
  takeMarble({target, blocks, marbleToTake}) {
    game.origin.div.classList.remove('active');
    game.origin.div.classList.remove('filled');
    game.origin.div.classList.add('empty');
    const originBlock = blocks.find(item => item.div.id == game.origin.div.id);
    originBlock.state = 'empty';
    target.div.classList.remove('empty');
    target.div.classList.add('filled');
    const targetBlock = blocks.find(item => item.div.id == target.div.id);
    targetBlock.state = 'filled';
    marbleToTake.div.classList.remove('filled');
    marbleToTake.div.classList.add('empty');
    const marbleToTakeBlock = blocks.find(item => item.div.id == marbleToTake.div.id);
    marbleToTakeBlock.state = 'empty';
  }
}