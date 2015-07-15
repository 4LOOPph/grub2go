'use strict';

angular.module('starter', ['ionic', 'uiGmapgoogle-maps', 'dbaq.google.directions', 'ngRoute',
    'ngCordova', 'ionic.service.core', 'ionic.service.push', 'ionic.service.analytics', 'ionic.service.deploy'
])

.run(function($ionicPlatform, $ionicAnalytics,$rootScope) {
    $ionicAnalytics.register();

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
            $rootScope.onlineState = networkState;
        });

        $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
            $rootScope.onlineState = networkState;
        });
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicAppProvider) {
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
        .state('app.update', {
            url: "/update",
            views: {
                'menuContent': {
                    templateUrl: "templates/update.html",
                    controller: 'AppCtrl'
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

    $ionicAppProvider.identify({
        app_id: 'a850cd7e4f710f593fe41ddf502b16ebd38f15dfa0f81246',
        api_key: 'ce9db87411af061f0c19e34ebf91fb49b134d5ced8c871d6',
        dev_push: true
    });
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
