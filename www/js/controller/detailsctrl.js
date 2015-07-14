'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory,$stateParams, $filter) {
        DataFactory.Submenu().then(function(data){
            var submenus = $filter('filter')(data.data,{
                'menu_id':$stateParams.menuid
            });
            $scope.details = submenus[$stateParams.id];
            $ionicSlideBoxDelegate.update();
            console.log($scope.details);
        });
        $scope.myActiveSlide = 1;

        //show phone contacts when called
        $scope.getContactList = function() {
            $cordovaContacts.find({filter: ''}).then(function(result) {
                $scope.contacts = result;
                $console.log($scope.contacts);
            }, function(error) {
                console.log("ERROR: " + error);
            });
        }
    });
