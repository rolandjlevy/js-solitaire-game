const container = document.querySelector('.container');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let index = 0;
const blocks = [];
const rl = rowLength;

while (index < rl * rl) {

  const block = {
    div: document.createElement('div'),
    x: index % rl + 1,
    y: Math.floor(index / rl) + 1,
    state: 'filled'
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
    if (block.state == 'filled') {
      block.div.classList.toggle('active');
    }
  }, true);
});

console.log(blocks);

function isBlank(index, rowLength) {
  const i = index, rl = rowLength;
  return (i % rl < 2 || i % rl >= rl - 2) && (Math.floor(i / rl) < 2 || Math.floor(i / rl) >= rl - 2);
}

function isEmpty(index, rowLength) {
  const i = index, rl = rowLength;
  return i % rl == Math.floor(rl / 2) && Math.floor(i / rl) == Math.floor(rl / 2);
}

function isValidMove(block) {
  if (block.state == 'blank') return false;
  // const id = Number(block.div.id)
  // const valid = id % rl > 2 && id % rl + 2 <= Number(rl);
  // console.log({valid});
}