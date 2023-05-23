const question = document.querySelector('#question');
const cardContainer = document.querySelector('.card-container');
const dropText = document.querySelector('.drop-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What is 2+2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2, //answer is choice2
    },
    {
        question: 'What is 2+2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2, 
    },
    {
        question: 'What is 2+2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,  
    },
    {
        question: 'What is 2+2',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,  
    }
];

const SCORE_POINTS = 100; // Points awarded for each correct answer
const MAX_QUESTIONS = 4; // Maximum number of questions in the game

// Function to start the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; //spread operator to get all the question values in the array
    getNewQuestion();
};

// Function to retrieve and display a new question
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score); //save to local storage

        return (window.location.href = '/end.html'); //keep track of the score
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`; //question 1 of 4, 2 of 4, etc. incrementing by 1 each time
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; //calculate what question we are on and correspond w/ the percentage

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length); //calculate value of the question index
    currentQuestion = availableQuestions[questionsIndex]; //keep track of what questions we are on
    question.innerText = currentQuestion.question; //know what the question asked

    cardContainer.innerHTML = ''; // Clear the card container
    for (let i = 1; i <= 4; i++) {
        const choiceCard = document.createElement('div');
        choiceCard.classList.add('choice-card');
        choiceCard.draggable = true;
        choiceCard.dataset.number = i;
        choiceCard.innerText = currentQuestion['choice' + i];
        cardContainer.appendChild(choiceCard);
    }

    availableQuestions.splice(questionsIndex, 1); //splice(start, deleteCount) - remove elements from an array

    acceptingAnswers = true;
};
// Drag and drop event listeners
cardContainer.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.number);
});

cardContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

cardContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    if (!acceptingAnswers) return;

    const selectedChoice = e.dataTransfer.getData('text/plain');
    const selectedAnswer = selectedChoice;

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; //if true, toggle green css bar; if false, red

    if (classToApply === 'correct') { //if correct, increment score by 100 points
        incrementScore(SCORE_POINTS);
    }

    const choiceCards = Array.from(cardContainer.getElementsByClassName('choice-card'));
    const selectedCard = choiceCards.find((card) => card.dataset.number === selectedChoice);

    selectedCard.classList.add(classToApply);

    setTimeout(() => {
        selectedCard.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
});

// Function to increment the score
incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
}

startGame();
