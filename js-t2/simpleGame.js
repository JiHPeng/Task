function back() {
    window.location.href='main.html';
}
var killer;
var common;
var dragNum = document.getElementById('dragBar');
var num = document.getElementById('inputNumber');
function change() {
    num.value = dragNum.value;
}
function a() {
    if (num.value >= 4 && num.value <= 18){
        dragNum.value = num.value;
        if (num.value >= 4 && num.value < 6) {
            killer = 1;
        }
        else if (num.value >= 6 && num.value < 9) {
            killer = 2;
        }
        else if (num.value >= 9 && num.value < 12) {
            killer = 3;
        }
        else if (num.value >= 12 && num.value < 16) {
            killer = 4;
        }
        else {
            killer = 5;
        }
        //计算出平民身份人数
        common = Number(num.value) - killer;
        //分配身份
        //将杀手和平民按数量组成数组
        var killerNum = [];
        killerNum.length = killer;
        console.log(killer);
        console.log(killerNum.length);
        killerNum.fill("杀手");
        var commonNum = [];
        commonNum.length = common;
        commonNum.fill("平民");
        var status = killerNum.concat(commonNum);
        //声明一个新数组，用来存放打乱顺序后的身份
        var playerNum = [];
        //循环，每次都会在新数组中的随机位置生
        // 成一个身份，同时，原数组的身份被删除
        for (;status.length > 0;){
            var randomNum = Math.floor(Math.random()*status.length);
            playerNum.push(status[randomNum]);
            status.splice(randomNum , 1);
        }
        console.log(status);
        console.log(playerNum);
    }
    else {
        alert('人数必须在4-18之间');
        killer = '';
        num.value = '';
        common = '';
    }
    //身份人数显示
    console.log(num.value);
    console.log(killer);
    console.log(common);
}
function set() {
    document.getElementById('killerNum').innerHTML = killer;
    document.getElementById('commonNum').innerHTML = common;
}






