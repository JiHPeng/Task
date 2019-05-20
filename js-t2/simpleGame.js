function back() {
    window.location.href='main.html';
}

function a() {
    var num = Number(am.member.value);
    var killer;
    var common;
    if (num >= 4 && num < 6) {
        killer = 1;
        console.log(killer);
    }
    else if (num >= 6 && num < 9) {
        killer = 2;
    }
    else if (num >= 9 && num < 12) {
        killer = 3;
    }
    else if (num >= 12 && num < 16) {
        killer = 4;
    }
    else if (num >= 16 && num <= 18) {
        killer = 5;
    }
    else {
        killer = null;
        num = null;
    }
    common = num - killer;

    document.getElementById('killerNum').innerHTML = killer;
    document.getElementById('commonNum').innerHTML = common;
}

