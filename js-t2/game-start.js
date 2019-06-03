$(function () {

});

//右上角退出按钮
$("#exit").click(function () {
    var exit = confirm("确认退出？");
    if (exit == true) {
        window.location.href = "main.html";
    }
});

//每天step下拉菜单
$(".main-top").click(function () {
    $(this).next().toggle(500);
});

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

var playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
var day = Number(sessionStorage.getItem("day"));

//点击按钮颜色变化，按照4个step划分，按钮每点击一次，step+1，按钮点击后被禁用
var step = Number(sessionStorage.getItem("step"));
console.log(step);
console.log(typeof step);

//一天过去后，按钮恢复
if (step > 3){
    sessionStorage.setItem("step", 0);
    step = 0;
}

$("#killer input").click(function () {
    window.location.href = "vote.html";
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
});

$("#ghost input").click(function () {
    alert("请幽灵发言");
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
    checkStep();
});

$("#all input").click(function () {
    alert("所有人按顺序发言");
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
    Number(sessionStorage.getItem("step"));
    checkStep();
});

$("#vote input").click(function () {
    window.location.href = "vote.html";
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
});

function checkStep() {
    if (step == 0){
        $("#killer input").attr("disabled",false);
        $("#ghost input,#all input,#vote input").attr("disabled",true);
        $("li input").css("background-color","#29BDE0");
        $("li span").css({"border":"6px solid #29BDE0","border-color": "transparent #29BDE0 transparent transparent"});
    }
    else if(step == 1){
        $("#killer input").css({"background-color":"#ccc","color":"#fff"});
        $("#killer span").css({"border":"6px solid #ccc","border-color": "transparent #ccc transparent transparent"});
        $("#ghost input").attr("disabled",false);
        $("#killer input,#all input,#vote input").attr("disabled",true);
    }
    else if(step == 2){
        $("#killer input,#ghost input").css({"background-color":"#ccc","color":"#fff"});
        $("#killer span,#ghost span").css({"border":"6px solid #ccc","border-color": "transparent #ccc transparent transparent"});
        $("#all input").attr("disabled",false);
        $("#killer input,#ghost input,#vote input").attr("disabled",true);
    }
    else if(step == 3){
        $("#killer input,#ghost input,#all input").css({"background-color":"#ccc","color":"#fff"});
        $("#killer span,#ghost span,#all span").css({"border":"6px solid #ccc","border-color": "transparent #ccc transparent transparent"});
        $("#vote input").attr("disabled",false);
        $("#killer input,#ghost input,#all input").attr("disabled",true);
    }
}
//根据天数，控制元素显示
for (var i = 0; i < playerInfo.length; i++){
    var o = i + 1;
    var u = i - 1;
    console.log(u);
    $("#main-box0").clone(true).appendTo("main").attr("id","main-box"+o+"");
    $("#main-box"+i+" .main-top-center").text("第"+date[i]+"天");
    var deadBox = Number(playerInfo[i].day) -1;
    if (playerInfo[i].state == 1){
        $("#main-box"+deadBox+" #killer p").html(""+playerInfo[i].num+"号玩家在第"+playerInfo[i].day+"天黑夜被杀");
    }
    else if(playerInfo[i].state == 2){
        $("#main-box"+deadBox+" #vote p").html(""+playerInfo[i].num+"号玩家在第"+playerInfo[i].day+"天被投死");
    }
    if (day < i){
        $("#main-box"+i+"").css("display","none");
    }
    if (day >= i){
        $("#main-box"+i+"").css("display","block");
        $("#main-box"+u+" span, #main-box"+u+" input").remove();
    }
}
$(".main-box:last-child").remove();






