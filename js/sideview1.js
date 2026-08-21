const sidenavBtn1 = document.querySelector('#sidenavBtn1');
let sideview = document.querySelector('#sideview');

let sideVertical1 = document.querySelector('.side-vertical1');
let sideVertical2 = document.querySelector('.side-vertical2');

const sidenavMove1 = () => {
    sideview.innerHTML =   `<nav class="open-nav1">
                                <p class="nav-btn"><a href="javascript:sidenavMove2();">＜</a></p>
                                <br>
                                <p class="nav-content"><a href="../index/index.html">メインページへ</a></p>
                                <p class="nav-content"><a href="../index/guide.html">このサイトとは？</a></p>
                                <p class="nav-content">注意事項・免責事項</p>
                                <p class="nav-content">リンク</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                            </nav>`;
    sideVertical1.classList.add("openVer1");
    sideVertical1.classList.remove("closeVer1");
    sideVertical2.classList.add("openVer2");
    sideVertical2.classList.remove("closeVer2");
};

const sidenavMove2 = () => {
    sideview.innerHTML =   `<nav class="close-nav1">
                                <p class="nav-btn"><a href="javascript:sidenavMove1();">＞</a></p>
                                <br>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                                <p class="nav-content">&nbsp;</p>
                            </nav>`;
    sideVertical1.classList.remove("openVer1");
    sideVertical1.classList.add("closeVer1");
    sideVertical2.classList.remove("openVer2");
    sideVertical2.classList.add("closeVer2");
};