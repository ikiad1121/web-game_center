const gameStartButton = document.getElementById("game-start-button");
let game6StartDiv = document.getElementById("game6-start-div");
let trumpBase = document.getElementById("trump-base");

var scoreboard = document.getElementById("scoreboard");

let randCardNumber = [];
let game6Booler = true;
let numberBooler = true;

let game6Counter1s = 0;
let game6Counter2s = 0;

var numberSta;
var numberStaInt;
var idSta;
var idStaArc1;
var idStaNumArc;
var numberStaArc;
var numberStaIntArc;
var idStaArc2;
var idStaContArc;
var trumpBaseArc = [];

let randNumberBool = [];
let randCardNumberBool = [];

let game6ResultCounter = 0;

var game6C1;
var game6C2;

function game6Start () {
    game6StartDiv.innerHTML = ``;
    for(var i = 0; i < 9; i++){
        randCardNumberBool[i] = true;
        randNumberBool[i] = true;
        randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
        if(randCardNumber[i - 1]){
            while(randCardNumber[i - 1] === randCardNumber[i]){
                randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
            }
            if(randCardNumber[i - 2]){
                while(randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                    randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                    }
                if(randCardNumber[i - 3]){
                    while(randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                        randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                    }
                    if(randCardNumber[i - 4]){
                        while(randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                            randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                        }
                        if(randCardNumber[i - 5]){
                            while(randCardNumber[i - 5] === randCardNumber[i] || randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                                randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                                }
                            if(randCardNumber[i - 6]){
                                while(randCardNumber[i - 6] === randCardNumber[i] || randCardNumber[i - 5] === randCardNumber[i] || randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                                    randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                                }
                                if(randCardNumber[i - 7]){
                                    while(randCardNumber[i - 7] === randCardNumber[i] || randCardNumber[i - 6] === randCardNumber[i] || randCardNumber[i - 5] === randCardNumber[i] || randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                                        randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                                        }
                                    if(randCardNumber[i - 8]){
                                        while(randCardNumber[i - 8] === randCardNumber[i] || randCardNumber[i - 7] === randCardNumber[i] || randCardNumber[i - 6] === randCardNumber[i] || randCardNumber[i - 5] === randCardNumber[i] || randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                                            randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                                        }
                                        if(randCardNumber[i - 9]){
                                            while(randCardNumber[i - 9] === randCardNumber[i] || randCardNumber[i - 8] === randCardNumber[i] || randCardNumber[i - 7] === randCardNumber[i] || randCardNumber[i - 6] === randCardNumber[i] || randCardNumber[i - 5] === randCardNumber[i] || randCardNumber[i - 4] === randCardNumber[i] || randCardNumber[i - 3] === randCardNumber[i] || randCardNumber[i - 2] === randCardNumber[i] || randCardNumber[i - 1] === randCardNumber[i]){
                                                randCardNumber[i] = Math.trunc(Math.random() * 9) + 1;
                                            }
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }

    /*while(!randCardNumber.every((v1,v2,s) => s.indexOf(v1) === v2)){
        randCardNumber[0] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[1] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[2] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[3] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[4] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[5] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[6] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[7] = Math.trunc(Math.random() * 9) + 1;
        randCardNumber[8] = Math.trunc(Math.random() * 9) + 1;
    }*/

    for(var i = 0; i < 9; i++){
        randCardNumber[i] = Math.trunc(randCardNumber[i] / 2);
        if(!randCardNumber[i]){
            randCardNumber[i] = 0;
        }
    }

    trumpBase.innerHTML = `<div class="flexy">
                                <div id="parent_0">
                                    <a id="0" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_1">
                                    <a id="1" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_2">
                                    <a id="2" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="flexy">
                                <div id="parent_3">
                                    <a id="3" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_4">
                                    <a id="4" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_5">
                                    <a id="5" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="flexy">
                                <div id="parent_6">
                                    <a id="6" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_7">
                                    <a id="7" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_8">
                                    <a id="8" onclick="game6Main(this)"; href="#">
                                        <img src="../../assets/image/trump/trump.png" width="90%">
                                    </a>
                                </div>
                            </div>`;
}

function game6Main(e){
    numberSta = e.id;
    numberStaInt = parseInt(numberSta);
    idSta = e.parentNode;
    console.log(randCardNumber[numberStaInt]);
    
    if(game6Booler){
        
        idStaArc1 = idSta.innerHTML;
        idStaNumArc = e.parentNode.id;
        numberStaArc = numberSta;
        numberStaIntArc = numberStaInt;
        idStaContArc = idSta;
        idSta.innerHTML = `<a id="${numberSta}">
                                <img src="../../assets/image/trump/trump_${randCardNumber[numberStaInt]}.png" width="90%">
                            <a>`;
        if(randCardNumber[numberStaInt] === 0){
            randNumberBool[numberStaInt] = false;
            for(var iiii = 0; iiii < 9; iiii++){
                if(randNumberBool[iiii]){
                    if(randCardNumberBool[iiii]){
                        trumpBaseArc[iiii] = document.getElementById("parent_"+ iiii).innerHTML;
                        console.log(document.getElementById("parent_"+ iiii).innerHTML);
                        document.getElementById("parent_"+ iiii).innerHTML = `<a id="${iiii}">
                                                                                <img src="../../assets/image/trump/trump.png" width="90%">
                                                                            <a>`;
                    }
                }
            }/**/

            game6C2 = setInterval(game6Counter2, 1000);
        }else{
            game6Booler = false;
        }
    }else{
        idStaArc2 = idSta.innerHTML;
        console.log("numberStaInt: "+ numberStaInt);
        console.log("numberStaIntArc: "+ numberStaIntArc);
        idSta.innerHTML = `<a id="${numberSta}">
                                <img src="../../assets/image/trump/trump_${randCardNumber[numberStaInt]}.png" width="90%">
                            <a>`;
        
        randNumberBool[numberStaInt] = false;
        randNumberBool[numberStaIntArc] = false;
        
        for(var ii = 0; ii < 9; ii++){
            if(randNumberBool[ii]){
                if(randCardNumberBool[ii]){
                    trumpBaseArc[ii] = document.getElementById("parent_"+ ii).innerHTML;
                    console.log(document.getElementById("parent_"+ ii).innerHTML);
                    document.getElementById("parent_"+ ii).innerHTML = `<a id="${ii}">
                                                                            <img src="../../assets/image/trump/trump.png" width="90%">
                                                                        <a>`;
                }
            }
        }/**/
        game6Booler = true;
        game6C1 = setInterval(game6Counter1, 1000);
    }
}

function game6Counter1(){
    game6Counter1s += 1;
    if(game6Counter1s === 1){
        if(randCardNumber[numberStaInt] === randCardNumber[numberStaIntArc]){
            game6ResultCounter += 1;
            console.log("game6ResultCounter:" + game6ResultCounter);
            if(game6ResultCounter === 4){
                setTimeout(game6Counter1Clear, 5);
                game6Result();
            }else{
                scoreboard.innerHTML = `<p>カードが一致したようだ。</p>`;
                randCardNumberBool[numberStaInt] = false;
                randCardNumberBool[numberStaIntArc] = false;
            }
        }else{
            scoreboard.innerHTML = `<p>カードが違うようだ。</p>`;
            numberBooler = false;
        }
    }else if(game6Counter1s === 2){
        scoreboard.innerHTML = ``;
        if(!numberBooler){
            idSta.innerHTML = idStaArc2;
            idStaContArc.innerHTML = idStaArc1;
            
            numberBooler = true;
        }
        for(var iii = 0; iii < 9; iii++){
            if(randNumberBool[iii]){
                if(randCardNumberBool[iii]){
                    document.getElementById("parent_"+ iii).innerHTML = trumpBaseArc[iii];
                }
            }
        }/**/
        randNumberBool[numberStaInt] = true;
        randNumberBool[numberStaIntArc] = true;

        numberStaInt = 98;
        numberStaIntArc = 99;
        game6Counter1s = 0;
        setTimeout(game6Counter1Clear, 5);
    }
}

function game6Counter1Clear(){
    clearInterval(game6C1);
}

function game6Counter2(){
    game6Counter2s += 1;
    if(game6Counter2s === 1){
        scoreboard.innerHTML = `<p>ジョーカーをひいてしまったようだ。</p>`;
    }else if(game6Counter2s === 2){
        for(var iiiii = 0; iiiii < 9; iiiii++){
            if(randNumberBool[iiiii]){
                if(randCardNumberBool[iiiii]){
                    document.getElementById("parent_"+ iiiii).innerHTML = trumpBaseArc[iiiii];
                }
            }
        }
        randNumberBool[numberStaInt] = true;/**/

        scoreboard.innerHTML = ``;
        idSta.innerHTML = idStaArc1;
        game6Counter2s = 0;
        setTimeout(game6Counter2Clear, 5);
    }
}

function game6Counter2Clear(){
    clearInterval(game6C2);
}

function game6Result(){
    trumpBase.innerHTML = `<div class="flexy">
                                <div id="parent_0">
                                    <a id="0">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[0]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_1">
                                    <a id="1">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[1]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_2">
                                    <a id="2">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[2]}.png" width="90%">
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="flexy">
                                <div id="parent_3">
                                    <a id="3">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[3]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_4">
                                    <a id="4">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[4]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_5">
                                    <a id="5">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[5]}.png" width="90%">
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="flexy">
                                <div id="parent_6">
                                    <a id="6">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[6]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_7">
                                    <a id="7">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[7]}.png" width="90%">
                                    </a>
                                </div>
                                <div id="parent_8">
                                    <a id="8">
                                        <img src="../../assets/image/trump/trump_${randCardNumber[8]}.png" width="90%">
                                    </a>
                                </div>
                            </div>`;

    scoreboard.innerHTML = `<p><span class="hops">GAME CLEAR!!</span></p>
    <p>もう1回やる？｜<a href="../games/game6.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
}

gameStartButton.addEventListener("click", game6Start);