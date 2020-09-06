const container = document.querySelector('.container');

const body = document.querySelector('body');
const blockSize = getComputedStyle(body).getPropertyValue('--block-size');
const rowLength = getComputedStyle(body).getPropertyValue('--row-length');

let index = 0;
while (index < rowLength * rowLength) {
  const block = document.createElement('div');
  block.classList.add('block');
  if (
  (index % rowLength < 2 || index % rowLength >= rowLength - 2)
   && (Math.floor(index / rowLength) < 2 || Math.floor(index / rowLength) >= rowLength - 2)
   || (index % rowLength == Math.floor(rowLength / 2) && Math.floor(index / rowLength) == Math.floor(rowLength / 2)
  )) {
    block.classList.add('blank');
  }
  container.appendChild(block);
  index++;
}