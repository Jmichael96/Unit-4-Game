

$(document).ready(function(){


    $("#buttonReset").hide();
    
    //Global Variables
    var diamondNum = 0;
    var amethystNum = 0;
    var sapphireNum = 0;
    var megagemNum = 0;
    var scoreNow = 0;
    var matchScore = 0;
    var wins = 0;	
    var losses = 0;

    var winSound = new Audio("./assets/sounds/fireworkshow.mp3");
    var btnSound = new Audio("./assets/sounds/sparkle.mp3");
            //If the gems do not have a given score then they will be assigned with a random number. 
            $("#diamond").on('click', function(){
                if (diamondNum){
                    scoreNow = scoreNow + diamondNum;
                    //Replaces the HTML for the element with the scoreNow Id
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    diamondNum = Math.floor((Math.random() * 12) + 1);
                    console.log("diamond value " + diamondNum);
                }
            });
    
            $("#amethyst").on('click', function(){
                if (amethystNum){
                    scoreNow = scoreNow + amethystNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    amethystNum = Math.floor((Math.random() * 12) + 1);
                    console.log("amethyst value " + amethystNum);
                }
            });
    
            $("#sapphire").on('click', function(){
                if (sapphireNum){
                    scoreNow = scoreNow + sapphireNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    sapphireNum = Math.floor((Math.random() * 12) + 1);
                    console.log("sapphire value " + sapphireNum);
                }
            });
    
            $("#megagem").on('click', function(){
                if (megagemNum){
                    scoreNow = scoreNow + megagemNum;
                    document.getElementById("scoreNow").innerHTML = scoreNow;
                    scoreKeeper();
                }else{
                    megagemNum = Math.floor((Math.random() * 12) + 1);
                    console.log("megagem value " + megagemNum);
                }
            });
    
        //This function will run when the game ends... and if clicked reset everthing to zero.
        function playAgain(){
            //When the button is clicked, the following will occur.
            $("#buttonReset").click(function(){
                scoreToMeet = 0;
                scoreNow = 0;
                diamondNum = 0;
                amethystNum = 0;
                sapphireNum = 0;
                megagemNum = 0;
                givenScore();
                $("#buttonReset").hide();
                $("#gemRow").show();
                winSound.pause();
            });
        };
    
        //This function will check if the user has a greater or less than score of the match score. if matched check one point. if loss check one point.
        function scoreKeeper(){
            if (scoreNow > matchScore){
                losses++;
                $("#losses").html('Losses: ' + losses);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
                console.log("number of losses " + losses);
                loseSound.play();
            }
    
            if (scoreNow == matchScore){
                wins++;
                $("#wins").html('Wins: ' + wins);
                $("#buttonReset").show();
                $("#gemRow").hide();
                playAgain();
                console.log("number of wins " + wins);
                winSound.play();
            };
        };
    
        //This function will provide the score for the matching score randomly from 19 - 120.
        function givenScore(){
            matchScore= Math.floor((Math.random() * 120) + 19);
            document.getElementById("scoreToMeet").innerHTML = matchScore;
            console.log("score to match " + matchScore);
        };
    
    //This will call the givenScore function.
    givenScore();

    
    });