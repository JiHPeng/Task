$(function () {

});

var playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
var day = Number(sessionStorage.getItem("day"));
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
