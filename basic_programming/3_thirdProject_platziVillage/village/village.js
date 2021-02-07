var plaVill = document.getElementById('platziVillage');  //context
var paper = plaVill.getContext("2d");

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

let quantity = aleatory(0,8); //number of cows,pigs and chickens

background.objectImage =  new Image();
background.objectImage.src = background.url;
background.objectImage.addEventListener("load", loadBackg);

cow.objectImage = new Image();
cow.objectImage.src = cow.url;
cow.objectImage.addEventListener("load", loadCows);

pig.objectImage = new Image();
pig.objectImage.src = "pig.png";
pig.objectImage.addEventListener("load", loadPigs);

chicken.objectImage = new Image();
chicken.objectImage.src = "chicken.png";
chicken.objectImage.addEventListener("load", loadChickens);


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

function drawing(){
  if(background.loadOK){
      paper.drawImage(background.objectImage, 0, 0) //x & y are recording
  }

  if(cow.loadOK == true){
    console.log(quantity);
    for(var c=0; c < quantity; c++){
        var x = aleatory(0, 6); //x=0 y=436
        var y = aleatory(0, 6); //x=0 y=436
        var x = x * 60;
        var y = y * 60;
        paper.drawImage(cow.objectImage, x, y)
      }
  }

  if(pig.loadOK == true){
    for(var pi=0; pi < quantity; pi++){
      var x = aleatory(0, 436); //x=0 y=436
      var y = aleatory(0, 436); //x=0 y=436
      paper.drawImage(pig.objectImage, x, y)
    }
  }
  if(chicken.loadOK == true){
    for(var ch=0; ch < quantity; ch++){
      var x = aleatory(0, 436); //x=0 y=436
      var y = aleatory(0, 436); //x=0 y=436
      paper.drawImage(chicken.objectImage, x, y)
    }
  }
}

function aleatory(min, max) {
  var result; // just declared
  result = Math.floor(Math.random() * (max - min + 1)) + min;  //mathematical op
  return result; //just gives
}
