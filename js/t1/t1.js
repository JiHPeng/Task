// var all = document.getElementsByTagName('div');
// var r = Math.floor(Math.random()*256);
// var g = Math.floor(Math.random()*256);
// var b = Math.floor(Math.random()*256);
// var rgb1='rgb('+r+','+g+','+b+')';
// var rgb2='rgb('+b+','+r+','+g+')';
// var rgb3='rgb('+g+','+b+','+r+')';
// function change() {
//     var z = Math.floor(Math.random()*9);
//     var x = Math.floor(Math.random()*9);
//     var c = Math.floor(Math.random()*9);
//     if (z === x || x === c || c === z){
//         for (var i=0;i<2;i++){
//             z = Math.floor(Math.random()*9);
//             x = Math.floor(Math.random()*9);
//             c = Math.floor(Math.random()*9);
//         }
//     }
//     else {
//         document.getElementById('as1').innerHTML=z;
//         document.getElementById('as2').innerHTML=x;
//         document.getElementById('as3').innerHTML=c;
//     }
//     var one = all[z].style.backgroundColor = rgb1;
//     var two = all[x].style.backgroundColor = rgb2;
//     var three = all[c].style.backgroundColor = rgb3;
//     if (one === two || two === three || three === one) {
//         for (var i=0;i<2;i++){
//             one = all[z];
//                 all[z].style.backgroundColor = rgb1;
//             two = all[x];
//                 all[x].style.backgroundColor = rgb2;
//             three = all[c];
//                 all[c].style.backgroundColor = rgb3;
//         }
//     }
//     else {
//         document.getElementById('as4').innerHTML=one;
//         document.getElementById('as5').innerHTML=two;
//         document.getElementById('as6').innerHTML=three;
//     }
// }
//
var all = document.getElementsByTagName('div');
var z = Math.floor(Math.random()*9);
var x = Math.floor(Math.random()*9);
var c = Math.floor(Math.random()*9);

var first = Math.floor(Math.random() * 1e6);
var second = Math.floor(Math.random() * 1e6);
var third = Math.floor(Math.random() * 1e6);

function change() {
    for (;z === x || x === c || c === z;){
        z = Math.floor(Math.random()*9);
        x = Math.floor(Math.random()*9);
        c = Math.floor(Math.random()*9);
    }
    for (;first === second || second === third || third === first;) {
        first = Math.floor(Math.random() * 1e6);
        second = Math.floor(Math.random() * 1e6);
        third = Math.floor(Math.random() * 1e6);
    }
    var color = new Array()
    color[0] = '#'+ first;
    color[1] = '#'+ second;
    color[2] = '#'+ third;

    all[z].style.backgroundColor=color[0];
    all[x].style.backgroundColor=color[1];
    all[c].style.backgroundColor=color[2];
}



