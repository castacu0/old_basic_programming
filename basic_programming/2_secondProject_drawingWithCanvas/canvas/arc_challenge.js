alert("hi");
var box = document.getElementById('myOwnCanvas');
var lienzo = box.getContext('2d');
var stroke=20;

lienzo.beginPath();
lienzo.lineWidth = stroke
lienzo.moveTo(20, 20); // Create a starting point
lienzo.lineTo(100, 20); // Create a horizontal line
lienzo.arcTo(150, 20, 150, 70, 50);  // Create an arc
lienzo.lineTo(150, 120); // Continue with vertical line
lienzo.arcTo(150, 160, 100, 160, 50);
lienzo.lineTo(20, 160); // Continue with vertical line
lienzo.stroke(); // Draw it	
lienzo.closePath();
