function check(){
	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
	let question4 = document.quiz.question4.value;
	let question5 = document.quiz.question5.value;
	let question6 = document.quiz.question6.value;
	let question7 = document.quiz.question7.value;
	let question8 = document.quiz.question8.value;
	let question9 = document.quiz.question9.value;
	let question10 = document.quiz.question10.value;
	let correct = 0;

	
	if (question1 == "5 jaar") {
		correct++;
}
	if (question2 == "Evie") {
		correct++;
}	
	if (question3 == "Vlucht 537") {
		correct++;
	}
	if (question4 == "191") {
		correct++;
}
	if (question5 == "Leukemie") {
		correct++;
}	
	if (question6 == "Karen Stone") {
		correct++;
	}
	if (question7 == "Alex") {
		correct++;
}
	if (question8 == "7") {
		correct++;
}	
	if (question9 == "Zorg goed voor mekaar") {
		correct++;
	}
	if (question10 == "Een gouden ketting") {
		correct++;
	}
	
	let pictures = ["../media/win.gif", "../media/meh.gif", "../media/lose.gif"];
	let messages = ["Goed gedaan je hebt alles goed!", "Helaas niet alles goed...", "Helaas, alles fout!"];
	let score;

	if (correct < 1) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Je hebt " + correct + " van de 10 goed.";
	document.getElementById("picture").src = pictures[score];
	}