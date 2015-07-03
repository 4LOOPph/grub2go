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
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })
        .state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html"
                }
            }
        })
        .state('app.playlists', {
            url: "/playlists",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlists.html",
                    controller: 'PlaylistsCtrl'
                }
            }
        })
        .state('app.directory', {
            url: "/directory/:categoryid",
            views: {
                'menuContent': {
                    templateUrl: "templates/browse.html"
                }
            }
        })
        .state('app.detail', {
            url: "/detail/:playlistId",
            views: {
                'menuContent': {
                    templateUrl: "templates/playlist.html",
                    controller: 'PlaylistCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
};


angular.module('starter', ['ionic', 'angular-carousel'])
    .run(run)
    .config(config);
