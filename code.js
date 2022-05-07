const dotSize  = {width:3, height: 3}
const frameSize  = {width:720, height: 510}
const gridSize  = {width:144, height: 102}

let dotPos  = {left:0, right: 10, top: 400, bottom: 50}
let framePos  = {left:0, right: 50, top: 0, bottom: 50}

const startPixel = {width:72, height: 54}
const lastPixel = {x: gridSize.width / 2, y: gridSize.height / 2}
const lastDial = {x: 100, y: 80}

const setPixel = () =>{
  const pixelID = `${lastPixel.x}-${lastPixel.y}`;
  
  const pixel  = document.getElementById(pixelID);
  pixel.classList.add('drawn');
}

const setVerticalPosition = (y) =>{
  
  if (y == lastDial.y) return;

  y > lastDial.y ? lastPixel.y++ : lastPixel.y--;
  lastDial.y=y; 
  setPixel();
}

const setHorizontalPosition = (x) =>{
  if (x == lastDial.x) return;

  x > lastDial.x ? lastPixel.x++ : lastPixel.x--;
  lastDial.x=x; 
  setPixel();
}

const onMoveHorizontal = (e) =>{
  setHorizontalPosition(e.value)  
}

const onMoveVertical = (e) =>{
  setVerticalPosition(e.value)
}

const createGrid = () =>{

  for (let y=(gridSize.height + 1); y > 1 ; y--){
    for (let x=1; x < (gridSize.width + 1); x++){

      const pixel = document.createElement('div')
      pixel.id = `${x}-${y}`
      pixel.className = 'pixel'
      frame.appendChild(pixel)
    }
  }
}

document.addEventListener('DOMContentLoaded', (event) => {

  const frame = document.getElementById("frame");

  createGrid();
  
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
      }

      createGrid();
    }
  })
});


