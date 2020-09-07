const container = document.querySelector('.container');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let index = 0;
const blocks = [];
const rl = rowLength;
while (index < rl * rl) {
  const block = {}
  block.div = document.createElement('div');
  block.div.classList.add('block');
  block.div.id = index + 1;
  block.x = index % rl + 1;
  block.y = Math.floor(index / rl) + 1;
  block.blank = false;
  block.available = false;
  if (isAvailable(index, rowLength)) {
    block.div.classList.add('available');
    block.available = true;
  }
  if (isBlank(index, rowLength)) {
    block.div.classList.add('blank');
    block.blank = true;
  } else {
    const marble = document.createElement('div');
    block.available ? marble.classList.add('marble-hole') : marble.classList.add('marble');
    block.div.appendChild(marble);
  }
  container.appendChild(block.div);
  blocks.push(block);
  index++;
}

function isBlank(index, rowLength) {
  const i = index, rl = rowLength;
  return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
}

function isAvailable(index, rowLength) {
  const i = index, rl = rowLength;
  return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
}

function isValidMove(block) {
  if (block.blank) return false;
  // const id = Number(block.div.id)
  // const valid = id % rl > 2 && id % rl + 2 <= Number(rl);
  // console.log({valid});
}

blocks.forEach(item => {
  item.div.addEventListener('click', (e) => {
    const block = blocks.find(bl => bl.div.id == e.currentTarget.id);
    isValidMove(block);
    if (!block.blank) block.div.classList.toggle('active');
  }, true);
})