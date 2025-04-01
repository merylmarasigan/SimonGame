let buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
let userClickedPattern = [];

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
    let randomNumber = Math.floor(Math.random() * (3-0+1))
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).animate({opacity: 0.3}).animate({opacity:1});
    playSound(randomChosenColor);
    
}

$('.btn').click((event) => {
    let userChosenColor =  $(event.target).attr('id')
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);

})