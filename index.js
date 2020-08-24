const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const scoreDiv = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");


/* Frases */
let questions = [
    {
        question: '"Yo ya gané"',
        choiceA: "Margarita Stolbizer",
        choiceB: "Marley",
        correct: "A"
    }, {
        question: '"No se inunda massssssss!"',
        choiceA: "Marley",
        choiceB: "Mauricio Macri",
        correct: "B"
    }, {
        question: '"Me quiero ir"',
        choiceA: "Hernán Lorenzino",
        choiceB: "Marley",
        correct: "A"
    }
];

/* Variables */
const lastQuestion = questions.length - 1;
let actualQuestion = 0;
let score = 0;


/* Mostrar pregunta */
function renderQuestion() {

    let q = questions[actualQuestion];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;

}

/* Empezar juego */
startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    renderQuestion();
    quizContainer.classList.remove('hide');
}

/* Chequear respuesta */
function checkAnswer(answer) {

    if (answer == questions[actualQuestion].correct) {
        score++;
        scoreDiv.innerHTML = score + ' / ' + questions.length;
    } else {
        console.log(("maaaaal"));
    }

    if (actualQuestion < lastQuestion) {
        actualQuestion++;
        renderQuestion();
    } else {
        question.innerHTML = "<h2>Fin</h2>";
        choiceA.classList.add('hide');
        choiceB.classList.add('hide');
        scorePerCent();
    }
}

function scoreRender() {

    const scorePerCent = Math.round(100 * score / questions.length);

    scoreDiv.innerHTML = "<h3>Tu puntaje:" + score + "/" + questions.length +"</h3>";

    console.log(score);
}

function scorePerCent() {
    const scorePerCent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML = "<h3>" + scorePerCent + " %" + "</h3>";
    resetButton.classList.remove('hide');

}

resetButton.onclick = function () {
    location.reload();
}

