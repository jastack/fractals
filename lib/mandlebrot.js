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
    this.changeColor = this.changeColor.bind(this);
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

  toggleColor(){
    if (this.color === 207) {
      this.color = 0;
      this.drawFractal();
    } else {
      this.color = 207;
      this.drawFractal();
    }
  }

  changeColor(){
    var elem = document.getElementById('body');
    elem.style.backgroundColor = 'black';
    var header = document.getElementById('title');
    header.style.color = '#FFF';
  }

  changeButtons(){
    var elems = document.getElementsByTagName('button');
    elems[0].style.color = '#FFF';
    elems[1].style.color = '#FFF';
    elems[2].style.color = '#FFF';
  }

  changeOpacity(){
    var elem = document.getElementById('display');
    elem.style.opacity = '1';
  }

  fadeOut(){
    var snowflake = document.getElementById('display');
    snowflake.style.opacity = '0';
    var tri = document.getElementById('displayTwo');
    tri.style.opacity = '0';
  }

  fadeIn(){
    var elem = document.getElementById('mandle');
    elem.style.opacity = '1';
  }

  changeStyles(){
    this.changeColor();
    this.changeButtons();
    this.fadeOut();
    setTimeout(this.fadeIn(), 3000);
  }

  drawFractal(){

    for (var xPos = 0; xPos < 900; xPos++) {
      for (var yPos = 0; yPos < 1000; yPos++) {
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




const mand = new Mandlebrot(207, 400, 1.7 , 1.1, 100);
mand.drawFractal();
