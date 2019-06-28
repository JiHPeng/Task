//Article管理


app.controller('listbox',function ($scope, $http, $window) {
    $http({
        method: 'GET',
        url: "/carrots-admin-ajax/a/article/search",
        headers: {'Content-Type': 'Application/json'}
    }).then(function successCallback(response) {
        //根据sessionStorage决定每页显示几条数据
        var eachPage = parseInt(sessionStorage.getItem("eachPage"));
        console.log(eachPage);
        $scope.quantity = eachPage; //输入框
        $scope.number = eachPage; //limitTo数量
        //列表数据
        $scope.info = response.data.data.articleList;
        //页数生成
        $scope.pageTotal = Math.ceil($scope.info.length/eachPage);
        $scope.page = [];
        $scope.page.length = $scope.pageTotal;
        console.log($scope.page);
        //上下线内容
        $scope.a = [" ", "草稿", "上线"];
        $scope.b = [" ","上线", "下线"];
    }, function errorCallback() {
    });
    //上下线 1=草稿 2=上线
    $scope.statusbtn = function (id,status) {
        console.log(status);
        console.log(Number(true));
        console.log(Number(false));
        let a;
        if (status == 1){
            a = 2;
        }
        else {
            a = 1;
        }

        if (change == true){
            $http({
                method: 'PUT',
                url: "/carrots-admin-ajax/a/u/article/status",
                params: {
                    id: id,
                    status: a
                },
                headers:{'Content-Type': 'Application/json'}
            }).then(function successCallback() {
                status = a;
                $window.location.reload();
            })
        }
    };

    $scope.confirm = function ($state) {
        //默认每页显示10条数据
        let a = sessionStorage.getItem("eachPage");
        if (a == ""){
            sessionStorage.setItem("eachPage",10);
        }
        else {
            sessionStorage.setItem("eachPage",$scope.quantity);
        }
        $window.location.reload();
    }
});



