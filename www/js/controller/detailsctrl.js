'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $rootScope, $ionicSlideBoxDelegate, DataFactory, $stateParams, $filter, $cordovaNetwork) {

        $scope.doRefresh = function() {
            $scope.det = {};
            DataFactory.Submenu().then(function(data) {
                var submenus = $filter('filter')(data.data, {
                    'u_id': $stateParams.uid
                }, true);
                console.info('submenus: ',submenus);
                $scope.det = submenus[0];
                $ionicSlideBoxDelegate.update();
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        function init() {
            DataFactory.Submenu().then(function(data) {
                var details = $filter('filter')(data.data, {
                    'u_id': $stateParams.uid
                }, true);
                $scope.det = details[0];
                $ionicSlideBoxDelegate.update();
            });
            $scope.myActiveSlide = 1;
            $scope.isConnected = $rootScope.onlineState;
        }

        $scope.$watch($rootScope.onlineState,function() {
            return $scope.isConnected = $rootScope.onlineState;
        }, true);


        init();

    });
