const startEl=document.getElementById("start");
const stopEl=document.getElementById("stop");
const resetEl=document.getElementById("reset");
const timerEl=document.getElementById("timer");

let interval;
let timeLeft=2700;
function updateTimer(){
    let min= Math.floor(timeLeft/60);
    let sec=timeLeft % 60;
    let formattedTime=min + ":" + sec;
timerEl.innerHTML=formattedTime;
}

function startTimer(){
    interval=setInterval(
        ()=>{
            timeLeft--;
            updateTimer();
            if(timeLeft===0){
                clearInterval(interval);
                alert("times Up!!");
                timeLeft=2700;
                
            }

        },1000);
};

function stopTimer(){
   clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft=2700;
    updateTimer();
}




startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);