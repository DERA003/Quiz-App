const questions = [
    {
        question: "How old was Saul when he became king?",
        answers:  [
            { text:"60", correct:false },
            { text:"50", correct:false },
            { text:"40", correct:true },
            { text:"30", correct:false }
        ]
    },
    {
        question: "How old was Moses when he died?",
        answers:  [
            { text:"60", correct:false },
            { text:"50", correct:false },
            { text:"40", correct:true },
            { text:"30", correct:false }
        ]
    },
    {
        question: "Who was the first female judge in the Bible?",
        answers:  [
            { text:"Hannah", correct:false },
            { text:"Ruth", correct:false },
            { text:"Mary", correct:false },
            { text:"Deborah", correct:true }
        ]
    },
    {
        question: "What is the name of Ruth's first son?",
        answers:  [
            { text:"Isreal", correct:false },
            { text:"Obed", correct:true },
            { text:"Ichabod", correct:false },
            { text:"Joshua", correct:false }
        ]
    },
    {
        question: "Saul had how many children?",
        answers:  [
            { text:"3", correct:true },
            { text:"5", correct:false },
            { text:"10", correct:false },
            { text:"7", correct:false }
        ]
    },
    {
        question: "____ tribe had no inheritance in the bible?",
        answers:  [
            { text:"Reuben", correct:false },
            { text:"Benjamin", correct:false },
            { text:"Levi", correct:true },
            { text:"Issachar", correct:false }
        ]
    },
    {
        question: "Who was the last son of Jacob?",
        answers:  [
            { text:"Joseph", correct:false },
            { text:"Gideon", correct:false },
            { text:"isaiah", correct:false },
            { text:"Benjamin", correct:true}
        ]
    },
    {
        question: "Did Moses see the promise land?",
        answers:  [
            { text:"No", correct:false },
            { text:"Maybe", correct:false },
            { text:"Yes", correct:true },
            { text:"All of the above", correct:false }
        ]
    },
    {
        question: "Eli had __ sons?",
        answers:  [
            { text:"1", correct:false },
            { text:"2", correct:true},
            { text:"3", correct:false},
            { text:"4", correct:false }
        ]
    },
    {
        question: "___ was the name of the sister of Moses?",
        answers:  [
            { text:"Rebecca", correct:false },
            { text:"Bethsheba", correct:false },
            { text:"Miriam", correct:true },
            { text:"Mary", correct:false }
        ]
    }
]

const questionElement = document.getElementById("questions")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    displayQuestion()
}
startQuiz()


function displayQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList = "btn"
        answerButton.appendChild(button)
        if (answer.correct) {
            answer.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
}