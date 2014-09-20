/* Erika Narvaez
 Student ID# 0000389588
 September 19 ,2014
 */

 
(function(){		// Main function

    console.log("FIGHT!!!");    // Prints out to your console 

    var fighter1_txt = document.querySelector("#kabal").querySelector("p");   // assigning variables to access the DOM for fighter 1
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");   // assigning variables to access the DOM for fighter 2
    var round_txt = document.querySelector("h5");		 // assigning variables to access the DOM for the different Rounds
    var button = document.getElementById("fight_btn"); // assigning variables to access the DOM for fight button

    console.log(); // console log

    button.addEventListener("click", fight, false);  // Event Listener is going to be called by the fight function when user clicks button

    var fighters = [    // setting up the variable fighters with an array
        {
            name:"Kabal",   // name will represent fighter[0].name = Kabal
            damage:20,      // damage will represent amount to be inflicted by fighter
            health:100      // health will represents fighters starting health
    },
        {
            name:"Kratos",   // name will represent fighter[1].name = Kratos
            damage:20,       // damage will represents amount to be inflicted by fighter
            health:100      // health will represents fighters starting health
     }];

    var round = 1;  // variable round equals one

    round_txt.innerHTML = "Click Fight Button to Start!";       // calling round_txt which represents the h5 tag in html page
    fighter1_txt.innerHTML = fighters[0].name + ":" + " " + fighters[0].health;     // Displays .name + . health for fighter one on top of html page
    fighter2_txt.innerHTML = fighters[1].name + ":" + " " + fighters[1].health;     // Displays .name + . health for fighter two on top of html page

    function fight(){		// function is calling the parameters from above and placing it into a function called fight()

        fighter1_txt.innerHTML = fighters[0].name + ":" + " " + fighters[0].health;   // Displays .name + . health for fighter one on top of html page
        fighter2_txt.innerHTML = fighters[1].name + ":" + " " + fighters[1].health;   // Displays .name + . health for fighter two on top of html page

        //calculates fighter [0] random number + .damage (20) * .5 first then rounds it to the nearest number
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        //calculates fighter [0] random number + .damage (20) * .5 first then rounds it to the nearest number
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

        fighters[0].health -=f1;		//this will subtract the calculated hit to the fighter [0] health
        fighters[1].health -=f2;		//this will subtract the calculated hit to the fighter [1] health

        console.log(fighters[0].health, fighters[1].health); // displays results to the console


        var result = winnerCheck();		//outputs the count of the rounds until the function below results if no winner or a winner
        console.log(result);		//Prints results to the console

        round_txt.innerHTML = "ROUND #" + round + " " + "Results:";     //rounds will be displayed in the html page
        round++;        // round equals 1++ keeps adding a 1
        if (result === "no winner")     // if results = winnerCheck === "no winner"
        {
            fighter1_txt.innerHTML = fighters[0].name + ":" + " " + fighters[0].health;   // fighter1 txt equals fighter name + health results
            fighter2_txt.innerHTML = fighters[1].name + ":" + " " + fighters[1].health;     // fighter2 txt equals fighter name + health results

        }else{                  // else loop
            fighter1_txt.innerHTML = result;  // fighter1 [0] equals results
            fighter2_txt.innerHTML = "";       // fighter2 [1] equals empty string

            button.removeEventListener("click", fight, false);  // Event Listener is going to be called by the fight function when user clicks button

            document.querySelector('#buttonblue').innerHTML = 'DONE!!!';    // not sure what this does I know it's calling the class buttonblue from the html page
        }
    }

     function  winnerCheck() {		//outputs the count of the rounds until the function below results = no winner or a winner
         var result = "no winner";      // results equal "no winner" loop
         if (fighters[0].health < 1 && fighters[1].health < 1) {    // fighter1 and fighter2 health is less then 1 the below will occur

             result = "You Both Die - GAME OVER!";                  // result will display "You Both Die - GAME OVER"

         }else if (fighters[0].health < 1){                         // else if occurs if fighter1's health is greater than 1 the below will occur
             result = fighters[1].name + " " + "WINS!!!"            // result will display "Kabal WINS!!!"
             
         }else if (fighters[1].health < 1) {                         // else if occurs if fighter2's health is greater than 1 the below will occur
             result = fighters[0].name + " " + "WINS!!!"            // result will display "Kratos WINS!!!"
         }
         return result;		//this is being called by the var result = winnerCheck() above to keep looping until the result is someone losses or both die
        }

})();
