'use strict';

angular.module('starter')
    .controller('ListCtrl', function($scope, $stateParams,$filter,DataFactory) {
        $scope.playlists = [];

        DataFactory.directories().then(function(data) {
            var data = $filter('filter')(data.data, {
                categoryid: $stateParams.categoryid
            });
            $scope.playlists = data;
        });
    })
    .controller('ListDetailCtrl', function($scope, $stateParams,$filter,DataFactory) {
        $scope.detail = [];

        DataFactory.directories().then(function(data) {
            var data = $filter('filter')(data.data, {
                categoryid: $stateParams.categoryid
            });

            $scope.detail = data[$stateParams.detailId];
            console.log('$scope.detail: ',$scope.detail);
        });
    });
