var numbers = 100;
var divisible = false;
var text = "This an epic text. ";

//  <=   less than or equal to
//it begins with one, instead of zero 
for(i = 1; i <= numbers; i++){
  divisible = false;

  if(i % 3 == 0){
    document.write("Fizz");
    divisible = true;
  }
  
  if(i % 5 == 0){
    document.write("Buzz");
    divisible = true;
  }

  if(!divisible){
    document.write(i);
  }
  document.write("<br />");
};
//   !   if not is divisible. Write the number 