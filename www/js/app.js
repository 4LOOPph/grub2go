'use strict';

angular.module('starter', ['ionic', 'uiGmapgoogle-maps', 'dbaq.google.directions', 'ngRoute',
    'ngCordova', 'ionic.service.core', 'ionic.service.push', 'ionic.service.analytics', 'ionic.service.deploy'
])

.run(function($ionicPlatform, $ionicAnalytics, $rootScope, $ionicUser, $ionicPush) {
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

        $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
            console.log("Successfully registered token " + data.token);
            console.log('Ionic Push: Got token ', data.token, data.platform);
            $rootScope.token = data.token;
        });

        // Identifies a user with the Ionic User service
        console.log('Ionic User: Identifying with Ionic User service');

        var user = $ionicUser.get();
        if (!user.user_id) {
            // Set your user_id here, or generate a random one.
            user.user_id = $ionicUser.generateGUID()
        };

        // Add some metadata to your user object.
        angular.extend(user, {
            name: 'Ionitron',
            bio: 'I come from planet Ion'
        });

        // Identify your user with the Ionic User Service
        $ionicUser.identify(user).then(function() {
            console.log('Identified user ' + user.name + '\n ID ' + user.user_id);

            // Registers a device for push notifications
            console.log('Ionic Push: Registering user');
            // Register with the Ionic Push service.  All parameters are optional.
            $ionicPush.register({
                canShowAlert: true, //Can pushes show an alert on your screen?
                canSetBadge: true, //Can pushes update app icon badges?
                canPlaySound: true, //Can notifications play a sound?
                canRunActionsOnWake: true, //Can run actions outside the app,
                onNotification: function(notification) {
                    // Handle new push notifications here
                    // console.log(notification);
                    return true;
                }
            });
        });


    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicAppProvider, $compileProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|tel|mailto|file|geo|maps):/);

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
})

.config(['$ionicAppProvider', function($ionicAppProvider) {
    // Identify app
    $ionicAppProvider.identify({
        app_id: '41dc07a4',
        api_key: 'a850cd7e4f710f593fe41ddf502b16ebd38f15dfa0f81246',
        gcm_id: '69744447181',
    });
}])

.config(['uiGmapGoogleMapApiProvider',
    function(GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyACSd3JBILskQywQDjTosWQ7RjW2KGg5nI',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }
]);
