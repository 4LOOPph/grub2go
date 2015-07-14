'use strict';

angular.module('starter', ['ionic','uiGmapgoogle-maps','dbaq.google.directions', 'ngRoute', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })
        .state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html",
                    controller: 'SearchCtrl'
                }
            }
        })
        .state('app.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "templates/about.html"
                }
            }
        })
        .state('app.menus', {
            url: "/menus",
            views: {
                'menuContent': {
                    templateUrl: "templates/menus.html",
                    controller: 'MenusCtrl'
                }
            }
        })
        .state('app.map1', {
            url: "/map1/:param",
            views: {
                'menuContent': {
                    templateUrl: "templates/map1.html",
                    controller: 'Map1Ctrl'
                }
            }
        })
        .state('app.submenu', {
            url: "/submenu/:menuid",
            views: {
                'menuContent': {
                    templateUrl: "templates/submenu.html",
                    controller: 'SubmenuCtrl'
                }
            }
        })
        .state('app.details', {
            url: "/details/:uid",
            views: {
                'menuContent': {
                    templateUrl: "templates/details.html",
                    controller: 'DetailsCtrl'
                }
            }
        })
        .state('app.map2', {
            url: "/map2",
            views: {
                'menuContent': {
                    templateUrl: "templates/map2.html",
                    controller: 'Map2Ctrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/app/menus');
})

.config(['uiGmapGoogleMapApiProvider',
    function(GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyACSd3JBILskQywQDjTosWQ7RjW2KGg5nI',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }
]);
