//Article管理


app.controller('listbox',function ($scope,$rootScope, $http, $window, $stateParams, $state) {
    $http({
        method: 'GET',
        url: "/carrots-admin-ajax/a/article/search",
        params: $stateParams,
        responseType: "json"
    }).then(function successCallback(response) {
        console.log($stateParams);
        console.log($state);
        //列表数据渲染
        $scope.info = response.data.data.articleList;
        console.log(response.data.data);
        //页数
        var size = response.data.data.size;
        var total = response.data.data.total;
        var page = Math.ceil(total/size);
        var pageArray = [];
        for (let i = 0; i < page; i++) {
            pageArray.push(i);
        }
        $scope.page = pageArray.concat();
        //status约定转换
        $scope.selectStatus = ["草稿", "上线"];
        //type约定转换
        $scope.selectType = ["首页banner", "找职位banner", "找精英banner", "行业大图"];
        //上下线按钮
        $scope.statusView = [" ", "草稿", "上线"];
        $scope.statusbtn = [" ","上线", "下线"];
    }, function errorCallback() {
    });

    var date = function (a) {
        var b = new Date(a);
        return b.valueOf();
    };
    //搜索功能
    function dateJudge(d) {
        if (isNaN(d) == true){
            return "";
        }
        else {
            return d;
        }
    }
    $scope.search = function () {
        var dateStart = date($scope.dateStart);
        var dateEnd = date($scope.dateEnd);
        $state.go('main.Article',{
            title: $scope.title,
            author: $scope.creater,
            status: $scope.status,
            type: $scope.type,
            startAt: dateJudge(dateStart),
            endAt: dateJudge(dateEnd)
        },{reload:true});
    };
    //点击上下线时获取参数
    $scope.change = function (id, status) {
        $rootScope.id = id;
        $rootScope.status = status;
    };
    //模态框确认和取消
    //上下线 1=草稿 2=上线
    $scope.changeConfirm = function () {
        console.log(status);
        console.log(Number(true));
        console.log(Number(false));
        console.log($rootScope.status);
        let a;
        if ($rootScope.status == 1){
            a = 2;
        }
        else {
            a = 1;
        }
        $http({
            method: 'PUT',
            url: "/carrots-admin-ajax/a/u/article/status",
            params: {
                id: $rootScope.id,
                status: a
            },
            headers:{'Content-Type': 'Application/json'}
        }).then(function successCallback() {
            $window.location.reload();
        })
    };

    //最下方确定按钮
    $scope.confirm = function () {
        //设置每页显示数量
        $state.go('main.Article',{
            size: $scope.size
        },{reload:true});
    };
});


