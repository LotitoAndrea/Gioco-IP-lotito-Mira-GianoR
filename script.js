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
    const questionContainer = document.getElementById('question-container');
    if (selectedOption === correctAnswer) {
        score++;
        questionContainer.innerHTML += `<p style="color: green;">Corretto! Bravo! :D</p>`;
    } else {
        questionContainer.innerHTML += `<p style="color: red;">Sbagliato! La risposta corretta era: ${questions[currentQuestion].options[correctAnswer]}</p>`;
    }
    currentQuestion++;
    setTimeout(loadQuestion, 4000);
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Hai finito il quiz!</h2>
        <p id="score">Punteggio: ${score}</p>
        <button onclick="startQuiz()">Ricomincia</button>
    `;
}

function startQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById('quiz-container').innerHTML = `
        <h1>Gioco sugli Indirizzi IP</h1>
        <div id="question-container"></div>
    `;
    loadQuestion();
}

// Avvia il quiz quando la pagina è pronta
window.onload = startQuiz;
