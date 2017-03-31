var canvasOne = document.getElementById('mandle');
var ctx = canvasOne.getContext('2d');


const xConstant = 0;
const yConstant = 0;




class Mandlebrot {
  constructor(color, zoom, xShift, yShift, iterations){
    this.inSet = this.inSet.bind(this);
    this.color = color;
    this.zoom = zoom;
    this.xShift = xShift;
    this.yShift = yShift;
    this.iterations = iterations;
    this.setColor = this.setColor.bind(this);
  }

  inSet(x, y){
    const xConst = x;
    const yConst = y;
    for (var i = 0; i < this.iterations; i++) {
      let nextX = (x*x - y*y + xConst);
      let nextY = (2*x*y + yConst);
      if (nextX > 4 || nextY > 4) {
        return (i/this.iterations * 100);
      } else {
        x = nextX;
        y = nextY;
      }
    }
    return 0;
  }

  updateZoom(value){
    this.zoom = value;
    this.drawFractal();
  }

  updateX(value){
    this.xShift = value;
    this.drawFractal();
  }

  updateY(value){
    this.yShift = value;
    this.drawFractal();
  }

  updateRes(value){
    this.iterations = value;
    this.drawFractal();
  }

  setColor(newColor){
    this.color = newColor;
    this.drawFractal();
  }

  drawFractal(){
    for (var xPos = 0; xPos < 380; xPos++) {
      for (var yPos = 0; yPos < 380; yPos++) {
        const saturation = this.inSet(xPos/this.zoom - this.xShift, yPos/this.zoom - this.yShift);
        if (saturation > 0) {
          ctx.fillStyle = 'hsl(' + this.color + ', 100%, ' + saturation + '% )';
          ctx.fillRect(xPos, yPos, 1, 1);
        } else {
          ctx.fillStyle = '#000';
          ctx.fillRect(xPos, yPos, 1, 1);
        }
      }
    }
  }
}

const mand = new Mandlebrot(207, 150, 1.7 , 1.3, 100);
mand.drawFractal();
