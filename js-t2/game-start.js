$(function () {

});



var playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
//day初始值为0，为第一天
var day = Number(sessionStorage.getItem("day"));

//点击按钮颜色变化，按照4个step划分，按钮每点击一次，step+1，按钮点击后被禁用
var step = Number(sessionStorage.getItem("step"));
console.log(step);
console.log(typeof step);

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
//右上角退出按钮
$("#exit").click(function () {
    var exit = confirm("确认退出？");
    if (exit == true) {
        window.location.href = "main.html";
    }
});

//左上角返回按钮
$("label").click(function () {
    var back = confirm("确认退出？");
    if (back == true) {
        window.location.href = "simpleGame.html";
    }
});

//根据天数，控制元素显示
for (var i = 0; i < playerInfo.length; i++){
    var o = i + 1;
    var u = i - 1;
    console.log(u);
    $("main").append("    <div class=\"main-box\">\n" +
        "        <div class=\"main-top\">\n" +
        "            <div class=\"main-top-left\"></div>\n" +
        "            <div class=\"main-top-center\">第"+date[i]+"天</div>\n" +
        "            <div class=\"main-top-right\"></div>\n" +
        "        </div>\n" +
        "        <div class=\"main-bottom\">\n" +
        "            <div class=\"main-bottom-nav\"></div>\n" +
        "            <div class=\"main-bottom-right relative\">\n" +
        "                <img class=\"moon\" src=\"../images/js2/moon.png\">\n" +
        "                <img class=\"sun\" src=\"../images/js2/sun.png\">\n" +
        "                <ul class=\"right-top\">\n" +
        "                    <li id=\"killer\">\n" +
        "                        <span></span>\n" +
        "                        <input type=\"button\" value=\"杀手杀人\">\n" +
        "                        <p></p>\n" +
        "                    </li>\n" +
        "                    <li id=\"ghost\">\n" +
        "                        <span></span>\n" +
        "                        <input type=\"button\" value=\"亡灵发言\">\n" +
        "                    </li>\n" +
        "                    <li id=\"all\">\n" +
        "                        <span></span>\n" +
        "                        <input type=\"button\" value=\"全民发言\">\n" +
        "                    </li>\n" +
        "                    <li id=\"vote\">\n" +
        "                        <span></span>\n" +
        "                        <input type=\"button\" value=\"投票\">\n" +
        "                        <p></p>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n");
    var deadBox = Number(playerInfo[i].day);
    if (playerInfo[i].state == 1){
        $(".main-box:nth-of-type("+deadBox+")").find("#killer p").html(""+playerInfo[i].num+"号玩家在第"+playerInfo[i].day+"天黑夜被杀");
    }
    else if(playerInfo[i].state == 2){
        $(".main-box:nth-of-type("+deadBox+")").find("#vote p").html(""+playerInfo[i].num+"号玩家在第"+playerInfo[i].day+"天被投死");
    }
}
for (var i = 0; i < playerInfo.length; i++) {
    var o = i + 1;
    var u = i - 1;
    if (day < i){
        $(".main-box:nth-of-type("+o+")").css("display","none");
    }
    if (day >= i){
        $(".main-box:nth-of-type("+i+")").css("display","block");
        $(".main-box:nth-of-type("+i+") span, .main-box:nth-of-type("+i+") input").remove();
        $(".main-box:nth-of-type("+i+") .main-bottom").css("display","none");
    }
}
function check() {
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
check();


//每天step下拉菜单
$(".main-top").click(function () {
    $(this).next().toggle(200);
});


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
    check();
});

$("#all input").click(function () {
    alert("所有人按顺序发言");
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
    Number(sessionStorage.getItem("step"));
    check();
});

$("#vote input").click(function () {
    window.location.href = "vote.html";
    step = step +1;
    sessionStorage.setItem("step",""+step+"");
});

    // $("#main-box0").clone(true).appendTo("main").attr("id","main-box"+o+"");
    // $("#main-box"+i+" .main-top-center").text("第"+date[i]+"天");








