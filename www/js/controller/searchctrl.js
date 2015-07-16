'use strict';

angular.module('starter')
    .controller('SearchCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory, $filter) {
        DataFactory.Submenu().then(function(data) {
            $scope.dat = data.data;
            console.log($scope.dat);
        });
    });
