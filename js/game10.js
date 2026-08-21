const gameStartButton = document.getElementById("game-start-button");
let game10StartDiv = document.getElementById("game10-start-div");
let diceBase = document.getElementById("dice-base");

/* const diceButton = document.getElementById("dice-button");*/

var scoreboard = document.getElementById("scoreboard");
var totalboard = document.getElementById("totalboard");
var comment1board = document.getElementById("comment1board");
var comment2board = document.getElementById("comment2board");
var ruleboard = document.getElementById("ruleboard");

let randCardNumber = [];
let game10Booler = true;
let numberBooler = true;

let game10Counter1s = 0;
let game10Counter2s = 0;

let dice1Num = 0;
let dice2Num = 0;
let dice3Num = 0;
let dice4Num = 0;
let dice5Num = 0;

/*let dice1;
let dice2;
let dice3;
let dice4;
let dice5;*/

let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");
let dice3 = document.getElementById("dice-3");
let dice4 = document.getElementById("dice-4");
let dice5 = document.getElementById("dice-5");

let diceTotal = 0;
let game10round = 1;

let diceArr = [];
let game10Score = 0;
let game10ScoreReserve = 0;
let upScore = 0;

let game10ResultCounter = 0;

var game10C1;
var game10C2;
var game10R;

function game10Start () {
    game10StartDiv.innerHTML = `<span class="hops">Round${game10round}</span><br>
                                <button type="button" id="dice-button">振る！</button>`;
    diceBase.innerHTML = `
                            <div class="dice-align">
                                <div id="dice-1"></div>
                                <div id="dice-2"></div>
                                <div id="dice-3"></div>
                                <div id="dice-4"></div>
                                <div id="dice-5"></div>
                            </div>
                        `;
    scoreboard.innerHTML = `<p>current points: <span class="hops">${game10Score}</span> pts</p>`
    totalboard.innerHTML = `<span class="hops">&nbsp;</span>`
    comment1board.innerHTML = `&nbsp;`;
    comment2board.innerHTML = `&nbsp;`;
    ruleboard.innerHTML = `<button type="button" id="rule-button">役一覧を表示</button>`;
    
    const diceButton = document.getElementById("dice-button");
    diceButton.addEventListener("click", game10Main);

    dice1 = document.getElementById("dice-1");
    dice2 = document.getElementById("dice-2");
    dice3 = document.getElementById("dice-3");
    dice4 = document.getElementById("dice-4");
    dice5 = document.getElementById("dice-5");

    const ruleButton = document.getElementById("rule-button");
    ruleButton.addEventListener("click", game10Rule);
}

function game10Rule(){
    ruleboard.innerHTML = `<button type="button" id="rule-close-button">役一覧を非表示</button><br>
                                (役一覧)<br>
                                1. 「Super-Dice」   ：5個のサイコロの目の合計が「20」以上。サイコロの目の合計の分だけ得点が加算される。<br>
                                2. 「All-Dice」     ：5個のサイコロの目がすべて「2」もしくは「3」「4」「5」。サイコロの目の合計+10ptsが加算される。<br>
                                3. 「Full-Dice」    ：5個のサイコロの目がすべて「6」。50ptsが加算される。<br>
                                4. 「One-Dice」     ：5個のサイコロの目がすべて「1」。30ptsが加算される。<br>
                                5. 「Four-Dice」    ：5個中4個のサイコロの目が一致。サイコロの目の合計+5ptsが加算される。<br>
                                6. 「Three-Dice」   ：5個中3個のサイコロの目が一致。サイコロの目の合計+3ptsが加算される。<br>
                                7. 「Three-Dice」   ：5個中3個のサイコロの目が一致し、加えて、残りの2個のサイコロの目も一致。サイコロの目の合計+6ptsが加算される。<br>
                                8. 「All-Straight」 ：5個のサイコロの目が「1」「2」「3」「4」「5」、「2」「3」「4」「5」「6」。45ptsが加算される。<br>
                                9. 「Mini-Straight」：4個のサイコロの目が「1」「2」「3」「4」、「2」「3」「4」「5」、「3」「4」「5」「6」。25ptsが加算される。<br>
                                10.「Full-Straight」：5個のサイコロの目が「1」「2」「3」「4」「5」、「2」「3」「4」「5」「6」。仮に昇順・降順で並んだ場合。65ptsが加算される。<br>
                                11.「Half-Straight」：4個のサイコロの目が「1」「2」「3」「4」、「2」「3」「4」「5」、「3」「4」「5」「6」で、昇順・降順で並んだ場合。40ptsが加算される。
                            `;
    const ruleCloseButton = document.getElementById("rule-close-button");
    ruleCloseButton.addEventListener("click", game10RuleClose);
}

function game10RuleClose(){
    ruleboard.innerHTML = `<button type="button" id="rule-button">役一覧を表示</button>`;
    const ruleButton = document.getElementById("rule-button");
    ruleButton.addEventListener("click", game10Rule);
}

function game10Main(){
    console.log("Full");

    dice1Num = Math.trunc(Math.random() * 6) + 1;
    dice2Num = Math.trunc(Math.random() * 6) + 1;
    dice3Num = Math.trunc(Math.random() * 6) + 1;
    dice4Num = Math.trunc(Math.random() * 6) + 1;
    dice5Num = Math.trunc(Math.random() * 6) + 1;
    
    game10StartDiv.innerHTML = `<span class="hops">Round${game10round}</span><br>&nbsp;`;
    totalboard.innerHTML = `<span class="hops">&nbsp;</span>`;
    comment1board.innerHTML = `<span class="hops">&nbsp;</span>`;
    dice1.innerHTML = `<img src="../../assets/image/dice/dice_${dice1Num}.png" width="80%">`;
    dice2.innerHTML = `<img src="../../assets/image/dice/dice_${dice2Num}.png" width="80%">`;
    dice3.innerHTML = `<img src="../../assets/image/dice/dice_${dice3Num}.png" width="80%">`;
    dice4.innerHTML = `<img src="../../assets/image/dice/dice_${dice4Num}.png" width="80%">`;
    dice5.innerHTML = `<img src="../../assets/image/dice/dice_${dice5Num}.png" width="80%">`;

    diceArr[0] = dice1Num;
    diceArr[1] = dice2Num;
    diceArr[2] = dice3Num;
    diceArr[3] = dice4Num;
    diceArr[4] = dice5Num;

    game10C1 = setInterval(game10Counter1, 1000);
}

function game10Counter1(){
    game10Counter1s += 1;
    console.log("game10Counter1s: " + game10Counter1s);
    if(game10Counter1s === 1){
        for(var i = 0; i < 5; i++){
            diceTotal += diceArr[i]
        }
        totalboard.innerHTML = `<p>dice total: <span class="hops">${diceTotal}</span> pts</p>`

    }else if(game10Counter1s === 2){
        game10ScoreReserve = game10Score;
        allkind(diceArr);
        if(game10ScoreReserve === game10Score){
            straight1(diceArr);
        }

        if(game10ScoreReserve === game10Score){
            straight2(diceArr);
        }

        if(game10ScoreReserve === game10Score){
            if(diceTotal >= 20){
                comment1board.innerHTML = `<p><span class="hops">Super-Dice!!</span></p>`;
                game10Score += diceTotal;
            }
        }

        
        scoreboard.innerHTML = `<p>current points: <span class="hops">${game10Score}</span> pts</p>`
    }else if(game10Counter1s === 4){
        setTimeout(game10Counter1Clear);
        if(game10round < 10){
            game10round++;
            diceTotal = 0;
            game10StartDiv.innerHTML = `<span class="hops">Round${game10round}</span><br>
                                        <button type="button" id="dice-button">振る！</button>`;
            comment1board.innerHTML = `<span class="hops">&nbsp;</span>`;
            const diceButton2 = document.getElementById("dice-button");
            diceButton2.addEventListener("click", game10Main);
        }else{
            totalboard.innerHTML = `<span class="hops">&nbsp;</span>`;
            comment1board.innerHTML = `<span class="hops">Finish!!</span>`;
            ruleboard.innerHTML = ``;
            game10R = setInterval(game10Result, 1000);
        }
    }
}

function game10Counter1Clear(){
    game10Counter1s = 0;
    clearInterval(game10C1);
}

const allkind = (arr) => {
    const arrbase = {};
    for (const num of arr) {
        arrbase[num] = arrbase[num] ? arrbase[num] + 1 : 1;
    }
    
    const allDice = Object.values(arrbase).includes(5);
    const fourDice = Object.values(arrbase).includes(4);
    const fullHouseLarge = Object.values(arrbase).includes(3);
    const fullHouseSmall = Object.values(arrbase).includes(2);

    if(allDice){
        if(diceArr[0] === 6){
            game10Score += diceTotal;
            game10Score += 50;
            comment1board.innerHTML = `<p><span class="hops">Full-Dice!!</span></p>`
        }else if(diceArr[0] === 1){
            game10Score += diceTotal;
            game10Score += 30;
            comment1board.innerHTML = `<p><span class="hops">One-Dice!!</span></p>`
        }else{
            game10Score += diceTotal;
            game10Score += 10;
            comment1board.innerHTML = `<p><span class="hops">All-Dice!!</span></p>`
        }
    }else if(fourDice){
        game10Score += diceTotal;
        game10Score += 5;
        comment1board.innerHTML = `<p><span class="hops">Four-dice!!</span></p>`
    }else if(fullHouseLarge){
        if(fullHouseLarge && fullHouseSmall){
            game10Score += diceTotal;
            game10Score += 6;
            comment1board.innerHTML = `<p><span class="hops">Full-House!!</span></p>`
        }else{
            game10Score += diceTotal;
            game10Score += 3;
            comment1board.innerHTML = `<p><span class="hops">Three-dice!!</span></p>`
        }
    }
    
    scoreboard.innerHTML = `<p>current points: <span class="hops">${game10Score}</span> pts</p>`
};

const straight1 = (arr) => {
    const arrbase = {};
    for (const num of arr) {
        arrbase[num] = arrbase[num] ? arrbase[num] + 1 : 1;
    }
    
    const fullHouseLarge = Object.values(arrbase).includes(3);
    const fullHouseSmall = Object.values(arrbase).includes(2);

    if(!fullHouseLarge && !fullHouseSmall){
        if(diceArr[2] === 3){
            if(diceArr[1] === 2 && diceArr[3] === 4){
                if(diceArr[0] === 1 && diceArr[4] === 5){
                    game10Score += 65;
                    comment1board.innerHTML = `<p><span class="hops">Full-Straight!!</span></p>`
                }else if(diceArr[0] === 1 || diceArr[4] === 5){
                    game10Score += 40;
                    comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
                }else{
                    straight2(arr);
                }

            }else if(diceArr[1] === 4 && diceArr[3] === 2){
                if(diceArr[0] === 5 && diceArr[4] === 1){
                    game10Score += 65;
                    comment1board.innerHTML = `<p><span class="hops">Full-Straight!!</span></p>`
                }else if(diceArr[0] === 5 || diceArr[4] === 1){
                    game10Score += 40;
                    comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
                }else{
                    straight2(arr);
                }

            }
        }else if(diceArr[2] === 4){
            if(diceArr[1] === 3 && diceArr[3] === 5){
                if(diceArr[0] === 2 && diceArr[4] === 6){
                    game10Score += 65;
                    comment1board.innerHTML = `<p><span class="hops">Full-Straight!!</span></p>`
                }else if(diceArr[0] === 2 || diceArr[4] === 6){
                    game10Score += 40;
                    comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
                }else{
                    straight2(arr);
                }

            }else if(diceArr[1] === 5 && diceArr[3] === 3){
                if(diceArr[0] === 6 && diceArr[4] === 2){
                    game10Score += 65;
                    comment1board.innerHTML = `<p><span class="hops">Full-Straight!!</span></p>`
                }else if(diceArr[0] === 6 || diceArr[4] === 2){
                    game10Score += 40;
                    comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
                }else{
                    straight2(arr);
                }

            }
        }else if(diceArr[2] === 2){
            if(diceArr[1] === 1 && diceArr[3] === 3 && diceArr[4] === 4){
                game10Score += 40;
                comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
            }else if(diceArr[0] === 4 && diceArr[1] === 3 && diceArr[3] === 1){
                game10Score += 40;
                comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
            }else{
                straight2(arr);
            }
        }else if(diceArr[2] === 5){
            if(diceArr[0] === 3 && diceArr[1] === 4 && diceArr[3] === 6){
                game10Score += 40;
                comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
            }else if(diceArr[1] === 6 && diceArr[3] === 4 && diceArr[4] === 3){
                game10Score += 40;
                comment1board.innerHTML = `<p><span class="hops">Half-Straight!!</span></p>`
            }else{
                straight2(arr);
            }
        }else{
            straight2(arr);
        }
    }
    
    scoreboard.innerHTML = `<p>current points: <span class="hops">${game10Score}</span> pts</p>`
};

const straight2 = (arr2) =>{
    const sortedNumbersArr = arr2.sort((a, b) => a - b);
    const uniqueNumbersArr = [...new Set(sortedNumbersArr)];
    const uniqueNumbersStr = uniqueNumbersArr.join("");

    const smallStraightsArr = ["1234", "2345", "3456"];
    const largeStraightsArr = ["12345", "23456"];

    if (largeStraightsArr.includes(uniqueNumbersStr)) {
        game10Score += 40;
        comment1board.innerHTML = `<p><span class="hops">Straight!!</span></p>`
    }else if (smallStraightsArr.some(straight => uniqueNumbersStr.includes(straight))) {
        game10Score += 25;
        comment1board.innerHTML = `<p><span class="hops">Mini-Straight!!</span></p>`
    }
    
    scoreboard.innerHTML = `<p>current points: <span class="hops">${game10Score}</span> pts</p>`
}

const scorecount = (arr) => {

};

function game10Result(){
    game10ResultCounter += 1;
    if(game10ResultCounter === 3){
        comment1board.innerHTML = ``;
    }else if(game10ResultCounter === 4){
        if(game10Score >= 240){
            comment1board.innerHTML = `<p><span class="hops">嘘やろ！？ すごい！！</span></p>`
        }else if(game10Score >= 160){
            comment1board.innerHTML = `<p><span class="hops">すごい！！</span></p>`
        }else if(game10Score >= 80){
            comment1board.innerHTML = `<p><span class="hops">まずまず。</span></p>`
        }else{
            comment1board.innerHTML = `<p><span class="hops">え～…</span></p>`
        }
        comment2board.innerHTML = `<p>もう1回やる？｜<a href="../games/game10.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }
}

gameStartButton.addEventListener("click", game10Start);

/*if(diceButton){
    diceButton.addEventListener("click", game10Main);
} */