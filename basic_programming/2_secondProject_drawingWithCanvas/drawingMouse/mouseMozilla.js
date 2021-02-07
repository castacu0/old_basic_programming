var stade = false; // estado del click
var x = 0; // it keeps the coordinate in X
var y = 0;
var theHtml = document.getElementById('dibujito');
var paper = theHtml.getContext('2d');

//3 events
theHtml.addEventListener('mousedown', eventuki => {
  x = eventuki.offsetX; //screenX or layerX
  y = eventuki.offsetY;
  stade = true;
  console.log(eventuki);
});  //down

//stade is false, but if it is true, move it
theHtml.addEventListener('mousemove', eventuki => {
  if (stade == true) {
    drawLine(paper, x, y, eventuki.offsetX, eventuki.offsetY);
    x = eventuki.offsetX;
    y = eventuki.offsetY;
  }
}); //move

window.addEventListener('mouseup', eventuki => {
  if (stade == true) {
    drawLine(paper, x, y, eventuki.offsetX, eventuki.offsetY);
    x = 0;
    y = 0;
    stade = false;
  }
}); //up

function drawLine(colour, xi, yi, xf, yf,) {
  paper.beginPath();
  paper.strokeStyle = colour; //
  paper.lineWidth = 3;
  paper.moveTo(xi, yi);
  paper.lineTo(xf, yf);
  paper.stroke();
  paper.closePath();
}
drawLine("green",0,0,600,0, theHtml);
drawLine("yellow",600,0,600,350, theHtml);
drawLine("red",0,0,0,350, theHtml);
drawLine("black",0,350,600,350, theHtml); //You-re changing the color
