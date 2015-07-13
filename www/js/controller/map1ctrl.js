'use strict';

angular.module('starter')
    .controller('Map1Ctrl', function($scope,DataFactory,uiGmapGoogleMapApi) {
        DataFactory.Map1().then(function(data){
        	$scope.map1 = data.data;
        	$scope.map1src = $scope.map1[0].map;
            console.log('map1 data: ',data.data);
        });
        var bounds = new google.maps.LatLngBounds();
        console.log('bounds--> [ '+bounds+' ]');
        $scope.myLocation = {
		    lng : '',
		    lat: ''
		  }
		   
		  $scope.drawMap = function(position) {
		 
		    //$scope.$apply is needed to trigger the digest cycle when the geolocation arrives and to update all the watchers
		    $scope.$apply(function() {
		      $scope.myLocation.lng = position.coords.longitude;
		      $scope.myLocation.lat = position.coords.latitude;
		 
		      $scope.map = {
		        center: {
		          latitude: $scope.myLocation.lat,
		          longitude: $scope.myLocation.lng
		        },
		        zoom: 14,
		        pan: 1
		      };
		 
		      $scope.marker = {
		        id: 0,
		        coords: {
		          latitude: $scope.myLocation.lat,
		          longitude: $scope.myLocation.lng
		        }
		      }; 
		       
		      $scope.marker.options = {
		        draggable: false,
		        labelContent: "lat: " + $scope.marker.coords.latitude + '<br/> ' + 'lon: ' + $scope.marker.coords.longitude,
		        labelAnchor: "80 120",
		        labelClass: "marker-labels"
		      };  
		    });
		  }
		 
		  navigator.geolocation.getCurrentPosition($scope.drawMap);
		 
    }); 