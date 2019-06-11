$(function () {

});

var playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
var day = Number(sessionStorage.getItem("day"));
var winner = sessionStorage.getItem("winner");
var date = [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九"
];
function aliveKillerNum(live) {
    return live.identity=="杀手" && live.state == "0";
}

function deadKillerNum(dead) {
    return dead.identity=="杀手" && dead.state == "2";
}

function aliveCommonNum(live) {
    return live.identity=="平民" && live.state == "0";
}
function commonNum(all) {
    return all.identity=="平民";
}
var aliveKiller = playerInfo.filter(aliveKillerNum).length;
var deadKiller = playerInfo.filter(deadKillerNum).length;
var aliveCommon = playerInfo.filter(aliveCommonNum).length;
var common = playerInfo.filter(commonNum).length;
if (winner == "平民"){
    $(".main-top img").attr("src","../images/t13/result_03.png");
    $("h1").text("本轮游戏共抓出杀手"+deadKiller+"人。生还平民"+aliveCommon+"人。");
}
else {
    $(".main-top img").attr("src","../images/t13/result.png");
    $("h1").text("本轮游戏共抓出杀手"+deadKiller+"人。");
}

var allKiller = Number(aliveKiller)+Number(deadKiller);
$("#player #killer").html("杀"+"&nbsp;&nbsp;&nbsp;&nbsp;"+"手 "+allKiller+"人");
$("#player #common").html("平"+"&nbsp;&nbsp;&nbsp;&nbsp;"+"民 "+common+"人");

for (var o = 0; o < day; o++){
    $("main").append("<div class='main-bot'>" +
        "<div class='flex-box'>" +
        "<h2>第"+date[o]+"天</h2>" +
        "<span></span>" +
        "</div>" +
        "<p></p>" +
        "<p></p>" +
        "</div>");
}
for (var i = 0; i < playerInfo.length; i++) {
    var n = playerInfo[i].day + 1;
    console.log(n);
    if (playerInfo[i].state == 1) {
        $(".main-bot:nth-child("+n+")").find("p:first").html("晚上"+playerInfo[i].num+"号被杀手杀死，"+playerInfo[i].num+"号身份是"+playerInfo[i].identity+"");
    }
    else if (playerInfo[i].state == 2) {
        $(".main-bot:nth-child("+n+")").find("p:last").html("白天"+playerInfo[i].num+"号被投死，"+playerInfo[i].num+"号身份是"+playerInfo[i].identity+"");
    }
}
