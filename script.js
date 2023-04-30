//Rock, Paper, Scissors game
//global variables, in case want to pass them to html page in a future version
var wins=0;
var ties=0;
var losses=0;
var playAgain;

//function to choose random number between 0-2 (size of array of choices)
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

//function containing logic for Rock/Paper/Scissors game
function playgame() {
    var possibleChoices = ["R", "P", "S"];
    //User is prompted to choose R,P or S. 
    var userChoice;
    userChoice = window.prompt("Enter R, P, or S: ");
    //User's choice is forced to uppercase
    userChoice = userChoice.toUpperCase();
    //Display user's choice
    window.alert("You chose: " + userChoice);
    
    //computer plays and displays choice
    var computerChoice = random(0, 2);
    computerChoice = possibleChoices[computerChoice];
    window.alert("The computer randomly chose: " + computerChoice);
    
    //Determine who won, per rules of game
    if ( (userChoice == "R" && computerChoice == "S") 
    || (userChoice == "S" && computerChoice == "P")  
    || (userChoice == "P" && computerChoice == "R") )  {
        //User wins
        window.alert("You win!");
        wins++;
    } 
    else if (userChoice == computerChoice) {
        //user and computer tie
        window.alert("It's a tie, Play again!"); 
        ties++;
    }
    else {
        //User loses
        window.alert("Aw, sorry, the computer won. Better luck next time!"); 
        losses++;
    }
    //Display score and Ask user to confirm if they want to play again
    playAgain = window.confirm("Wins: " + wins + ", Ties: " + ties + ", Losses: " + losses + "   Would you like to play again?");
}

//execute the Rock/Paper/Scissors game function; 
//play until user opts out
do 
    playgame();
while (playAgain);
