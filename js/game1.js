const gameStartButton = document.getElementById("game-start-button");
let game1StartDiv = document.getElementById("game1-start-div");

var scoreboard = document.getElementById("scoreboard");

var treasureArray_64 = [];
var divArray_64 = [];

let game1Counter1 = 50;
let game1Counter2 = 5;

let game1NomalID = [];
let game1HitID = [];

function game1Start () {
    game1StartDiv.innerHTML = `<br>`;
    scoreboard.innerHTML = `<p>残りチャレンジ回数&nbsp;<span class="hops">${game1Counter1}</span>&nbsp;回、残りお宝個数&nbsp;<span class="hops">${game1Counter2}</span>&nbsp;個</p>`;

    for (var i = 0; i < 64; ++i) {
        treasureArray_64[i] = document.getElementById("treasure" + i);
        treasureArray_64[i].innerHTML = `<div id = "nomal${i}"></div>`;
        console.log(treasureArray_64[i]);
        divArray_64[i] = document.getElementById("nomal" + i);
        divArray_64[i].innerHTML = `<a id="${i}" onclick="game1Nomal(this)"; href="#">？</a>`;
        console.log(divArray_64[i]);
    }

    let rand1;
    let rand2;
    let rand3;
    let rand4;
    let rand5; 

    while (rand1 === rand2 || rand1 === rand3 || rand1 === rand4 || rand1 === rand5 || rand2 === rand3 || rand2 === rand4 || rand2 === rand5 || rand3 === rand4 || rand3 === rand5 || rand4 === rand5) {
        rand1 = Math.trunc(Math.random() * 63);
        rand2 = Math.trunc(Math.random() * 63);
        rand3 = Math.trunc(Math.random() * 63);
        rand4 = Math.trunc(Math.random() * 63);
        rand5 = Math.trunc(Math.random() * 63);
    }

    treasureArray_64[rand1].innerHTML = `<div id = "hit0"><a id="${rand1}" onclick="game1Hit(this)"; href="#">？</a></div>`;
    treasureArray_64[rand2].innerHTML = `<div id = "hit1"><a id="${rand2}" onclick="game1Hit(this)"; href="#">？</a></div>`;
    treasureArray_64[rand3].innerHTML = `<div id = "hit2"><a id="${rand3}" onclick="game1Hit(this)"; href="#">？</a></div>`;
    treasureArray_64[rand4].innerHTML = `<div id = "hit3"><a id="${rand4}" onclick="game1Hit(this)"; href="#">？</a></div>`;
    treasureArray_64[rand5].innerHTML = `<div id = "hit4"><a id="${rand5}" onclick="game1Hit(this)"; href="#">？</a></div>`;
}

function game1Nomal (e1) {
    console.log(e1.id);
    var pushedNumber1 = e1.id;
    treasureArray_64[pushedNumber1].innerHTML = `<div><a>X</a></div>`;
    game1Counter1 -= 1;
    if(game1Counter1 === 0){
        scoreboard.innerHTML = `<p><span class="hops">GAME OVER</span></p><br>
                                <p>もう1回やる？｜<a href="game1.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`

        for (var i1 = 0; i1 < 64; ++i1) {
            if(document.getElementById("nomal" + i1)){
                game1NomalID[i1] = document.getElementById("nomal" + i1);
                game1NomalID[i1].innerHTML = `<div><p>X</p></div>`;
            }
        }
        
        for (var i2 = 0; i2 < 5; ++i2) {
            if(document.getElementById("hit" + i2)){
                game1HitID[i2] = document.getElementById("hit" + i2);
                game1HitID[i2].innerHTML = `<div><p class="gold">O</p></div>`;
            }
        }
    }else{
        scoreboard.innerHTML = `<p>残りチャレンジ回数&nbsp;<span class="hops">${game1Counter1}</span>&nbsp;回、残りお宝個数&nbsp;<span class="hops">${game1Counter2}</span>&nbsp;個</p>`;
    }
}

function game1Hit (e2) {
    var pushedNumber2 = e2.id;
    treasureArray_64[pushedNumber2].innerHTML = `<div><a class="gold">O</a></div>`;
    game1Counter1 -= 1;
    game1Counter2 -= 1;
    if(game1Counter2 === 0){
        scoreboard.innerHTML = `<p><span class="hops">GAME CLEAR!</span></p><br>
                                <p>もう1回やる？｜<a href="game1.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`

        for (var i3 = 0; i3 < 64; ++i3) {
            if(document.getElementById("nomal" + i3)){
                game1NomalID[i3] = document.getElementById("nomal" + i3);
                game1NomalID[i3].innerHTML = `<div><p>X</p></div>`;
            }
        }
        
    }else if(game1Counter1 === 0){
        scoreboard.innerHTML = `<p><span class="hops">GAME OVER</span></p><br>
                                <p>もう1回やる？｜<a href="game1.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`

        for (var i4 = 0; i4 < 64; ++i4) {
            if(document.getElementById("nomal" + i4)){
                game1NomalID[i4] = document.getElementById("nomal" + i4);
                game1NomalID[i4].innerHTML = `<div><p>X</p></div>`;
            }
        }
        
        for (var i5 = 1; i5 < 6; ++i5) {
            game1HitID[i5] = document.getElementById("hit" + i5);
            game1HitID[i5].innerHTML = `<div><p class="gold">O</p></div>`;
        }
    }else{
        scoreboard.innerHTML = `<p>残りチャレンジ回数&nbsp;<span class="hops">${game1Counter1}</span>&nbsp;回、残りお宝個数&nbsp;<span class="hops">${game1Counter2}</span>&nbsp;個</p>`;
    }
}

gameStartButton.addEventListener("click", game1Start);