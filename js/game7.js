const gameStartButton = document.getElementById("game-start-button");
let game7StartDiv = document.getElementById("game7-start-div");

var keyboard = document.getElementById("keyboard");
var answer = document.getElementById("answer");
var answerboard = document.getElementById("answerboard");

var timerboard = document.getElementById("timerboard");
var scoreboard = document.getElementById("scoreboard");
var resultboard = document.getElementById("resultboard");

var calcerMain = document.getElementById("calcer-main");
var answermain = document.getElementById("answer-main");

let calc1 =  0;
let calc2 =  0;
let calcWid = true;
let calcWidNum = 0;

var game7C1;
var game7timer;
let game7Counter1s = 0;
let game7ResultCounter = 0;
let game7Times = 120;

let game7quest = 0;
let game7point = 0;

function game7Start () {
    if(game7quest === 0){
        game7timer = setInterval(game7Timer1, 1000);
        game7StartDiv.innerHTML = ``;
        answermain.innerHTML = `<div class="answer">
                                    <p id="answerboard"></p>
                                </div>`;
        if(game7Times < 60){
            timerboard.innerHTML = `<p>残り <span class="hops">${game7Times}</span> 秒</p>`;
        }else if(game7Times === 0){
            setTimeout(game7Timer1Clear, 5);
        }else{
            timerboard.innerHTML = `<p>残り <span class="hops">${Math.trunc(game7Times / 60)}</span> 分 <span class="hops">${game7Times % 60}</span> 秒</p>`;
        }
    }else{
        document.getElementById("answerboard").innerText = "";
    }
    game7quest += 1;
    /*calc1 =  Math.trunc(Math.random() * 498) + 1;
    calc2 =  Math.trunc(Math.random() * 498) + 1;
    calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>＋<span>${calc2}</span></p>`;*/
    calcWidNum =  Math.trunc(Math.random() * 2);
    calc1 =  Math.trunc(Math.random() * 498) + 1;
    calc2 =  Math.trunc(Math.random() * 498) + 1;
    if(calcWidNum === 0){
        calcWid = true;
        calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>＋<span>${calc2}</span></p>`;
    }else{
        calcWid = false;
        calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>－<span>${calc2}</span></p>`;
    }/**/
    keyboard.innerHTML = `<div>
                            <div class="keyboard">
                                <div class="mas"><a id="1">1</a></div>
                                <div class="mas"><a id="2">2</a></div>
                                <div class="mas"><a id="3">3</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="4">4</a></div>
                                <div class="mas"><a id="5">5</a></div>
                                <div class="mas"><a id="6">6</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="7">7</a></div>
                                <div class="mas"><a id="8">8</a></div>
                                <div class="mas"><a id="9">9</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="0">0</a></div>
                                <div class="mas"><a id="clear">C</a></div>
                                <div class="mas"><a id="enter">E</a></div>
                            </div>
                        </div>`;
    scoreboard.innerHTML =`<p><span class="hops">${game7point}</span> 問正解 / ${game7quest} 問中</p>`;
    game7C1 = setInterval(game7Counter1, 100);
}

function game7Main(e){
    if(e.id === "clear"){
        document.getElementById("answerboard").innerText = "";
    }else if(e.id === "enter"){
        setTimeout(game7ScoreCount, 5);
    }else{
        switch(e.id){
            case "0" : 
                document.getElementById("answerboard").innerText += 0;
                break;
            case "1" : 
                document.getElementById("answerboard").innerText += 1;
                break;
            case "2" : 
                document.getElementById("answerboard").innerText += 2;
                break;
            case "3" : 
                document.getElementById("answerboard").innerText += 3;
                break;
            case "4" : 
                document.getElementById("answerboard").innerText += 4;
                break;
            case "5" : 
                document.getElementById("answerboard").innerText += 5;
                break;
            case "6" : 
                document.getElementById("answerboard").innerText += 6;
                break;
            case "7" : 
                document.getElementById("answerboard").innerText += 7;
                break;
            case "8" : 
                document.getElementById("answerboard").innerText += 8;
                break;
            case "9" : 
                document.getElementById("answerboard").innerText += 9;
                break;
        }
    }
}

function game7Counter1(){
    game7Counter1s += 1;
    if(game7Counter1s === 10){
        calc1 =  Math.trunc(Math.random() * 498) + 1;
        calc2 =  Math.trunc(Math.random() * 498) + 1;
        if(calcWid){
            calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>＋<span>${calc2}</span></p>`;
        }else{
            while(calc1 < calc2){
                calc1 =  Math.trunc(Math.random() * 498) + 1;
                calc2 =  Math.trunc(Math.random() * 498) + 1;
            }
            calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>－<span>${calc2}</span></p>`;
        }
        keyboard.innerHTML = `<div>
                                <div class="keyboard">
                                    <div class="mas"><a id="1" onclick="game7Main(this)"; href="#">1</a></div>
                                    <div class="mas"><a id="2" onclick="game7Main(this)"; href="#">2</a></div>
                                    <div class="mas"><a id="3" onclick="game7Main(this)"; href="#">3</a></div>
                                </div>
                                <div class="keyboard">
                                    <div class="mas"><a id="4" onclick="game7Main(this)"; href="#">4</a></div>
                                    <div class="mas"><a id="5" onclick="game7Main(this)"; href="#">5</a></div>
                                    <div class="mas"><a id="6" onclick="game7Main(this)"; href="#">6</a></div>
                                </div>
                                <div class="keyboard">
                                    <div class="mas"><a id="7" onclick="game7Main(this)"; href="#">7</a></div>
                                    <div class="mas"><a id="8" onclick="game7Main(this)"; href="#">8</a></div>
                                    <div class="mas"><a id="9" onclick="game7Main(this)"; href="#">9</a></div>
                                </div>
                                <div class="keyboard">
                                    <div class="mas"><a id="0" onclick="game7Main(this)"; href="#">0</a></div>
                                    <div class="mas"><a id="clear" onclick="game7Main(this)"; href="#">C</a></div>
                                    <div class="mas"><a id="enter" onclick="game7Main(this)"; href="#">E</a></div>
                                </div>
                            </div>`;
        setTimeout(game7Counter1Clear, 5);
    }else{
        calc1 =  Math.trunc(Math.random() * 498) + 1;
        calc2 =  Math.trunc(Math.random() * 498) + 1;
        if(calcWid){
            calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>＋<span>${calc2}</span></p>`;
        }else{
            calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>－<span>${calc2}</span></p>`;
        }
    }
}

function game7Counter1Clear(){
    game7Counter1s = 0;
    clearInterval(game7C1);
}

function game7Timer1(){
    game7Times -= 1;
    if(game7Times === 0){
        scoreboard.innerHTML =``;
        timerboard.innerHTML = `<p><span class="hops">Time Up</span></p>`;
        setTimeout(game7Timer1Clear, 5);
    }else if(game7Times < 60){
        timerboard.innerHTML = `<p>残り <span class="hops">${game7Times}</span> 秒</p>`;
    }else{
        timerboard.innerHTML = `<p>残り <span class="hops">${Math.trunc(game7Times / 60)}</span> 分 <span class="hops">${game7Times % 60}</span> 秒</p>`;
    }
}

function game7Timer1Clear(){
    clearInterval(game7C1);
    clearInterval(game7timer);
    if(calcWid){
        calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>＋<span>${calc2}</span></p>`;
    }else{
        calcerMain.innerHTML =`<p id="calcsign"><span>${calc1}</span>－<span>${calc2}</span></p>`;
    }
    keyboard.innerHTML = `<div>
                            <div class="keyboard">
                                <div class="mas"><a id="1">1</a></div>
                                <div class="mas"><a id="2">2</a></div>
                                <div class="mas"><a id="3">3</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="4">4</a></div>
                                <div class="mas"><a id="5">5</a></div>
                                <div class="mas"><a id="6">6</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="7">7</a></div>
                                <div class="mas"><a id="8">8</a></div>
                                <div class="mas"><a id="9">9</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="0">0</a></div>
                                <div class="mas"><a id="clear">C</a></div>
                                <div class="mas"><a id="enter">E</a></div>
                            </div>
                        </div>`;
    setInterval(game7Result, 1000);
}

function game7ScoreCount(){
    document.getElementById("calcsign").innerHTML += `＝<span>${document.getElementById("answerboard").innerText}</span>`;
    keyboard.innerHTML = `<div>
                            <div class="keyboard">
                                <div class="mas"><a id="1">1</a></div>
                                <div class="mas"><a id="2">2</a></div>
                                <div class="mas"><a id="3">3</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="4">4</a></div>
                                <div class="mas"><a id="5">5</a></div>
                                <div class="mas"><a id="6">6</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="7">7</a></div>
                                <div class="mas"><a id="8">8</a></div>
                                <div class="mas"><a id="9">9</a></div>
                            </div>
                            <div class="keyboard">
                                <div class="mas"><a id="0">0</a></div>
                                <div class="mas"><a id="clear">C</a></div>
                                <div class="mas"><a id="enter">E</a></div>
                            </div>
                        </div>`;
    if(calcWid){
        if(parseInt(document.getElementById("answerboard").innerText) === (calc1 + calc2)){
            document.getElementById("calcsign").innerHTML += ` <span class="right">O</span>`;
            game7point += 1;
            scoreboard.innerHTML =`<p><span class="hops">${game7point}</span> 問正解 / ${game7quest} 問中</p>`;
        }else{
            document.getElementById("calcsign").innerHTML += ` <span class="different">X</span>`;
        }
    }else{
        if(parseInt(document.getElementById("answerboard").innerText) === (calc1 - calc2)){
            document.getElementById("calcsign").innerHTML += ` <span class="right">O</span>`;
            game7point += 1;
            scoreboard.innerHTML =`<p><span class="hops">${game7point}</span> 問正解 / ${game7quest} 問中</p>`;
        }else{
            document.getElementById("calcsign").innerHTML += ` <span class="different">X</span>`;
        }
    }
    /*if(parseInt(document.getElementById("answerboard").innerText) === (calc1 + calc2)){
        document.getElementById("calcsign").innerHTML += ` <span class="right">O</span>`;
        game7point += 1;
        scoreboard.innerHTML =`<p><span class="hops">${game7point}</span> 問正解 / ${game7quest} 問中</p>`;
    }else{
        document.getElementById("calcsign").innerHTML += ` <span class="different">X</span>`;
    }*/
    
    setTimeout(game7Start, 500);
}

function game7Result(){
    game7Counter1s += 1;
    if(game7Counter1s === 4){
        scoreboard.innerHTML =`<p><span class="hops">？？</span> 問正解 / ${game7quest} 問中</p>`;
    }else if(game7Counter1s === 5){
        scoreboard.innerHTML =`<p><span class="hops">　　</span> 問正解 / ${game7quest} 問中</p>`;
    }else if(game7Counter1s === 6){
        scoreboard.innerHTML =`<p><span class="hops">${game7point}</span> 問正解 / ${game7quest} 問中</p>`;
    }else if(game7Counter1s === 7){
        if(game7point > 10 && (game7quest - game7point) < 5){
            resultboard.innerHTML = `<p><span class="hops">すごい！！</span></p>`;
        }else{
            resultboard.innerHTML = `<p><span class="hops">まずます。</span></p>`;
        }
        resultboard.innerHTML += `<p>もう1回やる？｜<a href="../games/game6.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }
}

gameStartButton.addEventListener("click", game7Start);