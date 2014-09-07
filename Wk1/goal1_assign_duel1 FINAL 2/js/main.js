//Name: Erika Narvaez
//Date: September 6, 2014
//Week 1: ANALYZE Duel #1

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// Main function 
(function(){
// Prints out to your console 
    console.log("FIGHT!!!");

    //statements defining player names (global variables)
    var playerOneName = "Kabal";
    var playerTwoName = "Krato";

    //statement sets the maximum amount a player can be hit per round 
    var player1Damage = 20;
    var player2Damage = 20;

    //statement sets a players health to an equal number  
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //this is counting the start of the fight
    var round=0;

    // function is calling the parameters from above and placing it into a funtion called fight()
    function fight(){
    		//prompt opens up advising player to start 
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
         //(local variables)
        //for loop: i= equals 0/ if i is less then 10 keep looping/ i++ means its going to adding to the rounds
        for (var i = 0; i < 10; i++)
        {
           
           // players damage number and multipling it in half
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            
             //random formula is - Math.floor(Math.random() * (max - min) + min);
            //(PlayerDamage-minDamage)is first then the complete parentheses is next. This equation will result in a decimal and we use Math.floor to turn it into a interger.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //this will subtract the hit to the players health
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            //Prints results to the console
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //outputs the count of the rounds until the function below resuts in no winner or a winner
            var result = winnerCheck();
            //Prints results to the console
            console.log(result);
            if (result==="no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
            } else{
                alert(result);
                //breaks out of the function once the results have been completed 
                break;
            };

          };
    };
    
    //If player1 & player2 both have less than 1 point the result is " You Both Die"}
    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        //If player1 has less than 1 point the result is player2 wins     
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
         //If player2 has less than 1 point the result is player1 wins       
        } else if (playerTwoHealth<1){
            result = playerOneName+" WINS!!!"
        };
       //this is being called by the var result = winnerCheck() above to keep looping until the result is someone losses or both die
       return result;
    };

    /*******  The program gets started below *******/
   
   // This will start the process of the loop above. It is being called by the function fight().
    fight();

})();