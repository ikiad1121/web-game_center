const gameStartButton = document.getElementById("game-start-button");
let game9StartDiv = document.getElementById("game9-start-div");

var keyboard = document.getElementById("keyboard");
var answer = document.getElementById("answer");
var answerboard = document.getElementById("answerboard");

var com1board = document.getElementById("complayer1board");
var com2board = document.getElementById("complayer2board");
var com3board = document.getElementById("complayer3board");
var com4board = document.getElementById("complayer4board");
var com5board = document.getElementById("complayer5board");
var scoreboard = document.getElementById("scoreboard");
var resultboard = document.getElementById("resultboard");

var trumpMain1 = document.getElementById("trump-main1");
var trumpMain2 = document.getElementById("trump-main2");
var trumphr = document.getElementById("trump-hr");


let trump = [
    {
        type:"joker",
        number:0,
    },
    {
        type:"spade",
        number:1,
    },
    {
        type:"spade",
        number:2,
    },
    {
        type:"spade",
        number:3,
    },
    {
        type:"spade",
        number:4,
    },
    {
        type:"spade",
        number:5,
    },
    {
        type:"spade",
        number:6,
    },
    {
        type:"spade",
        number:7,
    },
    {
        type:"spade",
        number:8,
    },
    {
        type:"spade",
        number:9,
    },
    {
        type:"spade",
        number:10,
    },
    {
        type:"spade",
        number:11,
    },
    {
        type:"spade",
        number:12,
    },
    {
        type:"spade",
        number:13,
    },
    {
        type:"diamond",
        number:1,
    },
    {
        type:"diamond",
        number:2,
    },
    {
        type:"diamond",
        number:3,
    },
    {
        type:"diamond",
        number:4,
    },
    {
        type:"diamond",
        number:5,
    },
    {
        type:"diamond",
        number:6,
    },
    {
        type:"diamond",
        number:7,
    },
    {
        type:"diamond",
        number:8,
    },
    {
        type:"diamond",
        number:9,
    },
    {
        type:"diamond",
        number:10,
    },
    {
        type:"diamond",
        number:11,
    },
    {
        type:"diamond",
        number:12,
    },
    {
        type:"diamond",
        number:13,
    },
    {
        type:"club",
        number:1,
    },
    {
        type:"club",
        number:2,
    },
    {
        type:"club",
        number:3,
    },
    {
        type:"club",
        number:4,
    },
    {
        type:"club",
        number:5,
    },
    {
        type:"club",
        number:6,
    },
    {
        type:"club",
        number:7,
    },
    {
        type:"club",
        number:8,
    },
    {
        type:"club",
        number:9,
    },
    {
        type:"club",
        number:10,
    },
    {
        type:"club",
        number:11,
    },
    {
        type:"club",
        number:12,
    },
    {
        type:"club",
        number:13,
    },
    {
        type:"heart",
        number:1,
    },
    {
        type:"heart",
        number:2,
    },
    {
        type:"heart",
        number:3,
    },
    {
        type:"heart",
        number:4,
    },
    {
        type:"heart",
        number:5,
    },
    {
        type:"heart",
        number:6,
    },
    {
        type:"heart",
        number:7,
    },
    {
        type:"heart",
        number:8,
    },
    {
        type:"heart",
        number:9,
    },
    {
        type:"heart",
        number:10,
    },
    {
        type:"heart",
        number:11,
    },
    {
        type:"heart",
        number:12,
    },
    {
        type:"heart",
        number:13,
    },
];

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

var game9id;

var game9C1;
var game9Counter1L;
var game9Counter2L;

let game9Counter1s = 0;
let game9Counter2s = 0;
let game9CounterRs = 0;
let game9ResultCounter = 0;
let game9Times = 120;

let cards = 0;
let playerpoint = 0;
let com1point = 0;
let com2point = 0;
let com3point = 0;
let com4point = 0;
let com5point = 0;

let playercards = [];
let com1cards = [];
let com2cards = [];
let com3cards = [];
let com4cards = [];
let com5cards = [];


let rank = 1;
let rankArr = [
    0,
    0,
    0,
    0,
    0,
    0,
];
let rankbool = [
    false,
    false,
    false,
    false,
    false,
    false,
]
let rankcasebool = [
    false,
    false,
    false,
    false,
    false,
    false,
]

let game8questRam = 0;

let game8movableItems;

function game9Start () {
    game9StartDiv.innerHTML = ``;
    for(var i = 0; i < 300; i++){
        var leng1 = Math.trunc(Math.random() * trump.length);
        var leng2 = Math.trunc(Math.random() * trump.length);
        if(leng1 === leng2){
            while(leng1 === leng2){
                leng1 = Math.trunc(Math.random() * trump.length);
                leng2 = Math.trunc(Math.random() * trump.length);
            }
        }
        var objecter = trump[leng1];
        trump[leng1] = trump[leng2];
        trump[leng2] = objecter;
    }
    console.log(trump);

    //game8Counter = setInterval(game8Counter1, 1000);

    /*trumpMain1.innerHTML =`
                            <p>何人で遊ぶかい？</p>
                            <p>
                                <a id="4players" onclick="game9Main(this)"; href="#">4人</a>
                                <a id="5players" onclick="game9Main(this)"; href="#">5人</a>
                                <a id="6players" onclick="game9Main(this)"; href="#">6人</a>
                            </p>
                        `; */
    trumpMain1.innerHTML =`
                            <p>何人で遊ぶかい？</p>
                            <div class="games">
                                <table class="games-mas">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="../../assets/image/index/4players.png" width="100%">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="games-mas-td">
                                                &nbsp;<a id="4players" onclick="game9Main(this)"; href="#">4人</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="games-mas">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="../../assets/image/index/5players.png" width="100%">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="games-mas-td">
                                                &nbsp;<a id="5players" onclick="game9Main(this)"; href="#">5人</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table class="games-mas">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src="../../assets/image/index/6players.png" width="100%">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="games-mas-td">
                                                &nbsp;<a id="6players" onclick="game9Main(this)"; href="#">6人</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        `;
}

function game9Main(e){
    game9id = e.id;
    game9Counter1L = setInterval(game9Counter1, 500);
}

function game9Counter1(){
    game9Counter1s += 1;

    if(game9Counter1s === 1){
        console.log(game9id);
        trumpMain1.innerHTML =``;
        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;

        switch(game9id){
            case "4players":
                com4board.innerHTML =`<p></p>`;
                com5board.innerHTML =`<p></p>`;
                players = 4;
                cards = 14;
                break;
            case "5players":
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                com5board.innerHTML =`<p></p>`;
                players = 5;
                cards = 11;
                break;
            case "6players":
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                players = 6;
                cards = 9;
                break;
        }
    }else if(game9Counter1s === 3){
        for(var ii = 0; ii < cards; ii++){
            playercards[ii] = trump[(ii * players)];
            playerpoint++;
            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
            if(trump[(ii * players) + 1]){
                com1cards[ii] =  trump[(ii * players) + 1];
                com1point++;
                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
            }
            if(trump[(ii * players) + 2]){
                com2cards[ii] =  trump[(ii * players) + 2];
                com2point++;
                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
            }
            if(trump[(ii * players) + 3]){
                com3cards[ii] =  trump[(ii * players) + 3];
                com3point++;
                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
            }
            if(trump[(ii * players) + 4] && players >= 5){
                com4cards[ii] =  trump[(ii * players) + 4];
                com4point++;
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            }
            if(trump[(ii * players) + 5] && players === 6){
                com5cards[ii] =  trump[(ii * players) + 5];
                com5point++;
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            }
        }
        console.log(playercards);
        console.log(com1cards);
        console.log(com2cards);
        console.log(com3cards);
    }else if(game9Counter1s === 5){
        playerPops();
        if(playerpoint > 0){
            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
        }else{
            rankbool[0] = true;
            rankArr[0] = rank;
            scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
            rank++;
        }
    }else if(game9Counter1s === 6){
        com1Pops();
        if(com1point > 0){
            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
        }else{
            rankbool[1] = true;
            rankArr[1] = rank;
            com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
            rank++;
        }
    }else if(game9Counter1s === 7){
        com2Pops();
        if(com2point > 0){
            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
        }else{
            rankbool[2] = true;
            rankArr[2] = rank;
            com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
            rank++;
        }
    }else if(game9Counter1s === 8){
        com3Pops();
        if(com3point > 0){
            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
        }else{
            rankbool[3] = true;
            rankArr[3] = rank;
            com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
            rank++;
        }
    }else if(game9Counter1s === 9){
        if(game9id === "6players" || game9id === "5players"){
            com4Pops();
            if(com4point > 0){
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            }else{
                rankbool[4] = true;
                rankArr[4] = rank;
                com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                rank++;
            }
        }
    }else if(game9Counter1s === 10){
        if(game9id === "6players"){
            com5Pops();
            if(com5point > 0){
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            }else{
                rankbool[5] = true;
                rankArr[5] = rank;
                com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                rank++;
            }
        }
    }else if(game9Counter1s === 11){
        switch(game9id){
            case "4players":
                game9StartDiv.innerHTML = `<p>drew : <span class="hops">com3</span></p>`;
                for(var c4a = 0; c4a < com3cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a id="com3_${c4a}" onclick="game9CardCheck(this)"; href="#">
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
                break;
            case "5players":
                game9StartDiv.innerHTML = `<p>drew : <span class="hops">com4</span></p>`;
                for(var c5a = 0; c5a < com4cards.length; c5a++){
                    trumpMain1.innerHTML +=`<a id="com4_${c5a}" onclick="game9CardCheck(this)"; href="#">
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
                break;
            case "6players":
                game9StartDiv.innerHTML = `<p>drew : <span class="hops">com5</span></p>`;
                for(var c6a = 0; c6a < com5cards.length; c6a++){
                    trumpMain1.innerHTML +=`<a id="com5_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
                break;
        }
        for(var c0a = 0; c0a < playercards.length; c0a++){
            trumpMain2.innerHTML +=`<a>
                                        <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                    </a>`;
        }
        trumphr.innerHTML =`<br>
                            <hr>
                            <br>`;
    }
}

function playerPops(){
    for(var c0 = 0; c0 < playercards.length; c0++){
        if(playercards[c0 - 1]){
            if(playercards[c0].number === playercards[c0 - 1].number){
                if(playercards[c0 + 1]){
                    if(playercards[c0 + 1]){
                        var pc1 = playercards[c0 - 1];
                        var pc2 = playercards[c0];
                        playercards[c0 - 1] = playercards[playercards.length - 2];
                        playercards[c0] = playercards[playercards.length - 1];
                        playercards[playercards.length - 2] = pc1;
                        playercards[playercards.length - 1] = pc2;
                    }else{
                        var pc = playercards[c0 - 1];
                        playercards[c0 - 1] = playercards[playercards.length - 1];
                        playercards[playercards.length - 1] = pc;
                    }
                }else{
                    var pc = playercards[c0 - 1];
                    playercards[c0 - 1] = playercards[playercards.length - 2];
                    playercards[playercards.length - 2] = pc;
                }
                playercards.pop();
                playerpoint--;
                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                playercards.pop();
                playerpoint--;
                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                c0 = 0;
            }
            if(playercards[c0 - 2]){
                if(playercards[c0].number === playercards[c0 - 2].number){
                    if(playercards[c0 + 1]){
                        if(playercards[c0 + 2]){
                            var pc1 = playercards[c0 - 2];
                            var pc2 = playercards[c0];
                            playercards[c0 - 2] = playercards[playercards.length - 2];
                            playercards[c0] = playercards[playercards.length - 1];
                            playercards[playercards.length - 2] = pc1;
                            playercards[playercards.length - 1] = pc2;
                        }else{
                            var pc = playercards[c0 - 2];
                            playercards[c0 - 2] = playercards[playercards.length - 1];
                            playercards[playercards.length - 1] = pc;
                        }
                    }else{
                        var pc = playercards[c0 - 2];
                        playercards[c0 - 2] = playercards[playercards.length - 2];
                        playercards[playercards.length - 2] = pc;
                    }
                    playercards.pop();
                    playerpoint--;
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                    playercards.pop();
                    playerpoint--;
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                    c0 = 0;
                }
                if(playercards[c0 - 3]){
                    if(playercards[c0].number === playercards[c0 - 3].number){
                        if(playercards[c0 + 1]){
                            if(playercards[c0 + 2]){
                                var pc1 = playercards[c0 - 3];
                                var pc2 = playercards[c0];
                                playercards[c0 - 3] = playercards[playercards.length - 2];
                                playercards[c0] = playercards[playercards.length - 1];
                                playercards[playercards.length - 2] = pc1;
                                playercards[playercards.length - 1] = pc2;
                            }else{
                                var pc = playercards[c0 - 3];
                                playercards[c0 - 3] = playercards[playercards.length - 1];
                                playercards[playercards.length - 1] = pc;
                            }
                        }else{
                            var pc = playercards[c0 - 3];
                            playercards[c0 - 3] = playercards[playercards.length - 2];
                            playercards[playercards.length - 2] = pc;
                        }
                        playercards.pop();
                        playerpoint--;
                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                        playercards.pop();
                        playerpoint--;
                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                        c0 = 0;
                    }
                    if(playercards[c0 - 4]){
                        if(playercards[c0].number === playercards[c0 - 4].number){
                            if(playercards[c0 + 1]){
                                if(playercards[c0 + 2]){
                                    var pc1 = playercards[c0 - 4];
                                    var pc2 = playercards[c0];
                                    playercards[c0 - 4] = playercards[playercards.length - 2];
                                    playercards[c0] = playercards[playercards.length - 1];
                                    playercards[playercards.length - 2] = pc1;
                                    playercards[playercards.length - 1] = pc2;
                                }else{
                                    var pc = playercards[c0 - 4];
                                    playercards[c0 - 4] = playercards[playercards.length - 1];
                                    playercards[playercards.length - 1] = pc;
                                }
                            }else{
                                var pc = playercards[c0 - 4];
                                playercards[c0 - 4] = playercards[playercards.length - 2];
                                playercards[playercards.length - 2] = pc;
                            }
                            playercards.pop();
                            playerpoint--;
                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                            playercards.pop();
                            playerpoint--;
                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                            c0 = 0;
                        }
                        if(playercards[c0 - 5]){
                            if(playercards[c0].number === playercards[c0 - 5].number){
                                if(playercards[c0 + 1]){
                                    if(playercards[c0 + 2]){
                                        var pc1 = playercards[c0 - 5];
                                        var pc2 = playercards[c0];
                                        playercards[c0 - 5] = playercards[playercards.length - 2];
                                        playercards[c0] = playercards[playercards.length - 1];
                                        playercards[playercards.length - 2] = pc1;
                                        playercards[playercards.length - 1] = pc2;
                                    }else{
                                        var pc = playercards[c0 - 5];
                                        playercards[c0 - 5] = playercards[playercards.length - 1];
                                        playercards[playercards.length - 1] = pc;
                                    }
                                }else{
                                    var pc = playercards[c0 - 5];
                                    playercards[c0 - 5] = playercards[playercards.length - 2];
                                    playercards[playercards.length - 2] = pc;
                                }
                                playercards.pop();
                                playerpoint--;
                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                playercards.pop();
                                playerpoint--;
                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                c0 = 0;
                            }
                            if(playercards[c0 - 6]){
                                if(playercards[c0].number === playercards[c0 - 6].number){
                                    if(playercards[c0 + 1]){
                                        if(playercards[c0 + 2]){
                                            var pc1 = playercards[c0 - 6];
                                            var pc2 = playercards[c0];
                                            playercards[c0 - 6] = playercards[playercards.length - 2];
                                            playercards[c0] = playercards[playercards.length - 1];
                                            playercards[playercards.length - 2] = pc1;
                                            playercards[playercards.length - 1] = pc2;
                                        }else{
                                            var pc = playercards[c0 - 6];
                                            playercards[c0 - 6] = playercards[playercards.length - 1];
                                            playercards[playercards.length - 1] = pc;
                                        }
                                    }else{
                                        var pc = playercards[c0 - 6];
                                        playercards[c0 - 6] = playercards[playercards.length - 2];
                                        playercards[playercards.length - 2] = pc;
                                    }
                                    playercards.pop();
                                    playerpoint--;
                                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                    playercards.pop();
                                    playerpoint--;
                                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                    c0 = 0;
                                }
                                if(playercards[c0 - 7]){
                                    if(playercards[c0].number === playercards[c0 - 7].number){
                                        if(playercards[c0 + 1]){
                                            if(playercards[c0 + 2]){
                                                var pc1 = playercards[c0 - 7];
                                                var pc2 = playercards[c0];
                                                playercards[c0 - 7] = playercards[playercards.length - 2];
                                                playercards[c0] = playercards[playercards.length - 1];
                                                playercards[playercards.length - 2] = pc1;
                                                playercards[playercards.length - 1] = pc2;
                                            }else{
                                                var pc = playercards[c0 - 7];
                                                playercards[c0 - 7] = playercards[playercards.length - 1];
                                                playercards[playercards.length - 1] = pc;
                                            }
                                        }else{
                                            var pc = playercards[c0 - 7];
                                            playercards[c0 - 7] = playercards[playercards.length - 2];
                                            playercards[playercards.length - 2] = pc;
                                        }
                                        playercards.pop();
                                        playerpoint--;
                                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                        playercards.pop();
                                        playerpoint--;
                                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                        c0 = 0;
                                    }
                                    if(playercards[c0 - 8]){
                                        if(playercards[c0].number === playercards[c0 - 8].number){
                                            if(playercards[c0 + 1]){
                                                if(playercards[c0 + 2]){
                                                    var pc1 = playercards[c0 - 8];
                                                    var pc2 = playercards[c0];
                                                    playercards[c0 - 8] = playercards[playercards.length - 2];
                                                    playercards[c0] = playercards[playercards.length - 1];
                                                    playercards[playercards.length - 2] = pc1;
                                                    playercards[playercards.length - 1] = pc2;
                                                }else{
                                                    var pc = playercards[c0 - 8];
                                                    playercards[c0 - 8] = playercards[playercards.length - 1];
                                                    playercards[playercards.length - 1] = pc;
                                                }
                                            }else{
                                                var pc = playercards[c0 - 8];
                                                playercards[c0 - 8] = playercards[playercards.length - 2];
                                                playercards[playercards.length - 2] = pc;
                                            }
                                            playercards.pop();
                                            playerpoint--;
                                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                            playercards.pop();
                                            playerpoint--;
                                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                            c0 = 0;
                                        }
                                        if(playercards[c0 - 9]){
                                            if(playercards[c0].number === playercards[c0 - 9].number){
                                                if(playercards[c0 + 1]){
                                                    if(playercards[c0 + 2]){
                                                        var pc1 = playercards[c0 - 9];
                                                        var pc2 = playercards[c0];
                                                        playercards[c0 - 9] = playercards[playercards.length - 2];
                                                        playercards[c0] = playercards[playercards.length - 1];
                                                        playercards[playercards.length - 2] = pc1;
                                                        playercards[playercards.length - 1] = pc2;
                                                    }else{
                                                        var pc = playercards[c0 - 9];
                                                        playercards[c0 - 9] = playercards[playercards.length - 1];
                                                        playercards[playercards.length - 1] = pc;
                                                    }
                                                }else{
                                                    var pc = playercards[c0 - 9];
                                                    playercards[c0 - 9] = playercards[playercards.length - 2];
                                                    playercards[playercards.length - 2] = pc;
                                                }
                                                playercards.pop();
                                                playerpoint--;
                                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                playercards.pop();
                                                playerpoint--;
                                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                c0 = 0;
                                            }
                                            if(playercards[c0 - 10]){
                                                if(playercards[c0].number === playercards[c0 - 10].number){
                                                    if(playercards[c0 + 1]){
                                                        if(playercards[c0 + 2]){
                                                            var pc1 = playercards[c0 - 10];
                                                            var pc2 = playercards[c0];
                                                            playercards[c0 - 10] = playercards[playercards.length - 2];
                                                            playercards[c0] = playercards[playercards.length - 1];
                                                            playercards[playercards.length - 2] = pc1;
                                                            playercards[playercards.length - 1] = pc2;
                                                        }else{
                                                            var pc = playercards[c0 - 10];
                                                            playercards[c0 - 10] = playercards[playercards.length - 1];
                                                            playercards[playercards.length - 1] = pc;
                                                        }
                                                    }else{
                                                        var pc = playercards[c0 - 10];
                                                        playercards[c0 - 10] = playercards[playercards.length - 2];
                                                        playercards[playercards.length - 2] = pc;
                                                    }
                                                    playercards.pop();
                                                    playerpoint--;
                                                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                    playercards.pop();
                                                    playerpoint--;
                                                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                    c0 = 0;
                                                }
                                                if(playercards[c0 - 11]){
                                                    if(playercards[c0].number === playercards[c0 - 11].number){
                                                        if(playercards[c0 + 1]){
                                                            if(playercards[c0 + 2]){
                                                                var pc1 = playercards[c0 - 11];
                                                                var pc2 = playercards[c0];
                                                                playercards[c0 - 11] = playercards[playercards.length - 2];
                                                                playercards[c0] = playercards[playercards.length - 1];
                                                                playercards[playercards.length - 2] = pc1;
                                                                playercards[playercards.length - 1] = pc2;
                                                            }else{
                                                                var pc = playercards[c0 - 11];
                                                                playercards[c0 - 11] = playercards[playercards.length - 1];
                                                                playercards[playercards.length - 1] = pc;
                                                            }
                                                        }else{
                                                            var pc = playercards[c0 - 11];
                                                            playercards[c0 - 11] = playercards[playercards.length - 2];
                                                            playercards[playercards.length - 2] = pc;
                                                        }
                                                        playercards.pop();
                                                        playerpoint--;
                                                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                        playercards.pop();
                                                        playerpoint--;
                                                        scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                        c0 = 0;
                                                    }
                                                    if(playercards[c0 - 12]){
                                                        if(playercards[c0].number === playercards[c0 - 12].number){
                                                            if(playercards[c0 + 1]){
                                                                var pc = playercards[c0 - 12];
                                                                playercards[c0 - 12] = playercards[playercards.length - 1];
                                                                playercards[playercards.length - 1] = pc;
                                                            }else{
                                                                var pc = playercards[c0 - 12];
                                                                playercards[c0 - 12] = playercards[playercards.length - 2];
                                                                playercards[playercards.length - 2] = pc;
                                                            }
                                                            playercards.pop();
                                                            playerpoint--;
                                                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                            playercards.pop();
                                                            playerpoint--;
                                                            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                            c0 = 0;
                                                        }
                                                        if(playercards[c0 - 13]){
                                                            if(playercards[c0].number === playercards[c0 - 13].number){
                                                                var pc = playercards[c0 - 13];
                                                                playercards[c0 - 13] = playercards[playercards.length - 2];
                                                                playercards[playercards.length - 2] = pc;
                                                                
                                                                playercards.pop();
                                                                playerpoint--;
                                                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                                playercards.pop();
                                                                playerpoint--;
                                                                scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                                                                c0 = 0;
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
                }
            }
        }
    }
    console.log("player cards", playercards);
}/**/

function com1Pops(){
    for(var c1 = 0; c1 < com1cards.length; c1++){
        if(com1cards[c1 - 1]){
            if(com1cards[c1].number === com1cards[c1 - 1].number){
                if(com1cards[c1 + 1]){
                    if(com1cards[c1 + 2]){
                        var c11 = com1cards[c1 - 1];
                        var c12 = com1cards[c1];
                        com1cards[c1 - 1] = com1cards[com1cards.length - 2];
                        com1cards[c1] = com1cards[com1cards.length - 1];
                        com1cards[com1cards.length - 2] = c11;
                        com1cards[com1cards.length - 1] = c12;
                    }else{
                        var cc1 = com1cards[c1 - 1];
                        com1cards[c1 - 1] = com1cards[com1cards.length - 1];
                        com1cards[com1cards.length - 1] = cc1;
                    }
                }else{
                    var cc1 = com1cards[c1 - 1];
                    com1cards[c1 - 1] = com1cards[com1cards.length - 2];
                    com1cards[com1cards.length - 2] = cc1;
                }
                com1cards.pop();
                com1point--;
                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                com1cards.pop();
                com1point--;
                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                c1 = 0;
            }
            if(com1cards[c1 - 2]){
                if(com1cards[c1].number === com1cards[c1 - 2].number){
                    if(com1cards[c1 + 1]){
                        if(com1cards[c1 + 2]){
                            var c11 = com1cards[c1 - 2];
                            var c12 = com1cards[c1];
                            com1cards[c1 - 2] = com1cards[com1cards.length - 2];
                            com1cards[c1] = com1cards[com1cards.length - 1];
                            com1cards[com1cards.length - 2] = c11;
                            com1cards[com1cards.length - 1] = c12;
                        }else{
                            var cc1 = com1cards[c1 - 2];
                            com1cards[c1 - 2] = com1cards[com1cards.length - 1];
                            com1cards[com1cards.length - 1] = cc1;
                        }
                    }else{
                        var cc1 = com1cards[c1 - 2];
                        com1cards[c1 - 2] = com1cards[com1cards.length - 2];
                        com1cards[com1cards.length - 2] = cc1;
                    }
                    com1cards.pop();
                    com1point--;
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    com1cards.pop();
                    com1point--;
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    c1 = 0;
                }
                if(com1cards[c1 - 3]){
                    if(com1cards[c1].number === com1cards[c1 - 3].number){
                        if(com1cards[c1 + 1]){
                            if(com1cards[c1 + 2]){
                                var c11 = com1cards[c1 - 3];
                                var c12 = com1cards[c1];
                                com1cards[c1 - 3] = com1cards[com1cards.length - 2];
                                com1cards[c1] = com1cards[com1cards.length - 1];
                                com1cards[com1cards.length - 2] = c11;
                                com1cards[com1cards.length - 1] = c12;
                            }else{
                                var cc1 = com1cards[c1 - 3];
                                com1cards[c1 - 3] = com1cards[com1cards.length - 1];
                                com1cards[com1cards.length - 1] = cc1;
                            }
                        }else{
                            var cc1 = com1cards[c1 - 3];
                            com1cards[c1 - 3] = com1cards[com1cards.length - 2];
                            com1cards[com1cards.length - 2] = cc1;
                        }
                        com1cards.pop();
                        com1point--;
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                        com1cards.pop();
                        com1point--;
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                        c1 = 0;
                    }
                    if(com1cards[c1 - 4]){
                        if(com1cards[c1].number === com1cards[c1 - 4].number){
                            if(com1cards[c1 + 1]){
                                if(com1cards[c1 + 2]){
                                    var c11 = com1cards[c1 - 4];
                                    var c12 = com1cards[c1];
                                    com1cards[c1 - 4] = com1cards[com1cards.length - 2];
                                    com1cards[c1] = com1cards[com1cards.length - 1];
                                    com1cards[com1cards.length - 2] = c11;
                                    com1cards[com1cards.length - 1] = c12;
                                }else{
                                    var cc1 = com1cards[c1 - 4];
                                    com1cards[c1 - 4] = com1cards[com1cards.length - 1];
                                    com1cards[com1cards.length - 1] = cc1;
                                }
                            }else{
                                var cc1 = com1cards[c1 - 4];
                                com1cards[c1 - 4] = com1cards[com1cards.length - 2];
                                com1cards[com1cards.length - 2] = cc1;
                            }
                            com1cards.pop();
                            com1point--;
                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                            com1cards.pop();
                            com1point--;
                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                            c1 = 0;
                        }
                        if(com1cards[c1 - 5]){
                            if(com1cards[c1].number === com1cards[c1 - 5].number){
                                if(com1cards[c1 + 1]){
                                    if(com1cards[c1 + 2]){
                                        var c11 = com1cards[c1 - 5];
                                        var c12 = com1cards[c1];
                                        com1cards[c1 - 5] = com1cards[com1cards.length - 2];
                                        com1cards[c1] = com1cards[com1cards.length - 1];
                                        com1cards[com1cards.length - 2] = c11;
                                        com1cards[com1cards.length - 1] = c12;
                                    }else{
                                        var cc1 = com1cards[c1 - 5];
                                        com1cards[c1 - 5] = com1cards[com1cards.length - 1];
                                        com1cards[com1cards.length - 1] = cc1;
                                    }
                                }else{
                                    var cc1 = com1cards[c1 - 5];
                                    com1cards[c1 - 5] = com1cards[com1cards.length - 2];
                                    com1cards[com1cards.length - 2] = cc1;
                                }
                                com1cards.pop();
                                com1point--;
                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                com1cards.pop();
                                com1point--;
                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                c1 = 0;
                            }
                            if(com1cards[c1 - 6]){
                                if(com1cards[c1].number === com1cards[c1 - 6].number){
                                    if(com1cards[c1 + 1]){
                                        if(com1cards[c1 + 2]){
                                            var c11 = com1cards[c1 - 6];
                                            var c12 = com1cards[c1];
                                            com1cards[c1 - 6] = com1cards[com1cards.length - 2];
                                            com1cards[c1] = com1cards[com1cards.length - 1];
                                            com1cards[com1cards.length - 2] = c11;
                                            com1cards[com1cards.length - 1] = c12;
                                        }else{
                                            var cc1 = com1cards[c1 - 6];
                                            com1cards[c1 - 6] = com1cards[com1cards.length - 1];
                                            com1cards[com1cards.length - 1] = cc1;
                                        }
                                    }else{
                                        var cc1 = com1cards[c1 - 6];
                                        com1cards[c1 - 6] = com1cards[com1cards.length - 2];
                                        com1cards[com1cards.length - 2] = cc1;
                                    }
                                    com1cards.pop();
                                    com1point--;
                                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                    com1cards.pop();
                                    com1point--;
                                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                    c1 = 0;
                                }
                                if(com1cards[c1 - 7]){
                                    if(com1cards[c1].number === com1cards[c1 - 7].number){
                                        if(com1cards[c1 + 1]){
                                            if(com1cards[c1 + 2]){
                                                var c11 = com1cards[c1 - 7];
                                                var c12 = com1cards[c1];
                                                com1cards[c1 - 7] = com1cards[com1cards.length - 2];
                                                com1cards[c1] = com1cards[com1cards.length - 1];
                                                com1cards[com1cards.length - 2] = c11;
                                                com1cards[com1cards.length - 1] = c12;
                                            }else{
                                                var cc1 = com1cards[c1 - 7];
                                                com1cards[c1 - 7] = com1cards[com1cards.length - 1];
                                                com1cards[com1cards.length - 1] = cc1;
                                            }
                                        }else{
                                            var cc1 = com1cards[c1 - 7];
                                            com1cards[c1 - 7] = com1cards[com1cards.length - 2];
                                            com1cards[com1cards.length - 2] = cc1;
                                        }
                                        com1cards.pop();
                                        com1point--;
                                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                        com1cards.pop();
                                        com1point--;
                                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                        c1 = 0;
                                    }
                                    if(com1cards[c1 - 8]){
                                        if(com1cards[c1].number === com1cards[c1 - 8].number){
                                            if(com1cards[c1 + 1]){
                                                if(com1cards[c1 + 2]){
                                                    var c11 = com1cards[c1 - 8];
                                                    var c12 = com1cards[c1];
                                                    com1cards[c1 - 8] = com1cards[com1cards.length - 2];
                                                    com1cards[c1] = com1cards[com1cards.length - 1];
                                                    com1cards[com1cards.length - 2] = c11;
                                                    com1cards[com1cards.length - 1] = c12;
                                                }else{
                                                    var cc1 = com1cards[c1 - 8];
                                                    com1cards[c1 - 8] = com1cards[com1cards.length - 1];
                                                    com1cards[com1cards.length - 1] = cc1;
                                                }
                                            }else{
                                                var cc1 = com1cards[c1 - 8];
                                                com1cards[c1 - 8] = com1cards[com1cards.length - 2];
                                                com1cards[com1cards.length - 2] = cc1;
                                            }
                                            com1cards.pop();
                                            com1point--;
                                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                            com1cards.pop();
                                            com1point--;
                                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                            c1 = 0;
                                        }
                                        if(com1cards[c1 - 9]){
                                            if(com1cards[c1].number === com1cards[c1 - 9].number){
                                                if(com1cards[c1 + 1]){
                                                    if(com1cards[c1 + 2]){
                                                        var c11 = com1cards[c1 - 9];
                                                        var c12 = com1cards[c1];
                                                        com1cards[c1 - 9] = com1cards[com1cards.length - 2];
                                                        com1cards[c1] = com1cards[com1cards.length - 1];
                                                        com1cards[com1cards.length - 2] = c11;
                                                        com1cards[com1cards.length - 1] = c12;
                                                    }else{
                                                        var cc1 = com1cards[c1 - 9];
                                                        com1cards[c1 - 9] = com1cards[com1cards.length - 1];
                                                        com1cards[com1cards.length - 1] = cc1;
                                                    }
                                                }else{
                                                    var cc1 = com1cards[c1 - 9];
                                                    com1cards[c1 - 9] = com1cards[com1cards.length - 2];
                                                    com1cards[com1cards.length - 2] = cc1;
                                                }
                                                com1cards.pop();
                                                com1point--;
                                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                com1cards.pop();
                                                com1point--;
                                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                c1 = 0;
                                            }
                                            if(com1cards[c1 - 10]){
                                                if(com1cards[c1].number === com1cards[c1 - 10].number){
                                                    if(com1cards[c1 + 1]){
                                                        if(com1cards[c1 + 2]){
                                                            var c11 = com1cards[c1 - 10];
                                                            var c12 = com1cards[c1];
                                                            com1cards[c1 - 10] = com1cards[com1cards.length - 2];
                                                            com1cards[c1] = com1cards[com1cards.length - 1];
                                                            com1cards[com1cards.length - 2] = c11;
                                                            com1cards[com1cards.length - 1] = c12;
                                                        }else{
                                                            var cc1 = com1cards[c1 - 10];
                                                            com1cards[c1 - 10] = com1cards[com1cards.length - 1];
                                                            com1cards[com1cards.length - 1] = cc1;
                                                        }
                                                    }else{
                                                        var cc1 = com1cards[c1 - 10];
                                                        com1cards[c1 - 10] = com1cards[com1cards.length - 2];
                                                        com1cards[com1cards.length - 2] = cc1;
                                                    }
                                                    com1cards.pop();
                                                    com1point--;
                                                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                    com1cards.pop();
                                                    com1point--;
                                                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                    c1 = 0;
                                                }
                                                if(com1cards[c1 - 11]){
                                                    if(com1cards[c1].number === com1cards[c1 - 11].number){
                                                        if(com1cards[c1 + 1]){
                                                            if(com1cards[c1 + 2]){
                                                                var c11 = com1cards[c1 - 11];
                                                                var c12 = com1cards[c1];
                                                                com1cards[c1 - 11] = com1cards[com1cards.length - 2];
                                                                com1cards[c1] = com1cards[com1cards.length - 1];
                                                                com1cards[com1cards.length - 2] = c11;
                                                                com1cards[com1cards.length - 1] = c12;
                                                            }else{
                                                                var cc1 = com1cards[c1 - 11];
                                                                com1cards[c1 - 11] = com1cards[com1cards.length - 1];
                                                                com1cards[com1cards.length - 1] = cc1;
                                                            }
                                                        }else{
                                                            var cc1 = com1cards[c1 - 11];
                                                            com1cards[c1 - 11] = com1cards[com1cards.length - 2];
                                                            com1cards[com1cards.length - 2] = cc1;
                                                        }
                                                        com1cards.pop();
                                                        com1point--;
                                                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                        com1cards.pop();
                                                        com1point--;
                                                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                        c1 = 0;
                                                    }
                                                    if(com1cards[c1 - 12]){
                                                        if(com1cards[c1].number === com1cards[c1 - 12].number){
                                                            if(com1cards[c1 + 1]){
                                                                var cc1 = com1cards[c1 - 12];
                                                                com1cards[c1 - 12] = com1cards[com1cards.length - 1];
                                                                com1cards[com1cards.length - 1] = cc1;
                                                            }else{
                                                                var cc1 = com1cards[c1 - 12];
                                                                com1cards[c1 - 12] = com1cards[com1cards.length - 2];
                                                                com1cards[com1cards.length - 2] = cc1;
                                                            }
                                                            com1cards.pop();
                                                            com1point--;
                                                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                            com1cards.pop();
                                                            com1point--;
                                                            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                            c1 = 0;
                                                        }
                                                        if(com1cards[c1 - 13]){
                                                            if(com1cards[c1].number === com1cards[c1 - 13].number){
                                                                var cc1 = com1cards[c1 - 13];
                                                                com1cards[c1 - 13] = com1cards[com1cards.length - 2];
                                                                com1cards[com1cards.length - 2] = cc1;
                                                                                                                
                                                                com1cards.pop();
                                                                com1point--;
                                                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                                com1cards.pop();
                                                                com1point--;
                                                                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                                                                c1 = 0;
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
                }
            }
        }
    }
    console.log("com1 cards", com1cards);
}/**/

function com2Pops(){
    for(var c2 = 0; c2 < com2cards.length; c2++){
        if(com2cards[c2 - 1]){
            if(com2cards[c2].number === com2cards[c2 - 1].number){
                if(com2cards[c2 + 1]){
                    if(com2cards[c2 + 2]){
                        var c21 = com2cards[c2 - 1];
                        var c22 = com2cards[c2];
                        com2cards[c2 - 1] = com2cards[com2cards.length - 2];
                        com2cards[c2] = com2cards[com2cards.length - 1];
                        com2cards[com2cards.length - 2] = c21;
                        com2cards[com2cards.length - 1] = c22;
                    }else{
                        var cc2 = com2cards[c2 - 1];
                        com2cards[c2 - 1] = com2cards[com2cards.length - 1];
                        com2cards[com2cards.length - 1] = cc2;
                    }
                }else{
                    var cc2 = com2cards[c2 - 1];
                    com2cards[c2 - 1] = com2cards[com2cards.length - 2];
                    com2cards[com2cards.length - 2] = cc2;
                }
                com2cards.pop();
                com2point--;
                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                com2cards.pop();
                com2point--;
                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                c2 = 0;
            }
            if(com2cards[c2 - 2]){
                if(com2cards[c2].number === com2cards[c2 - 2].number){
                    if(com2cards[c2 + 1]){
                        if(com2cards[c2 + 2]){
                            var c21 = com2cards[c2 - 2];
                            var c22 = com2cards[c2];
                            com2cards[c2 - 2] = com2cards[com2cards.length - 2];
                            com2cards[c2] = com2cards[com2cards.length - 1];
                            com2cards[com2cards.length - 2] = c21;
                            com2cards[com2cards.length - 1] = c22;
                        }else{
                            var cc2 = com2cards[c2 - 2];
                            com2cards[c2 - 2] = com2cards[com2cards.length - 1];
                            com2cards[com2cards.length - 1] = cc2;
                        }
                    }else{
                        var cc2 = com2cards[c2 - 2];
                        com2cards[c2 - 2] = com2cards[com2cards.length - 2];
                        com2cards[com2cards.length - 2] = cc2;
                    }
                    com2cards.pop();
                    com2point--;
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    com2cards.pop();
                    com2point--;
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    c2 = 0;
                }
                if(com2cards[c2 - 3]){
                    if(com2cards[c2].number === com2cards[c2 - 3].number){
                        if(com2cards[c2 + 1]){
                            if(com2cards[c2 + 2]){
                                var c21 = com2cards[c2 - 3];
                                var c22 = com2cards[c2];
                                com2cards[c2 - 3] = com2cards[com2cards.length - 2];
                                com2cards[c2] = com2cards[com2cards.length - 1];
                                com2cards[com2cards.length - 2] = c21;
                                com2cards[com2cards.length - 1] = c22;
                            }else{
                                var cc2 = com2cards[c2 - 3];
                                com2cards[c2 - 3] = com2cards[com2cards.length - 1];
                                com2cards[com2cards.length - 1] = cc2;
                            }
                        }else{
                            var cc2 = com2cards[c2 - 3];
                            com2cards[c2 - 3] = com2cards[com2cards.length - 2];
                            com2cards[com2cards.length - 2] = cc2;
                        }
                        com2cards.pop();
                        com2point--;
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                        com2cards.pop();
                        com2point--;
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                        c2 = 0;
                    }
                    if(com2cards[c2 - 4]){
                        if(com2cards[c2].number === com2cards[c2 - 4].number){
                            if(com2cards[c2 + 1]){
                                if(com2cards[c2 + 2]){
                                    var c21 = com2cards[c2 - 4];
                                    var c22 = com2cards[c2];
                                    com2cards[c2 - 4] = com2cards[com2cards.length - 2];
                                    com2cards[c2] = com2cards[com2cards.length - 1];
                                    com2cards[com2cards.length - 2] = c21;
                                    com2cards[com2cards.length - 1] = c22;
                                }else{
                                    var cc2 = com2cards[c2 - 4];
                                    com2cards[c2 - 4] = com2cards[com2cards.length - 1];
                                    com2cards[com2cards.length - 1] = cc2;
                                }
                            }else{
                                var cc2 = com2cards[c2 - 4];
                                com2cards[c2 - 4] = com2cards[com2cards.length - 2];
                                com2cards[com2cards.length - 2] = cc2;
                            }
                            com2cards.pop();
                            com2point--;
                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                            com2cards.pop();
                            com2point--;
                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                            c2 = 0;
                        }
                        if(com2cards[c2 - 5]){
                            if(com2cards[c2].number === com2cards[c2 - 5].number){
                                if(com2cards[c2 + 1]){
                                    if(com2cards[c2 + 2]){
                                        var c21 = com2cards[c2 - 5];
                                        var c22 = com2cards[c2];
                                        com2cards[c2 - 5] = com2cards[com2cards.length - 2];
                                        com2cards[c2] = com2cards[com2cards.length - 1];
                                        com2cards[com2cards.length - 2] = c21;
                                        com2cards[com2cards.length - 1] = c22;
                                    }else{
                                        var cc2 = com2cards[c2 - 5];
                                        com2cards[c2 - 5] = com2cards[com2cards.length - 1];
                                        com2cards[com2cards.length - 1] = cc2;
                                    }
                                }else{
                                    var cc2 = com2cards[c2 - 5];
                                    com2cards[c2 - 5] = com2cards[com2cards.length - 2];
                                    com2cards[com2cards.length - 2] = cc2;
                                }
                                com2cards.pop();
                                com2point--;
                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                com2cards.pop();
                                com2point--;
                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                c2 = 0;
                            }
                            if(com2cards[c2 - 6]){
                                if(com2cards[c2].number === com2cards[c2 - 6].number){
                                    if(com2cards[c2 + 1]){
                                        if(com2cards[c2 + 2]){
                                            var c21 = com2cards[c2 - 6];
                                            var c22 = com2cards[c2];
                                            com2cards[c2 - 6] = com2cards[com2cards.length - 2];
                                            com2cards[c2] = com2cards[com2cards.length - 1];
                                            com2cards[com2cards.length - 2] = c21;
                                            com2cards[com2cards.length - 1] = c22;
                                        }else{
                                            var cc2 = com2cards[c2 - 6];
                                            com2cards[c2 - 6] = com2cards[com2cards.length - 1];
                                            com2cards[com2cards.length - 1] = cc2;
                                        }
                                    }else{
                                        var cc2 = com2cards[c2 - 6];
                                        com2cards[c2 - 6] = com2cards[com2cards.length - 2];
                                        com2cards[com2cards.length - 2] = cc2;
                                    }
                                    com2cards.pop();
                                    com2point--;
                                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                    com2cards.pop();
                                    com2point--;
                                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                    c2 = 0;
                                }
                                if(com2cards[c2 - 7]){
                                    if(com2cards[c2].number === com2cards[c2 - 7].number){
                                        if(com2cards[c2 + 1]){
                                            if(com2cards[c2 + 2]){
                                                var c21 = com2cards[c2 - 7];
                                                var c22 = com2cards[c2];
                                                com2cards[c2 - 7] = com2cards[com2cards.length - 2];
                                                com2cards[c2] = com2cards[com2cards.length - 1];
                                                com2cards[com2cards.length - 2] = c21;
                                                com2cards[com2cards.length - 1] = c22;
                                            }else{
                                                var cc2 = com2cards[c2 - 7];
                                                com2cards[c2 - 7] = com2cards[com2cards.length - 1];
                                                com2cards[com2cards.length - 1] = cc2;
                                            }
                                        }else{
                                            var cc2 = com2cards[c2 - 7];
                                            com2cards[c2 - 7] = com2cards[com2cards.length - 2];
                                            com2cards[com2cards.length - 2] = cc2;
                                        }
                                        com2cards.pop();
                                        com2point--;
                                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                        com2cards.pop();
                                        com2point--;
                                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                        c2 = 0;
                                    }
                                    if(com2cards[c2 - 8]){
                                        if(com2cards[c2].number === com2cards[c2 - 8].number){
                                            if(com2cards[c2 + 1]){
                                                if(com2cards[c2 + 2]){
                                                    var c21 = com2cards[c2 - 8];
                                                    var c22 = com2cards[c2];
                                                    com2cards[c2 - 8] = com2cards[com2cards.length - 2];
                                                    com2cards[c2] = com2cards[com2cards.length - 1];
                                                    com2cards[com2cards.length - 2] = c21;
                                                    com2cards[com2cards.length - 1] = c22;
                                                }else{
                                                    var cc2 = com2cards[c2 - 8];
                                                    com2cards[c2 - 8] = com2cards[com2cards.length - 1];
                                                    com2cards[com2cards.length - 1] = cc2;
                                                }
                                            }else{
                                                var cc2 = com2cards[c2 - 8];
                                                com2cards[c2 - 8] = com2cards[com2cards.length - 2];
                                                com2cards[com2cards.length - 2] = cc2;
                                            }
                                            com2cards.pop();
                                            com2point--;
                                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                            com2cards.pop();
                                            com2point--;
                                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                            c2 = 0;
                                        }
                                        if(com2cards[c2 - 9]){
                                            if(com2cards[c2].number === com2cards[c2 - 9].number){
                                                if(com2cards[c2 + 1]){
                                                    if(com2cards[c2 + 2]){
                                                        var c21 = com2cards[c2 - 9];
                                                        var c22 = com2cards[c2];
                                                        com2cards[c2 - 9] = com2cards[com2cards.length - 2];
                                                        com2cards[c2] = com2cards[com2cards.length - 1];
                                                        com2cards[com2cards.length - 2] = c21;
                                                        com2cards[com2cards.length - 1] = c22;
                                                    }else{
                                                        var cc2 = com2cards[c2 - 9];
                                                        com2cards[c2 - 9] = com2cards[com2cards.length - 1];
                                                        com2cards[com2cards.length - 1] = cc2;
                                                    }
                                                }else{
                                                    var cc2 = com2cards[c2 - 9];
                                                    com2cards[c2 - 9] = com2cards[com2cards.length - 2];
                                                    com2cards[com2cards.length - 2] = cc2;
                                                }
                                                com2cards.pop();
                                                com2point--;
                                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                com2cards.pop();
                                                com2point--;
                                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                c2 = 0;
                                            }
                                            if(com2cards[c2 - 10]){
                                                if(com2cards[c2].number === com2cards[c2 - 10].number){
                                                    if(com2cards[c2 + 1]){
                                                        if(com2cards[c2 + 2]){
                                                            var c21 = com2cards[c2 - 10];
                                                            var c22 = com2cards[c2];
                                                            com2cards[c2 - 10] = com2cards[com2cards.length - 2];
                                                            com2cards[c2] = com2cards[com2cards.length - 1];
                                                            com2cards[com2cards.length - 2] = c21;
                                                            com2cards[com2cards.length - 1] = c22;
                                                        }else{
                                                            var cc2 = com2cards[c2 - 10];
                                                            com2cards[c2 - 10] = com2cards[com2cards.length - 1];
                                                            com2cards[com2cards.length - 1] = cc2;
                                                        }
                                                    }else{
                                                        var cc2 = com2cards[c2 - 10];
                                                        com2cards[c2 - 10] = com2cards[com2cards.length - 2];
                                                        com2cards[com2cards.length - 2] = cc2;
                                                    }
                                                    com2cards.pop();
                                                    com2point--;
                                                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                    com2cards.pop();
                                                    com2point--;
                                                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                    c2 = 0;
                                                }
                                                if(com2cards[c2 - 11]){
                                                    if(com2cards[c2].number === com2cards[c2 - 11].number){
                                                        if(com2cards[c2 + 1]){
                                                            if(com2cards[c2 + 2]){
                                                                var c21 = com2cards[c2 - 11];
                                                                var c22 = com2cards[c2];
                                                                com2cards[c2 - 11] = com2cards[com2cards.length - 2];
                                                                com2cards[c2] = com2cards[com2cards.length - 1];
                                                                com2cards[com2cards.length - 2] = c21;
                                                                com2cards[com2cards.length - 1] = c22;
                                                            }else{
                                                                var cc2 = com2cards[c2 - 11];
                                                                com2cards[c2 - 11] = com2cards[com2cards.length - 1];
                                                                com2cards[com2cards.length - 1] = cc2;
                                                            }
                                                        }else{
                                                            var cc2 = com2cards[c2 - 11];
                                                            com2cards[c2 - 11] = com2cards[com2cards.length - 2];
                                                            com2cards[com2cards.length - 2] = cc2;
                                                        }
                                                        com2cards.pop();
                                                        com2point--;
                                                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                        com2cards.pop();
                                                        com2point--;
                                                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                        c2 = 0;
                                                    }
                                                    if(com2cards[c2 - 12]){
                                                        if(com2cards[c2].number === com2cards[c2 - 12].number){
                                                            if(com2cards[c2 + 1]){
                                                                var cc2 = com2cards[c2 - 12];
                                                                com2cards[c2 - 12] = com2cards[com2cards.length - 1];
                                                                com2cards[com2cards.length - 1] = cc2;
                                                            }else{
                                                                var cc2 = com2cards[c2 - 12];
                                                                com2cards[c2 - 12] = com2cards[com2cards.length - 2];
                                                                com2cards[com2cards.length - 2] = cc2;
                                                            }
                                                            com2cards.pop();
                                                            com2point--;
                                                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                            com2cards.pop();
                                                            com2point--;
                                                            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                            c2 = 0;
                                                        }
                                                        if(com2cards[c2 - 13]){
                                                            if(com2cards[c2].number === com2cards[c2 - 13].number){
                                                                var cc2 = com2cards[c2 - 13];
                                                                com2cards[c2 - 13] = com2cards[com2cards.length - 2];
                                                                com2cards[com2cards.length - 2] = cc2;
                                                                                                                
                                                                com2cards.pop();
                                                                com2point--;
                                                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                                com2cards.pop();
                                                                com2point--;
                                                                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                                                                c2 = 0;
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
                }
            }
        }
    }
    console.log("com2 cards", com2cards);
}/**/

function com3Pops(){
    for(var c3 = 0; c3 < com3cards.length; c3++){
        if(com3cards[c3 - 1]){
            if(com3cards[c3].number === com3cards[c3 - 1].number){
                if(com3cards[c3 + 1]){
                    if(com3cards[c3 + 2]){
                        var c31 = com3cards[c3 - 1];
                        var c32 = com3cards[c3];
                        com3cards[c3 - 1] = com3cards[com3cards.length - 2];
                        com3cards[c3] = com3cards[com3cards.length - 1];
                        com3cards[com3cards.length - 2] = c31;
                        com3cards[com3cards.length - 1] = c32;
                    }else{
                        var cc3 = com3cards[c3 - 1];
                        com3cards[c3 - 1] = com3cards[com3cards.length - 1];
                        com3cards[com3cards.length - 1] = cc3;
                    }
                }else{
                    var cc3 = com3cards[c3 - 1];
                    com3cards[c3 - 1] = com3cards[com3cards.length - 2];
                    com3cards[com3cards.length - 2] = cc3;
                }
                com3cards.pop();
                com3point--;
                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                com3cards.pop();
                com3point--;
                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                c3 = 0;
            }
            if(com3cards[c3 - 2]){
                if(com3cards[c3].number === com3cards[c3 - 2].number){
                    if(com3cards[c3 + 1]){
                        if(com3cards[c3 + 2]){
                            var c31 = com3cards[c3 - 2];
                            var c32 = com3cards[c3];
                            com3cards[c3 - 2] = com3cards[com3cards.length - 2];
                            com3cards[c3] = com3cards[com3cards.length - 1];
                            com3cards[com3cards.length - 2] = c31;
                            com3cards[com3cards.length - 1] = c32;
                        }else{
                            var cc3 = com3cards[c3 - 2];
                            com3cards[c3 - 2] = com3cards[com3cards.length - 1];
                            com3cards[com3cards.length - 1] = cc3;
                        }
                    }else{
                        var cc3 = com3cards[c3 - 2];
                        com3cards[c3 - 2] = com3cards[com3cards.length - 2];
                        com3cards[com3cards.length - 2] = cc3;
                    }
                    com3cards.pop();
                    com3point--;
                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    com3cards.pop();
                    com3point--;
                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    c3 = 0;
                }
                if(com3cards[c3 - 3]){
                    if(com3cards[c3].number === com3cards[c3 - 3].number){
                        if(com3cards[c3 + 1]){
                            if(com3cards[c3 + 2]){
                                var c31 = com3cards[c3 - 3];
                                var c32 = com3cards[c3];
                                com3cards[c3 - 3] = com3cards[com3cards.length - 2];
                                com3cards[c3] = com3cards[com3cards.length - 1];
                                com3cards[com3cards.length - 2] = c31;
                                com3cards[com3cards.length - 1] = c32;
                            }else{
                                var cc3 = com3cards[c3 - 3];
                                com3cards[c3 - 3] = com3cards[com3cards.length - 1];
                                com3cards[com3cards.length - 1] = cc3;
                            }
                        }else{
                            var cc3 = com3cards[c3 - 3];
                            com3cards[c3 - 3] = com3cards[com3cards.length - 2];
                            com3cards[com3cards.length - 2] = cc3;
                        }
                        com3cards.pop();
                        com3point--;
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                        com3cards.pop();
                        com3point--;
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                        c3 = 0;
                    }
                    if(com3cards[c3 - 4]){
                        if(com3cards[c3].number === com3cards[c3 - 4].number){
                            if(com3cards[c3 + 1]){
                                if(com3cards[c3 + 2]){
                                    var c31 = com3cards[c3 - 4];
                                    var c32 = com3cards[c3];
                                    com3cards[c3 - 4] = com3cards[com3cards.length - 2];
                                    com3cards[c3] = com3cards[com3cards.length - 1];
                                    com3cards[com3cards.length - 2] = c31;
                                    com3cards[com3cards.length - 1] = c32;
                                }else{
                                    var cc3 = com3cards[c3 - 4];
                                    com3cards[c3 - 4] = com3cards[com3cards.length - 1];
                                    com3cards[com3cards.length - 1] = cc3;
                                }
                            }else{
                                var cc3 = com3cards[c3 - 4];
                                com3cards[c3 - 4] = com3cards[com3cards.length - 2];
                                com3cards[com3cards.length - 2] = cc3;
                            }
                            com3cards.pop();
                            com3point--;
                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                            com3cards.pop();
                            com3point--;
                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                            c3 = 0;
                        }
                        if(com3cards[c3 - 5]){
                            if(com3cards[c3].number === com3cards[c3 - 5].number){
                                if(com3cards[c3 + 1]){
                                    if(com3cards[c3 + 2]){
                                        var c31 = com3cards[c3 - 5];
                                        var c32 = com3cards[c3];
                                        com3cards[c3 - 5] = com3cards[com3cards.length - 2];
                                        com3cards[c3] = com3cards[com3cards.length - 1];
                                        com3cards[com3cards.length - 2] = c31;
                                        com3cards[com3cards.length - 1] = c32;
                                    }else{
                                        var cc3 = com3cards[c3 - 5];
                                        com3cards[c3 - 5] = com3cards[com3cards.length - 1];
                                        com3cards[com3cards.length - 1] = cc3;
                                    }
                                }else{
                                    var cc3 = com3cards[c3 - 5];
                                    com3cards[c3 - 5] = com3cards[com3cards.length - 2];
                                    com3cards[com3cards.length - 2] = cc3;
                                }
                                com3cards.pop();
                                com3point--;
                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                com3cards.pop();
                                com3point--;
                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                c3 = 0;
                            }
                            if(com3cards[c3 - 6]){
                                if(com3cards[c3].number === com3cards[c3 - 6].number){
                                    if(com3cards[c3 + 1]){
                                        if(com3cards[c3 + 2]){
                                            var c31 = com3cards[c3 - 6];
                                            var c32 = com3cards[c3];
                                            com3cards[c3 - 6] = com3cards[com3cards.length - 2];
                                            com3cards[c3] = com3cards[com3cards.length - 1];
                                            com3cards[com3cards.length - 2] = c31;
                                            com3cards[com3cards.length - 1] = c32;
                                        }else{
                                            var cc3 = com3cards[c3 - 6];
                                            com3cards[c3 - 6] = com3cards[com3cards.length - 1];
                                            com3cards[com3cards.length - 1] = cc3;
                                        }
                                    }else{
                                        var cc3 = com3cards[c3 - 6];
                                        com3cards[c3 - 6] = com3cards[com3cards.length - 2];
                                        com3cards[com3cards.length - 2] = cc3;
                                    }
                                    com3cards.pop();
                                    com3point--;
                                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                    com3cards.pop();
                                    com3point--;
                                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                    c3 = 0;
                                }
                                if(com3cards[c3 - 7]){
                                    if(com3cards[c3].number === com3cards[c3 - 7].number){
                                        if(com3cards[c3 + 1]){
                                            if(com3cards[c3 + 2]){
                                                var c31 = com3cards[c3 - 7];
                                                var c32 = com3cards[c3];
                                                com3cards[c3 - 7] = com3cards[com3cards.length - 2];
                                                com3cards[c3] = com3cards[com3cards.length - 1];
                                                com3cards[com3cards.length - 2] = c31;
                                                com3cards[com3cards.length - 1] = c32;
                                            }else{
                                                var cc3 = com3cards[c3 - 7];
                                                com3cards[c3 - 7] = com3cards[com3cards.length - 1];
                                                com3cards[com3cards.length - 1] = cc3;
                                            }
                                        }else{
                                            var cc3 = com3cards[c3 - 7];
                                            com3cards[c3 - 7] = com3cards[com3cards.length - 2];
                                            com3cards[com3cards.length - 2] = cc3;
                                        }
                                        com3cards.pop();
                                        com3point--;
                                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                        com3cards.pop();
                                        com3point--;
                                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                        c3 = 0;
                                    }
                                    if(com3cards[c3 - 8]){
                                        if(com3cards[c3].number === com3cards[c3 - 8].number){
                                            if(com3cards[c3 + 1]){
                                                if(com3cards[c3 + 2]){
                                                    var c31 = com3cards[c3 - 8];
                                                    var c32 = com3cards[c3];
                                                    com3cards[c3 - 8] = com3cards[com3cards.length - 2];
                                                    com3cards[c3] = com3cards[com3cards.length - 1];
                                                    com3cards[com3cards.length - 2] = c31;
                                                    com3cards[com3cards.length - 1] = c32;
                                                }else{
                                                    var cc3 = com3cards[c3 - 8];
                                                    com3cards[c3 - 8] = com3cards[com3cards.length - 1];
                                                    com3cards[com3cards.length - 1] = cc3;
                                                }
                                            }else{
                                                var cc3 = com3cards[c3 - 8];
                                                com3cards[c3 - 8] = com3cards[com3cards.length - 2];
                                                com3cards[com3cards.length - 2] = cc3;
                                            }
                                            com3cards.pop();
                                            com3point--;
                                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                            com3cards.pop();
                                            com3point--;
                                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                            c3 = 0;
                                        }
                                        if(com3cards[c3 - 9]){
                                            if(com3cards[c3].number === com3cards[c3 - 9].number){
                                                if(com3cards[c3 + 1]){
                                                    if(com3cards[c3 + 2]){
                                                        var c31 = com3cards[c3 - 9];
                                                        var c32 = com3cards[c3];
                                                        com3cards[c3 - 9] = com3cards[com3cards.length - 2];
                                                        com3cards[c3] = com3cards[com3cards.length - 1];
                                                        com3cards[com3cards.length - 2] = c31;
                                                        com3cards[com3cards.length - 1] = c32;
                                                    }else{
                                                        var cc3 = com3cards[c3 - 9];
                                                        com3cards[c3 - 9] = com3cards[com3cards.length - 1];
                                                        com3cards[com3cards.length - 1] = cc3;
                                                    }
                                                }else{
                                                    var cc3 = com3cards[c3 - 9];
                                                    com3cards[c3 - 9] = com3cards[com3cards.length - 2];
                                                    com3cards[com3cards.length - 2] = cc3;
                                                }
                                                com3cards.pop();
                                                com3point--;
                                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                com3cards.pop();
                                                com3point--;
                                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                c3 = 0;
                                            }
                                            if(com3cards[c3 - 10]){
                                                if(com3cards[c3].number === com3cards[c3 - 10].number){
                                                    if(com3cards[c3 + 1]){
                                                        if(com3cards[c3 + 2]){
                                                            var c31 = com3cards[c3 - 10];
                                                            var c32 = com3cards[c3];
                                                            com3cards[c3 - 10] = com3cards[com3cards.length - 2];
                                                            com3cards[c3] = com3cards[com3cards.length - 1];
                                                            com3cards[com3cards.length - 2] = c31;
                                                            com3cards[com3cards.length - 1] = c32;
                                                        }else{
                                                            var cc3 = com3cards[c3 - 10];
                                                            com3cards[c3 - 10] = com3cards[com3cards.length - 1];
                                                            com3cards[com3cards.length - 1] = cc3;
                                                        }
                                                    }else{
                                                        var cc3 = com3cards[c3 - 10];
                                                        com3cards[c3 - 10] = com3cards[com3cards.length - 2];
                                                        com3cards[com3cards.length - 2] = cc3;
                                                    }
                                                    com3cards.pop();
                                                    com3point--;
                                                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                    com3cards.pop();
                                                    com3point--;
                                                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                    c3 = 0;
                                                }
                                                if(com3cards[c3 - 11]){
                                                    if(com3cards[c3].number === com3cards[c3 - 11].number){
                                                        if(com3cards[c3 + 1]){
                                                            if(com3cards[c3 + 2]){
                                                                var c31 = com3cards[c3 - 11];
                                                                var c32 = com3cards[c3];
                                                                com3cards[c3 - 11] = com3cards[com3cards.length - 2];
                                                                com3cards[c3] = com3cards[com3cards.length - 1];
                                                                com3cards[com3cards.length - 2] = c31;
                                                                com3cards[com3cards.length - 1] = c32;
                                                            }else{
                                                                var cc3 = com3cards[c3 - 11];
                                                                com3cards[c3 - 11] = com3cards[com3cards.length - 1];
                                                                com3cards[com3cards.length - 1] = cc3;
                                                            }
                                                        }else{
                                                            var cc3 = com3cards[c3 - 11];
                                                            com3cards[c3 - 11] = com3cards[com3cards.length - 2];
                                                            com3cards[com3cards.length - 2] = cc3;
                                                        }
                                                        com3cards.pop();
                                                        com3point--;
                                                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                        com3cards.pop();
                                                        com3point--;
                                                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                        c3 = 0;
                                                    }
                                                    if(com3cards[c3 - 12]){
                                                        if(com3cards[c3].number === com3cards[c3 - 12].number){
                                                            if(com3cards[c3 + 1]){
                                                                var cc3 = com3cards[c3 - 12];
                                                                com3cards[c3 - 12] = com3cards[com3cards.length - 1];
                                                                com3cards[com3cards.length - 1] = cc3;
                                                            }else{
                                                                var cc3 = com3cards[c3 - 12];
                                                                com3cards[c3 - 12] = com3cards[com3cards.length - 2];
                                                                com3cards[com3cards.length - 2] = cc3;
                                                            }
                                                            com3cards.pop();
                                                            com3point--;
                                                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                            com3cards.pop();
                                                            com3point--;
                                                            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                            c3 = 0;
                                                        }
                                                        if(com3cards[c3 - 13]){
                                                            if(com3cards[c3].number === com3cards[c3 - 13].number){
                                                                var cc3 = com3cards[c3 - 13];
                                                                com3cards[c3 - 13] = com3cards[com3cards.length - 2];
                                                                com3cards[com3cards.length - 2] = cc3;
                                                                                                                
                                                                com3cards.pop();
                                                                com3point--;
                                                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                                com3cards.pop();
                                                                com3point--;
                                                                com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                                                                c3 = 0;
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
                }
            }
        }
    }
    console.log("com3 cards", com3cards);
}/**/

function com4Pops(){
    for(var c4 = 0; c4 < com4cards.length; c4++){
        if(com4cards[c4 - 1]){
            if(com4cards[c4].number === com4cards[c4 - 1].number){
                if(com4cards[c4 + 1]){
                    if(com4cards[c4 + 2]){
                        var c41 = com4cards[c4 - 1];
                        var c42 = com4cards[c4];
                        com4cards[c4 - 1] = com4cards[com4cards.length - 2];
                        com4cards[c4] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 2] = c41;
                        com4cards[com4cards.length - 1] = c42;
                    }else{
                        var cc4 = com4cards[c4 - 1];
                        com4cards[c4 - 1] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 1] = cc4;
                    }
                }else{
                    var cc4 = com4cards[c4 - 1];
                    com4cards[c4 - 1] = com4cards[com4cards.length - 2];
                    com4cards[com4cards.length - 2] = cc4;
                }
                com4cards.pop();
                com4point--;
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                com4cards.pop();
                com4point--;
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                c4 = 0;
            }
            if(com4cards[c4 - 2]){
                if(com4cards[c4].number === com4cards[c4 - 2].number){
                    if(com4cards[c4 + 1]){
                        if(com4cards[c4 + 2]){
                            var c41 = com4cards[c4 - 2];
                            var c42 = com4cards[c4];
                            com4cards[c4 - 2] = com4cards[com4cards.length - 2];
                            com4cards[c4] = com4cards[com4cards.length - 1];
                            com4cards[com4cards.length - 2] = c41;
                            com4cards[com4cards.length - 1] = c42;
                        }else{
                            var cc4 = com4cards[c4 - 2];
                            com4cards[c4 - 2] = com4cards[com4cards.length - 1];
                            com4cards[com4cards.length - 1] = cc4;
                        }
                    }else{
                        var cc4 = com4cards[c4 - 2];
                        com4cards[c4 - 2] = com4cards[com4cards.length - 2];
                        com4cards[com4cards.length - 2] = cc4;
                    }
                    com4cards.pop();
                    com4point--;
                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    com4cards.pop();
                    com4point--;
                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    c4 = 0;
                }
                if(com4cards[c4 - 3]){
                    if(com4cards[c4].number === com4cards[c4 - 3].number){
                        if(com4cards[c4 + 1]){
                            if(com4cards[c4 + 2]){
                                var c41 = com4cards[c4 - 3];
                                var c42 = com4cards[c4];
                                com4cards[c4 - 3] = com4cards[com4cards.length - 2];
                                com4cards[c4] = com4cards[com4cards.length - 1];
                                com4cards[com4cards.length - 2] = c41;
                                com4cards[com4cards.length - 1] = c42;
                            }else{
                                var cc4 = com4cards[c4 - 3];
                                com4cards[c4 - 3] = com4cards[com4cards.length - 1];
                                com4cards[com4cards.length - 1] = cc4;
                            }
                        }else{
                            var cc4 = com4cards[c4 - 3];
                            com4cards[c4 - 3] = com4cards[com4cards.length - 2];
                            com4cards[com4cards.length - 2] = cc4;
                        }
                        com4cards.pop();
                        com4point--;
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        com4cards.pop();
                        com4point--;
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        c4 = 0;
                    }
                    if(com4cards[c4 - 4]){
                        if(com4cards[c4].number === com4cards[c4 - 4].number){
                            if(com4cards[c4 + 1]){
                                if(com4cards[c4 + 2]){
                                    var c41 = com4cards[c4 - 4];
                                    var c42 = com4cards[c4];
                                    com4cards[c4 - 4] = com4cards[com4cards.length - 2];
                                    com4cards[c4] = com4cards[com4cards.length - 1];
                                    com4cards[com4cards.length - 2] = c41;
                                    com4cards[com4cards.length - 1] = c42;
                                }else{
                                    var cc4 = com4cards[c4 - 4];
                                    com4cards[c4 - 4] = com4cards[com4cards.length - 1];
                                    com4cards[com4cards.length - 1] = cc4;
                                }
                            }else{
                                var cc4 = com4cards[c4 - 4];
                                com4cards[c4 - 4] = com4cards[com4cards.length - 2];
                                com4cards[com4cards.length - 2] = cc4;
                            }
                            com4cards.pop();
                            com4point--;
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                            com4cards.pop();
                            com4point--;
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                            c4 = 0;
                        }
                        if(com4cards[c4 - 5]){
                            if(com4cards[c4].number === com4cards[c4 - 5].number){
                                if(com4cards[c4 + 1]){
                                    if(com4cards[c4 + 2]){
                                        var c41 = com4cards[c4 - 5];
                                        var c42 = com4cards[c4];
                                        com4cards[c4 - 5] = com4cards[com4cards.length - 2];
                                        com4cards[c4] = com4cards[com4cards.length - 1];
                                        com4cards[com4cards.length - 2] = c41;
                                        com4cards[com4cards.length - 1] = c42;
                                    }else{
                                        var cc4 = com4cards[c4 - 5];
                                        com4cards[c4 - 5] = com4cards[com4cards.length - 1];
                                        com4cards[com4cards.length - 1] = cc4;
                                    }
                                }else{
                                    var cc4 = com4cards[c4 - 5];
                                    com4cards[c4 - 5] = com4cards[com4cards.length - 2];
                                    com4cards[com4cards.length - 2] = cc4;
                                }
                                com4cards.pop();
                                com4point--;
                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                com4cards.pop();
                                com4point--;
                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                c4 = 0;
                            }
                            if(com4cards[c4 - 6]){
                                if(com4cards[c4].number === com4cards[c4 - 6].number){
                                    if(com4cards[c4 + 1]){
                                        if(com4cards[c4 + 2]){
                                            var c41 = com4cards[c4 - 6];
                                            var c42 = com4cards[c4];
                                            com4cards[c4 - 6] = com4cards[com4cards.length - 2];
                                            com4cards[c4] = com4cards[com4cards.length - 1];
                                            com4cards[com4cards.length - 2] = c41;
                                            com4cards[com4cards.length - 1] = c42;
                                        }else{
                                            var cc4 = com4cards[c4 - 6];
                                            com4cards[c4 - 6] = com4cards[com4cards.length - 1];
                                            com4cards[com4cards.length - 1] = cc4;
                                        }
                                    }else{
                                        var cc4 = com4cards[c4 - 6];
                                        com4cards[c4 - 6] = com4cards[com4cards.length - 2];
                                        com4cards[com4cards.length - 2] = cc4;
                                    }
                                    com4cards.pop();
                                    com4point--;
                                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                    com4cards.pop();
                                    com4point--;
                                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                    c4 = 0;
                                }
                                if(com4cards[c4 - 7]){
                                    if(com4cards[c4].number === com4cards[c4 - 7].number){
                                        if(com4cards[c4 + 1]){
                                            if(com4cards[c4 + 2]){
                                                var c41 = com4cards[c4 - 7];
                                                var c42 = com4cards[c4];
                                                com4cards[c4 - 7] = com4cards[com4cards.length - 2];
                                                com4cards[c4] = com4cards[com4cards.length - 1];
                                                com4cards[com4cards.length - 2] = c41;
                                                com4cards[com4cards.length - 1] = c42;
                                            }else{
                                                var cc4 = com4cards[c4 - 7];
                                                com4cards[c4 - 7] = com4cards[com4cards.length - 1];
                                                com4cards[com4cards.length - 1] = cc4;
                                            }
                                        }else{
                                            var cc4 = com4cards[c4 - 7];
                                            com4cards[c4 - 7] = com4cards[com4cards.length - 2];
                                            com4cards[com4cards.length - 2] = cc4;
                                        }
                                        com4cards.pop();
                                        com4point--;
                                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                        com4cards.pop();
                                        com4point--;
                                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                        c4 = 0;
                                    }
                                    if(com4cards[c4 - 8]){
                                        if(com4cards[c4].number === com4cards[c4 - 8].number){
                                            if(com4cards[c4 + 1]){
                                                if(com4cards[c4 + 2]){
                                                    var c41 = com4cards[c4 - 8];
                                                    var c42 = com4cards[c4];
                                                    com4cards[c4 - 8] = com4cards[com4cards.length - 2];
                                                    com4cards[c4] = com4cards[com4cards.length - 1];
                                                    com4cards[com4cards.length - 2] = c41;
                                                    com4cards[com4cards.length - 1] = c42;
                                                }else{
                                                    var cc4 = com4cards[c4 - 8];
                                                    com4cards[c4 - 8] = com4cards[com4cards.length - 1];
                                                    com4cards[com4cards.length - 1] = cc4;
                                                }
                                            }else{
                                                var cc4 = com4cards[c4 - 8];
                                                com4cards[c4 - 8] = com4cards[com4cards.length - 2];
                                                com4cards[com4cards.length - 2] = cc4;
                                            }
                                            com4cards.pop();
                                            com4point--;
                                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                            com4cards.pop();
                                            com4point--;
                                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                            c4 = 0;
                                        }
                                        if(com4cards[c4 - 9]){
                                            if(com4cards[c4].number === com4cards[c4 - 9].number){
                                                if(com4cards[c4 + 1]){
                                                    if(com4cards[c4 + 2]){
                                                        var c41 = com4cards[c4 - 9];
                                                        var c42 = com4cards[c4];
                                                        com4cards[c4 - 9] = com4cards[com4cards.length - 2];
                                                        com4cards[c4] = com4cards[com4cards.length - 1];
                                                        com4cards[com4cards.length - 2] = c41;
                                                        com4cards[com4cards.length - 1] = c42;
                                                    }else{
                                                        var cc4 = com4cards[c4 - 9];
                                                        com4cards[c4 - 9] = com4cards[com4cards.length - 1];
                                                        com4cards[com4cards.length - 1] = cc4;
                                                    }
                                                }else{
                                                    var cc4 = com4cards[c4 - 9];
                                                    com4cards[c4 - 9] = com4cards[com4cards.length - 2];
                                                    com4cards[com4cards.length - 2] = cc4;
                                                }
                                                com4cards.pop();
                                                com4point--;
                                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                com4cards.pop();
                                                com4point--;
                                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                c4 = 0;
                                            }
                                            if(com4cards[c4 - 10]){
                                                if(com4cards[c4].number === com4cards[c4 - 10].number){
                                                    if(com4cards[c4 + 1]){
                                                        if(com4cards[c4 + 2]){
                                                            var c41 = com4cards[c4 - 10];
                                                            var c42 = com4cards[c4];
                                                            com4cards[c4 - 10] = com4cards[com4cards.length - 2];
                                                            com4cards[c4] = com4cards[com4cards.length - 1];
                                                            com4cards[com4cards.length - 2] = c41;
                                                            com4cards[com4cards.length - 1] = c42;
                                                        }else{
                                                            var cc4 = com4cards[c4 - 10];
                                                            com4cards[c4 - 10] = com4cards[com4cards.length - 1];
                                                            com4cards[com4cards.length - 1] = cc4;
                                                        }
                                                    }else{
                                                        var cc4 = com4cards[c4 - 10];
                                                        com4cards[c4 - 10] = com4cards[com4cards.length - 2];
                                                        com4cards[com4cards.length - 2] = cc4;
                                                    }
                                                    com4cards.pop();
                                                    com4point--;
                                                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                    com4cards.pop();
                                                    com4point--;
                                                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                    c4 = 0;
                                                }
                                                if(com4cards[c4 - 11]){
                                                    if(com4cards[c4].number === com4cards[c4 - 11].number){
                                                        if(com4cards[c4 + 1]){
                                                            if(com4cards[c4 + 2]){
                                                                var c41 = com4cards[c4 - 11];
                                                                var c42 = com4cards[c4];
                                                                com4cards[c4 - 11] = com4cards[com4cards.length - 2];
                                                                com4cards[c4] = com4cards[com4cards.length - 1];
                                                                com4cards[com4cards.length - 2] = c41;
                                                                com4cards[com4cards.length - 1] = c42;
                                                            }else{
                                                                var cc4 = com4cards[c4 - 11];
                                                                com4cards[c4 - 11] = com4cards[com4cards.length - 1];
                                                                com4cards[com4cards.length - 1] = cc4;
                                                            }
                                                        }else{
                                                            var cc4 = com4cards[c4 - 11];
                                                            com4cards[c4 - 11] = com4cards[com4cards.length - 2];
                                                            com4cards[com4cards.length - 2] = cc4;
                                                        }
                                                        com4cards.pop();
                                                        com4point--;
                                                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                        com4cards.pop();
                                                        com4point--;
                                                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                        c4 = 0;
                                                    }
                                                    if(com4cards[c4 - 12]){
                                                        if(com4cards[c4].number === com4cards[c4 - 12].number){
                                                            if(com4cards[c4 + 1]){
                                                                var cc4 = com4cards[c4 - 12];
                                                                com4cards[c4 - 12] = com4cards[com4cards.length - 1];
                                                                com4cards[com4cards.length - 1] = cc4;
                                                            }else{
                                                                var cc4 = com4cards[c4 - 12];
                                                                com4cards[c4 - 12] = com4cards[com4cards.length - 2];
                                                                com4cards[com4cards.length - 2] = cc4;
                                                            }
                                                            com4cards.pop();
                                                            com4point--;
                                                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                            com4cards.pop();
                                                            com4point--;
                                                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                            c4 = 0;
                                                        }
                                                        if(com4cards[c4 - 13]){
                                                            if(com4cards[c4].number === com4cards[c4 - 13].number){
                                                                var cc4 = com4cards[c4 - 13];
                                                                com4cards[c4 - 13] = com4cards[com4cards.length - 2];
                                                                com4cards[com4cards.length - 2] = cc4;

                                                                com4cards.pop();
                                                                com4point--;
                                                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                                com4cards.pop();
                                                                com4point--;
                                                                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                                                                c4 = 0;
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
                }
            }
        }
    }
    console.log("com4 cards", com4cards);
}/**/

function com5Pops(){
    for(var c5 = 0; c5 < com5cards.length; c5++){
        if(com5cards[c5 - 1]){
            if(com5cards[c5].number === com5cards[c5 - 1].number){
                if(com5cards[c5 + 1]){
                    if(com5cards[c5 + 2]){
                        var c51 = com5cards[c5 - 1];
                        var c52 = com5cards[c5];
                        com5cards[c5 - 1] = com5cards[com5cards.length - 2];
                        com5cards[c5] = com5cards[com5cards.length - 1];
                        com5cards[com5cards.length - 2] = c51;
                        com5cards[com5cards.length - 1] = c52;
                    }else{
                        var cc5 = com5cards[c5 - 1];
                        com5cards[c5 - 1] = com5cards[com5cards.length - 2];
                        com5cards[com5cards.length - 2] = cc5;
                    }
                }else{
                    var cc5 = com5cards[c5 - 1];
                    com5cards[c5 - 1] = com5cards[com5cards.length - 2];
                    com5cards[com5cards.length - 2] = cc5;
                }
                com5cards.pop();
                com5point--;
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                com5cards.pop();
                com5point--;
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                c5 = 0;
            }
            if(com5cards[c5 - 2]){
                if(com5cards[c5].number === com5cards[c5 - 2].number){
                    if(com5cards[c5 + 1]){
                        if(com5cards[c5 + 2]){
                            var c51 = com5cards[c5 - 2];
                            var c52 = com5cards[c5];
                            com5cards[c5 - 2] = com5cards[com5cards.length - 2];
                            com5cards[c5] = com5cards[com5cards.length - 1];
                            com5cards[com5cards.length - 2] = c51;
                            com5cards[com5cards.length - 1] = c52;
                        }else{
                            var cc5 = com5cards[c5 - 2];
                            com5cards[c5 - 2] = com5cards[com5cards.length - 2];
                            com5cards[com5cards.length - 2] = cc5;
                        }
                    }else{
                        var cc5 = com5cards[c5 - 2];
                        com5cards[c5 - 2] = com5cards[com5cards.length - 2];
                        com5cards[com5cards.length - 2] = cc5;
                    }
                    com5cards.pop();
                    com5point--;
                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                    com5cards.pop();
                    com5point--;
                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                    c5 = 0;
                }
                if(com5cards[c5 - 3]){
                    if(com5cards[c5].number === com5cards[c5 - 3].number){
                        if(com5cards[c5 + 1]){
                            if(com5cards[c5 + 2]){
                                var c51 = com5cards[c5 - 3];
                                var c52 = com5cards[c5];
                                com5cards[c5 - 3] = com5cards[com5cards.length - 2];
                                com5cards[c5] = com5cards[com5cards.length - 1];
                                com5cards[com5cards.length - 2] = c51;
                                com5cards[com5cards.length - 1] = c52;
                            }else{
                                var cc5 = com5cards[c5 - 3];
                                com5cards[c5 - 3] = com5cards[com5cards.length - 2];
                                com5cards[com5cards.length - 2] = cc5;
                            }
                        }else{
                            var cc5 = com5cards[c5 - 3];
                            com5cards[c5 - 3] = com5cards[com5cards.length - 2];
                            com5cards[com5cards.length - 2] = cc5;
                        }
                        com5cards.pop();
                        com5point--;
                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        com5cards.pop();
                        com5point--;
                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        c5 = 0;
                    }
                    if(com5cards[c5 - 4]){
                        if(com5cards[c5].number === com5cards[c5 - 4].number){
                            if(com5cards[c5 + 1]){
                                if(com5cards[c5 + 2]){
                                    var c51 = com5cards[c5 - 4];
                                    var c52 = com5cards[c5];
                                    com5cards[c5 - 4] = com5cards[com5cards.length - 2];
                                    com5cards[c5] = com5cards[com5cards.length - 1];
                                    com5cards[com5cards.length - 2] = c51;
                                    com5cards[com5cards.length - 1] = c52;
                                }else{
                                    var cc5 = com5cards[c5 - 4];
                                    com5cards[c5 - 4] = com5cards[com5cards.length - 2];
                                    com5cards[com5cards.length - 2] = cc5;
                                }
                            }else{
                                var cc5 = com5cards[c5 - 4];
                                com5cards[c5 - 4] = com5cards[com5cards.length - 2];
                                com5cards[com5cards.length - 2] = cc5;
                            }
                            com5cards.pop();
                            com5point--;
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                            com5cards.pop();
                            com5point--;
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                            c5 = 0;
                        }
                        if(com5cards[c5 - 5]){
                            if(com5cards[c5].number === com5cards[c5 - 5].number){
                                if(com5cards[c5 + 1]){
                                    if(com5cards[c5 + 2]){
                                        var c51 = com5cards[c5 - 5];
                                        var c52 = com5cards[c5];
                                        com5cards[c5 - 5] = com5cards[com5cards.length - 2];
                                        com5cards[c5] = com5cards[com5cards.length - 1];
                                        com5cards[com5cards.length - 2] = c51;
                                        com5cards[com5cards.length - 1] = c52;
                                    }else{
                                        var cc5 = com5cards[c5 - 5];
                                        com5cards[c5 - 5] = com5cards[com5cards.length - 2];
                                        com5cards[com5cards.length - 2] = cc5;
                                    }
                                }else{
                                    var cc5 = com5cards[c5 - 5];
                                    com5cards[c5 - 5] = com5cards[com5cards.length - 2];
                                    com5cards[com5cards.length - 2] = cc5;
                                }
                                com5cards.pop();
                                com5point--;
                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                com5cards.pop();
                                com5point--;
                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                c5 = 0;
                            }
                            if(com5cards[c5 - 6]){
                                if(com5cards[c5].number === com5cards[c5 - 6].number){
                                    if(com5cards[c5 + 1]){
                                        if(com5cards[c5 + 2]){
                                            var c51 = com5cards[c5 - 6];
                                            var c52 = com5cards[c5];
                                            com5cards[c5 - 6] = com5cards[com5cards.length - 2];
                                            com5cards[c5] = com5cards[com5cards.length - 1];
                                            com5cards[com5cards.length - 2] = c51;
                                            com5cards[com5cards.length - 1] = c52;
                                        }else{
                                            var cc5 = com5cards[c5 - 6];
                                            com5cards[c5 - 6] = com5cards[com5cards.length - 2];
                                            com5cards[com5cards.length - 2] = cc5;
                                        }
                                    }else{
                                        var cc5 = com5cards[c5 - 6];
                                        com5cards[c5 - 6] = com5cards[com5cards.length - 2];
                                        com5cards[com5cards.length - 2] = cc5;
                                    }
                                    com5cards.pop();
                                    com5point--;
                                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                    com5cards.pop();
                                    com5point--;
                                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                    c5 = 0;
                                }
                                if(com5cards[c5 - 7]){
                                    if(com5cards[c5].number === com5cards[c5 - 7].number){
                                        if(com5cards[c5 + 1]){
                                            if(com5cards[c5 + 2]){
                                                var c51 = com5cards[c5 - 7];
                                                var c52 = com5cards[c5];
                                                com5cards[c5 - 7] = com5cards[com5cards.length - 2];
                                                com5cards[c5] = com5cards[com5cards.length - 1];
                                                com5cards[com5cards.length - 2] = c51;
                                                com5cards[com5cards.length - 1] = c52;
                                            }else{
                                                var cc5 = com5cards[c5 - 7];
                                                com5cards[c5 - 7] = com5cards[com5cards.length - 2];
                                                com5cards[com5cards.length - 2] = cc5;
                                            }
                                        }else{
                                            var cc5 = com5cards[c5 - 7];
                                            com5cards[c5 - 7] = com5cards[com5cards.length - 2];
                                            com5cards[com5cards.length - 2] = cc5;
                                        }
                                        com5cards.pop();
                                        com5point--;
                                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                        com5cards.pop();
                                        com5point--;
                                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                        c5 = 0;
                                    }
                                    if(com5cards[c5 - 8]){
                                        if(com5cards[c5].number === com5cards[c5 - 8].number){
                                            if(com5cards[c5 + 1]){
                                                if(com5cards[c5 + 2]){
                                                    var c51 = com5cards[c5 - 8];
                                                    var c52 = com5cards[c5];
                                                    com5cards[c5 - 8] = com5cards[com5cards.length - 2];
                                                    com5cards[c5] = com5cards[com5cards.length - 1];
                                                    com5cards[com5cards.length - 2] = c51;
                                                    com5cards[com5cards.length - 1] = c52;
                                                }else{
                                                    var cc5 = com5cards[c5 - 8];
                                                    com5cards[c5 - 8] = com5cards[com5cards.length - 2];
                                                    com5cards[com5cards.length - 2] = cc5;
                                                }
                                            }else{
                                                var cc5 = com5cards[c5 - 8];
                                                com5cards[c5 - 8] = com5cards[com5cards.length - 2];
                                                com5cards[com5cards.length - 2] = cc5;
                                            }
                                            com5cards.pop();
                                            com5point--;
                                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                            com5cards.pop();
                                            com5point--;
                                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                            c5 = 0;
                                        }
                                        if(com5cards[c5 - 9]){
                                            if(com5cards[c5].number === com5cards[c5 - 9].number){
                                                if(com5cards[c5 + 1]){
                                                    if(com5cards[c5 + 2]){
                                                        var c51 = com5cards[c5 - 9];
                                                        var c52 = com5cards[c5];
                                                        com5cards[c5 - 9] = com5cards[com5cards.length - 2];
                                                        com5cards[c5] = com5cards[com5cards.length - 1];
                                                        com5cards[com5cards.length - 2] = c51;
                                                        com5cards[com5cards.length - 1] = c52;
                                                    }else{
                                                        var cc5 = com5cards[c5 - 9];
                                                        com5cards[c5 - 9] = com5cards[com5cards.length - 2];
                                                        com5cards[com5cards.length - 2] = cc5;
                                                    }
                                                }else{
                                                    var cc5 = com5cards[c5 - 9];
                                                    com5cards[c5 - 9] = com5cards[com5cards.length - 2];
                                                    com5cards[com5cards.length - 2] = cc5;
                                                }
                                                com5cards.pop();
                                                com5point--;
                                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                com5cards.pop();
                                                com5point--;
                                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                c5 = 0;
                                            }
                                            if(com5cards[c5 - 10]){
                                                if(com5cards[c5].number === com5cards[c5 - 10].number){
                                                    if(com5cards[c5 + 1]){
                                                        if(com5cards[c5 + 2]){
                                                            var c51 = com5cards[c5 - 10];
                                                            var c52 = com5cards[c5];
                                                            com5cards[c5 - 10] = com5cards[com5cards.length - 2];
                                                            com5cards[c5] = com5cards[com5cards.length - 1];
                                                            com5cards[com5cards.length - 2] = c51;
                                                            com5cards[com5cards.length - 1] = c52;
                                                        }else{
                                                            var cc5 = com5cards[c5 - 10];
                                                            com5cards[c5 - 10] = com5cards[com5cards.length - 2];
                                                            com5cards[com5cards.length - 2] = cc5;
                                                        }
                                                    }else{
                                                        var cc5 = com5cards[c5 - 10];
                                                        com5cards[c5 - 10] = com5cards[com5cards.length - 2];
                                                        com5cards[com5cards.length - 2] = cc5;
                                                    }
                                                    com5cards.pop();
                                                    com5point--;
                                                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                    com5cards.pop();
                                                    com5point--;
                                                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                    c5 = 0;
                                                }
                                                if(com5cards[c5 - 11]){
                                                    if(com5cards[c5].number === com5cards[c5 - 11].number){
                                                        if(com5cards[c5 + 1]){
                                                            if(com5cards[c5 + 2]){
                                                                var c51 = com5cards[c5 - 11];
                                                                var c52 = com5cards[c5];
                                                                com5cards[c5 - 11] = com5cards[com5cards.length - 2];
                                                                com5cards[c5] = com5cards[com5cards.length - 1];
                                                                com5cards[com5cards.length - 2] = c51;
                                                                com5cards[com5cards.length - 1] = c52;
                                                            }else{
                                                                var cc5 = com5cards[c5 - 11];
                                                                com5cards[c5 - 11] = com5cards[com5cards.length - 2];
                                                                com5cards[com5cards.length - 2] = cc5;
                                                            }
                                                        }else{
                                                            var cc5 = com5cards[c5 - 11];
                                                            com5cards[c5 - 11] = com5cards[com5cards.length - 2];
                                                            com5cards[com5cards.length - 2] = cc5;
                                                        }
                                                        com5cards.pop();
                                                        com5point--;
                                                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                        com5cards.pop();
                                                        com5point--;
                                                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                        c5 = 0;
                                                    }
                                                    if(com5cards[c5 - 12]){
                                                        if(com5cards[c5].number === com5cards[c5 - 12].number){
                                                            if(com5cards[c5 + 1]){
                                                                var cc5 = com5cards[c5 - 12];
                                                                com5cards[c5 - 12] = com5cards[com5cards.length - 2];
                                                                com5cards[com5cards.length - 2] = cc5;
                                                            }else{
                                                                var cc5 = com5cards[c5 - 12];
                                                                com5cards[c5 - 12] = com5cards[com5cards.length - 2];
                                                                com5cards[com5cards.length - 2] = cc5;
                                                            }
                                                            com5cards.pop();
                                                            com5point--;
                                                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                            com5cards.pop();
                                                            com5point--;
                                                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                            c5 = 0;
                                                        }
                                                        if(com5cards[c5 - 13]){
                                                            if(com5cards[c5].number === com5cards[c5 - 13].number){
                                                                var cc5 = com5cards[c5 - 13];
                                                                com5cards[c5 - 13] = com5cards[com5cards.length - 2];
                                                                com5cards[com5cards.length - 2] = cc5;

                                                                com5cards.pop();
                                                                com5point--;
                                                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                                com5cards.pop();
                                                                com5point--;
                                                                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                                                                c5 = 0;
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
                }
            }
        }
    }
    console.log("com5 cards", com5cards);
}/**/

function game9CardCheck(e){
    var comNumbers = e.id;
    var comNSprit = comNumbers.split("_")
    console.log(comNSprit[0]);
    console.log(comNSprit[1]);
    console.log(typeof comNSprit[1]);
    switch(game9id){
        case "4players":
            if(com3cards.length != 0){
                if(com3cards[parseInt(comNSprit[1])] === com3cards[com3cards.length - 1]){
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc3 = com3cards[parseInt(comNSprit[1])];
                    com3cards[parseInt(comNSprit[1])] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc3;
                    
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com3cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com2cards.length != 0){
                if(com2cards[parseInt(comNSprit[1])] === com2cards[com2cards.length - 1]){
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc2 = com2cards[parseInt(comNSprit[1])];
                    com2cards[parseInt(comNSprit[1])] = com2cards[com2cards.length - 1];
                    com2cards[com2cards.length - 1] = kc2;
                    
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com2cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com1cards.length != 0){
                if(com1cards[parseInt(comNSprit[1])] === com1cards[com1cards.length - 1]){
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc1 = com1cards[parseInt(comNSprit[1])];
                    com1cards[parseInt(comNSprit[1])] = com1cards[com1cards.length - 1];
                    com1cards[com1cards.length - 1] = kc1;
                    
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com1cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }
            break;
        case "5players":
            if(com4cards.length != 0){
                if(com4cards[parseInt(comNSprit[1])] === com4cards[com4cards.length - 1]){
                    playercards.push(com4cards[com4cards.length - 1]);
                    com4cards.pop();
                    com4point--;
                    playerpoint++;
                    if(com4point > 0){
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    }else{
                        rankbool[4] = true;
                        rankArr[4] = rank;
                        com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc4 = com4cards[parseInt(comNSprit[1])];
                    com4cards[parseInt(comNSprit[1])] = com4cards[com4cards.length - 1];
                    com4cards[com4cards.length - 1] = kc4;
                    
                    playercards.push(com4cards[com4cards.length - 1]);
                    com4cards.pop();
                    com4point--;
                    playerpoint++;
                    if(com4point > 0){
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    }else{
                        rankbool[4] = true;
                        rankArr[4] = rank;
                        com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c5a = 0; c5a < com4cards.length; c5a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com3cards.length != 0){
                if(com3cards[parseInt(comNSprit[1])] === com3cards[com3cards.length - 1]){
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc3 = com3cards[parseInt(comNSprit[1])];
                    com3cards[parseInt(comNSprit[1])] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc3;
                    
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com3cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com2cards.length != 0){
                if(com2cards[parseInt(comNSprit[1])] === com2cards[com2cards.length - 1]){
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc2 = com2cards[parseInt(comNSprit[1])];
                    com2cards[parseInt(comNSprit[1])] = com2cards[com2cards.length - 1];
                    com2cards[com2cards.length - 1] = kc2;
                    
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com2cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com1cards.length != 0){
                if(com1cards[parseInt(comNSprit[1])] === com1cards[com1cards.length - 1]){
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc1 = com1cards[parseInt(comNSprit[1])];
                    com1cards[parseInt(comNSprit[1])] = com1cards[com1cards.length - 1];
                    com1cards[com1cards.length - 1] = kc1;
                    
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com1cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }
            break;
        case "6players":
            if(com5cards.length != 0){
                if(com5cards[parseInt(comNSprit[1])] === com5cards[com5cards.length - 1]){
                    playercards.push(com5cards[com5cards.length - 1]);
                    com5cards.pop();
                    com5point--;
                    playerpoint++;
                    if(com5point > 0){
                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                    }else{
                        rankbool[5] = true;
                        rankArr[5] = rank;
                        com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc5 = com5cards[parseInt(comNSprit[1])];
                    com5cards[parseInt(comNSprit[1])] = com5cards[com5cards.length - 1];
                    com5cards[com5cards.length - 1] = kc5;
                    
                    playercards.push(com5cards[com5cards.length - 1]);
                    com5cards.pop();
                    com5point--;
                    playerpoint++;
                    if(com5point > 0){
                        com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                    }else{
                        rankbool[5] = true;
                        rankArr[5] = rank;
                        com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c6a = 0; c6a < com5cards.length; c6a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com4cards.length != 0){
                if(com4cards[parseInt(comNSprit[1])] === com4cards[com4cards.length - 1]){
                    playercards.push(com4cards[com4cards.length - 1]);
                    com4cards.pop();
                    com4point--;
                    playerpoint++;
                    if(com4point > 0){
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    }else{
                        rankbool[4] = true;
                        rankArr[4] = rank;
                        com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc4 = com4cards[parseInt(comNSprit[1])];
                    com4cards[parseInt(comNSprit[1])] = com4cards[com4cards.length - 1];
                    com4cards[com4cards.length - 1] = kc4;
                    
                    playercards.push(com4cards[com4cards.length - 1]);
                    com4cards.pop();
                    com4point--;
                    playerpoint++;
                    if(com4point > 0){
                        com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    }else{
                        rankbool[4] = true;
                        rankArr[4] = rank;
                        com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c5a = 0; c5a < com4cards.length; c5a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com3cards.length != 0){
                if(com3cards[parseInt(comNSprit[1])] === com3cards[com3cards.length - 1]){
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc3 = com3cards[parseInt(comNSprit[1])];
                    com3cards[parseInt(comNSprit[1])] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc3;
                    
                    playercards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    playerpoint++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com3cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com2cards.length != 0){
                if(com2cards[parseInt(comNSprit[1])] === com2cards[com2cards.length - 1]){
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc2 = com2cards[parseInt(comNSprit[1])];
                    com2cards[parseInt(comNSprit[1])] = com2cards[com2cards.length - 1];
                    com2cards[com2cards.length - 1] = kc2;
                    
                    playercards.push(com2cards[com2cards.length - 1]);
                    com2cards.pop();
                    com2point--;
                    playerpoint++;
                    if(com2point > 0){
                        com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    }else{
                        rankbool[2] = true;
                        rankArr[2] = rank;
                        com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com2cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }else if(com1cards.length != 0){
                if(com1cards[parseInt(comNSprit[1])] === com1cards[com1cards.length - 1]){
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    var kc1 = com1cards[parseInt(comNSprit[1])];
                    com1cards[parseInt(comNSprit[1])] = com1cards[com1cards.length - 1];
                    com1cards[com1cards.length - 1] = kc1;
                    
                    playercards.push(com1cards[com1cards.length - 1]);
                    com1cards.pop();
                    com1point--;
                    playerpoint++;
                    if(com1point > 0){
                        com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    }else{
                        rankbool[1] = true;
                        rankArr[1] = rank;
                        com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                trumpMain1.innerHTML =``;
                for(var c4a = 0; c4a < com1cards.length; c4a++){
                    trumpMain1.innerHTML +=`<a>
                                                <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                            </a>`;
                }
            }
            break;
    }
    trumpMain2.innerHTML =``;
    for(var c0a = 0; c0a < playercards.length; c0a++){
        trumpMain2.innerHTML +=`<a>
                                    <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                </a>`;
    }

    playerPops();
    game9Counter2L = setInterval(game9Counter2, 500);
}

function game9Counter2(){
    game9Counter2s += 1;

    if(game9Counter2s === 2){
        trumpMain2.innerHTML =``;
        for(var c0a = 0; c0a < playercards.length; c0a++){
            trumpMain2.innerHTML +=`<a>
                                        <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                    </a>`;
        }
        if(playerpoint > 0){
            scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
        }else{
            if(!rankbool[0]){
                rankbool[0] = true;
                rankArr[0] = rank;
                scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                rank++;
                game9Counter2s++;
            }
        }
    }else if(game9Counter2s === 3){
        console.log("game9Counter2s: " + game9Counter2s);
        if(playercards.length != 0 && com1cards.length != 0){
            var pull = Math.trunc(Math.random() * playercards.length);
            console.log("pull : " + pull);
            if(pull != playercards.length - 1){
                var kc1 = playercards[pull];
                playercards[pull] = playercards[playercards.length - 1];
                playercards[playercards.length - 1] = kc1;
                
                com1cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com1point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com1cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com1point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            trumpMain2.innerHTML =``;
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
            com1Pops();
        }else if(playercards.length != 0 && com2cards.length != 0){
            var pull = Math.trunc(Math.random() * playercards.length);
            console.log("pull : " + pull);
            if(pull != playercards.length - 1){
                var kc1 = playercards[pull];
                playercards[pull] = playercards[playercards.length - 1];
                playercards[playercards.length - 1] = kc1;
                
                com2cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com2point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com2cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com2point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            trumpMain2.innerHTML =``;
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
            com2Pops();
        }else if(playercards.length != 0 && com3cards.length != 0){
            var pull = Math.trunc(Math.random() * playercards.length);
            console.log("pull : " + pull);
            if(pull != playercards.length - 1){
                var kc1 = playercards[pull];
                playercards[pull] = playercards[playercards.length - 1];
                playercards[playercards.length - 1] = kc1;
                
                com3cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com3point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com3cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com3point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            trumpMain2.innerHTML =``;
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
            com3Pops();
        }else if(playercards.length != 0 && com4cards.length != 0){
            var pull = Math.trunc(Math.random() * playercards.length);
            console.log("pull : " + pull);
            if(pull != playercards.length - 1){
                var kc1 = playercards[pull];
                playercards[pull] = playercards[playercards.length - 1];
                playercards[playercards.length - 1] = kc1;
                
                com4cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com4point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com4cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com4point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            trumpMain2.innerHTML =``;
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            com4Pops();
        }else if(playercards.length != 0 && com5cards.length != 0){
            var pull = Math.trunc(Math.random() * playercards.length);
            console.log("pull : " + pull);
            if(pull != playercards.length - 1){
                var kc1 = playercards[pull];
                playercards[pull] = playercards[playercards.length - 1];
                playercards[playercards.length - 1] = kc1;
                
                com5cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com5point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com5cards.push(playercards[playercards.length - 1]);
                playercards.pop();
                playerpoint--;
                com5point++;
                if(playerpoint > 0){
                    scoreboard.innerHTML =`<p>自分 残り<span class="hops">${playerpoint}</span> 枚</p>`;
                }else{
                    rankbool[0] = true;
                    rankArr[0] = rank;
                    scoreboard.innerHTML =`<p>自分 <span class="hops">${rankArr[0]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            trumpMain2.innerHTML =``;
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            com5Pops();
        }
    }else if(game9Counter2s === 4){
        console.log("game9Counter2s: " + game9Counter2s);
        if(com1point > 0){
            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
        }else{
            if(!rankbool[1]){
                rankbool[1] = true;
                rankArr[1] = rank;
                com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                rank++;
            }
        }
        if(com1cards.length != 0 && com2cards.length != 0){
            var pull0 = Math.trunc(Math.random() * com1cards.length);
            console.log("pull0 : " + pull0);
            if(pull0 != com1cards.length - 1){
                var kc2 = com1cards[pull0];
                com1cards[pull0] = com1cards[com1cards.length - 1];
                com1cards[com1cards.length - 1] = kc2;
                
                com2cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com2point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com2cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com2point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
            com2Pops();
        }else if(com1cards.length != 0 && com3cards.length != 0){
            var pull0 = Math.trunc(Math.random() * com1cards.length);
            console.log("pull0 : " + pull0);
            if(pull0 != com1cards.length - 1){
                var kc2 = com1cards[pull0];
                com1cards[pull0] = com1cards[com1cards.length - 1];
                com1cards[com1cards.length - 1] = kc2;
                
                com3cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com3point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com3cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com3point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com3board.innerHTML =`<p>com3 残り<span class="hops">${com2point}</span> 枚</p>`;
            com3Pops();
        }else if(com1cards.length != 0 && com4cards.length != 0){
            var pull0 = Math.trunc(Math.random() * com1cards.length);
            console.log("pull0 : " + pull0);
            if(pull0 != com1cards.length - 1){
                var kc2 = com1cards[pull0];
                com1cards[pull0] = com1cards[com1cards.length - 1];
                com1cards[com1cards.length - 1] = kc2;
                
                com4cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com4point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com4cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com4point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            com4Pops();
        }else if(com1cards.length != 0 && com5cards.length != 0){
            var pull0 = Math.trunc(Math.random() * com1cards.length);
            console.log("pull0 : " + pull0);
            if(pull0 != com1cards.length - 1){
                var kc2 = com1cards[pull0];
                com1cards[pull0] = com1cards[com1cards.length - 1];
                com1cards[com1cards.length - 1] = kc2;
                
                com5cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com5point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com5cards.push(com1cards[com1cards.length - 1]);
                com1cards.pop();
                com1point--;
                com5point++;
                if(com1point > 0){
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                }else{
                    rankbool[1] = true;
                    rankArr[1] = rank;
                    com1board.innerHTML =`<p>com1 <span class="hops">${rankArr[1]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            com5Pops();
        }else if(com1cards.length != 0 && playercards.length != 0){
            game9Counter2s = 9;
        }
    }else if(game9Counter2s === 5){
        console.log("game9Counter2s: " + game9Counter2s);
        if(com2point > 0){
            com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
        }else{
            if(!rankbool[2]){
                rankbool[2] = true;
                rankArr[2] = rank;
                com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                rank++;
            }
        }
        if(com2cards.length != 0 && com3cards.length != 0){
            var pull2 = Math.trunc(Math.random() * com2cards.length);
            console.log("pull2 : " + pull2);
            if(pull2 != com2cards.length - 1){
                var kc3 = com2cards[pull2];
                com2cards[pull2] = com2cards[com2cards.length - 1];
                com2cards[com2cards.length - 1] = kc3;
                
                com3cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com3point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com3cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com3point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
            com3Pops();
        }else if(com2cards.length != 0 && com4cards.length != 0){
            var pull2 = Math.trunc(Math.random() * com2cards.length);
            console.log("pull2 : " + pull2);
            if(pull2 != com2cards.length - 1){
                var kc3 = com2cards[pull2];
                com2cards[pull2] = com2cards[com2cards.length - 1];
                com2cards[com2cards.length - 1] = kc3;
                
                com4cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com4point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com4cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com4point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            com4Pops();
        }else if(com2cards.length != 0 && com5cards.length != 0){
            var pull2 = Math.trunc(Math.random() * com2cards.length);
            console.log("pull2 : " + pull2);
            if(pull2 != com2cards.length - 1){
                var kc3 = com2cards[pull2];
                com2cards[pull2] = com2cards[com2cards.length - 1];
                com2cards[com2cards.length - 1] = kc3;
                
                com5cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com5point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com5cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com5point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            com5Pops();
        }else if(com2cards.length != 0 && playercards.length != 0){
            game9Counter2s = 9;
        }else if(com2cards.length != 0 && com1cards.length != 0){
            var pull2 = Math.trunc(Math.random() * com2cards.length);
            console.log("pull2 : " + pull2);
            if(pull2 != com2cards.length - 1){
                var kc3 = com2cards[pull2];
                com2cards[pull2] = com2cards[com2cards.length - 1];
                com2cards[com2cards.length - 1] = kc3;
                
                com1cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com1point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }else{
                com1cards.push(com2cards[com2cards.length - 1]);
                com2cards.pop();
                com2point--;
                com1point++;
                if(com2point > 0){
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                }else{
                    rankbool[2] = true;
                    rankArr[2] = rank;
                    com2board.innerHTML =`<p>com2 <span class="hops">${rankArr[2]}</span> 位抜け</p>`;
                    rank++;
                }
            }
            
            com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
            com1Pops();
            game9Counter2s = 19;
        }
    }else if(game9Counter2s === 6){
        console.log("game9Counter2s: " + game9Counter2s);
        if(com3point > 0){
            com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
        }else{
            if(!rankbool[3]){
                rankbool[3] = true;
                rankcasebool[3] = true;
                rankArr[3] = rank;
                com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                rank++;
                if(game9id === "4players"){
                    game9Counter2s = 0;
                }
            }
        }
        if(game9id === "6players" || game9id === "5players"){
            if(com3cards.length != 0 && com4cards.length != 0){
                var pull3 = Math.trunc(Math.random() * com3cards.length);
                if(pull3 != com3cards.length - 1){
                    var kc4 = com3cards[pull3];
                    com3cards[pull3] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc4;
                    
                    com4cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com4point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    com4cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com4point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                com4Pops();
            }else if(com3cards.length != 0 && com5cards.length != 0){
                var pull3 = Math.trunc(Math.random() * com3cards.length);
                console.log("pull3 : " + pull3);
                if(pull3 != com3cards.length - 1){
                    var kc4 = com3cards[pull3];
                    com3cards[pull3] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc4;
                    
                    com5cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com5point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    com5cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com5point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                com5Pops();
            }else if(com3cards.length != 0 && playercards.length != 0){
                game9Counter2s = 9;
            }else if(com3cards.length != 0 && com1cards.length != 0){
                var pull3 = Math.trunc(Math.random() * com3cards.length);
                console.log("pull3 : " + pull3);
                if(pull3 != com3cards.length - 1){
                    var kc4 = com3cards[pull3];
                    com3cards[pull3] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc4;
                    
                    com1cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com1point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    com1cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com1point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                
                com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                com1Pops();
                game9Counter2s = 19;
            }else if(com3cards.length != 0 && com2cards.length != 0){
                var pull3 = Math.trunc(Math.random() * com3cards.length);
                console.log("pull3 : " + pull3);
                if(pull3 != com3cards.length - 1){
                    var kc4 = com3cards[pull3];
                    com3cards[pull3] = com3cards[com3cards.length - 1];
                    com3cards[com3cards.length - 1] = kc4;
                    
                    com2cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com2point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }else{
                    com2cards.push(com3cards[com3cards.length - 1]);
                    com3cards.pop();
                    com3point--;
                    com2point++;
                    if(com3point > 0){
                        com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    }else{
                        rankbool[3] = true;
                        rankArr[3] = rank;
                        com3board.innerHTML =`<p>com3 <span class="hops">${rankArr[3]}</span> 位抜け</p>`;
                        rank++;
                    }
                }
                
                com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                com2Pops();
                game9Counter2s = 19;
            }
        }else{
            if(rankcasebool[3]){
                rankcasebool[3] = false;
            }else{
                game9Counter2s = 9;
            }
        }
    }else if(game9Counter2s === 7){
        console.log("game9Counter2s: " + game9Counter2s);
        if(game9id === "6players" || game9id === "5players"){
            if(com4point > 0){
                com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
            }else{
                if(!rankbool[4]){
                    rankbool[4] = true;
                    rankcasebool[4] = true;
                    rankArr[4] = rank;
                    com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                    rank++;
                    if(game9id === "5players"){
                        game9Counter2s = 0;
                    }
                }
            }
            if(game9id === "6players"){
                if(com4cards.length != 0 && com5cards.length != 0){
                    var pull4 = Math.trunc(Math.random() * com4cards.length);
                    console.log("pull4 : " + pull4);
                    if(pull4 != com4cards.length - 1){
                        var kc5 = com4cards[pull4];
                        com4cards[pull4] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 1] = kc5;
                        
                        com5cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com5point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankcasebool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com5cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com5point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                    com5Pops();
                }else if(com4cards.length != 0 && playercards.length != 0){
                    game9Counter2s = 9;
                }else if(com4cards.length != 0 && com1cards.length != 0){
                    var pull4 = Math.trunc(Math.random() * com4cards.length);
                    console.log("pull4 : " + pull4);
                    if(pull4 != com4cards.length - 1){
                        var kc5 = com4cards[pull4];
                        com4cards[pull4] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 1] = kc5;
                        
                        com1cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com1point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com1cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com1point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    com1Pops();
                    game9Counter2s = 19;
                }else if(com4cards.length != 0 && com2cards.length != 0){
                    var pull4 = Math.trunc(Math.random() * com4cards.length);
                    console.log("pull4 : " + pull4);
                    if(pull4 != com4cards.length - 1){
                        var kc5 = com4cards[pull4];
                        com4cards[pull4] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 1] = kc5;
                        
                        com2cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com2point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com2cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com2point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    com2Pops();
                    game9Counter2s = 19;
                }else if(com4cards.length != 0 && com3cards.length != 0){
                    var pull4 = Math.trunc(Math.random() * com4cards.length);
                    console.log("pull4 : " + pull4);
                    if(pull4 != com4cards.length - 1){
                        var kc5 = com4cards[pull4];
                        com4cards[pull4] = com4cards[com4cards.length - 1];
                        com4cards[com4cards.length - 1] = kc5;
                        
                        com3cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com3point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com3cards.push(com4cards[com4cards.length - 1]);
                        com4cards.pop();
                        com4point--;
                        com3point++;
                        if(com4point > 0){
                            com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                        }else{
                            rankbool[4] = true;
                            rankArr[4] = rank;
                            com4board.innerHTML =`<p>com4 <span class="hops">${rankArr[4]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    com3Pops();
                    game9Counter2s = 19;
                }
            }else{
                if(rankcasebool[4]){
                    rankcasebool[4] = false;
                }else{
                    game9Counter2s = 9;
                }
            }
        }
    }else if(game9Counter2s === 8){
        console.log("game9Counter2s: " + game9Counter2s);
        if(game9id === "6players" || game9id === "5players"){
            if(com5point > 0){
                com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
            }else{
                if(!rankbool[5]){
                    rankbool[5] = true;
                    rankArr[5] = rank;
                    com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                    rank++;
                    game9Counter2s = 0;
                }
            }
            if(playercards === 0){
                if(com5cards.length != 0 && com1cards.length != 0){
                    var pull5 = Math.trunc(Math.random() * com5cards.length);
                    console.log("pull5 : " + pull5);
                    if(pull5 != com5cards.length - 1){
                        var kc6 = com5cards[pull5];
                        com5cards[pull5] = com5cards[com5cards.length - 1];
                        com5cards[com5cards.length - 1] = kc6;
                        
                        com1cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com1point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com1cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com1point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com1board.innerHTML =`<p>com1 残り<span class="hops">${com1point}</span> 枚</p>`;
                    com1Pops();
                    game9Counter2s = 19;
                }else if(com5cards.length != 0 && com2cards.length != 0){
                    var pull5 = Math.trunc(Math.random() * com5cards.length);
                    console.log("pull5 : " + pull5);
                    if(pull5 != com5cards.length - 1){
                        var kc6 = com5cards[pull5];
                        com5cards[pull5] = com5cards[com5cards.length - 1];
                        com5cards[com5cards.length - 1] = kc6;
                        
                        com2cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com2point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com2cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com2point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com2board.innerHTML =`<p>com2 残り<span class="hops">${com2point}</span> 枚</p>`;
                    com2Pops();
                    game9Counter2s = 19;
                }else if(com5cards.length != 0 && com3cards.length != 0){
                    var pull5 = Math.trunc(Math.random() * com5cards.length);
                    console.log("pull5 : " + pull5);
                    if(pull5 != com5cards.length - 1){
                        var kc6 = com5cards[pull5];
                        com5cards[pull5] = com5cards[com5cards.length - 1];
                        com5cards[com5cards.length - 1] = kc6;
                        
                        com3cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com3point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com3cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com3point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com3board.innerHTML =`<p>com3 残り<span class="hops">${com3point}</span> 枚</p>`;
                    com3Pops();
                    game9Counter2s = 19;
                }else if(com5cards.length != 0 && com4cards.length != 0){
                    var pull5 = Math.trunc(Math.random() * com5cards.length);
                    console.log("pull5 : " + pull5);
                    if(pull5 != com5cards.length - 1){
                        var kc6 = com5cards[pull5];
                        com5cards[pull5] = com5cards[com5cards.length - 1];
                        com5cards[com5cards.length - 1] = kc6;
                        
                        com4cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com4point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }else{
                        com4cards.push(com5cards[com5cards.length - 1]);
                        com5cards.pop();
                        com5point--;
                        com4point++;
                        if(com5point > 0){
                            com5board.innerHTML =`<p>com5 残り<span class="hops">${com5point}</span> 枚</p>`;
                        }else{
                            rankbool[5] = true;
                            rankArr[5] = rank;
                            com5board.innerHTML =`<p>com5 <span class="hops">${rankArr[5]}</span> 位抜け</p>`;
                            rank++;
                        }
                    }
                    
                    com4board.innerHTML =`<p>com4 残り<span class="hops">${com4point}</span> 枚</p>`;
                    com4Pops();
                    game9Counter2s = 19;
                }
            }
        }
    }else if(game9Counter2s === 10){
        console.log("game9Counter2s: " + game9Counter2s);
        
        if(playercards.length != 0){
            trumpMain1.innerHTML =``;
            trumpMain2.innerHTML =``;
            switch(game9id){
                case "4players":
                    if(com3cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com3</span></p>`;
                        for(var c4a = 0; c4a < com3cards.length; c4a++){
                            trumpMain1.innerHTML +=`<a id="com3_${c4a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com2cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com2</span></p>`;
                        for(var c4a = 0; c4a < com2cards.length; c4a++){
                            trumpMain1.innerHTML +=`<a id="com2_${c4a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com1cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com1</span></p>`;
                        for(var c4a = 0; c4a < com1cards.length; c4a++){
                            trumpMain1.innerHTML +=`<a id="com1_${c4a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else{
                        console.log("GAME OVER");
                        setTimeout(game9Result, 5);
                    }
                    break;
                case "5players":
                    if(com4cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com4</span></p>`;
                        for(var c5a = 0; c5a < com4cards.length; c5a++){
                            trumpMain1.innerHTML +=`<a id="com4_${c5a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com3cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com3</span></p>`;
                        for(var c5a = 0; c5a < com3cards.length; c5a++){
                            trumpMain1.innerHTML +=`<a id="com3_${c5a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com2cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com2</span></p>`;
                        for(var c5a = 0; c5a < com2cards.length; c5a++){
                            trumpMain1.innerHTML +=`<a id="com2_${c5a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com1cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com1</span></p>`;
                        for(var c5a = 0; c5a < com1cards.length; c5a++){
                            trumpMain1.innerHTML +=`<a id="com1_${c5a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else{
                        console.log("GAME OVER");
                        setTimeout(game9Result, 5);
                    }
                    break;
                case "6players":
                    if(com5cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com5</span></p>`;
                        for(var c6a = 0; c6a < com5cards.length; c6a++){
                            trumpMain1.innerHTML +=`<a id="com5_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com4cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com4</span></p>`;
                        for(var c6a = 0; c6a < com4cards.length; c6a++){
                            trumpMain1.innerHTML +=`<a id="com4_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com3cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com3</span></p>`;
                        for(var c6a = 0; c6a < com3cards.length; c6a++){
                            trumpMain1.innerHTML +=`<a id="com3_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com2cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com2</span></p>`;
                        for(var c6a = 0; c6a < com2cards.length; c6a++){
                            trumpMain1.innerHTML +=`<a id="com2_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else if(com1cards.length != 0){
                        game9StartDiv.innerHTML = `<p>drew : <span class="hops">com1</span></p>`;
                        for(var c6a = 0; c6a < com1cards.length; c6a++){
                            trumpMain1.innerHTML +=`<a id="com1_${c6a}" onclick="game9CardCheck(this)"; href="#">
                                                        <img src="../../assets/image/trumpAC/trump.png" width="80px">
                                                    </a>`;
                        }
                    }else{
                        console.log("GAME OVER");
                        setTimeout(game9Result, 5);
                    }
                    break;
            }
            for(var c0a = 0; c0a < playercards.length; c0a++){
                trumpMain2.innerHTML +=`<a>
                                            <img src="../../assets/image/trumpAC/${playercards[c0a].type}_${playercards[c0a].number}.png" width="80px">
                                        </a>`;
            }
            setTimeout(game9Counter2Clear, 5);
        }else{
            game9Counter2s = 19;
        }
    }else if(game9Counter2s === 20){
        switch(game9id){
            case "4players":
                if(rank != 4){
                    game9Counter2s = 0;
                }else{
                    setTimeout(game9Result, 5);
                    setTimeout(game9Counter2Clear, 5);
                }
                break;
            case "5players":
                if(rank != 5){
                    game9Counter2s = 0;
                }else{
                    setTimeout(game9Result, 5);
                    setTimeout(game9Counter2Clear, 5);
                }
                break;
            case "6players":
                if(rank != 6){
                    game9Counter2s = 0;
                }else{
                    setTimeout(game9Result, 5);
                    setTimeout(game9Counter2Clear, 5);
                }
                break;
        }
    }
}

function game9Counter1Clear(){
    game9Counter1s = 0;
    clearInterval(game9Counter1L);
    game9Counter1L = setInterval(game9Counter1, 1000);
}

function game9Counter2Clear(){
    game9Counter2s = 0;
    clearInterval(game9Counter2L);
}

function game9Result(){
    if(rankArr[0] === 0){
        rankArr[0] = rank;
        scoreboard.innerHTML =`<p>自分 <span class="hops">ババ</span></p>`;

        game9StartDiv.innerHTML = `<p>baba : <span class="hops">Me</span></p>`;
    }else if(rankArr[1] === 0){
        rankArr[1] = rank;
        com1board.innerHTML =`<p>com1 <span class="hops">ババ</span></p>`;

        game9StartDiv.innerHTML = `<p>baba : <span class="hops">com1</span></p>`;
        trumpMain1.innerHTML =`<a>
                                    <img src="../../assets/image/trumpAC/joker_0.png" width="80px">
                                </a>`;
    }else if(rankArr[2] === 0){
        rankArr[2] = rank;
        com2board.innerHTML =`<p>com2 <span class="hops">ババ</span></p>`;

        game9StartDiv.innerHTML = `<p>baba : <span class="hops">com2</span></p>`;
        trumpMain1.innerHTML =`<a>
                                    <img src="../../assets/image/trumpAC/joker_0.png" width="80px">
                                </a>`;
    }else if(rankArr[3] === 0){
        rankArr[3] = rank;
        com3board.innerHTML =`<p>com3 <span class="hops">ババ</span></p>`;

        game9StartDiv.innerHTML = `<p>baba : <span class="hops">com3</span></p>`;
        trumpMain1.innerHTML =`<a>
                                    <img src="../../assets/image/trumpAC/joker_0.png" width="80px">
                                </a>`;
    }else if(game9id === "5players" || game9id === "6players"){
        if(rankArr[4] === 0){
            rankArr[4] = rank;
            com4board.innerHTML =`<p>com4 <span class="hops">ババ</span></p>`;

            game9StartDiv.innerHTML = `<p>baba : <span class="hops">com4</span></p>`;
            trumpMain1.innerHTML =`<a>
                                        <img src="../../assets/image/trumpAC/joker_0.png" width="80px">
                                    </a>`;
        }
    }else if(game9id === "6players"){
        if(rankArr[5] === 0){
            rankArr[5] = rank;
            com5board.innerHTML =`<p>com5 <span class="hops">ババ</span></p>`;

            game9StartDiv.innerHTML = `<p>baba : <span class="hops">com5</span></p>`;
            trumpMain1.innerHTML =`<a>
                                        <img src="../../assets/image/trumpAC/joker_0.png" width="80px">
                                    </a>`;
        }
    }
    
    
    if(rankArr[0] === 1){
        resultboard.innerHTML = `<p><span class="hops">すごい！！</span></p>`;
    }else if(rankArr[0] === 4){
        if(game9id === "5players" || game9id === "6players"){
            resultboard.innerHTML = `<p><span class="hops">まずまず。</span></p>`;
        }else{
            resultboard.innerHTML = `<p><span class="hops">残念！！</span></p>`;
        }
    }else if(rankArr[0] === 5){
        if(game9id === "6players"){
            resultboard.innerHTML = `<p><span class="hops">まずまず。</span></p>`;
        }else{
            resultboard.innerHTML = `<p><span class="hops">残念！！</span></p>`;
        }
    }else if(rankArr[0] === 6){
        resultboard.innerHTML = `<p><span class="hops">残念！！</span></p>`;
    }else{
        resultboard.innerHTML = `<p><span class="hops">まずまず。</span></p>`;
    }
    resultboard.innerHTML += `<p>もう1回やる？｜<a href="../games/game9.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
    
}

gameStartButton.addEventListener("click", game9Start);