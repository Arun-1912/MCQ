const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("Question-container");
const questionElement = document.getElementById("Question");
const answerElementButtons = document.getElementById("answer-button");

let shuffleQuestion, currentQuestionIndex;
startButton.addEventListener("click",startGame);
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    startNextQuestion();
})

function startGame(){
    startButton.classList.add("hide");
    shuffleQuestion = question.sort(()=>Math.random()-0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    startNextQuestion();   
}

function startNextQuestion(){
    resetState();
    showQuestion(shuffleQuestion[currentQuestionIndex]);

}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerElementButtons.appendChild(button);  
    });
}
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerElementButtons.firstChild){
        answerElementButtons.removeChild(answerElementButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerElementButtons.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    });
    if(shuffleQuestion.length > currentQuestionIndex+1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerHTML = 'Restart';
        startButton.classList.remove('hide');
    }
}
function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }
    else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question:"Automatic type conversion is possible in which of the possible cases?",
        answer:[
            {text:'Byte to int',correct:false},
            {text:'int to long',correct:true},
            {text:'long to int',correct:false},
            {text:'short to int',correct:false}
        ]
    },
    {
        question:"When is the object created with new keyword?",
        answer:[
            {text:'At run time',correct:true},
            {text:'At compile time',correct:false},
            {text:'Depends on the code',correct:false},
            {text:'None',correct:false}
        ]
    }, 
    {
        question:"Identify the correct restriction on static methods.1.They must access only static data , 2.They can only call other static methods , 3.They cannot refer to this or super",
        answer:[
            {text:'2 and 3',correct:false},
            {text:'1 and 3',correct:false},
            {text:'1',correct:false},
            {text:'1,2 and 3',correct:true}
        ]
    },
    {
        question:"Total constructor string class have?",
        answer:[
            {text:'3',correct:false},
            {text:'7',correct:false},
            {text:'13',correct:true},
            {text:'21',correct:false}
        ]
    },
    {
        question:" Identify the modifier which cannot be used for constructor.",
        answer:[
            {text:'static',correct:true},
            {text:'public',correct:false},
            {text:'protected',correct:false},
            {text:'private',correct:false}
        ]
    },

]