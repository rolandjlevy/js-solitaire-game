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
  if ((index % rl < 2 || index % rl >= rl - 2) 
    && (Math.floor(index / rl) < 2 || Math.floor(index / rl) >= rl - 2)) {
    block.div.classList.add('blank');
    block.blank = true;
  }
  if (index % rl == Math.floor(rl / 2) && Math.floor(index / rl) == Math.floor(rowLength / 2)) {
    block.div.classList.add('available');
    block.available = true;
  }
  block.div.addEventListener('click', (e) => {
    const block = e.target;
    block.classList.toggle('active');
    const { blank, available, x, y } = block;
    console.log(block.id, { blank, available, x, y });
  });
  container.appendChild(block.div);
  blocks.push(block);
  index++;
}

console.log({blocks})