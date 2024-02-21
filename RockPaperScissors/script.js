const player=document.querySelector(".player");
const computer=document.querySelector(".cpu");
const result=document.querySelector(".result");
const button=document.querySelectorAll(".choice-btn");

let playerChoice;
let cpuChoice;

const choice=["Rock", "Paper", "Scissor"];

button.forEach((btns)=>
{
    btns.addEventListener("click",()=>{
        playerChoice=btns.innerText;
        player.innerText=`Player: ${btns.innerText}`;
        cpuPlay();
        toPlay();
    });
    
});

function cpuPlay()
{
    let random=Math.floor(Math.random()*3);
    computer.innerText=`Computer: ${choice[random]}`;
    cpuChoice=choice[random];
}

function toPlay(){
    if(playerChoice==cpuChoice)
    {
        result.innerText="Draw";
    }

    else if
    ((playerChoice=="Rock" && cpuChoice=="Scissor")||
    (playerChoice=="Scissor" && cpuChoice=="Paper")||
    (playerChoice=="Paper" && cpuChoice=="Rock"))
    {
        result.innerText="Player wins";

    }

    else{
        result.innerText="Computer wins";
    }
}

function reset()
{
    player.innerText="Player: ";
    computer.innerText="Computer: ";
    result.innerText="Result: "
}