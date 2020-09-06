const container = document.querySelector('.container');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let index = 0;
const rl = rowLength;
while (index < rl * rl) {
  const block = document.createElement('div');
  block.classList.add('block');
  block.id = index + 1;
  block.x = index % rl + 1;
  block.y = Math.floor(index / rl) + 1;
  if ((index % rl < 2 || index % rl >= rl - 2) 
    && (Math.floor(index / rl) < 2 || Math.floor(index / rl) >= rl - 2)) {
    block.classList.add('blank');
    block.blank = true;
  }
  if (index % rl == Math.floor(rl / 2) && Math.floor(index / rl) == Math.floor(rowLength / 2)) {
    block.classList.add('available');
    block.available = true;
  }
  block.addEventListener('click', (e) => {
    const block = e.target;
    block.classList.toggle('active');
    const { id, blank, available, x, y } = block;
    console.log({ id, blank, available, x, y });
  });
  container.appendChild(block);
  index++;
}