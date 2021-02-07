document.addEventListener("keyup", moveFarmer);
var plaVill = document.getElementById('platziVillage');  //context
var paper = plaVill.getContext("2d");

var xFarmer = 218; //218;
var yFarmer = 215; //215

var xCow = aleatory(0, 436);
var yCow = aleatory(0, 436);

var xPig = aleatory(0, 436);
var yPig = aleatory(0, 436);

var xChicken = aleatory(0, 436);
var yChicken = aleatory(0, 436);

var quantityOfCows = aleatory(5, 8);
var quantityOfPigs = aleatory(5, 18);
var quantityOfChickens = aleatory(5, 35);
console.log("Quantity of Cows in the canvas is " + quantityOfCows);
console.log("Quantity of Pigs in the canvas is " + quantityOfPigs);
console.log("Quantity of Chickens in the canvas is " + quantityOfChickens);

var background = {
  url: "village.png",
  loadOK: false  //false0  true1
};
function loadBackg(){
  background.loadOK = true;
  drawing();
}
background.objectImage =  new Image();
background.objectImage.src = background.url;
background.objectImage.addEventListener("load", loadBackg);

var cow = {
  url: "cow.png",
  loadOK: false
};
function loadCows(){
  cow.loadOK = true;
  drawing();
}
cow.objectImage = new Image();
cow.objectImage.src = cow.url;
cow.objectImage.addEventListener("load", loadCows);

var pig = {
  url: "pig.png",
  loadOK: false
};
function loadPigs(){
  pig.loadOK = true;
  drawing();
}
pig.objectImage = new Image();
pig.objectImage.src = pig.url;
pig.objectImage.addEventListener("load", loadPigs);

var chicken = {
  url: "chicken.png",
  loadOK: false
};
function loadChickens(){
  chicken.loadOK = true;
  drawing();
}
chicken.objectImage = new Image();
chicken.objectImage.src = chicken.url;
chicken.objectImage.addEventListener("load", loadChickens);

var farmer = {
  url: "farmer.png",
  loadOK: false
};
function loadFarmer(){
  farmer.loadOK = true;
  drawing();
}
farmer.objectImage = new Image();
farmer.objectImage.src = farmer.url;
farmer.objectImage.addEventListener("load", loadFarmer);

function drawing(){
  if(background.loadOK){
      paper.drawImage(background.objectImage, 0, 0);
  }

  if(cow.loadOK){
      for(var i = 0; i < quantityOfCows; i++){
        paper.drawImage(cow.objectImage, xCow, yCow);
      }
  }

  if(pig.loadOK){
      for(var i = 0; i < quantityOfPigs; i++){
        paper.drawImage(pig.objectImage, xPig, yPig);
      }
  }
  if(chicken.loadOK){
      for(var i = 0; i < quantityOfChickens; i++){ //quantity is = aleatory(1,3);
        paper.drawImage(chicken.objectImage, xChicken, yChicken);
      }
  }
  if(farmer.loadOK){
      paper.drawImage(farmer.objectImage, xFarmer, yFarmer);
  }
}

function moveFarmer(event){
  var mouvement = 59;
  var keys = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

  switch(event.keyCode){
    case keys.LEFT:
      xFarmer = xFarmer - mouvement; //This remembers the last point
      drawing();
    break;

    case keys.UP:
      yFarmer = yFarmer - mouvement;
      drawing();
    break;

    case keys.RIGHT:
      xFarmer = xFarmer + mouvement;
      drawing();
    break;

    case keys.DOWN:
      yFarmer = yFarmer + mouvement;
      drawing();
    break;

    default:
      console.log("Another key. This is the Switch working. ");
    break;
  }
}
function aleatory(min, max) {
  var result; // just declared
  result = Math.floor(Math.random() * (max - min + 1)) + min;  //mathematical op
  return result; //just gives
}
