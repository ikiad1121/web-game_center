const gameStartButton = document.getElementById("game-start-button");
let game2StartDiv = document.getElementById("game3-start-div");

var saisen = document.getElementById("saisen");
var scoreboard = document.getElementById("scoreboard");
var timeboard = document.getElementById("timeboard");
/*var floorNumber = document.getElementById("floor-number");*/

let game3Counter = 0;
let game3Time = 30;
var game3Timer;
function game3Start () {
    game2StartDiv.innerHTML = `<br>`;
    saisen.innerHTML =`<a onclick="game3Scores(this)"; href="#">
                <img src="../../assets/image/saisen.png" width="60%">
            </a>`
    scoreboard.innerHTML = `<p>Total Score：&nbsp;<span class="hops">${game3Counter}</span>&nbsp;円</p>`;
    timeboard.innerHTML = `<p>残り&nbsp;<span class="hops">${game3Time}</span>&nbsp;秒</p>`;
    game3Timer = setInterval(game3TimeCount, 1000);
}

function game3Scores(e){
    game3Counter += 10;
    if(game3Counter >= 2000){
        scoreboard.innerHTML = `<p>Total Score：&nbsp;<span class="hops gold">${game3Counter}</span>&nbsp;円</p>`;
    }else if(game3Counter >= 1500){
        scoreboard.innerHTML = `<p>Total Score：&nbsp;<span class="hops silver">${game3Counter}</span>&nbsp;円</p>`;
    }else if(game3Counter >= 1000){
        scoreboard.innerHTML = `<p>Total Score：&nbsp;<span class="hops copper">${game3Counter}</span>&nbsp;円</p>`;
    }else{
        scoreboard.innerHTML = `<p>Total Score：&nbsp;<span class="hops">${game3Counter}</span>&nbsp;円</p>`;
    }
}/**/

function game3TimeCount(){
    game3Time -= 1;
    timeboard.innerHTML = `<p>残り&nbsp;<span class="hops">${game3Time}</span>&nbsp;秒</p>`;
    if(game3Time === 0){
        clearInterval(game3Timer);
        saisen.innerHTML =`<p>
                                <img src="../../assets/image/saisen.png" width="60%">
                            </p>`
        if(game3Counter >= 2500){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops gold">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        いやいやいや、いくらなんでもお賽銭入れすぎでしょ！？ バカなの、アンタ！？<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else if(game3Counter >= 2000){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops gold">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        ありがとう、ご利益があるといいね。<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else if(game3Counter >= 1500){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops silver">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        ありがとう、ご利益があるといいね。<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else if(game3Counter >= 1000){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops copper">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        ありがとう、ご利益があるといいね。<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else if(game3Counter === 0){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        お賽銭を一銭も入れてくれないなんて薄情な野郎だよね～。<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else if(game3Counter <= 500){
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        ありがとう、でも、もうちょいお賽銭を入れてくれてもいいんだよ？<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;
        }else{
            scoreboard.innerHTML = `<p>
                                        <span class="hops">FINISH!!</span><br>
                                        Total Score：&nbsp;<span class="hops">${game3Counter}</span>&nbsp;円<br>
                                        <br>
                                        ありがとう、ご利益があるといいね。<br>
                                        もう一回やる？　<a href="../games/game3.html">はい</a>：<a href="../index/index.html">いいえ</a></p>`;;
        }
    }
}/**/

gameStartButton.addEventListener("click", game3Start);


