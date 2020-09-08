const container = document.querySelector('.container');
const display = document.querySelector('.display');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let index = 0;
const blocks = [];
const rl = rowLength;
let origin = null;

while (index < rl * rl) {
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

setTimeout(() => {
  blocks.forEach(item => {
    item.div.classList.remove('init');
    item.div.addEventListener('click', (e) => {
      const block = blocks.find(bl => bl.div.id == e.currentTarget.id);
      processMove(block);
    }, true);
  });
}, 10);

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

function take(orig, target, taken) {
  orig.div.classList.remove('active');
  orig.div.classList.add('empty');
  origBlock = blocks.find(item => item.div.id == orig.div.id);
  origBlock.state = 'empty';
  origin = null;
  target.div.classList.remove('empty');
  target.div.classList.add('filled');
  targetBlock = blocks.find(item => item.div.id == target.div.id);
  targetBlock.state = 'filled';
  taken.div.classList.remove('filled');
  taken.div.classList.add('empty');
  takenBlock = blocks.find(item => item.div.id == taken.div.id);
  takenBlock.state = 'empty';
}

function isBlank(index, rowLength) {
  const i = index, rl = rowLength;
  return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
}

function isEmpty(index, rowLength) {
  const i = index, rl = rowLength;
  return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
}

function startGame() {
  console.log('startGame');
}

function toggleHelp(state) {
  console.log('toggleHelp:', state);
}