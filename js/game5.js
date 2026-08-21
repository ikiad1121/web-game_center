const gameStartButton = document.getElementById("game-start-button");
const gameStopButton = document.getElementById("game-stop-button")
let game5StartDiv = document.getElementById("game5-start-div");
let game5TimerStopDiv = document.getElementById("game5-stop-div");

var spaceMain = document.getElementById("space-main");
var targetMark = document.getElementById("target-mark");

var scoreboard = document.getElementById("scoreboard");
var resultboard = document.getElementById("resultboard");
var comment1board = document.getElementById("comment1board");
var comment2board = document.getElementById("comment2board");
/*var floorNumber = document.getElementById("floor-number");*/
var game5Timer;
var game5UFOController;

let game5FunctionControllerCounter = 0;
let game5RandomInt = 0;
let game5RandomCount = 0;
let game5FunctionResultCounter = 0;
let spaceMainBooling = false;

let secm1 = 0;
let secm2 = 0;
let secm3 = 0;
let secm4 = 0;

let randoming;
var timegoal;

let ufoTop1 = -5;
let ufoLeft1 = -50;

let spaceUfo;
let catchUfo = false;

function game5Start () {
    game5StartDiv.innerHTML =`<p>&nbsp;</p>`;
    scoreboard.innerHTML =`<p>UFOをキャッチできるか？</p>`;
    game5RandomInt = Math.trunc(Math.random() * 2);
    switch(game5RandomInt){
        case 0:
            spaceUfo = "space-ufo1";
            game5RandomCount = 1100;
            break;
        case 1:
            spaceUfo = "space-ufo2";
            game5RandomCount = 1300;
            break;
        case 2:
            spaceUfo = "space-ufo3";
            game5RandomCount = 1500;
            break;
    }
    game5Timer = setInterval(game5FunctionController, 10);
}

function game5FunctionController () {
    game5FunctionControllerCounter += 1;
    if(game5FunctionControllerCounter === 200){
        spaceMain.innerHTML =`<a id="ufo" class="${spaceUfo}" onclick="game5Main(this)"; href="#">
                                    <img src="../../assets/image/ufo.png" width="30%">
                                </a>`;                    
        targetMark.innerHTML =`<div class="target1"></div>
                                <div class="target2"></div>
                                <div class="target3"></div>
                                <div class="target4"></div>`;
        scoreboard.innerHTML =`<p>&nbsp;</p>`;
    }else if(game5FunctionControllerCounter === game5RandomCount){
        spaceMain.innerHTML =``;
        targetMark.innerHTML =``;
    }else if(game5FunctionControllerCounter > 1200){
        scoreboard.innerHTML =`<p><span class="hops">Time Up</span></p>`;
        spaceMainBooling = true;
        setInterval(game5Result, 1000);
        clearInterval(game5UFOController);
    }
}

function game5Main(e){
    if(catchUfo) return;//add-miya

    console.log("X");
    console.log(e.getBoundingClientRect());
    catchUfo = true;

    var target = document.getElementById('ufo');//add
    target.classList.toggle('pause-ufo');//add

    ufoTop1 = e.getBoundingClientRect().top;
    ufoLeft1 = e.getBoundingClientRect().left + ((e.getBoundingClientRect().right - e.getBoundingClientRect().left)/2);/**/
    /*ufoTop1 = e.style.position.top;
    ufoLeft1 = e.style.position.left;*/
    /*spaceMain.innerHTML =`<a id="ufo" top="${ufoTop1}px" left="${ufoLeft1}px">
                                    <img src="../../assets/image/ufo.png" width="30%">
                                </a>`;*/ //remove-miya
    scoreboard.innerHTML =`<p><span class="hops">finish</span></p>`;
    spaceMainBooling = false;
    clearInterval(game5Timer);
    setInterval(game5Result, 1000);
}/**/

function game5Result(){
    game5FunctionResultCounter += 1;
    
    if(game5FunctionResultCounter === 3){
        console.log(ufoTop1);
        console.log(ufoLeft1);
        scoreboard.innerHTML =`<p><span class="hops"></span></p>`;
    }else if(game5FunctionResultCounter === 8){
        console.log(ufoLeft1 > 100 && ufoLeft1 < 140 ? true : false);
        console.log(ufoLeft1 > 60 && ufoLeft1 < 340 ? true : false);
        if(!catchUfo){
            comment1board.innerHTML =`<p>残念ながらキャッチできなかったようだ。</p>`;  
        }else{
            if(ufoLeft1 > 187 && ufoLeft1 < 227){
                comment1board.innerHTML =`<p>ドンピシャでキャッチ成功となったようだ。</p>`;
            }else if(ufoLeft1 > 147 && ufoLeft1 < 427){
                comment1board.innerHTML =`<p>キャッチ成功となったようだ。</p>`;
            }else{
                comment1board.innerHTML =`<p>残念ながら上手くキャッチできなかったようだ。</p>`;    
            }
        }
        comment2board.innerHTML =`<p>もう一回やる？　<a href="../games/game5.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }
}

gameStartButton.addEventListener("click", game5Start);
