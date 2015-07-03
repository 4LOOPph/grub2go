'use strict';

angular.module('starter')
    .controller('PlaylistsCtrl', function($scope,DataFactory) {
        $scope.playlists= [];
        console.log($stateParams.categoryid);
        DataFactory.categories().then(function(data){
            $scope.playlists = data.data;
        });
    })

.controller('DirectoryCtrl', function($scope, $stateParams) {

});

.controller('PlaylistCtrl', function($scope, $stateParams) {

});
