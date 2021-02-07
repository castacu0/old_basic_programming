var boxBox = document.getElementById("dibujito");
var lienzo = boxBox.getContext("2d");

drawALine(0, 0, 300, 0, "blue", 15);
drawALine(300, 0, 300, 300, "red", 15);
drawALine(300, 300, 0, 300, "green", 15);
drawALine(0, 300, 0, 0, "orange", 15);
drawALine(0, 0, 150, 300, "darkOrchid", 7);
drawALine(150, 300, 300, 0, "yellow", 7);
drawALine(300, 300, 0, 150, "#00CED1", 7);
drawALine(0, 150, 300, 0, "#DAA520", 7);
drawALine(0, 0, 300, 150, "#FF00FF", 7);
drawALine(300, 150, 0, 300, "#DCDCDC", 7);

function drawALine(initial_X, initial_Y, final_X, final_Y, color, stroke)
{
    lienzo.beginPath();
    lienzo.lineWidth = stroke;
    lienzo.strokeStyle = color; // Here I'm not selecting anymore the color, that's why it doesn't have quotation marks"""
    lienzo.moveTo(initial_X, initial_Y); // x, y
    lienzo.lineTo(final_X, final_Y);
    lienzo.stroke();
    lienzo.closePath();
}

