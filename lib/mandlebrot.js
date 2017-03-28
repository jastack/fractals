var canvas = document.getElementById('display');
var ctx = canvas.getContext('2d');


const iterations = 100;
const xConstant = 0;
const yConstant = 0;
let color = 207;

const zoom = 200;
const xShift = 400;
const yShift = 300;


function inSet(x, y){
  const xConst = x;
  const yConst = y;
  for (var i = 0; i < iterations; i++) {
    let nextX = (x*x - y*y + xConst);
    let nextY = (2*x*y + yConst);
    if (nextX > 4 || nextY > 4) {
      return (i/iterations * 100);
    } else {
      x = nextX;
      y = nextY;
    }
  }
  return 0;
}

for (var xPos = 0; xPos < 600; xPos++) {
  for (var yPos = 0; yPos < 600; yPos++) {
    const saturation = inSet((xPos - xShift)/zoom, (yPos - yShift)/zoom);
    if (saturation > 0) {
      ctx.fillStyle = 'hsl(' + color + ', 100%, ' + saturation + '% )';
      ctx.fillRect(xPos, yPos, 1, 1);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillRect(xPos, yPos, 1, 1);
    }
  }
}
