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
        //变量i每次点击增加0.5，当i为整数时，也就是初始页面时
        //点击后产生的效果
        if (Number.isInteger(i) === true){
            //通过匹配字段来操作dom元素内容
            if (playerNum[i].match('杀手')){
                img = '<img src="../images/js2/killer.png">';
                identity = '<p>角色:杀手</p>';
            }
            else {
                img = '<img src="../images/js2/common.png">';
                identity = '<p>角色:平民</p>';
            }
            //显示玩家的身份
            $(".main-box-inner-top").append(img,identity);
            //显示当前玩家的序号
            $(".main-box-title").text(""+o+"");
            //显示下一位玩家的序号
            //如果达到了参与玩家的上限，则显示传递给法官
            if (i < playerNum.length - 1){
                $("#check").val("隐藏并传递给"+p+"号");
            }
            else {
                $("#check").val("隐藏并传递给法官")
            }
        }
        //i为非整数时显示的内容
        else {
            $(".main-box-title").text(""+p+"");
            $("#check").val("查看"+p+"号玩家身份")
        }
        i = i + 0.5;
        console.log(i);
    }
    //最后一名玩家隐藏身份后
    else {
        $("#check").val("法官查看身份")
    }
}

