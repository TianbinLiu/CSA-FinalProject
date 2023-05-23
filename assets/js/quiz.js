
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
]

const SCORE_POINTS = 100 //all captalized - fixed
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] //spread operator to get all the question values in the array
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score) //save to local storage

        return window.location.assign('/end.html') //keep track of the score
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` //question 1 of 4, 2 of 4, etc. incrementing by 1 each time
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`  //calculate what question we are on and correspond w/ the percentage

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) //calculate value of the question index
    currentQuestion = availableQuestions[questionsIndex] //keep track of what questions we are on
    question.innerText = currentQuestion.question //know what the question asked

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1) //splice(start, deleteCount) - remove elements from an array

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' //if true, toggle green css bar; if false, red

        if(classToApply === 'correct') { //if correct, increment score by 100 points
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})


incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()