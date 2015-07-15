'use strict';

angular.module('starter')
    .controller('MenusCtrl', function($scope, DataFactory,$ionicAnalytics) {

    	$scope.changeStyle = function(){
    		$scope.isList = ($scope.isList == true) ? false : true;
    	};

        function init() {
        	$scope.isList = ($scope.isList == true) ? false : true;

            DataFactory.Menu().then(function(data) {
                $scope.menus = data.data;
            });
        }

        init();
    });
