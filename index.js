var numOfDrums = document.querySelectorAll(".drum").length;
var audio = new Audio("./sounds/tom-1.mp3");

//Detect button press
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var pressed = this.innerHTML;
    outputSound(pressed);
    buttonAnimation(pressed);
  });
}

//detect key press. Output relevant sound. Do button animation.
document.addEventListener("keydown", function (event) {
  outputSound(event.key);
  buttonAnimation(event.key);
});

//Output relevant sound from key/click input
function outputSound(whichKit) {
  switch (whichKit) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log(pressed);
      break;
  }
}

//animate buttons to show button press
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
