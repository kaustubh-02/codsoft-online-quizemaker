// script.js
const startButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Berlin', correct: false }
        ]
    },
    {
        question: 'Who wrote "Hamlet"?',
        answers: [
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Mark Twain', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'What is the capital of India?',
        answers: [
            { text: 'delhi', correct: true },
            { text: 'London', correct: false },
            { text: 'Rome', correct: false },
            { text: 'Berlin', correct: false }
        ]
    },
    {
        question: 'world no 1 batsamn',
        answers: [
            { text: 'virat', correct: true },
            { text: 'sachin', correct: false },
            { text: 'Rohit', correct: false },
            { text: 'ms dhobi', correct: false }
        ]
    },
    {
        question: 'Which player has most ipl runs',
        answers: [
            { text: 'virat', correct: true },
            { text: 'rohit', correct: false },
            { text: 's raina', correct: false },
            { text: 'dhawan', correct: false }
        ]
    },
    {
        question: 'Which team win the 2024 worlcup?',
        answers: [
            { text: 'india', correct: true },
            { text: 'aus', correct: false },
            { text: 'englan', correct: false },
            { text: 'south africa', correct: false }
        ]
    },
    // Add more questions as needed
];

startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
});

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        startButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
