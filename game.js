var userclickedpattern = [];
var gamepattern=[];
var buttoncolors=["red", "blue", "green", "yellow"];
var randomnumber;
var level = 0 ; 
var started = false;
$(".btn").click(function handler(event){
    var userchosencolor = event.target.id;
    userclickedpattern.push(userchosencolor);
    animatepress(userchosencolor);
    playsound(userchosencolor);
    checkanswer(userclickedpattern.length-1);
});

$(document).keydown(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
      started = true;
    }
});
function startover() {gamepattern=[];
    level=0;
    started=false;
    
}
function checkanswer(currentlevel) {
    if(userclickedpattern[currentlevel]==gamepattern[currentlevel])
    {
        console.log("success");
        if (userclickedpattern.length==gamepattern.length) {
            setTimeout(nextSequence(),1000);
            userclickedpattern=[];
        }
    }
    else{console.log("failed");
var aud1=new Audio("sounds/wrong.mp3");
aud1.play();
$("body").addClass("game-over");
$("#level-title").text("GAME OVER PRESS ANY KEY TO RESTART");
setTimeout(function(){
    $("body").removeClass("game-over");

},200);
startover();
}

}

function animatepress(currentcolor){
$("#"+currentcolor).addClass("pressed");
setTimeout(function(){$("#"+currentcolor).removeClass("pressed"),100})

}
function playsound(name){
    var aud=new Audio("sounds/" + name + ".mp3");
aud.play();
}

function nextSequence(){2
    level++;
    $("#level-title").text("Level " + level);
    randomnumber = Math.floor(Math.random()*4);
var randomchosencolor = buttoncolors[randomnumber];
gamepattern.push(randomchosencolor);
$("#"+randomchosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playsound(randomchosencolor);
}
