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

//分配身份
var killerNum = [];
var commonNum = [];
//声明一个新数组，用来存放打乱顺序后的身份
var playerNum = [];
function set() {
    //每次执行函数都会清空数组
    playerNum = [];
    //将杀手和平民按数量组成数组
    killerNum.length = killer;
    killerNum.fill("杀手");
    commonNum.length = common;
    commonNum.fill("平民");
    var status = killerNum.concat(commonNum);
    //循环，每次都会在新数组中的随机位置生
    // 成一个身份，同时，原数组的身份被删除
    for (;status.length > 0;){
        var randomNum = Math.floor(Math.random()*status.length);
        playerNum.push(status[randomNum]);
        status.splice(randomNum , 1);
    }
    console.log(status);
    console.log(playerNum);

    //移除每次点击出现的身份
    var father = document.getElementById('result');
    var child = document.getElementsByTagName('li');
    for (var d = 0;d < child.length;){
        father.removeChild(father.firstChild);
    }
    //给元素定位，然后添加元素
    for (var l = 0; l < playerNum.length;l++){
        var para = document.createElement("li");
        var square = document.createElement("span");
        var node = document.createTextNode(playerNum[l] + '1人');
        father.appendChild(para);
        para.appendChild(square);
        para.appendChild(node);
    }
}

function decrease() {
    num.value--;
    dragNum.value = num.value;
    if (num.value < 4 ){
        alert("最小人数为4人");
        num.value = 4;
    }
}
function increase() {
    num.value++;
    dragNum.value = num.value;
    if (num.value > 18){
        alert("最大人数为18人");
        num.value = 18;
    }
}

function submit() {
    var send = JSON.stringify(playerNum);
    sessionStorage.data = send;
    window.location.href = "flop.html";
}



