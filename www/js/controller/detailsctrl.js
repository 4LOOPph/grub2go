'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory) {
        DataFactory.Details().then(function(data) {
            $scope.details = data.data;
            $scope.dscrptn = $scope.details[0].dscrptn;
            $scope.numoflikes = $scope.details[0].numoflikes;
            $scope.numofcomments = $scope.details[0].numofcomments;
            $scope.Companyname = $scope.details[0].Companyname;
            $scope.Location = $scope.details[0].Location;
        });
        DataFactory.Details2().then(function(data) {
            $scope.details2 = data.data;
            $scope.arrlength = $scope.details2.length;
            $scope.photoarray=[];
            for(var i=0;i<$scope.arrlength;i++){
                $scope.valuee = $scope.details2[i].logo;
                $scope.photoarray.push($scope.valuee);
                console.log("$scope.details2["+i+"] ->  "+$scope.photoarray[i]);
            }
            $ionicSlideBoxDelegate.update();
        });
        $scope.myActiveSlide = 1;

    });
 