$(document).ready( function(){
  var buttonColours = ["red","blue","green","yellow"];
  var gamePattern = [];
  var userClickedPattern = [];
  var gameOver = true;

  $(document).keydown(function(){
    if (gameOver){
      newGame();
    }
  });

  for(var colour of buttonColours)
    $("#"+colour).click(handleClick);

  function handleClick(event){
    var userChosenColour = this.id;
    buttonAnimation(userChosenColour);
    buttonSound(userChosenColour);
    if (!gameOver){
      userClickedPattern.push(userChosenColour);
      nextSequence()
    }
    else
      gameOverAnimation();
  }

  function refreshTitle(){
    if (gameOver)
      $("#level-title").text("Game Over, Press A Key to Start");
    else
      $("#level-title").text("Level " + gamePattern.length);
  }

  function newGame(){
    gameOver = false;
    gamePattern = [];
    userClickedPattern = [];
    refreshTitle()
    nextSequence();
  }

  function endGame(){
    gameOver = true;
    refreshTitle();
    gameOverAnimation();
  }

  function checkAnswer(){
    var level = userClickedPattern.length;
    if (gamePattern.length < level)
      return false;
    if (level > 0 && gamePattern[level-1] !== userClickedPattern[level-1])
      return false;
    return true;
  }

  function nextLevel(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    buttonSound(randomChosenColour);
    refreshTitle();
    userClickedPattern = [];
  }

  function nextSequence(){
    if (checkAnswer()){
      if (userClickedPattern.length === gamePattern.length)
        setTimeout( nextLevel, 1000 );
    }
    else
      endGame();
  }

  function gameOverAnimation(){
    buttonSound("wrong");
    classAnimate("body","game-over",200);
  }

  function buttonAnimation(colour) {
    if (buttonColours.includes(colour))
      classAnimate("#"+colour,"pressed",100)
  }

  function classAnimate(selector,addedClass,time){
    var element = $(selector);
    element.addClass(addedClass);
    setTimeout( function(){ element.removeClass(addedClass); }, time );
  }

  function buttonSound(colour) {
    if (buttonColours.includes(colour))
      (new Audio("sounds/" + colour + ".mp3")).play();
    else
      (new Audio("sounds/wrong.mp3")).play();
  }

});
