var app = angular.module("myApp",['ui.router']);
// 路由

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
        $stateProvider
            .state("index",{
                url: "/index",
                templateUrl: "index.html"
            })
            .state("main",{
                url: "/main",
                templateUrl: "main.html"
            })
            .state("main.welcome",{
            url: '/home',
            templateUrl: "welcome.html"
            })
            .state("main.Article",{
                url: "/Article",
                templateUrl: "list.html",
                cache: false
            })
            .state("main.add",{
                url: "/Article",
                templateUrl: "list.html",
            })
    });




