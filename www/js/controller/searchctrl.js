'use strict';

angular.module('starter')
    .controller('SearchCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, DataFactory, $filter) {
        DataFactory.Submenu().then(function(data){

          console.log('here top----------> no filters');
          $scope.dat = data.data;
          console.log($scope.dat);

          //var titles = $filter('filter')(data.data,{
          //  'title':'Jo'
          //});
          // $scope.companynames = titles;
          //console.log('here buttom----------> with filters');
          //console.log($scope.companynames);

          });

});
