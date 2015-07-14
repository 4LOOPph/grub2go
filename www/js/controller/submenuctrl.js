'use strict';

angular.module('starter')
    .controller('SubmenuCtrl', function($scope,$stateParams, $filter, DataFactory) {
        DataFactory.Submenu().then(function(data){
        	var submenus = $filter('filter')(data.data,{
        		'menu_id':$stateParams.menuid
        	});
        	$scope.submenus = submenus;
          console.log($scope.submenus);
        });

    });
