'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory,$stateParams, $filter) {
        DataFactory.Submenu().then(function(data){
            var details = $filter('filter')(data.data,{
              'u_id':$stateParams.uid
            });
            $scope.det = details[0];
            console.log($scope.det);
            $ionicSlideBoxDelegate.update();
        });
        $scope.myActiveSlide = 1;
    });
