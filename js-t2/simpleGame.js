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
        //循环一个1-n序号数组
        var players = [];
        for (var i = 1; i <= num.value;i++){
            players.push(i);
        }
        var killerNum = [];
        killerNum.length = killer;
        killerNum.fill = "杀手";
        var commonNum = [];
        commonNum.length = common;
        commonNum.fill = "平民";
        var status = killerNum.concat(commonNum);
        function shuffle(status) {
            var i , j , temp;
            for (i = status.length - 1; i > 0; i--){
                j = Math.floor(Math.random() * (i + 1));
                temp = status[i];
                status[i] = status[j];
                status[j] = temp;
            }
            return status;
        }
    }
    else {
        killer = null;
        num = null;
        common = null;
    }
    //身份人数显示
    document.getElementById('killerNum').innerHTML = killer;
    document.getElementById('commonNum').innerHTML = common;
    document.getElementById('numNow').innerHTML = num.value;
}







