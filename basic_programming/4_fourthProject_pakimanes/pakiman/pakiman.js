let images = [];
images["Grassin"] = "grassin.png";
images["Firein"] = "firein.png";
images["Waterin"] = "waterin.png";

let collection = [];
collection.push(new Pakiman("Grassin", 100, 50));
collection.push(new Pakiman("Firein", 80, 40));
collection.push(new Pakiman("Waterin", 70, 60));

for(var sexy of collection){
  sexy.show();
}

for(var nExt in collection[2]){
  console.log(nExt);
}
