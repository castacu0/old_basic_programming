var bring_text = document.getElementById("txt_lines");
var bigButton = document.getElementById("littleButton");
bigButton.addEventListener("click", drawingByClicking );

var hereIsDibujitoinHTML = document.getElementById("dibujito");
var width = hereIsDibujitoinHTML.width; //alert(height);
var lienzo = hereIsDibujitoinHTML.getContext("2d");

function drawALine(color, xinitial, yinitial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinitial, yinitial); // x, y
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawingByClicking()
{

  var lines = parseInt(txt_lines.value); // var zZz = txt_lines.value; alert("Check this out " + zZz);
  var l = 0;
  var spaceBetweenLines = width / lines; //
  var sub = width - 10;
  var xi, yi, xf, yf;
  var mirror_xf, mirror_yf;
  var linescolor = "#210747";
  var xxx = bigButton.value;

  for(l = 0; l < lines; l++)
  {
    xi = l * spaceBetweenLines;
    yi = l * spaceBetweenLines;
    xf = spaceBetweenLines * (l + 1);
    yf = spaceBetweenLines * (l + 1);
    mirror_xf = 500 - xf;
    mirror_yf = 500 - yf;
    drawALine("green", xi, 0, 500, yf);    //Challenge
    drawALine("yellow", xi, 500, 500, mirror_yf);      //Mirror of red
    drawALine("blue" , 0, xf, mirror_xf, 0);          //Mirror of blue
    drawALine("red"  , 0, yi, xf, 500);    //Original
    console.log("Line " + l);    //Superoptional
  }
  drawALine(linescolor, 1, 1, 1, sub);     //Left line
  drawALine(linescolor, 1, sub, sub, sub); //Bottom line
  drawALine(linescolor, sub, 1, sub, sub); //Right line
  drawALine(linescolor, 1, 1, sub, 1);     //Top line //alert("You choosed:\n" + lines + " lines my friend.");
   // var lines //= parseInt(bigButton.value);
}
