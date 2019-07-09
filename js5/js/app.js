var app = angular.module("myApp",['ui.router', 'wui.date']);
// 路由

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
        $stateProvider
            .state("index",{
                url: "/index",
                templateUrl: "../index.html"
            })
            .state("main",{
                url: "/main",
                templateUrl: "../main.html"
            })
            .state("main.welcome",{
            url: '/home',
            templateUrl: "../welcome.html"
            })
            .state("main.Article",{
                url: "/Article?size&page&title&author&startAt&endAt&type&status",
                templateUrl: "../list.html"
            })
            .state("main.add",{
                url: "/add?id",
                templateUrl: "../add.html"
            })
    });




