app.controller('addBox', function ($scope, $stateParams, $state, $http) {
    if ($stateParams.id == undefined) {
        $scope.head = "新增Article";

    }
    else {
        $scope.head = "编辑Article";
        $http({
            method: 'GET',
            url: "/carrots-admin-ajax/a/article/"+$stateParams.id,
        }).then(function (res) {
            $scope.title = res.data.title;
            $scope.type = res.data.type;
        })
    }
});

