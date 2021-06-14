const quizData=[
    {
        question: 'Who scored the most international runs for India in 2020? (847 runs)',
        a:'Virat Kohli',
        b:'Shikhar Dhawan',
        c:'KL Rahul',
        d:'Rohit Sharma',
        correct: 'c'
    },
    {
        question:'Who was the highest wicket-taker for India in the year? (27 wickets)',
        a:'Ravindra Jadeja',
        b:'Ravichandran Ashwin ',
        c:'Jasprit Bhurah',
        d:'Mohammed Shami',
        correct: 'c'

    },
    {
        question:'While four batsmen scored a century each for India in 2020, who was the player with the most fifties? (8)',
        a:'KL Rahul',
        b:'Shreyas Ayer',
        c:'Virat Kohli',
        d:'Rohit Sharma',
        correct: 'a'

    },
    {
        question:'Who hit the most fours for India in 2020? (68)',
        a:'KL Rahul',
        b:'Rohit Sharma',
        c:'Shikhar Dhawan',
        d:'Virat Kohli',
        correct: 'd'

    },
    {
        question:'Who got the highest individual score for India in 2020? (119)',
        a:'KL Rahul',
        b:'Rohit Sharma',
        c:'Shikhar Dhawan',
        d:'Ajinkya Rahane',
        correct: 'b'

    }
    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});