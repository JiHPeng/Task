app.controller('signin',function ($scope, $http, $state) {
    console.log($scope);
    $scope.uid = "";
    $scope.pwd = "";
    $scope.go = function () {
        var formData = {
            name: $scope.uid,
            pwd: $scope.pwd
        };
        $http({
            method: 'POST',
            url: "/carrots-admin-ajax/a/login",
            params: formData,
            headers: { 'Content-Type': 'Application/json' }
        }).then(function successCallback(response) {
            if (response.data.message == "success"){
                // window.location.href="http://dev.admin.carrots.ptteng.com/#/dashboard"
                // window.location.href = "main.html"
                $state.go("main.welcome");
            }
            else (
                alert("账号或密码有误")
            )
        }, function errorCallback(response) {
            $scope.error = response.data.message
        });
    }
});
//
//
//
// var info = new XMLHttpRequest();
// function go() {
//     var id = document.getElementById("user").value;
//     var pwd = document.getElementById("pword").value;
//     var error = document.getElementById("error");  //错误信息
//     if (id == ""){
//         error.innerHTML = "请输入用户名";
//     }
//     else if (pwd == ""){
//         error.innerHTML = "请输入密码";
//     }
//     else {
//         info.onreadystatechange = function() {
//             if (info.readyState == 4 && info.status == 200){
//                 var re = JSON.parse(info.responseText);
//                 if (re.message == "success"){
//                     window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard"
//                 }
//                 else {
//                     error.innerHTML = re.message;
//                 }
//             }
//         };
//         info.open("POST","/carrots-admin-ajax/a/login",true); //请求数据
//         info.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         info.send("name="+id+"&pwd="+pwd); //发送数据
//     }
// }


// $(function () {
// });
//
// var info = new XMLHttpRequest();
// $("#signin").click(function () {
//     var id = $("#user").val();  //用户名
//     var pwd = $("#pword").val();  //密码
//     $.post("/carrots-admin-ajax/a/login",
//         {
//             name: id,
//             pwd: pwd
//         },
//         function (data,status) {
//             console.log("数据: \n" + data + "\n状态: " + status);
//             data = JSON.parse(data);
//             if (data.message == "success"){
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
//                 location.hash = '/dashboard';
//             }
//             else {
//                 $("#error").html(data.message);
//             }
//         });
// });
