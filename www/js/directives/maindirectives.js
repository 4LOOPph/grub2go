'use strict';

angular.module('starter')
    .directive('menuList', function() {
        return {
            templateUrl: 'templates/directives/menulist.html',
            restrict: 'AE',
            scope: {
                ngModel: '='
            },controller: function($scope) {
                $scope.$watch('ngModel', function() {
                    var model = $scope.ngModel;
                    $scope.menus = model;
                });
            }
        }
    })
    .directive('menuGrid', function() {
        return {
            templateUrl: 'templates/directives/menugrid.html',
            restrict: 'AE',
            scope: {
                ngModel: '='
            },controller: function($scope) {
                $scope.$watch('ngModel', function() {
                    var model = $scope.ngModel;
                    $scope.menus = model;
                });
            }
        }
    });
