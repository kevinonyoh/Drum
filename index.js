var noOfDrum = document.querySelectorAll(".drum").length;

for(var i=0; i < noOfDrum ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", 
function() {
     buttonAnimation(this.innerHTML) 
     switch (this.innerHTML) {
           case "w":
               var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
           case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
           case "s":
               var audio = new Audio('sounds/tom-3.mp3');
               audio.play();
                break;
           case "d":
               var audio = new Audio('sounds/tom-4.mp3');
               audio.play();
                break;
           case "j":
               var audio = new Audio('sounds/snare.mp3');
               audio.play();
                break;
           case "k":
               var audio = new Audio('sounds/crash.mp3');
               audio.play();
                break;
           case "l":
               var audio = new Audio('sounds/kick-bass.mp3');
               audio.play();
                break;
           default:
                break;
      }

}
);
//  document.querySelectorAll(".drum")[i].
addEventListener("keypress", function(event){
     buttonAnimation(event.key);
     switch (event.key) {
          case "w":
              var audio = new Audio('sounds/tom-1.mp3');
               audio.play();
               break;
          case "a":
               var audio = new Audio('sounds/tom-2.mp3');
               audio.play();
               break;
          case "s":
              var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
               break;
          case "d":
              var audio = new Audio('sounds/tom-4.mp3');
              audio.play();
               break;
          case "j":
              var audio = new Audio('sounds/snare.mp3');
              audio.play();
               break;
          case "k":
              var audio = new Audio('sounds/crash.mp3');
              audio.play();
               break;
          case "l":
              var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
               break;
          default:
               break;
     }

})
}
 function buttonAnimation(currentKey){
       var animationButton = document.querySelector("."+currentKey)
       animationButton.classList.add("pressed");
       setTimeout(function(){ animationButton.classList.remove("pressed") }, 70);
     }