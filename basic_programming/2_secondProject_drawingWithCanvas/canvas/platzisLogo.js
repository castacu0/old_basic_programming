var box = document.getElementById('myOwnCanvas');
var miLienzoCanvas = box.getContext('2d');
var colorin = "red";

drawALine(colorin, 20); //The number is the width of your stroke/line

function drawALine(color, stroke) // Here i'm declaring variables, without putting something more
{
	miLienzoCanvas.beginPath();
	miLienzoCanvas.strokeStyle = color; // Here I'm not selecting anymore the color, that's why it doesn't have quotation marks"""
	miLienzoCanvas.lineWidth = stroke; // It defines the width of the line.
	miLienzoCanvas.moveTo(280,320); // x, y
	miLienzoCanvas.lineTo(380,220);
	miLienzoCanvas.arcTo(400,200,380,180, 30); // x1_Tangent, y1_Tangent, x2_Tangent, y2_Tangent, radius
	miLienzoCanvas.lineTo(270,70);
	miLienzoCanvas.arcTo(250,50,230,70, 30);
	miLienzoCanvas.lineTo(70,230);
	miLienzoCanvas.arcTo(50,250,70,270, 30);
	miLienzoCanvas.lineTo(210,410);
	miLienzoCanvas.arcTo(235,435,260,410, 30);
	miLienzoCanvas.lineTo(315,355);
	miLienzoCanvas.stroke();
	miLienzoCanvas.closePath();
}
