let myQuestions = [
    {
        question: "Wanneer begon de tweede wereldoorlog?",
        answers: {
            A: '1940 </br>', 
            B: '1914 </br>',
            C: '1939 </br>'
        }, 
        correctAnswer: 'C'
    },
    {
        question: "Wie is er beroemd geworden na de tweede wereldoorlog?",
        answers: {
            a: 'Anna Frank </br>',
            b: 'Adolf Hitler </br>',
            c: 'Hannah Goslar </br>'
        },
        correctAnswer: 'a'
    }
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('resultaat');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        let output = [];
        let answers;

        for(let i=0;
             i<questions.length; i++){

            answers = [];

            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    +'<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    +'<label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') +'</div>'

            );
        }
        quizContainer.innerHTML = output.join('');
    
    }

    function showResults(questions, quizContainer, resultsContainer){
        let answerContainers = quizContainer.querySelectorAll('.answers');

        let userAnswer = '';
        let numCorrect = 0;

        for(let i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }

            else{

                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
    }
}