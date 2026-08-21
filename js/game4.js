const gameStartButton = document.getElementById("game-start-button");
const game4TimerStopButton = document.getElementById("game4-timerstop-button")
let game4StartDiv = document.getElementById("game4-start-div");
let game4TimerStopDiv = document.getElementById("game4-timerstop-div");

var timerMain = document.getElementById("timer-main");

var scoreboard = document.getElementById("scoreboard");
var resultboard = document.getElementById("resultboard");
var comment1board = document.getElementById("comment1board");
var comment2board = document.getElementById("comment2board");
/*var floorNumber = document.getElementById("floor-number");*/

let game4Counter = 0;
let game4Time = 30;
var game4Timer;
let game4FunctionControllerCounter = 0;
var game4FunctionControllerSist;
let game4FunctionResultCounter = 0;

let secm1 = 0;
let secm2 = 0;
let secm3 = 0;
let secm4 = 0;

let randoming;
var timegoal;

function game4Start () {
    scoreboard.innerHTML =``;
    game4FunctionControllerCounterSist = setInterval(game4FunctionController, 1000);
    game4StartDiv.innerHTML =`<p>目標タイムは…？</p>`;

    randoming = Math.trunc(Math.random() * 6);
    switch (randoming) {
        case 0: timegoal = "05 : 00";
            break;
        case 1: timegoal = "06 : 00";
            break;
        case 2: timegoal = "07 : 00";
            break;
        case 3: timegoal = "08 : 00";
            break;
        case 4: timegoal = "09 : 00";
            break;
        default:timegoal = "10 : 00";
            break;
    }
}

const regexy = (str) =>{
    const regex = /[\s]/g;
    return str.replace(regex, "");
}

function game4FunctionController () {
    game4FunctionControllerCounter += 1;
    if(game4FunctionControllerCounter < 6){
        console.log(game4FunctionControllerCounter);
    }

    if(game4FunctionControllerCounter === 2){
        timerMain.innerHTML =`<p><span class="hops timertext-brighter0">${timegoal}</span></p>`;
    } else if(game4FunctionControllerCounter === 4){
        game4StartDiv.innerHTML =`<br>`
        timerMain.innerHTML =`<p><span class="hops timertext-brighter0">Ready?</span></p>`;
    } else if(game4FunctionControllerCounter === 5){
        timerMain.innerHTML =`<p><span class="hops timertext-brighter0">Go!</span></p>`;
    } else if(game4FunctionControllerCounter === 6){
        game4TimerStopDiv.classList.add("game4-timerstop-button-on");
        game4TimerStopDiv.classList.remove("game4-timerstop-button-off");
        scoreboard.innerHTML =`<p>目標タイム：<span class="hops">${regexy(timegoal)}</span></p>`;
        game4Main();
    }
}

function game4Main(){
    game4Timer = setInterval(game4TimeCount, 10);
}/**/

function game4TimeCount(){
    if(secm1 === 9){
        secm1 = 0;
        if(secm2 === 9){
            secm2 = 0;
            if(secm3 === 9){
                secm3 = 0;
                secm4 += 1;
            }else{
                secm3 += 1;
            }
        }else{
            secm2 += 1;
        }
    }else{
        secm1 += 1;
    }
    
    

    if(secm3 >= 4 || secm4 >= 1){
        timerMain.innerHTML = `<p><span class="hops timertext-brighter5">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
    }else if(secm3 === 3){
        switch(secm2){
            case 0:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter0">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
            case 1,2:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter1">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
            case 3,4:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter2">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
            case 5,6:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter3">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
            case 7,8:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter4">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
            default:
                timerMain.innerHTML = `<p><span class="hops timertext-brighter5">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
        }
    }else if(secm1 === 0 && secm2 === 0 && secm3 === 0 && secm4 === 0){
        timerMain.innerHTML = `<p><span class="hops timertext-brighter0">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
    }else{
        timerMain.innerHTML = `<p><span class="hops timertext-brighter0">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
    }
}/**/

function game4TimerStop(){
    console.log("game4TimerStop");
    clearInterval(game4Timer);
    game4TimerStopDiv.classList.add("game4-timerstop-button-off");
    game4TimerStopDiv.classList.remove("game4-timerstop-button-on");
    scoreboard.innerHTML =`<p><span class="hops">finish</span></p>`;
    setInterval(game4Result, 1000);
}

function game4Result(){
    game4FunctionResultCounter += 1;
    if(game4FunctionResultCounter === 2){
        scoreboard.innerHTML =`<p>目標タイム&nbsp;→&nbsp;<span class="hops">${timegoal}</span></p>`;
    }else if(game4FunctionResultCounter === 4){
        resultboard.innerHTML =`<p>記録&nbsp;→</p>`;
    }else if(game4FunctionResultCounter === 5){
        resultboard.innerHTML =`<p>記録&nbsp;→&nbsp;<span class="hops">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
        timerMain.innerHTML = `<p><span class="hops timertext-brighter0">${secm4}${secm3}&nbsp;:&nbsp;${secm2}${secm1}</span></p>`;
    }else if(game4FunctionResultCounter === 6){
        console.log(timegoal.split('')[0] );
        console.log(timegoal.split('')[1] );
        console.log(timegoal.split('')[5] );
        console.log(timegoal.split('')[6] );

        if(parseInt(timegoal.split('')[0]) === secm4 && parseInt(timegoal.split('')[1]) === secm3){
            if(parseInt(timegoal.split('')[5]) === secm2 && parseInt(timegoal.split('')[6]) === secm1){
                comment1board.innerHTML =`<p>え！？　よく合わせられたな！？</p>`;
            }else if(parseInt(timegoal.split('')[5]) === secm2 || (parseInt(timegoal.split('')[5]) - secm2) > -5){
                comment1board.innerHTML =`<p>めっちゃ惜しいやん！？</p>`;
            }else{
                comment1board.innerHTML =`<p>まずまずといったところかな？</p>`;    
            }
        }else if(parseInt(timegoal.split('')[0]) === secm4 && parseInt(timegoal.split('')[1]) === (secm3 + 1)){
            if((parseInt(timegoal.split('')[5])  - secm2) < -5){
                comment1board.innerHTML =`<p>めっちゃ惜しいやん！？</p>`;
            }else{
                comment1board.innerHTML =`<p>まずまずといったところかな？</p>`;    
            }
        }else{
            comment1board.innerHTML =`<p>まずまずといったところかな？</p>`;    
        }
        comment2board.innerHTML =`<p>もう一回やる？　<a href="../games/game4.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }
}

gameStartButton.addEventListener("click", game4Start);
if(game4TimerStopButton){
    game4TimerStopButton.addEventListener("click", game4TimerStop);
}

