var buttonColors=['green','red','yellow','blue'];
var pattern=[];
var userClickedPattern=[];
var level=0;

$(document).keypress(function(e){
    if(level==0){
        nextSequence();
    }
});

function nextSequence(){
    level++;
    $('#level-title')[0].innerHTML='Level '+level;
    var randomNumber= Math.floor(Math.random()*4);
    var choosenColor=buttonColors[randomNumber];
    playSound(choosenColor);
    pattern.push(choosenColor);
    $('#'+choosenColor).fadeOut(100).fadeIn(100);
}

function playSound(choosenButton){
    var audio= new Audio('sounds/'+choosenButton+'.mp3');
    audio.play();
}

$('.btn').click(function(e){
    var userChosenColour= e.target.id;
    playSound(userChosenColour);
    var b=$('.'+userChosenColour);
    b.addClass('pressed');
    setTimeout(()=>b.removeClass('pressed'),120);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currPos){
    if(pattern[currPos]==userClickedPattern[currPos]){
        console.log('continue');
        if(currPos+1==level){
            setTimeout(()=>nextSequence(),1000);
            userClickedPattern=[];
        }
    }
    else{
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(()=>$('body').removeClass('game-over'),200);
        $('#level-title')[0].innerHTML='Game Over, Press Any Key to Restart';
        level=0;
        userClickedPattern=[];
        pattern=[];
    }
}