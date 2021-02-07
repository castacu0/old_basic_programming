//HERE WE ARE NOT DRAWING YET

var keys = {LEFT: 37,UP: 38,RIGHT: 39,DOWN: 40};
document.addEventListener("keyup", drawKeyboard);

function drawKeyboard(eventuki){
   switch(eventuki.keyCode)
   {
     case keys.LEFT:  //Which is 37
       console.log("Arrow LEFT is being pressed");
     break;
     case keys.UP:  //Which is 38
       console.log("Arrow UP is being pressed");
     break;
     case keys.RIGHT: //Which is 39
       console.log("Arrow RIGHT is being pressed");
     break;
     case keys.DOWN:  //Which is 40
       console.log("Arrow DOWN is being pressed");
     break;
     default:
       console.log("Another key.");
     break;
  }
}
