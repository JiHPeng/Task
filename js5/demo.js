var app = angular.module("myApp",[]);
//路由
// angular.module("myApp",['ngRoute'])
//     .config(['$routeProvider',function ($routeProvider) {
//         $routeProvider
//             .when('/',{})
//             .when('/Article',{templateUrl:'list.html'})
//             .otherwise({template:"Welcome!"});
//     }]);

//Article管理
app.controller('list',function ($scope, $http) {
    $http({
        method: 'GET',
        url: "/carrots-admin-ajax/a/article/search",
        headers: { 'Content-Type': 'Application/json' }
    }).then(function (res) {
        console.log(res);
            $scope.info = res.data.articleList;
            console.log(res);
        }
    );
});
