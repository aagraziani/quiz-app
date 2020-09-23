const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const scoreDiv = document.getElementById("score");
const perCent = document.getElementById("perCent");
const resetButton = document.getElementById("reset-btn");
const fin = document.getElementById("fin");
const icon = document.getElementById("icon");


/* Frases */
let questions = [
    {
        question: '"Yo ya gané"',
        choiceA: "Margarita Stolbizer",
        choiceB: "Myriam Bregman",
        correct: "A"
    }, {
        question: '"Me quiero ir"',
        choiceA: "Amado Boudou",
        choiceB: "Hernán Lorenzino",
        correct: "B"
    }, {
        question: '"El 2001 será un gran año para todos. Qué lindo es dar buenas noticias"',
        choiceA: "Carlos Álvarez",
        choiceB: "Fernando de la Rúa",
        correct: "B"
    },
    {
        question: '"A la sociedad le pregunto: ¿si votan a cualquiera, por qué no me votan a mí?"',
        choiceA: "Elisa Carrió",
        choiceB: "Jorge Altamira",
        correct: "A"
    },
    {
        question: '"No sé si voy a sacar el país del problema económico, pero seguro que voy a hacer un país más divertido."',
        choiceA: "Carlos Menem",
        choiceB: "Néstor Kirchner",
        correct: "A"
    },
    {
        question: '"En 2019 vamos a tener una inflación de un dígito"',
        choiceA: "Mauricio Macri",
        choiceB: "Marcos Peña",
        correct: "A"
    },
    {
        question: '"Hay que terminar con esa práctica de ahorrar en dólares"',
        choiceA: "Alberto Fernández",
        choiceB: "Cristina Fernández",
        correct: "A"
    },
    {
        question: '"El que depositó dólares, recibirá dólares"',
        choiceA: "Carlos Menem",
        choiceB: "Eduardo Duhalde",
        correct: "B"
    },
    {
        question: '"La soja es prácticamente, en términos científicos, casi un yuyo"',
        choiceA: "Axel Kicillof",
        choiceB: "Cristina Fernández",
        correct: "B"
    },
    {
        question: '"No sé cuántos pobres hay, es una pregunta complicada"',
        choiceA: "Axel Kicillof",
        choiceB: "Daniel Scioli",
        correct: "A"
    },
    {
        question: '"Las peleas entre Chiche Duhalde y Cristina Kirchner son discusiones de alta peluquería"',
        choiceA: "Elisa Carrió",
        choiceB: "Aníbal Fernández",
        correct: "B"
    },
    {
        question: '"Veníamos bien, pero pasaron cosas"',
        choiceA: "Mauricio Macri",
        choiceB: "Marcos Peña",
        correct: "A"
    },
    {
        question: '"Esas cosas son para La Matanza, pero no para Harvard"',
        choiceA: "Gabriela Michetti",
        choiceB: "Cristina Fernández",
        correct: "B"
    },
    {
        question: '"Querer ponerle un precio al dólar blue es como querer poner precio a un gramo de cocaína"',
        choiceA: "Jorge Capitanich",
        choiceB: "Aníbal Fernández",
        correct: "A"
    },
    {
        question: '"Sigamos construyendo de abajo para arriba para levantar todo, y no de arriba para abajo para aplastar todo"',
        choiceA: "Daniel Scioli",
        choiceB: "Mauricio Macri",
        correct: "A"
    }
];

/* Variables */
const lastQuestion = questions.length - 1;
let actualQuestion = 0;
let score = 0;
const delay = 500;


/* Mostrar pregunta */
function renderQuestion() {

    let q = questions[actualQuestion];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    icon.innerHTML = '';

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
        answerIsCorrect();
    } else {
        answerIsWrong();
    }

    if (actualQuestion < lastQuestion) {
        actualQuestion++;
        scoreDiv.innerHTML = actualQuestion + '/' + questions.length;
        setTimeout(renderQuestion, delay);
    } else {
        scoreDiv.remove();
        fin.classList.remove('hide');
        fin.innerHTML = "<h2>Fin</h2>";
        question.classList.add('hide');
        choiceA.classList.add('hide');
        choiceB.classList.add('hide');
        icon.style.display='none';
        scorePerCent();
    }
}

function answerIsCorrect() {
    icon.innerHTML = '<i class="fas fa-check"></i>';
}

function answerIsWrong() {
    icon.innerHTML = '<i class="fas fa-times"></i>';
}


/* Puntaje final */
function scorePerCent() {
    const scorePerCent = Math.round(100 * score / questions.length);
    perCent.innerHTML = "<h3 id='perCent'>" + scorePerCent + " %" + "</h3>";
    //scoreDiv.classList.add('hide');
    resetButton.classList.remove('hide');

}

/* Botón jugar de nuevo */
resetButton.onclick = function () {
    location.reload();
}

