let buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];
let firstKeyPress = true;
let level = 0;
function playSound(btn){
    let audio = new Audio('./sounds/'+btn+'.mp3');
    audio.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');

    setTimeout(() => {
        $('#'+currentColor).removeClass('pressed');
        }, 100
    );

}

function nextSequence(){
    //generate a random number between 0 and 3
    userClickedPattern = [];

    level += 1;
    $('h1').text(`Level ${level}`);
    let randomNumber = Math.floor(Math.random() * (3-0+1))
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).animate({opacity: 0.3}).animate({opacity:1});
    playSound(randomChosenColor);
    
}

function checkAnswer(currentLevel){
    console.log('your pattern:' + userClickedPattern);
    console.log('correct pattern:' + gamePattern);

    // if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    //     console.log('success');
    //     setTimeout(function () {
    //         nextSequence();
    //     }, 1000);
  

       
    // }else{
    //     console.log('wrong');
    // }

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
            //waits for user to click as many colors as there are in gamePattern
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {

        console.log("wrong");
  
        playSound('wrong');

        $('body').addClass('game-over');

        setTimeout(() => {$('body').removeClass('game-over');
        },
            200
        );

        $('h1').text(`Game Over, Press Any Key to Restart`);
        startOver();
      }



}

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    firstKeyPress = true;
    level = 0;
}

$('.btn').click((event) => {
    let userChosenColor =  $(event.target).attr('id')
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

})

$(document).on('keypress', () => {
    if(firstKeyPress === true){
        firstKeyPress = false;
        nextSequence();
    }
})