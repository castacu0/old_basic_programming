var stade = false; // = 0     estado del click
var colourLine = "white";
var x; // it keeps the coordinate in X
var y;

var area = document.getElementById('dibujito');
var paper = area.getContext('2d');

area.addEventListener('mousedown', pushMouse); //when pushing click
area.addEventListener('mouseup', leaveMouse); //when leaving click
area.addEventListener('mousemove', moveTheMouse); //when moving the mouse


//mousemove event and function
function moveTheMouse(theEvent){ //when you move the mouse
  if (stade === true){ // It will draw if click if being pressed
      drawLine(colourLine, x, y, theEvent.offsetX, theEvent.offsetY, paper);
  }
  x = theEvent.offsetX;
  y = theEvent.offsetY;
}

//mousedown event and function
function pushMouse(theEvent){ //when you click it
  stade = true; //1
  x = theEvent.offsetX;
  y = theEvent.offsetY;
}

//mouseup event and function
function leaveMouse(theEvent){ //when you leave it
  stade = false; //0
  x = theEvent.offsetX;
  y = theEvent.offsetY;
}

//the main function
function drawLine(colour, xi, yi, xf, yf, lienzo) {
  paper.beginPath();
  paper.strokeStyle = colour; //
  paper.lineWidth = 3;
  paper.moveTo(xi, yi);
  paper.lineTo(xf, yf);
  paper.stroke();
  paper.closePath();
}

//To drive the border
drawLine("black",0,0,600,0, area); //Top  //area
drawLine("black",600,0,600,400, area); //Right
drawLine("black",0,0,0,400, area); //Left
drawLine("black",0,400,600,400, area); //You're changing the color
