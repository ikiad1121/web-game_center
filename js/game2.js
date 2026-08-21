const gameStartButton = document.getElementById("game-start-button");
let game2StartDiv = document.getElementById("game2-start-div");

var doorfloor = document.getElementById("door-floor");
var scoreboard = document.getElementById("scoreboard");
/*var floorNumber = document.getElementById("floor-number");*/

let doorstyle1;
let doorstyle2;
let doorstyle3;
let doorstyle4;

let rand1A;
let rand1B;
let rand1C;
let rand1D;
let rand2;

let game2Counter = 0;

function game2Start () {
    game2StartDiv.innerHTML = `<p>第&nbsp;<span class="hops">${game2Counter + 1}</span>&nbsp;フロア</p>`;
    gamePOP();
    scoreboard.innerHTML = `<p>ここは第${game2Counter + 1}フロアだ。どのドアが次のフロア繋がるだろうか？</p>`;
    
    /*rand1A = Math.trunc(Math.random() * 10);
    rand1B = Math.trunc(Math.random() * 10);
    rand1C = Math.trunc(Math.random() * 10);
    rand1D = Math.trunc(Math.random() * 10);
    rand2 = Math.trunc(Math.random() * 9);
    
    switch (rand1A) {
        case 0: doorstyle1 = 1;
            break;
        case 1: doorstyle1 = 2;
            break;
        case 2: doorstyle1 = 3;
            break;
        default:doorstyle1 = 0;
            break;
    }

    switch (rand1B) {
        case 0: doorstyle2 = 1;
            break;
        case 1: doorstyle2 = 2;
            break;
        case 2: doorstyle2 = 3;
            break;
        default:doorstyle2 = 0;
            break;
    }

    switch (rand1C) {
        case 0: doorstyle3 = 1;
            break;
        case 1: doorstyle3 = 2;
            break;
        case 2: doorstyle3 = 3;
            break;
        default:doorstyle3 = 0;
            break;
    }

    switch (rand1D) {
        case 0: doorstyle4 = 1;
            break;
        case 1: doorstyle4 = 2;
            break;
        case 2: doorstyle4 = 3;
            break;
        default:doorstyle4 = 0;
            break;
    }

    switch (rand2) {
        case 1: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 2: doorfloor.innerHTML = `<div id="falses" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 3: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses1" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 4: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 5: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle3}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 6: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses1" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 7: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 8: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle3}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        default: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle4}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
    }*/
}

function gamePOP(){
    rand1A = Math.trunc(Math.random() * 10);
    rand1B = Math.trunc(Math.random() * 10);
    rand1C = Math.trunc(Math.random() * 10);
    rand1D = Math.trunc(Math.random() * 10);
    rand2 = Math.trunc(Math.random() * 9);
    
    switch (rand1A) {
        case 0: doorstyle1 = 1;
            break;
        case 1: doorstyle1 = 2;
            break;
        case 2: doorstyle1 = 3;
            break;
        default:doorstyle1 = 0;
            break;
    }

    switch (rand1B) {
        case 0: doorstyle2 = 1;
            break;
        case 1: doorstyle2 = 2;
            break;
        case 2: doorstyle2 = 3;
            break;
        default:doorstyle2 = 0;
            break;
    }

    switch (rand1C) {
        case 0: doorstyle3 = 1;
            break;
        case 1: doorstyle3 = 2;
            break;
        case 2: doorstyle3 = 3;
            break;
        default:doorstyle3 = 0;
            break;
    }

    switch (rand1D) {
        case 0: doorstyle4 = 1;
            break;
        case 1: doorstyle4 = 2;
            break;
        case 2: doorstyle4 = 3;
            break;
        default:doorstyle4 = 0;
            break;
    }

    switch (rand2) {
        case 1: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 2: doorfloor.innerHTML = `<div id="falses" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 3: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses1" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 4: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 5: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle3}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 6: doorfloor.innerHTML = `<div id="trues" class="doorstyle${doorstyle1}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses1" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 7: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle2}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        case 8: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle3}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle4}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
        default: doorfloor.innerHTML = `<div id="falses1" class="doorstyle${doorstyle1}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses2" class="doorstyle${doorstyle2}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="falses3" class="doorstyle${doorstyle3}">
                                            <a onclick="game2False(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>
                                        <div class="blanks"></div>
                                        <div id="trues" class="doorstyle${doorstyle4}">
                                            <a onclick="game2True(this)"; href="#" class="doornob-anc">
                                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                                            </a>
                                        </div>`;
            break;
    }
}/**/

function game2True (e1) {
    var targetId1 = e1.id;
    game2Counter += 1;
    if(game2Counter === 6){
        game2StartDiv.innerHTML = ``;
        doorfloor.innerHTML = `<img src="../../assets/image/sky.png" width="60%">`;
        scoreboard.innerHTML = `<p><span class="hops">GAME CLEAR!!</span></p><br>
                                <p>もう1回やる？｜<a href="game2.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    }else if(game2Counter === 5){
        gamePOP();
        game2StartDiv.innerHTML = `<p>第&nbsp;<span class="hops">${game2Counter + 1}</span>&nbsp;フロア</p>`;
        scoreboard.innerHTML = `<p>お、ドアから先がつながったようだ。<br>
                                さて、ここは最終フロアだ。どのドアがゴールに繋がるだろうか？</p>`;
    }else{
        gamePOP();
        game2StartDiv.innerHTML = `<p>第&nbsp;<span class="hops">${game2Counter + 1}</span>&nbsp;フロア</p>`;
        scoreboard.innerHTML = `<p>お、ドアから先がつながったようだ。<br>
                                さて、ここは第${game2Counter + 1}フロアだ。どのドアが次のフロアに繋がるだろうか？</p>`;
    }
    /**/
}

function game2False (e2) {
    console.log(e2.parentNode.id);
    console.log(e2.parentNode.innerHTML);
    var targetId2 = e2.parentNode;
    scoreboard.innerHTML = `<p>おっと、そのドアは行き止まりのようだ。他のドアを開けてみよう</p>`;
    targetId2.innerHTML = `<a class="doornob-anc">
                                <p><span class="batten">X</p>
                                <img src="../../assets/image/doornob.png" class="doornob-ver">
                            </a>`;
    /* .innerHTML = `<div><a>X</a></div>`;*/
}

gameStartButton.addEventListener("click", game2Start);