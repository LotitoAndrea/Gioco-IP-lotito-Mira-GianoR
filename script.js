const questions = [
    {
        question: "Cos'è un indirizzo IP?",
        options: [
            "Un dispositivo hardware",
            "Un identificatore numerico unico per i dispositivi in rete",
            "Un tipo di software",
            "Un sistema operativo"
        ],
        answer: 1
    },
    {
        question: "Qual è la differenza tra IPv4 e IPv6?",
        options: [
            "IPv6 è più veloce di IPv4",
            "IPv6 ha indirizzi più lunghi rispetto a IPv4",
            "IPv4 non può essere utilizzato su Internet",
            "IPv6 è usato solo in alcune aree del mondo"
        ],
        answer: 1
    },
    {
        question: "Cos'è la subnet mask?",
        options: [
            "Un tipo di indirizzo IP pubblico",
            "Un sistema di protezione delle reti",
            "Un valore che definisce la parte di rete e la parte host",
            "Un dispositivo che crea reti private"
        ],
        answer: 2
    },
    {
        question: "Qual è la classe di indirizzo IP per reti molto grandi?",
        options: [
            "Classe A",
            "Classe B",
            "Classe C",
            "Classe D"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        const questionContainer = document.getElementById('question-container');
        
        let questionHTML = `<p>${question.question}</p>`;
        question.options.forEach((option, index) => {
            questionHTML += `
                <button onclick="checkAnswer(${index})">${option}</button>
            `;
        });
        questionContainer.innerHTML = questionHTML;
    } else {
        showResult();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Punteggio: ${score}`;
    document.getElementById('quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
}

function startQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    loadQuestion();
}

// Avvia il quiz quando la pagina è pronta
window.onload = startQuiz;
