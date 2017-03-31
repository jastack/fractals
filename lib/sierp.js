var canvasTwo = document.getElementById('displayTwo');
var ctxTwo = canvasTwo.getContext('2d');

ctxTwo.translate(.5*canvasTwo.width, .5*canvasTwo.width);

function getMousePos(sheet, evt) {
  var rect = sheet.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvasTwo.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvasTwo, evt);
  triangle.setLimit(mousePos.x);
  }, false
);

const triOuter = {
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

class Sierpinski {
  constructor(startingPoints, color, xPos){
    this.startingPoints = startingPoints;
    this.xPos = xPos;
    this.color = color;
    this.midpoint = this.midpoint.bind(this);
    this.sierp = this.sierp.bind(this);
    this.setLimit = this.setLimit.bind(this);
    this.drawShape = this.drawShape.bind(this);
    this.drawFirst = this.drawFirst.bind(this);
  }

  midpoint(pointA, pointB){
    const xCoordA = pointA.x;
    const yCoordA = pointA.y;
    const xCoordB = pointB.x;
    const yCoordB = pointB.y;

    const xMid = (xCoordB + xCoordA) / 2;
    const yMid = (yCoordB + yCoordA) / 2;

    return {x: xMid, y: yMid};
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

  sierp(a, b, c, limit = 3, line){
    let triA = {
      top: a,
      right: this.midpoint(a, b),
      left: this.midpoint(a, c)
    };

    let triB = {
      top: this.midpoint(a, b),
      right: b,
      left: this.midpoint(b, c)
    };

    let triC = {
      top: this.midpoint(a, c),
      right: this.midpoint(b, c),
      left: c
    };

    let mids = {
      first: this.midpoint(a, b),
      second: this.midpoint(b, c),
      third: this.midpoint(a, c)
    };

    if (limit > 0){
      this.sierp(triA.top, triA.right, triA.left, limit - 1, line, this.color);
      this.sierp(triB.top, triB.right, triB.left, limit - 1, line, this.color);
      this.sierp(triC.top, triC.right, triC.left, limit - 1, line, this.color);
    } else {
        ctxTwo.beginPath();
        ctxTwo.moveTo(a.x, a.y);
        ctxTwo.lineTo(b.x, b.y);
        ctxTwo.lineTo(c.x, c.y);
        ctxTwo.lineTo(a.x, a.y);
        ctxTwo.lineWidth = line;
        ctxTwo.strokeStyle = this.color;
        // ctxTwo.shadowColor = '#999';
        // ctxTwo.shadowBlur = 20;
        // ctxTwo.shadowOffsetX = 15;
        // ctxTwo.shadowOffsetY = 15;
        ctxTwo.stroke();

        ctxTwo.beginPath();
        ctxTwo.moveTo(mids.first.x, mids.first.y);
        ctxTwo.lineTo(mids.second.x, mids.second.y);
        ctxTwo.lineTo(mids.third.x, mids.third.y);
        ctxTwo.lineTo(mids.first.x, mids.first.y);
        ctxTwo.lineWidth = line;
        ctxTwo.strokeStyle = this.color;
        // ctxTwo.shadowColor = '#999';
        // ctxTwo.shadowBlur = 20;
        // ctxTwo.shadowOffsetX = 15;
        // ctxTwo.shadowOffsetY = 15;
        ctxTwo.stroke();
    }
  }

  setLimit(xPos){
    if (xPos < 60) {
      this.xPos = xPos;
      this.drawFirst();
    } else if (xPos < 120) {
      this.xPos = xPos;
      this.drawShape(0, 4);
    } else if (xPos < 180) {
      this.xPos = xPos;
      this.drawShape(1, 3);
    } else if (xPos < 240) {
      this.xPos = xPos;
      this.drawShape(2, 2);
    } else if (xPos < 300) {
      this.xPos = xPos;
      this.drawShape(3, 1);
    } else if (xPos < 360) {
      this.xPos = xPos;
      this.drawShape(4, 1);
    } else if (xPos < 420) {
      this.xPos = xPos;
      this.drawShape(5, 1);
    }
  }

  drawShape(limit, line){
    ctxTwo.clearRect(-210, -210, 420, 420);
    this.sierp(this.startingPoints.pOne, this.startingPoints.pTwo, this.startingPoints.pThree, limit, line, this.color);
  }

  drawFirst(){
    ctxTwo.clearRect(-210, -210, 420, 420);
    ctxTwo.lineJoin = 'round';
    ctxTwo.beginPath();
    ctxTwo.moveTo(this.startingPoints.pOne.x, this.startingPoints.pOne.y);
    ctxTwo.lineTo(this.startingPoints.pTwo.x, this.startingPoints.pTwo.y);
    ctxTwo.lineTo(this.startingPoints.pThree.x, this.startingPoints.pThree.y);
    ctxTwo.lineTo(this.startingPoints.pOne.x, this.startingPoints.pOne.y);
    ctxTwo.strokeStyle = this.color;
    // ctxTwo.shadowColor = '#999';
    // ctxTwo.shadowBlur = 10;
    // ctxTwo.shadowOffsetX = 5;
    // ctxTwo.shadowOffsetY = 5;
    ctxTwo.lineWidth = 5;
    ctxTwo.stroke();
  }


}

const color = '#E2694F';
const xPos = 0;
const triangle = new Sierpinski(triOuter, color, xPos);
triangle.drawFirst();
