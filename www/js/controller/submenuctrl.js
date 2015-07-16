'use strict';

angular.module('starter')
    .controller('SubmenuCtrl', function($scope, $stateParams, $filter, DataFactory) {

        $scope.clearSearch = function() {
            console.log('weeeew');
            $scope.searchText = "";
            $scope.doRefresh();
        }

        $scope.setFocus = function() {
            console.log('message');
            $scope.hasFocus = true;
        };

        $scope.noFocus = function() {
            console.log('message2');
            $scope.hasFocus = false;
            $scope.searchText = "";
        };

        $scope.CallTel = function(tel) {
            console.log('tel: ', tel);
            window.location.href = 'tel:' + tel;
        };

        $scope.doRefresh = function() {
            $scope.submenus = {};
            DataFactory.Submenu().then(function(data) {
                var submenus = $filter('filter')(data.data, {
                    'menu_id': $stateParams.menuid
                });
                $scope.submenus = submenus;
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        function init() {
            $scope.submenus = {};
            $scope.searchText = "";
            $scope.hasFocus = false;
            $scope.listCanSwipe = true;
            $scope.querylimit = 15;

            DataFactory.Submenu().then(function(data) {
                var submenus = $filter('filter')(data.data, {
                    'menu_id': $stateParams.menuid
                });
                $scope.submenus = submenus;
            });
        }

        init();
    });
