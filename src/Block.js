class Block {
  constructor({div, x, y, state}) {
    this.div = div;
    this.x = x;
    this.y = y;
    this.state = state;
  }
  processMove(block, game, score) {
    if (game.origin) {
      if (game.origin.div.id == block.div.id) {
        block.div.classList.remove('active');
        game.origin = null;
      } else {
        const marbleToTake = this.isValidTake({game, target:block, blocks});
        if (marbleToTake) {
          this.takeMarble({game, target:block, blocks, marbleToTake});
          game.origin = null;
          score.movesDisplay.textContent = ++score.moves;
        }
      }
    } else {
      if (block.state != 'filled') return;
      block.div.classList.add('active');
      game.origin = block;
    }
  }
  isValidTake({game, target, blocks}) {
    if (target.state !== 'empty') return false;
    const orig = game.origin;
    if (target.y == orig.y && Math.abs(target.x - orig.x) % 2 == 0) {
      const midHorizId = Number(orig.div.id) + (orig.x < target.x ? 1 : -1);
      const midHoriz = blocks.find(item => item.div.id == midHorizId);
      if (midHoriz.state == 'filled') return midHoriz;
    }
    if (target.x == orig.x && Math.abs(target.y - orig.y) % 2 == 0) {
      const midVertId = Number(orig.div.id) + rowLength * (orig.y < target.y ? 1 : -1);
      const midVert = blocks.find(item => item.div.id == midVertId);
      if (midVert.state == 'filled') return midVert;
    }
    return false;
  }
  takeMarble({game, target, blocks, marbleToTake}) {
    game.origin.div.classList.remove('active');
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