var buttonColor = ["red", "blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false ;
var i = 0;

$(document).keypress(function(){
    
    if (!gameStarted){
        i = 0 ;
        $("h1").text("level 0");
        nextSequence();  
        gameStarted = true ;
    }
});


function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    //console.log(randomNumber);
    let randomChosenColour = buttonColor[randomNumber];
    //console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    i++;
    $("h1").text("level " + i);    
}

$(".btn").click(function(){
    var userChosenColour = this.id ;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


function playSound(name){
    var a = new Audio ("sounds/"+name+".mp3");
    a.play();
}

function animatePress(c){
    $("#"+ c).addClass("pressed");
    setTimeout(function(){
        $("#"+ c).removeClass("pressed");
    },100);
}



function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            userClickedPattern = [];
            setTimeout(function () {
            nextSequence();
          }, 1000);
        }
  
      } else {
        gameOver();
        console.log("wrong");
  
      }
}

function gameOver(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gameStarted = false ;
    userClickedPattern = [] ;
    gamePattern = [];
}