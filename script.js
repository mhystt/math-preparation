const questions = [
    {
        question: "Berapa hasil dari 2x + 3 = 7?",
        options: ["x = 1", "x = 2", "x = 3"],
        answer: "x = 2"
    }
];

let currentQuestion = 0;
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        alert("Benar!");
    } else {
        alert(`Salah! Jawaban benar: ${correct}`);
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = "<h3>Latihan selesai!</h3>";
    }
}

loadQuestion();