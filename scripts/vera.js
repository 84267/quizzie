let myQuestions = [
    {
        question: "Wanneer begon de Tweede Wereldoorlog?",
        answers: {
            A: '1940 </br>', 
            B: '1914 </br>',
            C: '1939 </br>'
        }, 
        correctAnswer: 'C'
    },
    {
        question: "Wie is er bekender geworden na de Tweede Wereldoorlog?",
        answers: {
            A: 'Anna Frank </br>',
            B: 'Adolf Hitler </br>',
            C: 'Hannah Goslar </br>'
        },
        correctAnswer: 'A'
    },
    {
        question: "Hoeveel slachtoffers zijn er gevallen tijdens de Tweede Wereldoorlog?",
        answers: {
            A: '30 tot 40 miljoen </br>',
            B: '50 tot 70 miljoen </br>',
            C: '120 tot 180 miljoen </br>'
        },
        correctAnswer: 'B'
    },
    {
        question: "Hoelang duurde het voordat het Duitse leger Nederland had bezet?",
        answers: {
            A: '1 maand of langer </br>',
            B: '2 weken </br>',
            C: 'minder dan een week </br>'
        },
        correctAnswer: 'C'
    },
    {
        question: "Hoe heette de aanval op Rusland?",
        answers: {
            A: 'Operatie Barbossa </br>',
            B: 'Operatie Himmler </br>',
            C: 'Operatie Mercurius </br>'
        },
        correctAnswer: 'A'
    },
    {
        question: "Tussen welke twee landen begon de oorlog?",
        answers: {
            A: 'Duitsland - Tjeschië </br>',
            B: 'Duitsland - Nederland </br>',
            C: 'Duitsland - Polen</br>'
        },
        correctAnswer: 'C'
    },
    {
        question: "Hoe is Adolf Hitler uiteindelijk doodgegaan?",
        answers: {
            A: 'Hij kon de gasrekening niet meer betalen </br>',
            B: 'Hij en zijn vrouw hebben samen zelfmoord gepleegd in de bunker </br>',
            C: 'De Amerikanen hebben hem neergeschoten </br>'
        },
        correctAnswer: 'B'
    },
    {
        question: "Wanneer en wat was D-Day?",
        answers: {
            A: '1945, bevrijding west-Europa</br>',
            B: '1944, begin van de bevrijding </br>',
            C: '1942, de dag dat Hitler verloor </br>'
        },
        correctAnswer: 'B'
    },
    {
        question: "Naar welk kamp werd je eerst gestuurd voordat je naar Auschwitz?",
        answers: {
            A: 'Doorvoerkamp Vught </br>',
            B: 'Doorvoerkamp Bergen-Belsen </br>',
            C: 'Doorvoerkamp Westerbork </br>'
        },
        correctAnswer: 'C'
    },
    {
        question: "Hoeveel concentratiekampen waren er in de Tweede Wereldoorlog (heel de wereld)?",
        answers: {
            A: 'Meer dan 42.000 </br>',
            B: '10  </br>',
            C: '1000 </br>'
        },
        correctAnswer: 'A'
    },


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

        resultsContainer.innerHTML = numCorrect + ' van de ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
    }
}