'use strict';


var run = function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
};

var config = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.direction', {
            url: '/direction/:lat/:lng',
            views: {
                'menuContent': {
                    templateUrl: 'templates/direction.html',
                    controller: 'DirectionCtrl'
                }
            }
        })
        .state('app.playlists', {
            url: '/playlists',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlists.html',
                    controller: 'CategoryCtrl'
                }
            }
        })
        .state('app.directory', {
            url: '/directory/:categoryid',
            views: {
                'menuContent': {
                    templateUrl: 'templates/browse.html',
                    controller: 'ListCtrl'
                }
            }
        })
        .state('app.detail', {
            url: '/detail/:categoryid/:detailId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'ListDetailCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
};


angular.module('starter', ['ionic','ngCordova','ngSanitize','angular-carousel','uiGmapgoogle-maps','dbaq.google.directions'])
    .run(run)
    .config(config)
    .config(['uiGmapGoogleMapApiProvider',
        function(GoogleMapApi) {
            GoogleMapApi.configure({
                key: 'AIzaSyACSd3JBILskQywQDjTosWQ7RjW2KGg5nI',
                v: '3.17',
                libraries: 'weather,geometry,visualization'
            });
        }
    ]);
