const container = document.querySelector('.container');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let counter = 0;
while (counter++ < rowLength * rowLength) {
  const block = document.createElement('div');
  block.classList.add('block');
  container.appendChild(block);
}