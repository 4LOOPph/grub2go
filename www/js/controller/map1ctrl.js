'use strict';

angular.module('starter')
    .controller('Map1Ctrl', function($scope,DataFactory) {
        DataFactory.Map1().then(function(data){
        	$scope.map1 = data.data;
        	$scope.map1src = $scope.map1[0].map;
            console.log('map1 data: ',data.data);
        });
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });