'use strict';

angular.module('starter')
    .controller('SearchCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory, $filter) {
        DataFactory.Submenu().then(function(data){
          console.log('here top----------> no filters');
          console.log(data);

          var titles = $filter('filter')(data.data,{
            'title':'Jo'
          });
          $scope.companynames = titles;
          console.log('here buttom----------> with filters');
          console.log($scope.companynames);
          });
          $scope.printSerched = function(param) {
          console.log('im clicked---------->');
          console.log($scope.searchh);
          }
});
