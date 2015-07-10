'use strict';

angular.module('starter')
    .controller('SubmenuCtrl', function($scope,DataFactory) {
        DataFactory.Submenu().then(function(data){
        	$scope.submenus1 = data.data;
            console.log('submenu data: ',$scope.submenus1);
            $scope.submenus1.submenudescription;
        });
    });
