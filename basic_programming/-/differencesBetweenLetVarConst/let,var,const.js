//ul = unordered list (bulleted)
//li = list
var fruits, text, fruLeng, iterable;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruLeng = fruits.length; //fruits.length equals 4

text = "<ul>";

for (iterable = 0; iterable < fruLeng; iterable++) { //0,1,2,3 < fruLeng4
  text += "<li>" + fruits[iterable] + "</li>";
}

text += "</ul>";
document.getElementById("canvas").innerHTML = text;

console.log(fruits);
