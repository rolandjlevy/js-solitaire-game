const container = document.querySelector('.container');
const helpDisplay = document.querySelector('.help');
const movesDisplay = document.querySelector('.moves-display');
const timerDisplay = document.querySelector('.timer-display');
const scoreDisplay = document.querySelector('.score-display');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

const rl = rowLength;
let blocks = [];
let moves = 0;;
let timer = 100;
let origin = null;
let index = 0;

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
  block.div.classList.add('block');
  if (isBlank(index, rowLength)) {
    block.state = 'blank';
  } else {
    if (isEmpty(index, rowLength)) block.state = 'empty';
    const marble = document.createElement('div');
    marble.classList.add('marble');
    block.div.appendChild(marble);
  }
  block.div.classList.add(block.state);
  block.div.classList.add('init');
  container.appendChild(block.div);
  blocks.push(block);
  index++;
}

// blocks are at top level, in script.js global scope
setTimeout(() => {
  blocks.forEach(item => {
    item.div.classList.remove('init');
    item.div.addEventListener('click', (e) => {
      const block = blocks.find(bl => bl.div.id == e.currentTarget.id);
      processMove(block);
    }, true);
  });
}, 1);

// part of Score object
const timerID = setInterval(() => {
  const paddedTimer = String(timer).padStart(2, '0');
  timerDisplay.textContent = paddedTimer;
  scoreDisplay.textContent = (moves * timer).toLocaleString();
  if (timer == 0) clearInterval(timerID);
  timer--;
}, 1000);

function processMove(block) {
  if (origin) {
    if (origin.div.id == block.div.id) {
      block.div.classList.remove('active');
      origin = null;
    } else {
      const target = block;
      const taken = isValidTake(origin, target);
      if (taken) {
        take(origin, target, taken);
        origin = null;
        moves++;
        movesDisplay.textContent = moves;
      }
    }
  } else {
    if (block.state != 'filled') return;
    block.div.classList.add('active');
    origin = block;
  }
}

function isValidTake(origin, target) {
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

function take(origin, target, taken) {
  origin.div.classList.remove('active');
  origin.div.classList.add('empty');
  originBlock = blocks.find(item => item.div.id == origin.div.id);
  originBlock.state = 'empty';
  target.div.classList.remove('empty');
  target.div.classList.add('filled');
  targetBlock = blocks.find(item => item.div.id == target.div.id);
  targetBlock.state = 'filled';
  taken.div.classList.remove('filled');
  taken.div.classList.add('empty');
  takenBlock = blocks.find(item => item.div.id == taken.div.id);
  takenBlock.state = 'empty';
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