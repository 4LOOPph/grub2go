'use strict';

angular.module('starter')
    .controller('SubmenuCtrl', function($scope,$stateParams, $filter, DataFactory) {
        DataFactory.Submenu().then(function(data){
        	console.log(data.data);
        	console.log('$stateParams.id: ',$stateParams.id);
        	var submenus = $filter('filter')(data.data,{
        		'menu_id':$stateParams.id
        	});
        	$scope.submenus = submenus;
        	console.log(submenus);
        });
        
    });
