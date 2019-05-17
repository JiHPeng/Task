var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
var rgb= 'rgb('+r+','+g+','+b+')';

function change() {
    var all = document.getElementsByTagName('div');
    var z = Math.floor(Math.random()*8);
    var x = Math.floor(Math.random()*8);
    var c = Math.floor(Math.random()*8);
    all[z].style.backgroundColor=rgb;
    document.getElementById('as').innerHTML=z;
}




