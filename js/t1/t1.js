var all = document.getElementsByTagName('div');
all.splice(0 , 1);
var aa;
function change() {
    for (var i=0;i<all.length;i++){
        all[i].style.backgroundColor='#FFA500';
    }

    var z = Math.floor(Math.random()*9);
    var x = Math.floor(Math.random()*9);
    var c = Math.floor(Math.random()*9);

    var first = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);
    var second = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);
    var third = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);

    for (;z === x || x === c || c === z;){
        z = Math.floor(Math.random()*9);
        x = Math.floor(Math.random()*9);
        c = Math.floor(Math.random()*9);
    }
    for (;first === second || second === third || third === first;) {
        first = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);
        second = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);
        third = ('000000'+Math.floor(Math.random() * 16581375).toString(16)).slice(-6);
    }
    var color = new Array()
    color[0] = '#'+ first;
    color[1] = '#'+ second;
    color[2] = '#'+ third;

    all[z].style.backgroundColor=color[0];
    all[x].style.backgroundColor=color[1];
    all[c].style.backgroundColor=color[2];

    document.getElementById('as1').innerHTML=z;
    document.getElementById('as2').innerHTML=x;
    document.getElementById('as3').innerHTML=c;

    document.getElementById('as4').innerHTML=color[0];
    document.getElementById('as5').innerHTML=color[1];
    document.getElementById('as6').innerHTML=color[2];

    clearTimeout(aa);
    aa = setTimeout(change,1000);
}

function btnStop() {
    clearTimeout(aa);
    for (var i=0;i<all.length;i++){
        all[i].style.backgroundColor='#FFA500';
    }
}

