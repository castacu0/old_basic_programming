//NOW YES - WE'RE DRAWING

document.addEventListener("keyup", drawKeyboard); //click, keydown
var keys = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40}; //ARRAY
var square = document.getElementById("canvasin");
var paper = square.getContext("2d");
var y = 150;
var x = 150;

drawALine("black", x-1, y-1, x+1, y+1, paper); // The starting point

function drawKeyboard(event){
  var colourOfLine = "red"; //var colorcito
  var mouvement = 20; //Can change
  console.log(event);

  switch(event.keyCode){
      case keys.LEFT:
        drawALine(colourOfLine, x, y, x - mouvement, y, paper);
        x = x - mouvement; //This remembers the last point
      break;
      case keys.UP:
        drawALine(colourOfLine, x, y, x, y - mouvement, paper);
        y = y - mouvement; //This remembers the last point
      break;
      case keys.RIGHT:
        drawALine(colourOfLine, x, y, x + mouvement, y, paper);
        x = x + mouvement; //This remembers the last point
      break;
      case keys.DOWN:
        drawALine(colourOfLine, x, y, x, y + mouvement, paper);
        y = y + mouvement; //This remembers the last point
      break;

      default:
        //console.log("Another key. This is the Switch working. ");
      break;
    }
}

function drawALine(colour, xinitial, yinitial, xfinal, yfinal, lienzo){
    lienzo.beginPath(); //lienzo is an attribute
    lienzo.strokeStyle = colour;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinitial, yinitial); // x, y
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//Lines to see the margin
drawALine("white", 0, 0, 0, 300, paper);
drawALine("blue", 0, 300, 300, 300, paper);
drawALine("yellow", 300, 0, 300, 300, paper);
drawALine("black", 0, 0, 300, 0, paper);
