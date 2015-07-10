'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope,DataFactory) {
        DataFactory.Details().then(function(data) {
            $scope.details = data.data;
            $scope.dscrptn = $scope.details[0].dscrptn;
            $scope.numoflikes = $scope.details[0].numoflikes;
            $scope.numofcomments = $scope.details[0].numofcomments;
            $scope.dettitle = $scope.details[0].dettitle;
            $scope.price = $scope.details[0].price;
            console.log('details data: ', $scope.details[0].numoflikes);
        });
        console.log("hello world");
    });
