const topnavBtn1 = document.querySelector('#topnavBtn1');
let topview = document.querySelector('#topview');

let topText1 = document.querySelector('.top-text1');
let topText2 = document.querySelector('.top-text2');

const topnavMove1 = () => {
    topview.innerHTML =   `<nav class="open-nav1">
                                <p class="nav-btn">&nbsp;<a href="javascript:topnavMove2();">Λ</a></p>
                                <br>
                                <p class="nav-content">このサイトとは？</p>
                                <p class="nav-content">注意事項・免責事項</p>
                                <p class="nav-content">リンク</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                            </nav>`;
    topText1.classList.add("openTex1");
    topText1.classList.remove("closeTex1");
    topText2.classList.add("openTex2");
    topText2.classList.remove("closeTex2");
};

const topnavMove2 = () => {
    topview.innerHTML =   `<nav class="close-nav1">
                                <p class="nav-btn">&nbsp;<a href="javascript:topnavMove1();">V</a></p>
                            </nav>`;
    topText1.classList.remove("openTex1");
    topText1.classList.add("closeTex1");
    topText2.classList.remove("openTex2");
    topText2.classList.add("closeTex2");
};