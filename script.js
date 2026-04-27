const quiz = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "Which language runs in a browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: 3
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  questionEl.innerText = quiz[current].question;
  optionsEl.forEach((btn, index) => {
    btn.innerText = quiz[current].options[index];
  });
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) {
    score++;
  }

  current++;

  if (current < quiz.length) {
    loadQuestion();
  } else {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.forEach(btn => btn.style.display = "none");
    scoreEl.innerText = `Your Score: ${score}/${quiz.length}`;
  }
}

loadQuestion();
