var buttonColor = ["red", "blue","green","yellow"];
var gamePattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    //console.log(randomNumber);
    let randomChosenColour = buttonColor[randomNumber];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    var a = new Audio ("sounds/"+randomChosenColour+".mp3");
    a.play();
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}
