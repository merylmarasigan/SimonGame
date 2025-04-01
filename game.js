let buttonColors = ['red','blue','green','yellow'];
let gamePattern = [];
function nextSequence(){
    //generate a random number between 0 and 3 
    let randomNumber = Math.floor(Math.random() * (3-0+1))
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#'+randomChosenColor).animate({opacity: 0.3}).animate({opacity:1});
    let audio = new Audio('./sounds/'+randomChosenColor+'.mp3');
    audio.play();
    
}

document.addEventListener('keydown', nextSequence);