document.addEventListener("keyup", drawKeyboard); //click, keydown
var keys = { //to move the line
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40}; //ARRAY
var plaVill = document.getElementById('platziVillage');  //context
var paper = plaVill.getContext("2d");
var y = 250; //Here is where the line begins to be drawn
var x = 250;

var background = {
  url: "village.png",
  loadOK: false  //false0  true1
};
var cow = {
  url: "cow.png",
  loadOK: false
};
var pig = {
  url: "pig.png",
  loadOK: false
};
var chicken = {
  url: "chicken.png",
  loadOK: false
};
var farmer = {
  url: "farmer.png",
  loadOK: false
};


let quantity = aleatory(1,3); //number of cows,pigs and chickens
console.log(quantity);

background.objectImage =  new Image();
background.objectImage.src = background.url;
background.objectImage.addEventListener("load", loadBackg);

cow.objectImage = new Image();
cow.objectImage.src = cow.url;
cow.objectImage.addEventListener("load", loadCows);

pig.objectImage = new Image();
pig.objectImage.src = pig.url;
pig.objectImage.addEventListener("load", loadPigs);

chicken.objectImage = new Image();
chicken.objectImage.src = chicken.url;
chicken.objectImage.addEventListener("load", loadChickens);

farmer.objectImage = new Image();
farmer.objectImage.src = farmer.url;
farmer.objectImage.addEventListener("load", loadFarmer);

function loadBackg(){
  background.loadOK = true;
  drawing();
}

function loadCows(){
  cow.loadOK = true;
  drawing();
}

function loadPigs(){
  pig.loadOK = true;
  drawing();
}

function loadChickens(){
  chicken.loadOK = true;
  drawing();
}

function loadFarmer(){
  farmer.loadOK = true;
  drawing();
}


function drawing(){
  if(background.loadOK){
      paper.drawImage(background.objectImage, 0, 0) //x & y are recording
  }

  if(cow.loadOK){
    for(var c=0; c < quantity; c++){
        var x = aleatory(0, 6); //x=0 y=436
        var y = aleatory(0, 6); //x=0 y=436
        var x = x * 60;
        var y = y * 60;
        paper.drawImage(cow.objectImage, x, y)
      }
  }

  if(pig.loadOK){
    for(var pi=0; pi < quantity; pi++){
      var x = aleatory(0, 6); //x=0 y=436
      var y = aleatory(0, 6); //x=0 y=436
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(pig.objectImage, x, y)
    }
  }
  if(chicken.loadOK){
    for(var ch=0; ch < quantity; ch++){
      var x = aleatory(0, 6); //x=0 y=436
      var y = aleatory(0, 6); //x=0 y=436
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(chicken.objectImage, x, y)
    }
  }
  if(farmer.loadOK){
    paper.drawImage(farmer.objectImage, 218, 215) //x & y are recording
  }
}


// --------------------

function aleatory(min, max) {
  var result; // just declared
  result = Math.floor(Math.random() * (max - min + 1)) + min;  //mathematical op
  return result; //just gives
}
function drawKeyboard(event){
  var colourOfLine = "black"; //colour of the line
  var mouvement = 59; //Can change the mouvement

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
    lienzo.beginPath(); //lienzo is an attribute of this function
    lienzo.strokeStyle = colour;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinitial, yinitial); // x, y
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
