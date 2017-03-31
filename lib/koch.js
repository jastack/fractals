var canvas = document.getElementById('display');
var ctxOne = canvas.getContext('2d');

function getMousePos(sheet, evt) {
  var rect = sheet.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  snowflake.setLimit(mousePos.x);
  }, false
);


const height = 380;
const width = 380;

const entryPoints = {
  pOne: {
    x: 0,
    y: -140
  },
  pTwo: {
    x: 140,
    y: 100
  },
  pThree: {
    x: -140,
    y: 100
  }
};

ctxOne.translate(.5*width, .5*height);

class Koch {
  constructor(originalPoints, color, xPos){
    this.color = color;
    this.xPos = xPos;
    this.originalPoints = originalPoints;
    this.setLimit = this.setLimit.bind(this);
    this.calcKoch = this.calcKoch.bind(this);
    this.drawShape = this.drawShape.bind(this);
  }

  toggleColorBlue(){
    this.color = "#1E90FF";
    this.setLimit(this.xPos);
  }

  toggleColorOrange(){
    this.color = '#E2694F';
    this.setLimit(this.xPos);
  }

  toggleColorGreen(){
    this.color = '#228B22';
    this.setLimit(this.xPos);
  }

  toggleColorGold(){
    this.color = '#DAA520';
    this.setLimit(this.xPos);
  }

  calcKoch(a, b, limit = 3, line){
    let [dx, dy] = [b.x - a.x, b.y - a.y];
    let distance = Math.sqrt(dx * dx + dy * dy);
    let unit = distance / 3;
    let angle = Math.atan2(dy, dx);

    let pOne = {
      x: a.x + dx / 3,
      y: a.y + dy / 3
    };
    let pThree = {
      x: b.x - dx / 3,
      y: b.y - dy / 3
    };
    let pTwo = {
      x: pOne.x + Math.cos(angle - Math.PI / 3) * unit,
      y: pOne.y + Math.sin(angle - Math.PI / 3) * unit
    };

    if (limit > 0){
      this.calcKoch(a, pOne, limit - 1, line, this.color);
      this.calcKoch(pOne, pTwo, limit - 1, line, this.color);
      this.calcKoch(pTwo, pThree, limit - 1, line, this.color);
      this.calcKoch(pThree, b, limit - 1, line, this.color);
    } else {
      ctxOne.lineJoin = 'round';
      ctxOne.lineWidth = line;
      ctxOne.strokeStyle = this.color;
      ctxOne.save();

      ctxOne.beginPath();
      ctxOne.moveTo(a.x, a.y);
      ctxOne.lineTo(pOne.x, pOne.y);
      ctxOne.lineTo(pTwo.x, pTwo.y);
      ctxOne.lineTo(pThree.x, pThree.y);
      ctxOne.lineTo(b.x, b.y);
      // ctxOne.shadowColor = '#999';
      // ctxOne.shadowBlur = 10;
      // ctxOne.shadowOffsetX = 5;
      // ctxOne.shadowOffsetY = 5;
      ctxOne.stroke();
    }
  }

  setLimit(xPos){
    if (xPos < 60) {
      this.xPos = xPos;
      this.drawShape(0, 5);
    } else if (xPos < 120) {
      this.xPos = xPos;
      this.drawShape(1, 4);
    } else if (xPos < 180) {
      this.xPos = xPos;
      this.drawShape(2, 3);
    } else if (xPos < 240) {
      this.xPos = xPos;
      this.drawShape(3, 2);
    } else if (xPos < 300) {
      this.xPos = xPos;
      this.drawShape(4, 1);
    } else if (xPos < 360) {
      this.xPos = xPos;
      this.drawShape(5, .75);
    } else if (xPos < 420) {
      this.xPos = xPos;
      this.drawShape(6, .5);
    }
  }

  drawShape(limit, line){
    ctxOne.clearRect(-width / 2, height / -2, width, height);
    this.calcKoch(this.originalPoints.pOne, this.originalPoints.pTwo, limit, line, this.color);
    this.calcKoch(this.originalPoints.pTwo, this.originalPoints.pThree, limit, line, this.color);
    this.calcKoch(this.originalPoints.pThree, this.originalPoints.pOne, limit, line, this.color);
  }
}

const xSpot = 0;
const colorBlue = "#1E90FF";
const snowflake = new Koch(entryPoints, colorBlue, xSpot);
snowflake.drawShape(0, 5);
