//Name: Erika Narvaez
//Date: September 12, 2014
//Student ID# 0000389588
// E

/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 2/3 of series
*/

 
(function(){		// Main function

    console.log("FIGHT!!!");    // Prints out to your console 

    var playerOneName = ["Kabal",20,100];      //array defining playerone name array < statement sets hit per round and health
    var playerTwoName = ["Krato",20,100];      //array defining playertwo name < statement sets hit per round and health

    var round = 0;		 //this is counting the start of the fight

    
    function fight(){		// function is calling the parameters from above and placing it into a funtion called fight()
    		
        alert(playerOneName[0]+":"+playerOneName[2]+"  *START*  "+playerTwoName[0]+":"+playerTwoName[2]);		//prompt opens up advising player to start
         
         //(local variables)
        for (var i = 0; i < 10; i++)		//for loop: i= equals 0/ if i is less then 10 keep looping/ i++ means its going to adding to the rounds
        {
           
            var minDamage1 = playerOneName[1] * .5;		// playerone damage number and multipling it in half
            var minDamage2 = playerTwoName[1] * .5;		// playertwo damage number and multipling it in half
            
             //random formula is - Math.floor(Math.random() * (max - min) + min);
            var f1 = Math.floor(Math.random()*(playerOneName[1]-minDamage1)+minDamage1);		//(Player1Damage-minDamage)is first then the complete parentheses is next. This equation will result in a decimal and we use Math.floor to turn it into a interger.
            var f2 = Math.floor(Math.random()*(playerTwoName[1]-minDamage2)+minDamage2);		//(Player2Damage-minDamage)is first then the complete parentheses is next. This equation will result in a decimal and we use Math.floor to turn it into a interger.

            playerOneName[2]-=f1;		//this will subtract the hit to the player1's health
            playerTwoName[2]-=f2;		//this will subtract the hit to the player1's health

            console.log(playerOneName[2]+" "+playerTwoName[2]);		//Prints results to the console

            var result = winnerCheck();		//outputs the count of the rounds until the function below resuts in no winner or a winner
            
            console.log(result);		//Prints results to the console
            if (result==="no winner"){
                round++;
                alert(playerOneName[0]+":"+playerOneName[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwoName[0]+":"+playerTwoName[2]);
            } else{
                alert(result);
                 
                break;		//breaks out of the function once the results have been completed
            };

          };
    };
    
    
    function winnerCheck(){		//If player1 & player2 both have less than 1 point the result is " You Both Die"}
        var result="no winner";
        if (playerOneName[2]<1 && playerTwoName[2]<1){		//If player1 has less than 1 point the result is player2 wins
            result = "You Both Die";
            
        } else if(playerOneName<1){		 //If player1 has less than 1 point the result is player2 wins
            result =playerTwoName[0]+" WINS!!!"
             
        } else if (playerTwoName[0]<1){		 //If player2 has less than 1 point the result is player1 wins
            result = playerOneName+" WINS!!!"
        };
       
       return result;		//this is being called by the var result = winnerCheck() above to keep looping until the result is someone losses or both die
    };

    /*******  The program gets started below *******/
   
   
    fight();		// This will start the process of the loop above. It is being called by the function fight().

})();