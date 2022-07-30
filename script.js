const slider = document.querySelector('.slider');
const sizeText = document.querySelector('.sizeText');
const container = document.querySelector('.container');
const gridBlock = document.createElement('div');
gridBlock.classList.add('gridBlock');
const gridBlocks = document.querySelectorAll('.gridBlock');
const buttons = document.querySelectorAll('.button');
const reset = document.querySelector('.reset');
const blackPen = document.querySelector('.black');
const pencil = document.querySelector('.pencil');
const rainbowPen = document.querySelector('.rainbow');

sizeText.textContent = `${slider.value}x${slider.value}`;

let color = 1;
let rainbow = '';
let black = '';
let boardSize = 24;

slider.addEventListener('change', () => {
  boardSize = slider.value;
  sizeText.textContent = `${slider.value}x${slider.value}`;
  resetBoard();
  drawBoard(boardSize);
});

reset.addEventListener('click', () => {
  resetBoard();
});

pencil.addEventListener('click', () => {
  resetBoard()
  color = 3;
});

blackPen.addEventListener('click', () => {
  resetBoard()
  color = 2;
});

rainbowPen.addEventListener('click', () => {
  resetBoard()
  color = 1;
});

buttons.forEach(button => button.addEventListener('mouseenter', () => {
   button.style.transform = 'scale(1.2)' 
 }));
buttons.forEach(button => button.addEventListener('mouseleave', () => {
    button.style.transform = null;
  }));
buttons.forEach(button => button.addEventListener('click', () => {
  button.style.transform = 'scale(1.4)'
  setTimeout(() => {
    button.style.transform = null
  }, 150);
  }));

function resetBoard() {
  let children = container.children; 
  for (let i = 0; i < children.length; i++) {
    if (children[i].tagName === "DIV") {
      children[i].style.backgroundColor = null;
    }
  }
    drawBoard(boardSize);
};

function randomColor() {
  return Math.floor(Math.random() * 255)
  };

function drawBoard(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let blockClone = gridBlock.cloneNode();
        container.appendChild(blockClone);
        let shade = 10
        let pencil = ''
        blockClone.addEventListener('mouseover', (e) => {
         rainbow = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
         black = '#000000';
         shade += 10
         pencil = `${shade}%`
            if (color === 1) {
              blockClone.style.backgroundColor = rainbow
            } else if (color === 2) {
              blockClone.style.backgroundColor = black
            } else if (color === 3) {
              blockClone.style.backgroundColor = black
              blockClone.style.filter = `opacity(${pencil})`
            }
        })}};

window.onload = drawBoard(24);
        
