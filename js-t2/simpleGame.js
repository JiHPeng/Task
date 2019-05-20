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
        common = num - killer;
    }
    else if (num >= 6 && num < 9) {
        killer = 2;
        common = num - killer;
    }
    else if (num >= 9 && num < 12) {
        killer = 3;
        common = num - killer;
    }
    else if (num >= 12 && num < 16) {
        killer = 4;
        common = num - killer;
    }
    else if (num >= 16 && num <= 18) {
        killer = 5;
        common = num - killer;
    }
    else {
        killer = null;
        num = null;
        common = null;
    }

    document.getElementById('killerNum').innerHTML = killer;
    document.getElementById('commonNum').innerHTML = common;
}

