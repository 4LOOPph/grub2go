'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory,$stateParams, $filter) {

        DataFactory.Submenu().then(function(data){
            var submenus = $filter('filter')(data.data,{
                'menu_id':$stateParams.menuid
            });
            $scope.details = submenus[$stateParams.id];
            console.log($scope.details);
        });

    });
