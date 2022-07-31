// alert("Hello Eng-Omar")
// first we need Ramdon number //

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionElv = document.getElementById("question");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerHTML = `Score: ${score}`;


const inputEl = document.getElementById("input");

questionElv.innerHTML = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1* num2

formEl.addEventListener("submit",()=>{
    const userAns = +inputEl.value
    if(userAns === correctAnswer){
        score++;
        updateLocalStorage();

    }else{
        score--;
        updateLocalStorage()
    }
    

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}