'use strict';

angular.module('starter')
    .controller('DirectionCtrl', function($scope, $stateParams, $ionicPopover, uiGmapGoogleMapApi, $ionicLoading, googleDirections, $cordovaGeolocation) {
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var slat = $stateParams.lat;
        var slong = $stateParams.lng;

        $scope.eventButton = function(value) {
            $scope.data.clientSide = value;

            $scope.centerOnMe(value);
        };

        $scope.centerOnMe = function(value) {

            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            console.log('value: ', value);

            var posOptions = {
                timeout: 10000,
                enableHighAccuracy: false
            };

            directionsDisplay = new google.maps.DirectionsRenderer();

            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function(position) {

                    $scope.directions = {
                        origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        destination: new google.maps.LatLng(slat, slong)
                    };

                    var request = {
                        origin: $scope.directions.origin,
                        destination: $scope.directions.destination,
                        travelMode: value,
                        optimizeWaypoints: true,
                        provideRouteAlternatives: true
                    }

                    console.log('directions: ', $scope.directions);
                    console.log('request: ', request);

                    googleDirections.getDirections(request).then(function(directions) {
                        directionsDisplay.setDirections(directions);
                        directionsDisplay.setMap($scope.map.control.getGMap());
                        directionsDisplay.setPanel(document.getElementById('directionsList'));
                    });

                }, function(err) {
                    console.log('$cordovaGeolocation.getCurrentPosition ERROR: ',err);
                });
        };


        function init() {

            ionic.Platform.ready(function() {
                $scope.ios = (ionic.Platform.platform() === 'ios');
                console.log('$scope.ios: ', $scope.ios);
            });

            $scope.map = {};
            $scope.filterSelected = {};
            $scope.marker = {};

            $scope.enableFind = false;
            $scope.buttonText = 'Waiting for position...';

            $scope.currentlocation = {
                lat: "",
                lng: ""
            };

            $scope.options = {
                scrollwheel: false
            };

            $scope.filters = [{
                'name': 'driving',
                'value': 'google.maps.TravelMode.DRIVING',
                'icon': 'ion-android-car'
            }, {
                'name': 'bicycling',
                'value': 'google.maps.TravelMode.BICYCLING',
                'icon': 'ion-android-bicycle'
            }, {
                'name': 'transit',
                'value': 'google.maps.TravelMode.TRANSIT',
                'icon': 'ion-android-bus'
            }, {
                'name': 'walking',
                'value': 'google.maps.TravelMode.WALKING',
                'icon': 'ion-android-walk'
            }];

            $scope.data = {
                clientSide: 'driving'
            };

            uiGmapGoogleMapApi.then(function(maps) {
                $scope.map = {
                    control: {},
                    center: {
                        latitude: slat,
                        longitude: slong
                    },
                    zoom: 14
                };

                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: slat,
                        longitude: slong
                    }
                };

                $scope.enableFind = true;
                $scope.buttonText = 'Find';
            });
        }


        init();
    });
