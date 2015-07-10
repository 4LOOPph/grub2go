'use strict';

angular.module('starter')
    .controller('Map2Ctrl', function($scope,DataFactory) {
        DataFactory.Map2().then(function(data){
        	$scope.map2 = data.data;
        	$scope.map2src = $scope.map2[0].map;
            console.log('map2 data: ',data.data);
        });
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    }); 