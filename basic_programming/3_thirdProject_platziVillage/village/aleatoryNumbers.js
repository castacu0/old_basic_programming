var number; //just declared

// <= leaves 5 indexes from 0,1,2,3,4  &  < leaves 4 indexes from 0,1,2,3

for(var iterable=0; iterable<=4; iterable++){
  number = aleatory(0, 10); //min = 10 or 0   max = 20 or 5
  document.write(number + ", "); //lets do a concatenation

}
// iterable es igual a 0, mientras iterable sea menor a 4 jala,
// y en cada ciclo, al finalizar sumale 1  0+1=1

function aleatory(min, max) {
  var result; // just declared
  result = Math.floor(Math.random() * (max - min + 1)) + min;  //mathematical op
  return result; //just gives
}
