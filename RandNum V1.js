/* JavaScript & jQuery Code */
/* Sachin - Version 1 */


const responseA = "Nice one!";

const responseB = "Oooh tough luck";

const responseC = "Meh";

var isGenerated = false;

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
			$("#response").text("CONGRATS!. YOU WIN");
		}
		
	}
}

$("#button").on("click", generateNumber); // When button is clicked, generate output in textarea