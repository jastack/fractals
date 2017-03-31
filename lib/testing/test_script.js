var canvas = document.getElementById('display');
var context = canvas.getContext('2d');

function getMousePos(sheet, evt) {
  var rect = sheet.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

canvas.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  setLimit(mousePos.x);
  }, false
);

const height = 420;
const width = 420;

const startingPoints = {
  p1: {
    x: 0,
    y: -150
  },
  p2: {
    x: 150,
    y: 100
  },
  p3: {
    x: -150,
    y: 100
  }
};

context.translate(.5*width, .5*height);

const koch = (a, b, limit = 3, line) => {
  let [dx, dy] = [b.x - a.x, b.y - a.y];
  let dist = Math.sqrt(dx * dx + dy * dy);
  let unit = dist / 3;
  let angle = Math.atan2(dy, dx);

  let p1 = {
    x: a.x + dx / 3,
    y: a.y + dy / 3
  };
  let p3 = {
    x: b.x - dx / 3,
    y: b.y - dy / 3
  };
  let p2 = {
    x: p1.x + Math.cos(angle - Math.PI / 3) * unit,
    y: p1.y + Math.sin(angle - Math.PI / 3) * unit
  };

  if (limit > 0){
    koch(a, p1, limit - 1, line);
    koch(p1, p2, limit - 1, line);
    koch(p2, p3, limit - 1, line);
    koch(p3, b, limit - 1, line);
  } else {
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.lineTo(b.x, b.y);
    context.lineWidth = line;
    context.strokeStyle = "#1E90FF";
    // context.shadowColor = '#999';
    // context.shadowBlur = 20;
    // context.shadowOffsetX = 15;
    // context.shadowOffsetY = 15;
    context.stroke();
  }
};

const setLimit = (xPos) => {
  if (xPos < 60) {
    drawShape(0, 5);
  } else if (xPos < 120) {
    drawShape(1, 4);
  } else if (xPos < 180) {
    drawShape(2, 3);
  } else if (xPos < 240) {
    drawShape(3, 2);
  } else if (xPos < 300) {
    drawShape(4, 1);
  } else if (xPos < 360) {
    drawShape(5, .75);
  } else if (xPos < 420) {
    drawShape(6, .5);
  }
};

function drawShape(limit, line){
  context.clearRect(-width / 2, height / -2, width, height);
  koch(startingPoints.p1, startingPoints.p2, limit, line);
  koch(startingPoints.p2, startingPoints.p3, limit, line);
  koch(startingPoints.p3, startingPoints.p1, limit, line);
}
