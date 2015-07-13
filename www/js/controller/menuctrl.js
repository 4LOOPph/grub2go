'use strict';

angular.module('starter')
    .controller('MenusCtrl', function($scope,DataFactory) {
        DataFactory.Menu().then(function(data){
            $scope.menus = data.data;
              console.log('menu data: ',$scope.menus);
        });
    });
