'use strict';

angular.module('starter')
    .controller('Map2Ctrl', function($scope, $stateParams, uiGmapGoogleMapApi, googleDirections, $cordovaGeolocation, DataFactory) {
        var directionsDisplay = new google.maps.DirectionsRenderer();

        var slat = $stateParams.lat;
        var slong = $stateParams.lng;

        $scope.eventButton = function(value) {
            $scope.data.clientSide = value;
            $scope.centerOnMe(value, slat, slong);
        };

        $scope.centerOnMe = function(value, latitude, longitude) {
            // Clear Map before rendering to a new route
            if (directionsDisplay != null) {
                directionsDisplay.setMap(null);
                directionsDisplay = null;
            }

            var posOptions = {
                timeout: 10000,
                enableHighAccuracy: false
            };

            directionsDisplay = new google.maps.DirectionsRenderer();

            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function(position) {

                    /*$scope.directions = {
                        origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        destination: new google.maps.LatLng(slat, slong)
                    };*/

                    $scope.directions = {
                        origin: new google.maps.LatLng('37.7738571', '-122.4102823'),
                        destination: new google.maps.LatLng('37.7891231', '-122.4173545')
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
                    console.log('$cordovaGeolocation.getCurrentPosition ERROR: ', err);
                });
        };


        function init() {
            $scope.map = {};
            $scope.filterSelected = {};
            $scope.marker = {};
            $scope.enableFind = false;

            $scope.currentlocation = {
                lat: "",
                long: ""
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
                        latitude: '37.7738571',
                        longitude: '-122.4102823'
                    },
                    zoom: 14
                };

                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: '37.7738571',
                        longitude: '-122.4102823'
                    }
                };

                $scope.enableFind = true;
            });
        }


        init();
    });
