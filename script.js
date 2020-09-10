// global scope
const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');
const container = document.querySelector('.container');
const helpDisplay = document.querySelector('.help');

const rl = rowLength; // global scope
let blocks = []; // global scope
const score = new Score({maxTime:100}); // global scope

let origin = null; // Block object
let index = 0;

// work out how grid is created and how blocks is iterated
while (index < rl * rl) {
  // instantiate new Block({x, y})
  const block = {
    div: document.createElement('div'),
    x: index % rl + 1,
    y: Math.floor(index / rl) + 1,
    state: 'filled',
    active: false
  }
  block.div.id = index + 1;
  if (isBlank(index, rowLength)) {
    block.state = 'blank';
  } else {
    if (isEmpty(index, rowLength)) block.state = 'empty';
    const marble = document.createElement('div');
    marble.classList.add('marble');
    block.div.appendChild(marble);
  }
  block.div.classList.add('block', 'init', block.state);
  container.appendChild(block.div);
  blocks.push(block);
  index++;
}

// blocks array is global scope, in script.js
const initBlocks = setTimeout(() => {
  blocks.forEach(item => {
    item.div.classList.remove('init');
    item.div.addEventListener('click', (e) => {
      const block = blocks.find(bl => bl.div.id == e.currentTarget.id);
      processMove(block, score);
    }, true);
  });
}, 1);

// part of Block object
function processMove(block, score) {
  if (origin) {
    if (origin.div.id == block.div.id) {
      block.div.classList.remove('active');
      origin = null;
    } else {
      const marbleToTake = isValidTake({origin, target:block, blocks});
      if (marbleToTake) {
        takeMarble({origin, target:block, blocks, marbleToTake});
        origin = null;
        score.moves++;
        score.movesDisplay.textContent = score.moves;
      }
    }
  } else {
    if (block.state != 'filled') return;
    block.div.classList.add('active');
    origin = block;
  }
}

// part of Block object
function isValidTake({origin, target, blocks}) {
  if (target.state !== 'empty') return false;
  if (target.y == origin.y && Math.abs(target.x - origin.x) % 2 == 0) {
    const middleHorizId = Number(origin.div.id) + (origin.x < target.x ? 1 : -1);
    const middleHoriz = blocks.find(item => item.div.id == middleHorizId);
    if (middleHoriz.state == 'filled') return middleHoriz;
  }
  if (target.x == origin.x && Math.abs(target.y - origin.y) % 2 == 0) {
    const middleVertId = Number(origin.div.id) + rowLength * (origin.y < target.y ? 1 : -1);
    const middleVert = blocks.find(item => item.div.id == middleVertId);
    if (middleVert.state == 'filled') return middleVert;
  }
  return false;
}

// part of Block object
function takeMarble({origin, target, blocks, marbleToTake}) {
  origin.div.classList.remove('active');
  origin.div.classList.add('empty');
  originBlock = blocks.find(item => item.div.id == origin.div.id);
  originBlock.state = 'empty';
  target.div.classList.remove('empty');
  target.div.classList.add('filled');
  targetBlock = blocks.find(item => item.div.id == target.div.id);
  targetBlock.state = 'filled';
  marbleToTake.div.classList.remove('filled');
  marbleToTake.div.classList.add('empty');
  marbleToTakeBlock = blocks.find(item => item.div.id == marbleToTake.div.id);
  marbleToTakeBlock.state = 'empty';
}

// part of Game object, createDivs
function isBlank(index, rowLength) {
  const i = index, rl = rowLength;
  return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
}

// part of Game object, createDivs
function isEmpty(index, rowLength) {
  const i = index, rl = rowLength;
  return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
}

function toggleHelp(state) {
  helpDisplay.classList[state]('show');
}