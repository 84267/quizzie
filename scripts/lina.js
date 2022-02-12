function check(){

	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
	let question4 = document.quiz.question4.value;
	let question5 = document.quiz.question5.value;
	let question6 = document.quiz.question6.value;
	let correct = 0;


	if (question1 == "5 jaar") {
		correct++;
}
	if (question4 == "Evie") {
		correct++;
}	
	if (question5 == "Vlucht 537") {
		correct++;
	}
	
	let pictures = ["../media/win.gif", "../media/meh.gif", "../media/lose.gif"];
	let messages = ["Goed gedaan je hebt alles goed!", "Helaas niet alles goed..", "Helaas, alles fout!"];
	let score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Je hebt " + correct + " goed.";
	document.getElementById("picture").src = pictures[score];
	}