const container = document.querySelector('.container');

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
    const marble = document.createElement('div');
    if (isEmpty(index, rowLength)) {
      block.state = 'empty';
      marble.classList.add('marble-none');
    } else {
      marble.classList.add('marble');
    }
    block.div.appendChild(marble);
  }
  block.div.classList.add(block.state);

  container.appendChild(block.div);
  blocks.push(block);
  index++;
}

blocks.forEach(item => {
  item.div.addEventListener('click', (e) => {
    const block = blocks.find(bl => bl.div.id == e.currentTarget.id);
    isValidMove(block);
  }, true);
});

function isValidMove(block) {
  if (!block.active && !origin) {
    block.active = true;
    block.div.classList.add('active');
    origin = block;
  } else {
    if (origin.id == block.id) {
      block.active = false;
      block.div.classList.remove('active');
      origin = null;
    }
  }
  // const target = block;
  // if (block.state == 'empty') {
  //   console.log({origin, target});
  // }
  // const id = Number(block.div.id)
  // const valid = id % rl > 2 && id % rl + 2 <= Number(rl);
  // console.log({valid});
}

function isBlank(index, rowLength) {
  const i = index, rl = rowLength;
  return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
}

function isEmpty(index, rowLength) {
  const i = index, rl = rowLength;
  return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
}