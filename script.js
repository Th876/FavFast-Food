function userSel() { //This ensures the prompt pops up when the user clicks the button
let userChoice = window.prompt("Please enter your favorite fast food: pizza, hamburger or hot dog"); //This prompts the user to enter their favorite fast food
let lowerCase_choice = userChoice.toLowerCase(); //This accepts any option users enter since it converts the users' string to lowercase letters to match the cases
switch (lowerCase_choice) { //This switch statement performs an action based on the condition chosen
	case "": //If users did not enter anything, this message will prompt them to enter one of the three options.
		document.getElementById("error").innerHTML = "Please enter one of the three options: pizza, hamburger or hot dog.";
		document.getElementById("fastfood1").style.display = "none";
        document.getElementById("fastfood2").style.display = "none";
        document.getElementById("fastfood3").style.display = "none";
		break; 
	case "pizza": //When users enter this option, the text and image will appear on screen
		document.getElementById("fastfood1").style.display = "block";
    	document.getElementById("fastfood2").style.display = "none";
        document.getElementById("fastfood3").style.display = "none";
        document.getElementById("error").innerHTML ="";
    	break;
    case "hamburger": //When users enter this option, the text and image will appear on screen
    	document.getElementById("fastfood2").style.display = "block";
    	document.getElementById("fastfood1").style.display = "none";
        document.getElementById("fastfood3").style.display = "none";
        document.getElementById("error").innerHTML ="";
    	break;
    case "hot dog": //When users enter this option, the text and image will appear on screen
    	document.getElementById("fastfood3").style.display = "block";
    	document.getElementById("fastfood2").style.display = "none";
        document.getElementById("fastfood1").style.display = "none";
        document.getElementById("error").innerHTML ="";
    	break;
    default: //If users enter an incorrect option, this message will prompt them to enter one of the three options
    	document.getElementById("error").innerHTML = "Please enter one of the three options: pizza, hamburger or hot dog."; 
    	document.getElementById("fastfood1").style.display = "none";
        document.getElementById("fastfood2").style.display = "none";
        document.getElementById("fastfood3").style.display = "none";
}
} //End of code
//Name: T_Higgins