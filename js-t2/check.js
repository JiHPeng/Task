$(function () {
});
var playerNum = JSON.parse(sessionStorage.getItem('data'));

console.log(playerNum);
function show() {
    for (var i = 0; i < playerNum.length;i++){
        var o = i + 1;
        $("#inner0").clone().appendTo(".wrap").attr("id","inner"+o+"");
        $("#inner"+i+" .inner-bot").html(""+o+"号");
        $("#inner"+i+" .inner-top").html(playerNum[i]);
    }
    $(".inner-box:last-child").remove();
}


// $(".inner-box[p]").


