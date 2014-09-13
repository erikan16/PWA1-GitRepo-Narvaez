/* Erika Narvaez
   Student ID# 0000389588
   September 12,2014
 */

// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),    // variable being represented by "results"
		searchInput = document.forms[0].search,             //searchInput will return any elements requested
		currentSearch = ''
	;
	
	// Validates search query
	var validqte = function(query){       //variable equals function called query
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){             // While loop setting up empty string or out of range equaling 0
			query = query.substring(1, query.length);   // if the user enters in 2 letters
		};
		while(query.charAt(query.length-1) === " ") {         // While loop setting up empty string equaling query-1
            query = query.substring(0, query.length - 1);    //if user enters in 2 letter-1
        };
		
		// Check search length, must have 3 characters
		if(query.length < 3){                                       // if query is less then 3 alert box displays
			alert("Your search query is too small, try again.");    // alert box opens with message
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                    // name of the search box
			return;                // return to the top of the loop every time the user enters a number less then 3
		};
		
		search(query);             // search represents query??
	};
	
	// Finds search matches
	var search = function(query){       //search variable equals function called query
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");              // splits the search if user entered a new results

        // array to store matched results from database.js
		var results = [];                                       //variable called results will represent information being stored

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {                   //array representing the below four loop

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                // variable will read any title that is similar to input with a "|" at the end
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);      // variable will read the users input even if the input is lowercase

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var i = 0, j = queryArray.length; i < j; i++) {        // variable is being called to process
                var qitem = queryArray[i].toLowerCase();               // if the input is a lowercase letter

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);              //comparing the element within the array
                if (compare !== -1) {                            // I'm not sure what this exclamation mark means
                    results.push(db[i]);                        // result is to be displayed
                };      //closure

            };      //closure

        };      //closure
		
		results.sort();     // usually used with compare function to set a sort order
		
		// Check that matches were found, and run output functions
		if(results.length = 0){     // If result length equals zero matches
			noMatch();              // variable will show noMatch function
		}else{                      //or
			showMatches(results);        // variable will show showMatch function
		};      //closure
	};      //closure
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){       //noMatch variable will equal function called html
		var html = ''+              // not sure... Variable html equals ' ' +
			'<p>No Results found.</p>'+     // there should be an alert popup here
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'   // there should be an alert popup here
		;
		resultsDIV.innerHTML = html;    // this should change the text of a string for the popup messages
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){        // variable named showMatches equals function named results

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',        // this is representing the wording that will be presented on the page
			title,                         // this is representing the wording that will be presented on the page
			url                           // this is representing the wording that will be presented on the page
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){       // loop through the array searching for the videos
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');          //searches all videos with a "|" at the end of title
			title = results[i].subString(0, titleEnd);  // pulls the titles sorts them by number
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);   // links the videos
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';     //displays title and url
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.        //calling resultsDiv variable to represent the html
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {       // returns all the array's
        var query = searchInput.value;              // allows user to view video list
        validqte(query);                            // calling validqte function

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;                           // checks users input
    };

})();