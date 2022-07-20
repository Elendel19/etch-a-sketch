const container = document.querySelector('.container');
const gridBlock = document.createElement('div');
gridBlock.classList.add('gridBlock');
const gridBlocks = document.querySelectorAll('.gridBlock')
const buttons = document.querySelectorAll('.button')
const setSize = document.querySelector('.setSize');

setSize.addEventListener('click', () => {
   let userInput = prompt('Enter a number between 1-100')
   if (userInput < 101 && userInput > 0) {
    boardSize = userInput
   } else {
    alert('Invalid number')
   };
   resetBoard();
   drawBoard(boardSize)
});

buttons.forEach(button => button.addEventListener('mouseenter', () => {
   button.style.transform = 'scale(1.1)' 
 }));
buttons.forEach(button => button.addEventListener('mouseleave', () => {
    button.style.transform = null;
  }));


let boardSize = 24;

function resetBoard() {
    document.querySelectorAll('.gridBlock').forEach(block => {
    block.style.backgroundColor = null
   })
};

function drawBoard(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let blockClone = gridBlock.cloneNode();
        container.appendChild(blockClone);
        blockClone.addEventListener('mouseover', (e) => {
            
            blockClone.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        })}};


        drawBoard(boardSize)
