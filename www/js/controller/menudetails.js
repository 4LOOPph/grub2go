angular.module('starter')
    .controller('MenudetailsCtlr', function($scope, $stateParams, DataFactory) {
        
        var data = DataFactory.getData();
        $scope.details = data[$stateParams.menuid];
       
    });
