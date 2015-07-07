angular.module('starter')
.controller('MenuCtlr', function($scope,DataFactory) {
  $scope.menus = {};
  $scope.menus = DataFactory.getData();
});