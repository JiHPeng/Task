function simple() {
    window.location.href='simpleGame.html';
}

$("label").click(function () {
    $(".nav-left").toggle(200);
    console.log($(".wrap").css("left"));
    if ($(".wrap").css("left") === "0px"){
        $(".wrap").animate({left:'80%'},200);
    }
    else {
        $(".wrap").animate({left:"0"},200);
    }
});
