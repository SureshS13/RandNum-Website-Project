/* JavaScript & jQuery Code */
/* Sachin - Version 1 */

$(document).ready(function()
{ 

	/********************************************************
	Game Output, Num Generation, and Local Storage Win Tracker
	*********************************************************/
	
	const responseA = "Nice one!";

	const responseB = "Oooh tough luck";

	const responseC = "Meh";
	
	var isGenerated = false;
	
	var winCount = 0;
	
	if (localStorage.getItem("winCount") !== null)
	{
		winCount = parseInt(localStorage.getItem("winCount"));
		$("#numwins").text(winCount);
	}
	else
	{
		localStorage.setItem("winCount", winCount);
		$("#numwins").text(winCount);
	}

	if (winCount <= 0)
	{
		$("#wincounter").hide();
	}
	
	function updateWinCount()
	{
		// Uses local browser storage to update the win count
		
		localStorage.setItem("winCount", winCount);
		$("#numwins").text(winCount);
		
		$("#wincounter").show();
	}

	function generateNumber()
	{
		// Generates a random integer from 0 to 100:
		var randomNumber = Math.floor(Math.random() * 101);
	
		$("#output").text(randomNumber);
	
		if (isGenerated == false)
		{
			$('<p id = "response"> </p>').insertAfter("#output");
		
			if (randomNumber != 100)
			{
				$("#response").text("Nice Start. Keep Going!");
			}
			else
			{
				winCount++;
				updateWinCount();
				
				$("#response").text("WOW!! ON YOUR FIRST TRY TOO! CONGRATS!!");
			}
		
			isGenerated = true;
		}
		else if (isGenerated == true)
		{	
	
			/* Generates message based on size of input. Chose to separate if statements for readability*/
		
			if (randomNumber <= 20)
			{
				$("#response").text(responseB);
			}
		
			if (randomNumber > 20 && randomNumber <= 80)
			{
				$("#response").text(responseC);
			}
		
			if (randomNumber >= 81)
			{
				$("#response").text(responseA);
			}
		
			if (randomNumber == 100)
			{
				winCount++;
				updateWinCount();
				
				$("#response").text("CONGRATS!. YOU WIN");
			}
		
		}
	}

	$("#button").on("click", generateNumber); // When button is clicked, generate output in textarea
});