'use strict';

angular.module('starter')
    .controller('DetailsCtrl', function($scope, $ionicSlideBoxDelegate, DataFactory,$stateParams, $filter, $cordovaNetwork) {


        function init(){
          DataFactory.Submenu().then(function(data){
              var details = $filter('filter')(data.data,{
                'u_id':$stateParams.uid
              });
              $scope.det = details[0];
              console.log($scope.det);
              $ionicSlideBoxDelegate.update();
          });
          $scope.myActiveSlide = 1;
          $scope.isConnected = true;
          document.addEventListener("deviceready", function () {
                var type = $cordovaNetwork.getNetwork();
                var isOnline = $cordovaNetwork.isOnline();
                var isOffline = $cordovaNetwork.isOffline();
                // listen for Online event
                $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
                  var onlineState = networkState;
                })
                // listen for Offline event
                $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
                  var offlineState = networkState;
                })

              }, false);
        }
        init();

    });
