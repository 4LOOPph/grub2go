'use strict';

angular.module('starter')
    .controller('CategoryCtrl', function($scope,$stateParams,DataFactory) {
        $scope.playlists= [];
        DataFactory.categories().then(function(data){
            $scope.playlists = data.data;
        });
    });
