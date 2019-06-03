$(function () {

});
JSON.parse(sessionStorage.getItem('playerInfo'));
var playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
var step = Number(sessionStorage.getItem("step"));
var day = Number(sessionStorage.getItem("day"));
console.log(playerInfo);
$("#quit").click(function () {
   alert("结束游戏？");
    window.location.href= "main.html";
});
//按照人数生成小格子
function show() {
    for (var i = 0; i < playerInfo.length;i++){
        var o = i + 1;
        $("#inner0").clone(true).appendTo(".wrap").attr("id","inner"+o+"");
        $("#inner"+i+" .inner-bot").html(+playerInfo[i].num+"号");
        $("#inner"+i+" .inner-top").html(playerInfo[i].identity);
        if (playerInfo[i].state != 0){
            $("#inner"+i+"").children(".inner-top").css("background-color","red")
        }
    }
    $(".inner-box:last-child").remove();
    console.log($(".inner-box"));
}
//小格子点击事件
var focus;
$(".inner-box").click(function () {
    focus = $(this).index();
    console.log(focus);
    //点击死人
    if (playerInfo[focus].state != 0){
        alert('不能鞭尸');
        focus = "";
        return;
    }
    //杀手行动时
    if (step == 1){
        if ($(this).children(".inner-top").text() == '杀手'){
            alert('不能自杀');
            focus = "";
            return;
        }
        else { //显示小图标
            $(".icon-box img:first-child").css("display","none");
            $(this).find(".icon-box img:first-child").css("display","block");
        }
    }
    else if(step > 1){
        $(".icon-box img:last-child").css("display","none");
        $(this).find(".icon-box img:last-child").css("display","block");
        console.log($(this).find(".icon-box img:last-child"));
    }
});

//最下方按钮
$("footer input").click(function () {
    if (focus == ""){
        return;
    }
    if(step == 0){
    }
    else if (step == 1){
        playerInfo[focus].state = 1;
        playerInfo[focus].day = day + 1;
    }
    else{
        playerInfo[focus].state = 2;
        playerInfo[focus].day = day + 1;
        day = day + 1;
        sessionStorage.setItem("day",""+day+"");
    }
    sessionStorage.setItem("playerInfo",JSON.stringify(playerInfo));
    //计算出剩余活人的身份
    var liveKiller = []; //活着的杀手
    var liveCommon = []; //活着的平民
    var deadKill = []; //晚上死亡
    var deadVote = []; //白天死亡
    playerInfo = JSON.parse(sessionStorage.getItem('playerInfo'));
    console.log(playerInfo);
    for (var i = 0;i < playerInfo.length;i++){
        if (playerInfo[i].state == 0){
            if(playerInfo[i].identity == "杀手"){
                liveKiller.push(playerInfo[i]);
            }
            else{
                liveCommon.push(playerInfo[i]);
            }
        }
        // else if(playerInfo[i].state == 1){
        //     deadKill.push(playerInfo[i]);
        //     sessionStorage.setItem("deadKill",JSON.stringify(deadKill));
        //     playerInfo[i].state = 3;
        // }
        // else if(playerInfo[i].state == 2){
        //     deadVote.push(playerInfo[i]);
        //     sessionStorage.setItem("deadVote",JSON.stringify(deadVote));
        //     playerInfo[i].state = 4;
        // }
    }
    sessionStorage.setItem("playerInfo",JSON.stringify(playerInfo));
    console.log(liveKiller);
    console.log(liveCommon);
    if(step == 1){
        if(liveKiller.length > liveCommon.length){
            sessionStorage.setItem("winner","杀手");
            window.location.href = "result.html";
        }
        else {
            window.location.href = "game-start.html";
        }
    }
    else{
        if(liveKiller.length == 0){
            sessionStorage.setItem("winner","平民");
            window.location.href = "result.html";
        }
        else if(liveKiller.length > liveCommon.length){
            sessionStorage.setItem("winner","杀手");
            window.location.href = "result.html";
        }
        else {
            window.location.href = "game-start.html";
        }
    }
});



