'use strict';

angular.module('starter')
    .controller('SubmenuCtrl', function($scope, $stateParams, $filter, DataFactory) {

        $scope.clearSearch = function() {
            $scope.searchText = "";
            $scope.doRefresh();
        }

        $scope.setFocus = function() {
            console.log('message');
            $scope.hasFocus = true;
            $scope.searchText = "";
        };

        $scope.noFocus = function() {
            console.log('message2');
            $scope.hasFocus = false;
            $scope.searchText = "";
        };

        function init() {
            $scope.searchText = "";
            $scope.hasFocus = false;
            $scope.listCanSwipe = true;

            DataFactory.Submenu().then(function(data) {
                var submenus = $filter('filter')(data.data, {
                    'menu_id': $stateParams.id
                });
                $scope.submenus = submenus;
            });
        }

        init();
    });
