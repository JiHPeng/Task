$(function () {
});
var playerNum = JSON.parse(sessionStorage.getItem('data'));
console.log(playerNum);
var i = 0;

function check() {
    //清空上次出现的内容
    $(".main-box-inner-top").empty();
    //依靠i变量来变更出现的内容
    var o = Math.floor(i + 1);  //玩家的序号
    var p = Math.floor(i + 2);  //下一位玩家的序号
    //根据身份安插不同的图片,身份，词条
    var img;      //显示的图片
    var identity;  //显示的身份
    var words;    //显示的词条

    //设定分配的上限为playerNum
    if (i <= playerNum.length - 1) {
        //初始时，i=0，为整数，点击后显示身份
        if (Number.isInteger(i) === true){
            if (playerNum[i].match('杀手')){
                img = '<img src="../images/js2/killer.png">';
                identity = '<p>角色:杀手</p>';
            }
            else {
                img = '<img src="../images/js2/common.png">';
                identity = '<p>角色:平民</p>';
            }
            $(".main-box-inner-top").append(img,identity);   //显示玩家的身份
            //显示当前玩家的序号
            $(".main-box-title").text(""+o+"");
            if (i < playerNum.length - 1){
                //显示下一位玩家的序号
                $("#check").val("隐藏并传递给"+p+"号");
            }
            else {
                $("#check").val("隐藏并传递给法官")
            }
        }
        else {
            $(".main-box-title").text(""+p+"");
            $("#check").val("查看"+p+"号玩家身份")
        }
        i = i + 0.5;
        console.log(i);
    }
    else {
        $("#check").val("法官查看身份")
    }
}

