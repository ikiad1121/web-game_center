const gameStartButton = document.getElementById("game-start-button");
let game8StartDiv = document.getElementById("game8-start-div");

var keyboard = document.getElementById("keyboard");
var answer = document.getElementById("answer");
var answerboard = document.getElementById("answerboard");

var timerboard = document.getElementById("timerboard");
var scoreboard = document.getElementById("scoreboard");
var resultboard = document.getElementById("resultboard");

var puzzleMain = document.getElementById("puzzle-main");

let shapes =  "circle";
let shapesnumber =  0;
let numbers =  1;

let shapes1 =  "circle";
let shapes2 =  "circle";
let shapesnumber1 =  0;
let shapesnumber2 =  0;
let numbers1 =  1;
let numbers2 =  1;
let shapes3 =  "circle";
let numbers3 =  1;

var game8C1;
var game8timer;
var game8Counter;

let game8Counter1s = 0;
let game8Counter2s = 0;
let game8ResultCounter = 0;
let game8Times = 120;

let game8quest = 0;
let game8point = 0;

let game8questRam = 0;

let game8movableItems;

function game8Start () {
    if(game8quest === 0){
        game8timer = setInterval(game8Timer1, 1000);
        game8StartDiv.innerHTML = ``;
        if(game8Times < 60){
            timerboard.innerHTML = `<p>残り <span class="hops">${game8Times}</span> 秒</p>`;
        }else if(game8Times === 0){
            setTimeout(game8Timer1Clear, 5);
        }else{
            timerboard.innerHTML = `<p>残り <span class="hops">${Math.trunc(game8Times / 60)}</span> 分 <span class="hops">${game8Times % 60}</span> 秒</p>`;
        }
    }else{
        document.getElementById("answerboard").innerText = "";
    }
    game8Counter = setInterval(game8Counter1, 1000);
}

function game8Counter1(){
    game8Counter1s += 1;

    if(game8Counter1s === 1){
        game8quest += 1;
        scoreboard.innerHTML =`<p><span class="hops">${game8point}</span> 問正解 / ${game8quest} 問中</p>`;

        shapesnumber =  Math.trunc(Math.random() * 3);
        numbers =  Math.trunc(Math.random() * 3) + 1;
        shapes = shapesnumber2 === 0? "circle": shapesnumber2 === 1? "triane":"square";
        puzzleMain.innerHTML = `<div class="answerframe">
                                    <img src ="../../assets/image/puzzle/${shapes}${numbers}A.png" width="100%">    
                                </div>
                                <div class="box inpframe">
                                </div>`;
        game8questRam = Math.trunc(Math.random() * 3);
        switch(game8questRam){
            case 0 :
                var whileC1 = 0;
                var whileC2 = 0;

                shapesnumber1 =  Math.trunc(Math.random() * 3);
                numbers1 =  Math.trunc(Math.random() * 3) + 1;
                shapesnumber2 =  Math.trunc(Math.random() * 3);
                numbers2 =  Math.trunc(Math.random() * 3) + 1;

                while((shapesnumber1 === shapesnumber) && (numbers1 === numbers)){
                    shapesnumber1 =  Math.trunc(Math.random() * 3);
                    numbers1 =  Math.trunc(Math.random() * 3) + 1;
                    whileC1 += 1;
                }
                shapes1 = (shapesnumber1 === 0)? "circle": (shapesnumber1 === 1)? "triane":"square";
                
                while(((shapesnumber2 === shapesnumber) && (numbers2 === numbers)) || ((shapesnumber2 === shapesnumber1) && (numbers2 === numbers1))){
                    shapesnumber2 =  Math.trunc(Math.random() * 3);
                    numbers2 =  Math.trunc(Math.random() * 3) + 1;
                    whileC2 += 1;
                }
                shapes2 = (shapesnumber2 === 0)? "circle": (shapesnumber2 === 1)? "triane":"square";
                shapes3 = shapes;
                numbers3 = numbers;

                console.log(whileC1);
                console.log(whileC2);

                keyboard.innerHTML = `<div class="box box1">
                                            <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable1" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable2" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable3" draggable="true" width="100%">    
                                        </div>`;
                break;
            case 1 :
                var whileC1 = 0;
                var whileC2 = 0;

                shapesnumber1 =  Math.trunc(Math.random() * 3);
                numbers1 =  Math.trunc(Math.random() * 3) + 1;
                shapesnumber2 =  Math.trunc(Math.random() * 3);
                numbers2 =  Math.trunc(Math.random() * 3) + 1;

                while((shapesnumber1 === shapesnumber) && (numbers1 === numbers)){
                    shapesnumber1 =  Math.trunc(Math.random() * 3);
                    numbers1 =  Math.trunc(Math.random() * 3) + 1;
                    whileC1 += 1;
                }
                shapes1 = (shapesnumber1 === 0)? "circle": (shapesnumber1 === 1)? "triane":"square";
                
                while(((shapesnumber2 === shapesnumber) && (numbers2 === numbers)) || ((shapesnumber2 === shapesnumber1) && (numbers2 === numbers1))){
                    shapesnumber2 =  Math.trunc(Math.random() * 3);
                    numbers2 =  Math.trunc(Math.random() * 3) + 1;
                    whileC2 += 1;
                }
                shapes2 = (shapesnumber2 === 0)? "circle": (shapesnumber2 === 1)? "triane":"square";
                shapes3 = shapes;
                numbers3 = numbers;

                console.log(whileC1);
                console.log(whileC2);

                keyboard.innerHTML = `<div class="box box1">
                                            <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable1" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable2" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable3" draggable="true" width="100%">    
                                        </div>`;
                break;
            case 2 :
                var whileC1 = 0;
                var whileC2 = 0;
                
                shapesnumber1 =  Math.trunc(Math.random() * 3);
                numbers1 =  Math.trunc(Math.random() * 3) + 1;
                shapesnumber2 =  Math.trunc(Math.random() * 3);
                numbers2 =  Math.trunc(Math.random() * 3) + 1;

                while((shapesnumber1 === shapesnumber) && (numbers1 === numbers)){
                    shapesnumber1 =  Math.trunc(Math.random() * 3);
                    numbers1 =  Math.trunc(Math.random() * 3) + 1;
                    whileC1 += 1;
                }
                shapes1 = (shapesnumber1 === 0)? "circle": (shapesnumber1 === 1)? "triane":"square";
                
                while(((shapesnumber2 === shapesnumber) && (numbers2 === numbers)) || ((shapesnumber2 === shapesnumber1) && (numbers2 === numbers1))){
                    shapesnumber2 =  Math.trunc(Math.random() * 3);
                    numbers2 =  Math.trunc(Math.random() * 3) + 1;
                    whileC2 += 1;
                }
                shapes2 = (shapesnumber2 === 0)? "circle": (shapesnumber2 === 1)? "triane":"square";
                shapes3 = shapes;
                numbers3 = numbers;

                console.log(whileC1);
                console.log(whileC2);

                keyboard.innerHTML = `<div class="box box1">
                                            <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable1" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable2" draggable="true" width="100%">
                                            <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable3" draggable="true" width="100%">    
                                        </div>`;
                break;
        }
    }

    game8movableItems = [...document.querySelectorAll('[id^="movable"]')];

    const handleDragStart = (e) => { 
        e.dataTransfer.effectAllowed = "move";

        const { id } = e.target;
        e.dataTransfer.setData("application/json", JSON.stringify({ id }));
    };

    for (const item of game8movableItems) {
        item.addEventListener("dragstart", handleDragStart, false);
    }

    const handleDragEnter = (e) => {
        if ([...e.target.classList].includes("puzzling")) {
          return;
        }
      
        e.target.classList.add("over");
      };

    const handleDragOver = (e) => {
        e.preventDefault();

        if([...e.target.classList].includes("puzzling")) {
            e.dataTransfer.dropEffect = "none";
            return;
        }
    
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e) => {
        e.preventDefault();

        const { id } = JSON.parse(e.dataTransfer.getData("application/json"));

        e.target.appendChild(document.getElementById(id));
    };

    const boxes = [...document.querySelectorAll(".box")];

    for (const box of boxes) {
        box.addEventListener("dragenter", handleDragEnter, false);
        box.addEventListener("dragover", handleDragOver, false);
        box.addEventListener("drop", handleDrop, false);
    }

    if(document.querySelectorAll('.inpframe > [id^="movable"]')){
        const inpframe = document.querySelectorAll(".inpframe");
        
        //console.log(inpframeItems.split('/\s|\//',6)[5]);
        //console.log(inpframe[0].innerHTML);
        var logins = `${inpframe[0].innerHTML}`;
        var loginsSp = logins.split(" ");
        if(loginsSp[33]){
            //console.log(logins);
            //console.log(logins.split(" "));
            console.log(loginsSp[33].slice(24, 31));
            console.log(shapes + numbers);
            game8ScoreCount(loginsSp[33].slice(24, 31));//
        }
    }
}

function game8Counter1Clear(){
    game8Counter1s = 0;
    clearInterval(game8Counter);
    game8Counter = setInterval(game8Counter1, 1000);
}

function game8Timer1(){
    game8Times -= 1;
    if(game8Times === 0){
        scoreboard.innerHTML =``;
        timerboard.innerHTML = `<p><span class="hops">Time Up</span></p>`;
        setTimeout(game8Timer1Clear, 5);
    }else if(game8Times < 60){
        timerboard.innerHTML = `<p>残り <span class="hops">${game8Times}</span> 秒</p>`;
    }else{
        timerboard.innerHTML = `<p>残り <span class="hops">${Math.trunc(game8Times / 60)}</span> 分 <span class="hops">${game8Times % 60}</span> 秒</p>`;
    }
}

function game8Timer1Clear(){
    clearInterval(game8Counter);
    clearInterval(game8timer);

    switch(game8questRam){
        case 0 :
            keyboard.innerHTML = `<div class="box box1">
                                        <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable1" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable2" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable3" width="100%">    
                                    </div>`;
            break;
        case 1 :
            keyboard.innerHTML = `<div class="box box1">
                                        <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable1" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable2" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable3" width="100%">    
                                    </div>`;
            break;
        case 2 :
            keyboard.innerHTML = `<div class="box box1">
                                        <img src ="../../assets/image/puzzle/${shapes1}${numbers1}B.png" class="puzzling" id="movable1" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes2}${numbers2}B.png" class="puzzling" id="movable2" width="100%">
                                        <img src ="../../assets/image/puzzle/${shapes3}${numbers3}B.png" class="puzzling" id="movable3" width="100%">    
                                    </div>`;
            break;
    }
    
    setInterval(game8Result, 1000);
}

function game8ScoreCount(score){
    if(score === shapes + numbers){
        puzzleMain.innerHTML += ` <span class="right">O</span>`;
        game8point += 1;
        scoreboard.innerHTML =`<p><span class="hops">${game8point}</span> 問正解 / ${game8quest} 問中</p>`;
    }else{
        puzzleMain.innerHTML += ` <span class="different">X</span>`;
    }
    
    setTimeout(game8Counter1Clear, 5);
}

function game8Result(){
    game8Counter2s += 1;
    if(game8Counter2s === 4){
        scoreboard.innerHTML =`<p><span class="hops">？？</span> 問正解 / ${game8quest} 問中</p>`;
    }else if(game8Counter2s === 5){
        scoreboard.innerHTML =`<p><span class="hops">　　</span> 問正解 / ${game8quest} 問中</p>`;
    }else if(game8Counter2s === 6){
        scoreboard.innerHTML =`<p><span class="hops">${game8point}</span> 問正解 / ${game8quest} 問中</p>`;
    }else if(game8Counter2s === 7){
        if(game8point > 40 && (game8quest - game8point) < 10){
            resultboard.innerHTML = `<p><span class="hops">すごい！！</span></p>`;
        }else{
            resultboard.innerHTML = `<p><span class="hops">まずます。</span></p>`;
        }
        resultboard.innerHTML += `<p>もう1回やる？｜<a href="../games/game8.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }
}

gameStartButton.addEventListener("click", game8Start);